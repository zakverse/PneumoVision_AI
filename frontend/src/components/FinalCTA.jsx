import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-gradient-to-br from-teal via-teal-hover to-teal-active p-6 sm:p-14 text-center text-white border-3 sm:border-4 border-teal-dark shadow-clay-lg">
        
        {/* Kilau Dekoratif */}
        <div className="absolute top-6 left-8 text-white/30 animate-float hidden sm:block">
          <Sparkles size={36} />
        </div>
        <div className="absolute bottom-6 right-8 text-white/30 animate-float-reverse hidden sm:block">
          <Sparkles size={40} />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider">
            <ShieldCheck size={15} />
            <span>Skrining Cepat & Akurat</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Siap Menganalisis Foto Rontgen?
          </h2>

          <p className="text-sm sm:text-lg text-teal-light font-medium max-w-lg mx-auto leading-relaxed px-1 sm:px-0">
            Unggah citra rontgen dada dan biarkan PneumoVision AI memproses penapisan dalam hitungan detik menggunakan arsitektur ResNet18.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href="#detect"
              className="clay-btn clay-btn-white text-navy text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 shadow-clay-btn-white hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              <span>Mulai Analisis Sekarang</span>
              <ArrowRight size={18} className="stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
