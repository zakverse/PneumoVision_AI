import React from 'react';
import { Eye, CheckCircle2, AlertTriangle, Activity, Sparkles, RefreshCw } from 'lucide-react';
import LungIllustration from './LungIllustration';

export default function DetectionResult({
  result,
  imagePreview,
  selectedFile,
  activeSample,
  isLoading
}) {
  const hasImage = Boolean(imagePreview);

  // 1. State Kosong (Sebelum Ada Gambar yang Dipilih/Diunggah)
  if (!hasImage && !isLoading) {
    return (
      <div className="clay-card p-6 sm:p-10 bg-white h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-[#1677D2] shadow-clay-sm mb-4 sm:mb-5 p-3.5">
          <LungIllustration className="w-full h-full text-[#1677D2] stroke-current" />
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#123B78] mb-2">
          Siap menganalisis?
        </h3>

        <p className="text-xs sm:text-base text-[#123B78]/60 font-medium max-w-sm mb-5 sm:mb-6 px-2">
          Unggah foto rontgen di sebelah kiri untuk memulai analisis.
        </p>

        {/* Info Mini Kelas Target */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 max-w-xs w-full text-left flex items-center gap-3 shadow-inner">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1677D2] shadow-sm shrink-0">
            <Sparkles size={18} />
          </div>
          <div className="text-xs font-semibold text-[#123B78]/70">
            <p className="font-heading font-bold text-[#123B78] text-xs sm:text-sm">2 Kelas Target</p>
            <p className="text-[#123B78]/50 text-[11px]">NORMAL • PNEUMONIA</p>
          </div>
        </div>
      </div>
    );
  }

  // 2. State Loading (Sedang Menganalisis)
  if (isLoading) {
    return (
      <div className="clay-card p-6 sm:p-10 bg-white h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-[#1677D2] shadow-clay-sm mb-4 animate-pulse">
          <RefreshCw size={32} className="animate-spin text-[#1677D2]" />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#123B78] mb-2">
          Sedang Menganalisis Citra...
        </h3>
        <p className="text-xs sm:text-sm text-[#123B78]/60 font-medium max-w-sm mb-4">
          Model ResNet18 sedang memproses struktur citra rontgen dada untuk mengevaluasi indikasi pneumonia.
        </p>
        <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-[#1677D2] rounded-full animate-pulse w-3/4"></div>
        </div>
      </div>
    );
  }

  // Nama file dan label sampel untuk ditampilkan
  const currentFileName = selectedFile?.name || activeSample?.fileName || "citra_rontgen.jpeg";
  const currentFileSize = selectedFile ? `${(selectedFile.size / 1024).toFixed(0)} KB` : activeSample?.fileSize || "";

  return (
    <div className="clay-card p-4 sm:p-7 bg-white h-full flex flex-col justify-between">
      <div>
        {/* Header Bagian Pratinjau & Hasil */}
        <div className="flex items-center justify-between mb-4 sm:mb-5 flex-wrap gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-100 text-[#1677D2] border-2 border-slate-200 flex items-center justify-center shadow-sm shrink-0">
              <Eye size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#123B78] leading-tight">
                Pratinjau Gambar
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] sm:text-xs text-[#123B78]/60 font-medium truncate max-w-[180px] sm:max-w-[240px]">
                  {currentFileName}
                </span>
                {currentFileSize && (
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#123B78]/40">
                    ({currentFileSize})
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Badge Label Jika dari Contoh Demo */}
          {activeSample && (
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-[#123B78] text-[11px] font-heading font-bold shadow-sm">
              <Sparkles size={12} className="text-[#1677D2]" />
              <span>Contoh: {activeSample.category}</span>
            </div>
          )}
        </div>

        {/* Tampilan Citra Rontgen */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-900 shadow-md mb-5 max-h-[260px] sm:max-h-[320px] flex items-center justify-center">
          <img
            src={imagePreview}
            alt="Pratinjau Citra Rontgen Dada"
            className="w-full h-full max-h-[260px] sm:max-h-[320px] object-contain mx-auto"
          />

          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#123B78]/85 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-xl text-white font-heading font-bold text-[10px] sm:text-xs border border-white/20">
            Foto Rontgen Dada
          </div>
        </div>

        {/* 2. Hasil Analisis (Jika Belum Dijalankan) */}
        {!result && (
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-center">
            <p className="font-heading font-bold text-sm text-[#123B78] mb-1">
              Citra Siap Dianalisis
            </p>
            <p className="text-xs text-[#123B78]/60 font-medium">
              Klik tombol <strong className="text-[#1677D2]">"Mulai Analisis"</strong> di panel sebelah kiri untuk menjalankan skrining ResNet18.
            </p>
          </div>
        )}

        {/* 2. Hasil Analisis (Jika Sudah Ada Hasil) */}
        {result && (
          <div className="mt-2 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5">
              <Activity size={18} className="text-[#1677D2]" />
              <h4 className="font-heading text-base sm:text-lg font-bold text-[#123B78]">
                2. Hasil Analisis
              </h4>
            </div>

            {/* Kartu Status Prediksi Utama (NORMAL atau PNEUMONIA) */}
            <div
              className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                result.prediction === 'NORMAL'
                  ? 'bg-slate-50 border-[#1677D2]/40 shadow-clay-sm'
                  : 'bg-slate-50 border-slate-300 shadow-clay-sm'
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${
                      result.prediction === 'NORMAL'
                        ? 'bg-[#1677D2] text-white'
                        : 'bg-[#123B78] text-white'
                    }`}
                  >
                    {result.prediction === 'NORMAL' ? (
                      <CheckCircle2 size={24} className="stroke-[2.5]" />
                    ) : (
                      <AlertTriangle size={24} className="stroke-[2.5]" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-[#123B78]/50">
                      Hasil Prediksi Model
                    </span>
                    <h5 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#123B78] leading-none">
                      {result.prediction}
                    </h5>
                  </div>
                </div>

                {/* Tingkat Keyakinan */}
                <div className="text-right">
                  <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-[#123B78]/50 block">
                    Tingkat Keyakinan
                  </span>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#1677D2]">
                    {(result.confidence * 100).toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Distribusi Probabilitas Kelas */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-3">
              <span className="text-xs font-heading font-bold text-[#123B78] block">
                Distribusi Probabilitas Kelas:
              </span>

              {/* Probabilitas NORMAL */}
              <div>
                <div className="flex justify-between items-center text-xs font-heading font-semibold text-[#123B78] mb-1">
                  <span>Probabilitas NORMAL</span>
                  <span className="font-bold text-[#1677D2]">
                    {(result.probabilities.NORMAL * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="w-full bg-white h-2.5 sm:h-3 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                  <div
                    className="h-full bg-[#1677D2] rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(2, result.probabilities.NORMAL * 100)}%` }}
                  />
                </div>
              </div>

              {/* Probabilitas PNEUMONIA */}
              <div>
                <div className="flex justify-between items-center text-xs font-heading font-semibold text-[#123B78] mb-1">
                  <span>Probabilitas PNEUMONIA</span>
                  <span className="font-bold text-[#123B78]">
                    {(result.probabilities.PNEUMONIA * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="w-full bg-white h-2.5 sm:h-3 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                  <div
                    className="h-full bg-[#123B78] rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(2, result.probabilities.PNEUMONIA * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Disclaimer Medis Wajib */}
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-center">
              <p className="text-[11px] sm:text-xs text-[#123B78]/70 font-medium leading-relaxed">
                Hasil ini merupakan prototipe penelitian untuk skrining awal dan bukan alat diagnosis medis.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
