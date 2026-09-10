import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px] bg-[#123B78] p-6 sm:p-12 text-center text-white border-2 border-[#1B52A6] shadow-clay-card">
        <div className="relative z-10 max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-[#EAF4FF]">
            <ShieldCheck size={15} className="text-[#1677D2]" />
            <span>Skrining Cepat & Teruji</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Siap Menganalisis Foto Rontgen?
          </h2>

          <p className="text-xs sm:text-base text-slate-300 font-medium max-w-lg mx-auto leading-relaxed px-1 sm:px-0">
            Unggah citra rontgen dada dan biarkan PneumoVision AI memproses penapisan dalam hitungan detik menggunakan arsitektur ResNet18.
          </p>

          <div className="pt-2 sm:pt-3">
            <a
              href="#detect"
              className="clay-btn clay-btn-blue text-white text-xs sm:text-sm px-6 sm:px-8 py-3.5 shadow-clay-btn-blue hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              <span>Mulai Analisis Sekarang</span>
              <ArrowRight size={17} className="stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
