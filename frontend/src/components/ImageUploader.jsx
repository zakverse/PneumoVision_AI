import React, { useRef, useState } from 'react';
import { UploadCloud, Image as ImageIcon, Wand2, Play, RefreshCw, RotateCcw, FileText } from 'lucide-react';
import { DEMO_SAMPLES } from '../data/demoSamples';

export default function ImageUploader({
  selectedFile,
  activeSample,
  onImageSelected,
  onSelectSample,
  onAnalyze,
  isLoading,
  onReset
}) {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onImageSelected(e.dataTransfer.files[0]);
    }
  };

  const hasImage = Boolean(selectedFile || activeSample);

  return (
    <div className="clay-card p-4 sm:p-7 bg-white flex flex-col justify-between h-full">
      <div>
        {/* Header Kartu Unggah */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-100 text-teal-dark border-2 border-slate-200 flex items-center justify-center shadow-sm shrink-0">
              <UploadCloud size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-navy leading-tight">
                1. Unggah Gambar Rontgen
              </h3>
              <p className="text-[11px] sm:text-xs text-navy/60 font-medium">
                Pilih berkas foto rontgen dada (AP/PA)
              </p>
            </div>
          </div>

          {hasImage && (
            <button
              type="button"
              onClick={onReset}
              className="clay-btn clay-btn-white text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 text-navy/70 hover:text-teal shadow-clay-sm"
              title="Atur Ulang Berkas"
            >
              <RotateCcw size={13} />
              <span>Atur Ulang</span>
            </button>
          )}
        </div>

        {/* Input Berkas Tersembunyi */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              onImageSelected(e.target.files[0]);
            }
          }}
          className="hidden"
          id="xray-file-input"
        />

        {/* Area Drag & Drop */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          id="dropzone-area"
          className={`relative rounded-2xl sm:rounded-3xl border-2 border-dashed p-5 sm:p-8 text-center cursor-pointer transition-all duration-200 group ${
            isDragOver
              ? 'border-teal bg-teal-soft/40 scale-[1.01]'
              : hasImage
              ? 'border-slate-300 bg-slate-50 hover:bg-white'
              : 'border-slate-300 bg-slate-50/70 hover:bg-white hover:border-teal/60 shadow-inner'
          }`}
        >
          <div className="py-2 sm:py-4 flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-200 shadow-clay-sm flex items-center justify-center text-teal mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <UploadCloud size={30} className="stroke-[2.5]" />
            </div>

            <h4 className="font-heading font-bold text-sm sm:text-base text-navy mb-1">
              Seret dan lepas gambar di sini
            </h4>
            <p className="text-[11px] sm:text-xs text-navy/60 font-medium mb-1">
              atau klik untuk memilih gambar dari perangkat Anda
            </p>
            <p className="text-[10px] sm:text-[11px] font-semibold text-navy/70 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 mb-3.5">
              JPG, JPEG, atau PNG
            </p>

            {/* Tombol Pilih Gambar */}
            <button
              type="button"
              id="browse-btn"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="clay-btn clay-btn-white text-xs sm:text-sm px-4 py-2 text-navy shadow-clay-sm"
            >
              <ImageIcon size={15} className="text-teal" />
              <span>Pilih Gambar</span>
            </button>
          </div>
        </div>

        {/* Bagian Contoh Demo (CHIP / TOMBOL TEKS SAJA, TANPA PREVIEW GAMBAR) */}
        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-200">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-heading font-bold text-navy/70 mb-2.5">
            <Wand2 size={13} className="text-teal" />
            <span>Contoh Gambar:</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {DEMO_SAMPLES.map((sample) => {
              const isSelected = activeSample?.id === sample.id;
              return (
                <button
                  key={sample.id}
                  type="button"
                  id={`sample-btn-${sample.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSample(sample);
                  }}
                  className={`clay-btn text-xs py-2 px-3 justify-center transition-all ${
                    isSelected
                      ? 'clay-btn-teal text-white shadow-clay-btn-teal'
                      : 'clay-btn-white text-navy hover:text-teal shadow-clay-sm'
                  }`}
                >
                  <FileText size={13} className={isSelected ? 'text-white' : 'text-teal'} />
                  <span className="font-heading font-bold">{sample.label}</span>
                </button>
              );
            })}
          </div>
          <p className="text-[10px] text-navy/50 font-medium mt-1.5 text-center">
            *Klik salah satu contoh untuk memuat citra ke area pratinjau.
          </p>
        </div>
      </div>

      {/* Tombol Eksekusi: Mulai Analisis */}
      <div className="mt-5 sm:mt-6">
        <button
          id="analyze-button"
          onClick={onAnalyze}
          disabled={!hasImage || isLoading}
          className="clay-btn clay-btn-teal w-full py-3.5 sm:py-4 text-sm sm:text-base shadow-clay-btn-teal flex items-center justify-center gap-2 sm:gap-3"
        >
          {isLoading ? (
            <>
              <RefreshCw size={18} className="animate-spin" />
              <span>Sedang Menganalisis dengan ResNet18...</span>
            </>
          ) : (
            <>
              <Play size={18} className="fill-white" />
              <span>Mulai Analisis</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
