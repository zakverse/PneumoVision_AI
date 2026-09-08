# Direktori Penyimpanan Model

Direktori ini digunakan untuk menyimpan bobot model PyTorch, checkpoint selama proses pelatihan, dan konfigurasi inferensi akhir.

## Aturan Penyimpanan & Kebersihan Git

- **Jangan Commit Bobot Biner ke Git**: Seluruh file bobot PyTorch (`*.pt`, `*.pth`, `*.bin`, `*.onnx`) secara ketat diabaikan oleh Git melalui `.gitignore` agar ukuran repository tetap ringan.
- **Folder Checkpoints**: Semua checkpoint sementara dan model terbaik pada tahap validasi disimpan di dalam folder `models/checkpoints/`.
- **Artefak Model Final**: Model terpilih untuk deployment (hasil dari notebook `07_Final_Model_Analysis.ipynb`) akan disimpan beserta metadata konfigurasinya:
  ```
  models/
  ├── checkpoints/
  │   ├── baseline_cnn_best.pth
  │   └── transfer_best.pth
  ├── final_pneumovision_model.pth
  ├── model_config.json
  └── README.md
  ```

## Format Standar Checkpoint

Checkpoint model disimpan menggunakan `torch.save` dalam bentuk dictionary berstruktur lengkap (bukan hanya raw model object) agar mudah dimuat kembali secara aman:

```python
checkpoint = {
    "epoch": epoch,
    "model_state_dict": model.state_dict(),
    "optimizer_state_dict": optimizer.state_dict(),
    "best_val_metric": best_metric,
    "architecture": "densenet121",  # atau nama model lain
    "class_to_idx": {"NORMAL": 0, "PNEUMONIA": 1},
    "input_size": (224, 224),
    "normalization": {
        "mean": [0.485, 0.456, 0.406],
        "std": [0.229, 0.224, 0.225]
    }
}
torch.save(checkpoint, "models/checkpoints/best_model.pth")
```

## Pemuatan Model oleh Backend

Layanan FastAPI (`backend/app/services/`) akan memuat bobot model menggunakan cara standar berikut:
```python
checkpoint = torch.load(model_path, map_location=device)
model.load_state_dict(checkpoint["model_state_dict"])
model.eval()
```
