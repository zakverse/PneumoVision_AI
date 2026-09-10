# PneumoVision_AI — Backend REST API

Layanan REST API berbasis **FastAPI** untuk melakukan inferensi citra rontgen dada (*Chest X-Ray*) menggunakan model final terpilih **ResNet18 Transfer Learning** dari proyek PneumoVision_AI.

---

## ⚠️ Disclaimer Medis & Riset

> **PENTING UNTUK DIPERHATIKAN:**  
> Layanan API ini dibuat murni untuk **tujuan edukasi, riset, dan demonstrasi portofolio (*screening/research prototype*)**.  
> Output prediksi dan skor probabilitas yang dihasilkan sistem ini **BUKAN** merupakan diagnosis medis klinis resmi, tidak menggantikan pertimbangan medis dokter spesialis radiologi, dan **tidak boleh** digunakan sebagai dasar pengambilan keputusan klinis pada pasien nyata.

---

## 📂 Struktur File Backend

```
backend/
├── main.py            # Aplikasi FastAPI, routing endpoint, CORS, dan error handling
├── model.py           # Arsitektur ResNet18, pemuatan checkpoint (singleton), dan pipeline inferensi
├── schemas.py         # Skema validasi request dan response Pydantic
├── requirements.txt   # Dependensi minimal backend
└── README.md          # Dokumentasi teknis layanan API
```

---

## 🚀 Prasyarat & Instalasi

Pastikan Python 3.10+ telah terinstal di lingkungan Anda.

1. **Buka terminal dan navigasikan ke folder backend:**
   ```bash
   cd backend
   ```

2. **Install seluruh dependensi yang diperlukan:**
   ```bash
   pip install -r requirements.txt
   ```

---

## 💻 Menjalankan Server

Jalankan server API lokal menggunakan **Uvicorn**:

```bash
# Opsi 1: Menggunakan perintah uvicorn langsung
uvicorn main:app --host 127.0.0.1 --port 8000 --reload

# Opsi 2: Menjalankan file main.py
python main.py
```

Setelah server aktif, Anda akan melihat log konfirmasi pemuatan model:
```
INFO:     Memulai server PneumoVision_AI...
INFO:     Model ResNet18 berhasil dimuat pada perangkat: cpu
INFO:     Sumber checkpoint: models/checkpoints/resnet18_transfer_best.pth
INFO:     Uvicorn running on http://127.0.0.1:8000
```

---

## 📖 Dokumentasi Interaktif API

FastAPI secara otomatis menyediakan antarmuka dokumentasi interaktif yang dapat diakses langsung dari browser:
- **Swagger UI:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) *(dilengkapi fitur interaktif "Try it out" untuk upload gambar rontgen)*
- **ReDoc:** [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## 📡 Daftar Endpoint API

### 1. Root Information
* **Metode:** `GET`
* **Path:** `/`
* **Deskripsi:** Menampilkan informasi dasar proyek, status server, dan panduan endpoint.

---

### 2. Health Check
* **Metode:** `GET`
* **Path:** `/health`
* **Deskripsi:** Memeriksa kesiapan server dan status model PyTorch yang aktif di memori.

**Contoh Response:**
```json
{
  "status": "ok",
  "model": "ResNet18",
  "version": "1.0",
  "device": "cpu",
  "disclaimer": "PneumoVision_AI is a screening/research prototype and NOT a clinical diagnostic tool."
}
```

---

### 3. Chest X-Ray Prediction
* **Metode:** `POST`
* **Path:** `/predict`
* **Header:** `Content-Type: multipart/form-data`
* **Body:**
  * `file`: Berkas citra foto rontgen dada (`image/jpeg` atau `image/png`).

**Contoh Response (PNEUMONIA):**
```json
{
  "prediction": "PNEUMONIA",
  "confidence": 0.9986,
  "probabilities": {
    "NORMAL": 0.0014,
    "PNEUMONIA": 0.9986
  },
  "disclaimer": "Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi."
}
```

**Contoh Response (NORMAL):**
```json
{
  "prediction": "NORMAL",
  "confidence": 0.8623,
  "probabilities": {
    "NORMAL": 0.8623,
    "PNEUMONIA": 0.1377
  },
  "disclaimer": "Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi."
}
```

---

## 🧪 Contoh Pengujian API

### Menggunakan cURL
```bash
# Health Check
curl -X GET "http://127.0.0.1:8000/health"

# Prediksi Citra Rontgen
curl -X POST "http://127.0.0.1:8000/predict" \
     -F "file=@../XRayData/chest_xray/test/PNEUMONIA/person100_bacteria_475.jpeg"
```

### Menggunakan Python (`requests`)
```python
import requests

url = "http://127.0.0.1:8000/predict"
image_path = "../XRayData/chest_xray/test/PNEUMONIA/person100_bacteria_475.jpeg"

with open(image_path, "rb") as f:
    files = {"file": ("xray.jpeg", f, "image/jpeg")}
    response = requests.post(url, files=files)

print("Status Code:", response.status_code)
print("Hasil Prediksi:", response.json())
```

---

## ⚙️ Detail Alur Inferensi
1. Citra diunggah via form data dan divalidasi format gambarnya oleh Pillow.
2. Citra dikonversi ke 3-kanal RGB.
3. Ditransformasikan ke ukuran standar `(224, 224)` dan dinormalisasi menggunakan rata-rata (*mean*) dan standar deviasi (*std*) ImageNet.
4. Model ResNet18 menjalankan inferensi dalam mode `torch.no_grad()`.
5. Nilai logit dipetakan ke probabilitas kelas menggunakan fungsi aktivasi `Softmax`.
6. Label dengan probabilitas tertinggi dipilih sebagai `prediction` dengan nilai probabilitasnya sebagai `confidence`.
