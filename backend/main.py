import logging
from contextlib import asynccontextmanager
from typing import Dict, Any

from fastapi import FastAPI, File, UploadFile, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

try:
    from .model import load_model, predict_image, get_default_device, PneumoniaModelManager
    from .schemas import HealthResponse, PredictionResponse, ProbabilityResponse
except ImportError:
    # Fallback saat dijalankan langsung dari dalam folder backend
    from model import load_model, predict_image, get_default_device, PneumoniaModelManager
    from schemas import HealthResponse, PredictionResponse, ProbabilityResponse

# Setup logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger("pneumovision-backend")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Lifespan context manager:
    Memuat model ResNet18 satu kali saat server mulai berjalan (startup),
    sehingga tidak ada overhead pemuatan model pada setiap HTTP request.
    """
    logger.info("Memulai server PneumoVision_AI...")
    try:
        model_manager = load_model()
        logger.info(f"Model ResNet18 berhasil dimuat pada perangkat: {model_manager.device}")
        logger.info(f"Sumber checkpoint: {model_manager.checkpoint_path}")
    except Exception as e:
        logger.error(f"Gagal memuat checkpoint model: {e}")
        raise e
    yield
    logger.info("Mematikan server PneumoVision_AI. Sumber daya dibersihkan.")


# Inisialisasi FastAPI
app = FastAPI(
    title="PneumoVision_AI REST API",
    description=(
        "Layanan REST API untuk inferensi deteksi pneumonia dari citra rontgen dada (Chest X-Ray) "
        "menggunakan model ResNet18 Transfer Learning.\n\n"
        "**Peringatan Medis:** Sistem ini dibuat murni untuk keperluan riset dan edukasi "
        "(*screening/research prototype*) serta **BUKAN** merupakan alat diagnosis klinis resmi."
    ),
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# Konfigurasi CORS agar frontend React dapat mengakses API secara lokal maupun jaringan
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Info"])
def root() -> Dict[str, Any]:
    """Endpoint sambutan dengan informasi dasar dan tautan dokumentasi API."""
    return {
        "project": "PneumoVision_AI",
        "description": "Pneumonia Detection from Chest X-Ray Using Deep Learning",
        "status": "online",
        "endpoints": {
            "health": "/health",
            "predict": "/predict",
            "documentation": "/docs"
        },
        "disclaimer": "Screening/research prototype only. Not for certified clinical diagnostic use."
    }


@app.get(
    "/health",
    response_model=HealthResponse,
    tags=["Health"],
    summary="Cek status server dan kesiapan model"
)
def health_check() -> HealthResponse:
    """
    Memeriksa kesehatan server dan status model PyTorch yang aktif.
    """
    device = get_default_device()
    return HealthResponse(
        status="ok",
        model="ResNet18",
        version="1.0",
        device=str(device),
        disclaimer="PneumoVision_AI is a screening/research prototype and NOT a clinical diagnostic tool."
    )


@app.post(
    "/predict",
    response_model=PredictionResponse,
    status_code=status.HTTP_200_OK,
    tags=["Inference"],
    summary="Klasifikasi citra rontgen dada (NORMAL vs PNEUMONIA)"
)
async def predict_chest_xray(
    file: UploadFile = File(..., description="File citra rontgen dada (JPEG, PNG)")
) -> PredictionResponse:
    """
    Menerima file gambar rontgen dada melalui multipart/form-data,
    menjalankan inferensi pada model ResNet18 yang sudah di-load,
    dan mengembalikan label prediksi beserta confidence score.
    """
    # 1. Validasi MIME type dasar
    content_type = file.content_type or ""
    if not (content_type.startswith("image/") or file.filename.lower().endswith((".jpeg", ".jpg", ".png"))):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File yang diunggah harus berupa berkas gambar (format JPEG atau PNG didukung)."
        )

    # 2. Baca isi byte gambar
    try:
        contents = await file.read()
        if not contents:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Berkas gambar yang diunggah kosong (0 bytes)."
            )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Gagal membaca berkas gambar: {str(e)}"
        )

    # 3. Jalankan inferensi via modul model
    try:
        result = predict_image(contents)
    except ValueError as val_err:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(val_err)
        )
    except Exception as err:
        logger.error(f"Error saat proses inferensi citra: {err}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Terjadi kegagalan internal saat memproses citra pada model inferensi."
        )

    # 4. Bangun response terstruktur
    return PredictionResponse(
        prediction=result["prediction"],
        confidence=result["confidence"],
        probabilities=ProbabilityResponse(
            NORMAL=result["probabilities"]["NORMAL"],
            PNEUMONIA=result["probabilities"]["PNEUMONIA"]
        ),
        disclaimer="Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi."
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
