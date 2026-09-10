import io
from pathlib import Path
from typing import Dict, Any, Tuple, Optional
from PIL import Image

import torch
import torch.nn as nn
import torch.nn.functional as F
from torchvision import models, transforms

# 1. Konstanta Global
CLASS_NAMES = ["NORMAL", "PNEUMONIA"]
IMAGE_SIZE = (224, 224)
IMAGENET_MEAN = [0.485, 0.456, 0.406]
IMAGENET_STD = [0.229, 0.224, 0.225]

# 2. Pipeline Preprocessing (Identik dengan Notebook 04 & 07)
inference_transform = transforms.Compose([
    transforms.Resize(IMAGE_SIZE),
    transforms.ToTensor(),
    transforms.Normalize(mean=IMAGENET_MEAN, std=IMAGENET_STD)
])


def get_default_device() -> torch.device:
    """Mendeteksi ketersediaan GPU (CUDA) atau fallback ke CPU."""
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    if device.type == "cpu":
        torch.set_num_threads(8)
    return device


def resolve_checkpoint_path(custom_path: Optional[str] = None) -> Path:
    """Menemukan lokasi absolut checkpoint ResNet18 secara fleksibel."""
    if custom_path:
        p = Path(custom_path)
        if p.exists():
            return p

    # Cari dari direktori kerja saat ini
    candidates = [
        Path("models/checkpoints/resnet18_transfer_best.pth"),
        Path("../models/checkpoints/resnet18_transfer_best.pth"),
        Path(__file__).resolve().parent.parent / "models" / "checkpoints" / "resnet18_transfer_best.pth",
    ]

    for cand in candidates:
        if cand.exists():
            return cand.resolve()

    raise FileNotFoundError(
        "Checkpoint 'resnet18_transfer_best.pth' tidak ditemukan. "
        "Pastikan file model tersedia di direktori models/checkpoints/."
    )


def build_resnet18_model(checkpoint_path: Optional[str] = None, device: Optional[torch.device] = None) -> nn.Module:
    """
    Membangun arsitektur ResNet18 dan memuat bobot dari checkpoint transfer learning.
    Model diatur ke mode evaluasi (model.eval()).
    """
    if device is None:
        device = get_default_device()

    ckpt_file = resolve_checkpoint_path(checkpoint_path)

    # Inisialisasi arsitektur dasar ResNet18
    model = models.resnet18(weights=None)
    in_features = model.fc.in_features
    model.fc = nn.Linear(in_features, len(CLASS_NAMES))

    # Muat bobot checkpoint
    checkpoint = torch.load(ckpt_file, map_location=device)
    if "model_state_dict" in checkpoint:
        model.load_state_dict(checkpoint["model_state_dict"])
    else:
        model.load_state_dict(checkpoint)

    model = model.to(device)
    model.eval()
    return model


class PneumoniaModelManager:
    """
    Singleton Wrapper untuk memuat model ResNet18 satu kali saat startup
    dan menangani inferensi citra chest X-ray.
    """
    _instance: Optional["PneumoniaModelManager"] = None

    def __init__(self, checkpoint_path: Optional[str] = None):
        self.device = get_default_device()
        self.checkpoint_path = resolve_checkpoint_path(checkpoint_path)
        self.model = build_resnet18_model(str(self.checkpoint_path), self.device)

    @classmethod
    def get_instance(cls, checkpoint_path: Optional[str] = None) -> "PneumoniaModelManager":
        """Mengambil instance model yang sudah aktif atau menginisialisasi yang baru."""
        if cls._instance is None:
            cls._instance = cls(checkpoint_path)
        return cls._instance

    def predict_image(self, image_bytes: bytes) -> Dict[str, Any]:
        """
        Melakukan validasi, preprocessing, dan inferensi citra rontgen dada.
        
        Returns:
            dict dengan struktur:
            {
                "prediction": "PNEUMONIA",
                "confidence": 0.9923,
                "probabilities": {
                    "NORMAL": 0.0077,
                    "PNEUMONIA": 0.9923
                }
            }
        """
        # 1. Validasi dan pembacaan citra dengan Pillow
        try:
            pil_img = Image.open(io.BytesIO(image_bytes))
            pil_img.verify()  # Verifikasi integritas header file
            # Buka kembali setelah verify karena verify merusak file pointer
            pil_img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        except Exception as e:
            raise ValueError(f"File yang diunggah bukan format gambar valid atau rusak: {str(e)}")

        # 2. Preprocessing tensor identik dengan training
        tensor = inference_transform(pil_img).unsqueeze(0).to(self.device)

        # 3. Inferensi tanpa gradien
        with torch.no_grad():
            logits = self.model(tensor)
            probs = F.softmax(logits, dim=1)[0]
            pred_idx = logits.argmax(dim=1).item()

        pred_label = CLASS_NAMES[pred_idx]
        confidence = float(probs[pred_idx].item())
        prob_normal = float(probs[0].item())
        prob_pneumonia = float(probs[1].item())

        return {
            "prediction": pred_label,
            "confidence": round(confidence, 4),
            "probabilities": {
                "NORMAL": round(prob_normal, 4),
                "PNEUMONIA": round(prob_pneumonia, 4)
            }
        }


# Fungsi akses publik
def load_model(checkpoint_path: Optional[str] = None) -> PneumoniaModelManager:
    """Memuat model ke memori (digunakan saat startup server)."""
    return PneumoniaModelManager.get_instance(checkpoint_path)


def predict_image(image_bytes: bytes) -> Dict[str, Any]:
    """Memprediksi gambar menggunakan model singleton."""
    manager = PneumoniaModelManager.get_instance()
    return manager.predict_image(image_bytes)
