# PneumoVision_AI — Frontend Web Interface

Antarmuka web interaktif, ramah pengguna, dan berestetika *playful claymorphism* untuk sistem penapisan rontgen dada (*Chest X-Ray Pneumonia Screening*) **PneumoVision_AI**. Dibangun menggunakan **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, dan **Lucide React**, dengan mengadopsi arsitektur teruji dari **RoadDamage_AI**.

---

## 🌟 Fitur Utama & Panduan Desain

- **Struktur Bersih Tanpa Sidebar:** Menggunakan *floating top header* dan tata letak *dual-panel workspace* yang terpusat, intuitif, dan bebas dari kerumitan dashboard enterprise.
- **Palet 3 Warna Resmi PneumoVision:**
  - **Deep Navy (`#12344D`)**: Heading utama, tipografi berbobot, dan border kontras.
  - **Medical Teal (`#18B8A6`)**: Tombol aksi utama, status siap, progress bar probabilitas, dan highlight interaktif.
  - **Ice Mint (`#E8F7F5`)**: Latar belakang lembut dengan pola grid dan garis scanline medis ber-opacity rendah.
- **DNA Visual Claymorphism & Tactile:**
  - Kartu membulat tebal (*rounded clay cards*).
  - Bayangan lembut bertingkat (*layered soft shadows*).
  - Tombol 3D tactile dengan animasi fisik saat ditekan (`transform: translateY(3px)`).
- **Dual Mode Operasional:**
  1. **Live AI Mode:** Terhubung langsung ke endpoint REST API FastAPI (`http://127.0.0.1:8000/predict`) untuk inferensi real-time model ResNet18.
  2. **Demo Mode Mandiri:** Dilengkapi 4 tombol chip teks sampel terkurasi (2 Normal, 2 Pneumonia) yang dapat diuji seketika tanpa memerlukan koneksi backend.
- **100% Bahasa Indonesia:** Seluruh teks antarmuka, instruksi, dan notifikasi telah diaudit dalam Bahasa Indonesia yang baku dan komunikatif.
- **Medical Disclaimer Terintegrasi:** Penegasan status sebagai prototipe riset dan skrining awal, bukan alat diagnosis klinis resmi.

---

## 📂 Struktur Komponen Frontend

```
frontend/
├── public/
│   ├── PneumoVision.png     # Logo resmi PneumoVision
│   └── samples/             # 4 sampel citra rontgen dada terkurasi
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Bar navigasi mengambang & indikator status API
│   │   ├── Hero.jsx         # Headline, subheadline, tombol CTA, & kartu pratinjau
│   │   ├── QuickStats.jsx   # 4 kartu metrik proyek terverifikasi (99,23%, 83,33%, dll)
│   │   ├── ImageUploader.jsx# Area drag & drop, tombol unggah, & chip teks sampel demo
│   │   ├── DetectionResult.jsx# Pratinjau citra, hasil prediksi, probabilitas, & disclaimer
│   │   ├── HowItWorks.jsx   # Alur 3 langkah sistem (Unggah -> Analisis -> Hasil)
│   │   ├── ConditionGuide.jsx# Karakteristik radiologis paru NORMAL vs PNEUMONIA
│   │   ├── ModelInfo.jsx    # Spesifikasi teknis arsitektur ResNet18 Transfer Learning
│   │   ├── FinalCTA.jsx     # Banner ajakan analisis penutup
│   │   └── Footer.jsx       # Footer informatif dengan lisensi & disclaimer medis
│   ├── data/
│   │   └── demoSamples.js   # Dataset metadata & hasil precomputed riil 4 sampel
│   ├── App.jsx              # Komponen utama pengelola state & alur inferensi
│   ├── main.jsx             # Entry point React
│   └── index.css            # Styling dasar, utilitas claymorphism, & animasi
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

---

## 🚀 Panduan Menjalankan Frontend

### 1. Pasang Dependensi
Masuk ke direktori `frontend` dan pasang paket yang diperlukan:
```bash
cd frontend
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```
Buka browser Anda di: 👉 **[http://127.0.0.1:5173](http://127.0.0.1:5173)**

### 3. Build untuk Rilis Produksi
Untuk memeriksa kompilasi dan memproduksi bundle statis yang teroptimasi:
```bash
npm run build
```
Hasil build siap saji akan berada di folder `dist/`.

---

## 🔗 Integrasi Backend FastAPI

Frontend otomatis mendeteksi ketersediaan backend:
- Jika backend aktif di `http://127.0.0.1:8000`, navbar akan menampilkan indikator hijau **"Siap"** (*Live Mode*) dan berkas rontgen yang diunggah akan langsung diklasifikasikan oleh model ResNet18.
- Jika backend offline, navbar menampilkan **"Mode Demo"** dan pengguna tetap dapat mencoba seluruh fitur antarmuka melalui 4 sampel terkurasi.

---

## ⚠️ Disclaimer Medis

> **PENTING:** Antarmuka ini dibuat murni untuk keperluan riset dan edukasi (*screening/research prototype*) dan **BUKAN** alat diagnostik klinis resmi. Hasil penapisan tidak boleh digunakan sebagai pengganti evaluasi medis dokter spesialis radiologi profesional.
