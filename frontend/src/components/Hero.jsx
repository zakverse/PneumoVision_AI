import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Activity, CheckCircle2, FileText } from 'lucide-react';

export default function Hero({ onSelectDemoTab }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 pt-2 sm:pt-6 pb-8 sm:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Kolom Kiri: Teks & Aksi Utama */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
          
          {/* Badge Pengenal */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-teal-soft border border-teal/40 shadow-clay-sm">
            <Sparkles size={16} className="text-teal fill-teal" />
            <span className="font-heading font-bold text-xs sm:text-sm text-teal-dark">
              Deep Learning untuk Radiologi Dada
            </span>
          </div>

          {/* Judul Utama Wajib */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.15]">
            Deteksi Pneumonia dari Foto Rontgen
          </h1>

          {/* Subjudul Wajib */}
          <p className="text-sm sm:text-lg text-navy/75 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Unggah foto rontgen dada untuk mendapatkan hasil skrining berbasis AI menggunakan ResNet18.
          </p>

          {/* Tombol Aksi Wajib */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
            <a
              href="#detect"
              className="clay-btn clay-btn-teal text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 shadow-clay-btn-teal justify-center"
            >
              <span>Mulai Analisis</span>
              <ArrowRight size={18} className="stroke-[2.5]" />
            </a>

            <a
              href="#detect"
              onClick={onSelectDemoTab}
              className="clay-btn clay-btn-white text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 shadow-clay-btn-white text-navy justify-center"
            >
              <FileText size={18} className="text-teal stroke-[2]" />
              <span>Coba Contoh Demo</span>
            </a>
          </div>

          {/* Micro-Badges Fitur */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs font-semibold text-navy/70">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-teal fill-teal-soft" />
              <span>Sensitivitas 99,23%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-teal fill-teal-soft" />
              <span>Inferensi Cepat ~45ms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-teal fill-teal-soft" />
              <span>Arsitektur ResNet18</span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Card Pratinjau Playful Claymorphism */}
        <div className="lg:col-span-5 relative flex justify-center px-2 sm:px-4 mt-2 sm:mt-0">
          
          {/* Elemen Dekoratif Mengambang 1 - Kiri Atas */}
          <div className="absolute -top-3 left-0 sm:-top-4 sm:-left-4 z-20 clay-card-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white flex items-center gap-2 animate-float shadow-clay-sm">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-teal-soft border border-teal/40 flex items-center justify-center text-teal shrink-0">
              <Activity size={15} className="stroke-[2.5]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-navy/40 leading-none">Skrining</p>
              <p className="font-heading font-bold text-[11px] sm:text-xs text-navy">Sensitivitas 99,23%</p>
            </div>
          </div>

          {/* Elemen Dekoratif Mengambang 2 - Kanan Atas */}
          <div className="absolute -top-4 right-0 sm:-top-6 sm:-right-2 z-20 clay-card-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white flex items-center gap-2 animate-float-reverse shadow-clay-sm">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-mint-soft border border-mint-border flex items-center justify-center text-navy shrink-0">
              <Sparkles size={15} className="stroke-[2.5]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-navy/40 leading-none">Kecepatan</p>
              <p className="font-heading font-bold text-[11px] sm:text-xs text-navy">⚡ ~45ms</p>
            </div>
          </div>

          {/* Elemen Dekoratif Mengambang 3 - Kiri Bawah */}
          <div className="absolute -bottom-3 left-0 sm:-bottom-5 sm:-left-4 z-20 clay-card-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white flex items-center gap-2 animate-float shadow-clay-sm">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-teal-soft border border-teal/40 flex items-center justify-center text-teal shrink-0">
              <ShieldCheck size={15} className="stroke-[2.5]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-navy/40 leading-none">Target Klasifikasi</p>
              <p className="font-heading font-bold text-[11px] sm:text-xs text-navy">NORMAL & PNEUMONIA</p>
            </div>
          </div>

          {/* Card Pratinjau Utama */}
          <div className="clay-card p-3.5 sm:p-5 w-full max-w-md bg-white relative z-10">
            {/* Header Card */}
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b-2 border-mint-border mb-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-navy/30"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-teal"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-teal-hover"></span>
                <span className="text-[11px] sm:text-xs font-heading font-bold text-navy/60 ml-1">Simulasi Skrining ResNet18</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md bg-mint text-navy/80 border border-mint-border">
                Sampel Rontgen Dada
              </span>
            </div>

            {/* Citra Rontgen Simulasi dengan Garis Scanline Medis */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-mint-border bg-slate-900 aspect-[4/3] shadow-inner group">
              <img
                src="/samples/pneumonia_sample_01.jpeg"
                alt="Simulasi Citra Rontgen Paru"
                className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Grid Medis Halus & Scanline Animasi */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/20 pointer-events-none"></div>
              <div className="absolute left-0 right-0 h-0.5 bg-teal shadow-[0_0_8px_#18B8A6] animate-scanline pointer-events-none"></div>

              {/* Box Highlight Area Paru */}
              <div className="absolute top-[28%] left-[20%] w-[34%] h-[40%] border-2 border-dashed border-teal/70 rounded-xl bg-teal/10 flex flex-col justify-between p-1.5 animate-soft-pulse pointer-events-none">
                <span className="px-1.5 py-0.5 rounded-md bg-teal text-white font-heading font-bold text-[9px] self-start shadow-sm">
                  Fokus Opasitas
                </span>
                <span className="text-[9px] text-teal-light font-mono self-end bg-navy/80 px-1 rounded">
                  Zona Paru Kanan
                </span>
              </div>

              {/* Badge Bawah Citra */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-3 sm:right-3 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-white/90 bg-navy/80 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/20">
                <span>Model: ResNet18</span>
                <span className="text-teal">Resolusi: 224 × 224 px</span>
              </div>
            </div>

            {/* Keterangan Bawah */}
            <p className="text-[10px] sm:text-[11px] text-navy/50 font-medium text-center mt-2.5 sm:mt-3">
              *Ilustrasi antarmuka penapisan citra rontgen dada berbasis deep learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
