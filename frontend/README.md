# Aplikasi Web Frontend - PneumoVision_AI

Antarmuka pengguna (web UI) modern, responsif, dan interaktif untuk visualisasi deteksi pneumonia dari citra rontgen dada, dibangun menggunakan **React** dan **Vite**.

## Dua Mode Operasional Utama

1. **Demo Mode (Tanpa Backend)**:
   - Menampilkan **4 sampel rontgen terkurasi** (2 NORMAL, 2 PNEUMONIA).
   - Dirancang agar aplikasi dapat langsung dideploy secara statis di Vercel, Netlify, atau GitHub Pages tanpa memerlukan backend server ataupun biaya kartu grafis (GPU).
   - Memberikan pengalaman lengkap kepada pengunjung: visualisasi citra X-ray, indikator skor confidence, serta pengaturan transparansi interaktif untuk heatmap Grad-CAM.

2. **Live AI Mode**:
   - Memungkinkan pengguna mengunggah foto rontgen dada mereka sendiri.
   - Mengirimkan citra ke endpoint FastAPI backend (`POST /predict` dan `POST /explain`).
   - Menampilkan hasil klasifikasi langsung dan visualisasi Grad-CAM secara real-time.

## Rencana Struktur Folder Frontend

```
frontend/
├── public/                  # Aset statis & citra sampel mode demo
├── src/
│   ├── assets/              # Logo, ikon, dan grafis UI
│   ├── components/          # Komponen UI modular
│   │   ├── Header.jsx       # Navigasi & logo aplikasi
│   │   ├── DisclaimerBanner.jsx # Banner peringatan edukasi & disclaimer medis
│   │   ├── ModeSelector.jsx # Tombol pilihan antara Demo Mode vs Live AI Mode
│   │   ├── ImageUploader.jsx# Area drag-and-drop untuk upload citra X-Ray
│   │   ├── DemoGallery.jsx  # Kartu pilihan 4 sampel rontgen demo
│   │   ├── ResultCard.jsx   # Kartu tampilan hasil prediksi & tingkat keyakinan
│   │   ├── GradCamViewer.jsx# Viewer gambar dengan slider transparansi heatmap
│   │   └── ModelInfoModal.jsx # Modal informasi arsitektur dan metrik model
│   ├── services/            # API client (Axios / Fetch) & loader data sampel demo
│   ├── styles/              # Desain sistem & styling CSS modular
│   ├── App.jsx              # State utama aplikasi
│   └── main.jsx             # Entry point React
├── package.json
└── README.md
```

## Panduan Menjalankan Frontend (Mendatang)

```bash
# Pasang dependensi
npm install

# Jalankan development server
npm run dev

# Build untuk rilis produksi
npm run build
```

> **Catatan**: Pengembangan frontend akan dimulai setelah pelatihan model dan penyiapan aset demo selesai dilakukan.
