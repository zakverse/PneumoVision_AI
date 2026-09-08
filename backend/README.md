# Layanan Backend - PneumoVision_AI

Microservice asinkron berbasis **FastAPI** untuk melayani inferensi deep learning dan pembuatan peta penjelasan Grad-CAM dari citra rontgen dada secara real-time.

## Struktur Folder Backend

```
backend/
├── app/
│   ├── routes/              # Handler endpoint API (/health, /predict, /explain)
│   ├── services/            # Loader model PyTorch & runner kalkulasi Grad-CAM
│   ├── schemas/             # Validasi skema data request & response (Pydantic)
│   └── utils/               # Fungsi bantu konversi citra, tensor, dan base64
├── requirements.txt         # Dependensi Python khusus backend
└── README.md
```

## Rencana Endpoint API

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/health` | Memeriksa status kesehatan server dan ketersediaan model |
| `POST` | `/predict` | Menerima unggahan foto rontgen, mengembalikan prediksi kelas dan skor confidence |
| `POST` | `/explain` | Menerima unggahan foto rontgen, mengembalikan prediksi kelas, confidence, dan citra heatmap Grad-CAM (base64) |

## Menjalankan Backend Secara Lokal

```bash
# 1. Buat dan aktifkan virtual environment
python -m venv .venv
# Pada Windows:
.venv\Scripts\activate

# 2. Pasang dependensi backend
pip install -r requirements.txt

# 3. Jalankan server development
uvicorn app.main:app --reload --port 8000
```

> **Catatan**: Pembuatan kode endpoint dan implementasi lengkap backend akan dilakukan setelah pipeline pelatihan dan evaluasi model selesai.
