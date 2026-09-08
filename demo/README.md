# Aset & Spesifikasi Demo Mode

Direktori ini berisi sampel citra dan hasil inferensi yang sudah dihitung sebelumnya (*precomputed results*). Tujuannya adalah agar antarmuka web (frontend) dapat dideploy secara statis (misalnya di Vercel, Netlify, atau GitHub Pages) dan langsung dapat dicoba oleh pengunjung tanpa perlu menjalankan server backend atau GPU aktif.

## Struktur Aset Demo

```
demo/
├── samples/
│   ├── sample_normal_01.jpeg        # Citra rontgen dada kurasi (NORMAL)
│   ├── sample_normal_02.jpeg        # Citra rontgen dada kurasi (NORMAL)
│   ├── sample_pneumonia_01.jpeg     # Citra rontgen dada kurasi (PNEUMONIA - konsolidasi fokal)
│   └── sample_pneumonia_02.jpeg     # Citra rontgen dada kurasi (PNEUMONIA - opasitas interstitial)
├── results/
│   ├── sample_normal_01_result.json
│   ├── sample_normal_02_result.json
│   ├── sample_pneumonia_01_result.json
│   ├── sample_pneumonia_02_result.json
│   └── gradcam_overlays/            # Citra visualisasi heatmap Grad-CAM
└── README.md
```

## Format Kontrak Payload JSON

Setiap file JSON hasil inferensi memiliki struktur data yang sama persis dengan response dari endpoint FastAPI backend (`/predict` dan `/explain`):

```json
{
  "sample_id": "sample_pneumonia_01",
  "prediction": "PNEUMONIA",
  "confidence": 0.968,
  "class_probabilities": {
    "NORMAL": 0.032,
    "PNEUMONIA": 0.968
  },
  "radiological_findings_summary": "Ditemukan area opasitas fokal pada zona bawah paru kanan.",
  "gradcam_image_url": "results/gradcam_overlays/sample_pneumonia_01_cam.png",
  "mode": "demo"
}
```

> **Catatan**: Sampel kurasi dan file JSON ini akan di-generate secara otomatis setelah evaluasi model terbaik selesai di notebook `07_Final_Model_Analysis.ipynb`.
