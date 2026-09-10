export const DEMO_SAMPLES = [
  {
    id: "normal_01",
    label: "Normal 1",
    category: "NORMAL",
    fileName: "normal_sample_01.jpeg",
    url: "/samples/normal_sample_01.jpeg",
    fileSize: "246 KB",
    description: "Citra rontgen dada dengan gambaran paru-paru jernih tanpa opasitas konsolidasi.",
    precomputed: {
      prediction: "NORMAL",
      confidence: 0.6007,
      probabilities: {
        NORMAL: 0.6007,
        PNEUMONIA: 0.3993
      },
      disclaimer: "Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi."
    }
  },
  {
    id: "normal_02",
    label: "Normal 2",
    category: "NORMAL",
    fileName: "normal_sample_02.jpeg",
    url: "/samples/normal_sample_02.jpeg",
    fileSize: "321 KB",
    description: "Citra rontgen dada sehat dengan corakan bronkovaskular dalam batas wajar.",
    precomputed: {
      prediction: "NORMAL",
      confidence: 0.8623,
      probabilities: {
        NORMAL: 0.8623,
        PNEUMONIA: 0.1377
      },
      disclaimer: "Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi."
    }
  },
  {
    id: "pneumonia_01",
    label: "Pneumonia 1",
    category: "PNEUMONIA",
    fileName: "pneumonia_sample_01.jpeg",
    url: "/samples/pneumonia_sample_01.jpeg",
    fileSize: "75 KB",
    description: "Citra rontgen dada memperlihatkan area konsolidasi fokal pada lobus paru.",
    precomputed: {
      prediction: "PNEUMONIA",
      confidence: 0.9986,
      probabilities: {
        NORMAL: 0.0014,
        PNEUMONIA: 0.9986
      },
      disclaimer: "Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi."
    }
  },
  {
    id: "pneumonia_02",
    label: "Pneumonia 2",
    category: "PNEUMONIA",
    fileName: "pneumonia_sample_02.jpeg",
    url: "/samples/pneumonia_sample_02.jpeg",
    fileSize: "54 KB",
    description: "Citra rontgen dada dengan gambaran infiltrat luas dan opasitas bilateral.",
    precomputed: {
      prediction: "PNEUMONIA",
      confidence: 0.9996,
      probabilities: {
        NORMAL: 0.0004,
        PNEUMONIA: 0.9996
      },
      disclaimer: "Hasil inferensi model ini murni untuk tujuan penelitian/skrining awal dan BUKAN diagnosis medis resmi."
    }
  }
];
