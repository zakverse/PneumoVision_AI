import React from 'react';
import { ArrowRight, Activity, CheckCircle, Cpu, Images, FileText } from 'lucide-react';
import LungIllustration from './LungIllustration';

export default function Hero({ onSelectDemoTab }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 pt-1 sm:pt-4 pb-6 sm:pb-8">
      {/* 1. Area Utama Hero: Komposisi Seimbang Teks & Konsol Rontgen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-5 sm:mb-6">
        
        {/* Kolom Kiri: Teks & Aksi Utama */}
        <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left relative">
          {/* Siluet Anatomi Paru Halus sebagai Latar Belakang Subtil */}
          <div className="absolute -left-10 -top-8 w-60 h-60 pointer-events-none opacity-[0.04] text-navy hidden sm:block">
            <LungIllustration />
          </div>
          
          {/* Badge Konteks Medis Ringkas */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-slate-200 shadow-clay-sm">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
            <span className="font-heading font-bold text-xs text-navy tracking-wide">
              PneumoVision AI • Skrining Radiologi ResNet18
            </span>
          </div>

          {/* Judul Utama Wajib */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-navy tracking-tight leading-[1.18]">
            Deteksi Pneumonia dari Foto Rontgen
          </h1>

          {/* Subjudul Wajib */}
          <p className="text-xs sm:text-base text-navy/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Unggah foto rontgen dada untuk mendapatkan hasil skrining berbasis AI menggunakan ResNet18.
          </p>

          {/* Tombol Aksi Wajib */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1 w-full sm:w-auto">
            <a
              href="#detect"
              className="clay-btn clay-btn-teal text-xs sm:text-sm px-6 py-3 shadow-clay-btn-teal justify-center"
            >
              <span>Mulai Analisis</span>
              <ArrowRight size={17} className="stroke-[2.5]" />
            </a>

            <a
              href="#detect"
              onClick={onSelectDemoTab}
              className="clay-btn clay-btn-white text-xs sm:text-sm px-5 py-3 shadow-clay-sm text-navy hover:text-teal justify-center"
            >
              <FileText size={17} className="text-teal stroke-[2]" />
              <span>Coba Contoh Demo</span>
            </a>
          </div>

          {/* Info Teknis Pelengkap Terintegrasi */}
          <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] font-semibold text-navy/70">
            <span className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 shadow-inner inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
              Inferensi Cepat ~45ms
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 shadow-inner inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
              PyTorch Transfer Learning
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-navy/80 border border-slate-200">
              Evaluasi Data Uji Terkunci
            </span>
          </div>
        </div>

        {/* Kolom Kanan: Konsol Visual Rontgen (Maksimal 2 Floating Badge) */}
        <div className="lg:col-span-5 relative flex justify-center px-2 sm:px-4 mt-2 sm:mt-0">
          
          {/* Floating Badge 1 - Kiri Atas (Maksimal 2) */}
          <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-3 z-20 clay-card-sm px-2.5 sm:px-3 py-1.5 bg-white flex items-center gap-2 animate-float shadow-clay-sm">
            <div className="w-7 h-7 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-teal shrink-0">
              <Activity size={14} className="stroke-[2.5]" />
            </div>
            <div>
              <p className="text-[9px] uppercase font-bold text-navy/40 leading-none">Sensitivitas</p>
              <p className="font-heading font-bold text-[11px] text-navy">99,23% Pneumonia</p>
            </div>
          </div>

          {/* Floating Badge 2 - Kanan Atas (Maksimal 2) */}
          <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-3 z-20 clay-card-sm px-2.5 sm:px-3 py-1.5 bg-white flex items-center gap-2 animate-float-reverse shadow-clay-sm">
            <div className="w-7 h-7 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-navy shrink-0">
              <Cpu size={14} className="stroke-[2.5]" />
            </div>
            <div>
              <p className="text-[9px] uppercase font-bold text-navy/40 leading-none">Kecepatan</p>
              <p className="font-heading font-bold text-[11px] text-navy">⚡ ~45ms / citra</p>
            </div>
          </div>

          {/* Kartu Utama Konsol Skrining */}
          <div className="clay-card p-3 sm:p-4 w-full max-w-md bg-white relative z-10 border-2 border-slate-200">
            {/* Header Konsol */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-teal"></span>
                <span className="w-2 h-2 rounded-full bg-navy"></span>
                <span className="text-[11px] font-heading font-bold text-navy/75 ml-1">
                  Konsol Skrining ResNet18
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-teal-dark border border-slate-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span>
                Siap Skrining
              </span>
            </div>

            {/* Viewport Rontgen dengan Reticle Medis & Garis Scan */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 aspect-[4/3] shadow-inner group">
              <img
                src="/samples/pneumonia_sample_01.jpeg"
                alt="Simulasi Citra Rontgen Dada"
                className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Grid Medis Lembut & Garis Scan Animasi */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/10 pointer-events-none"></div>
              <div className="absolute left-0 right-0 h-0.5 bg-teal shadow-none animate-scanline pointer-events-none"></div>

              {/* Marker Area Pemeriksaan Paru Kanan */}
              <div className="absolute top-[26%] left-[18%] w-[32%] h-[48%] rounded-xl border border-teal/70 bg-teal/10 medical-reticle flex flex-col justify-between p-1 pointer-events-none animate-soft-pulse">
                <span className="px-1.5 py-0.5 rounded bg-teal text-white font-heading font-bold text-[8px] self-start shadow-sm">
                  Evaluasi Paru Kanan
                </span>
                <span className="text-[8px] text-teal-light font-mono self-end bg-navy/80 px-1 rounded">
                  Lapang Paru
                </span>
              </div>

              {/* Marker Area Pemeriksaan Paru Kiri */}
              <div className="absolute top-[28%] right-[18%] w-[30%] h-[46%] rounded-xl border border-dashed border-slate-400/60 bg-white/5 flex flex-col justify-end p-1 pointer-events-none">
                <span className="text-[8px] text-white/80 font-mono self-start bg-navy/70 px-1 rounded">
                  Area Paru Kiri
                </span>
              </div>

              {/* Telemetri Bar di Bawah Viewport */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-bold text-white/90 bg-navy/85 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                <span className="text-white/80">CXR (AP/PA)</span>
                <span className="text-teal">224 × 224 px</span>
              </div>
            </div>

            {/* Keterangan Bawah Konsol */}
            <p className="text-[10px] text-navy/45 font-medium text-center mt-2">
              *Visualisasi antarmuka penapisan citra rontgen dada berbasis deep learning.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Dock Statistik Terintegrasi & Kompak (Clean, Border Netral, Tanpa Glow) */}
      <div className="clay-card p-3 sm:p-4 bg-white border-2 border-slate-200 shadow-clay-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          
          {/* Metrik 1: Sensitivitas Pneumonia */}
          <div className="flex items-center gap-3 px-1 sm:px-3 pt-2 sm:pt-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-teal shrink-0 shadow-sm">
              <Activity size={18} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg sm:text-2xl text-navy leading-none">
                99,23%
              </div>
              <div className="text-[11px] sm:text-xs font-heading font-bold text-navy/80 mt-0.5">
                Sensitivitas Pneumonia
              </div>
              <div className="text-[10px] text-navy/50 font-medium truncate">
                Deteksi kasus positif
              </div>
            </div>
          </div>

          {/* Metrik 2: Akurasi Test Set */}
          <div className="flex items-center gap-3 px-1 sm:px-3 pt-2 sm:pt-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-teal shrink-0 shadow-sm">
              <CheckCircle size={18} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg sm:text-2xl text-navy leading-none">
                83,33%
              </div>
              <div className="text-[11px] sm:text-xs font-heading font-bold text-navy/80 mt-0.5">
                Akurasi Test Set
              </div>
              <div className="text-[10px] text-navy/50 font-medium truncate">
                Data uji independen
              </div>
            </div>
          </div>

          {/* Metrik 3: Model Transfer Learning */}
          <div className="flex items-center gap-3 px-1 sm:px-3 pt-2 sm:pt-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-navy shrink-0 shadow-sm">
              <Cpu size={18} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg sm:text-2xl text-navy leading-none">
                ResNet18
              </div>
              <div className="text-[11px] sm:text-xs font-heading font-bold text-navy/80 mt-0.5">
                Model Transfer Learning
              </div>
              <div className="text-[10px] text-navy/50 font-medium truncate">
                Residual ConvNet
              </div>
            </div>
          </div>

          {/* Metrik 4: Total Citra Rontgen */}
          <div className="flex items-center gap-3 px-1 sm:px-3 pt-2 sm:pt-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-navy shrink-0 shadow-sm">
              <Images size={18} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg sm:text-2xl text-navy leading-none">
                5.856
              </div>
              <div className="text-[11px] sm:text-xs font-heading font-bold text-navy/80 mt-0.5">
                Total Citra Rontgen
              </div>
              <div className="text-[10px] text-navy/50 font-medium truncate">
                Dataset Chest X-Ray
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
