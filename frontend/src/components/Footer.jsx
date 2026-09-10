import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-3 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-16 border-t border-slate-200 mt-8 sm:mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
        
        {/* Info Merek */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white flex items-center justify-center p-1 shadow-clay-sm border border-slate-200 overflow-hidden shrink-0">
            <img
              src="/PneumoVision.png"
              alt="Logo PneumoVision"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div className="text-left">
            <span className="font-heading font-bold text-base sm:text-lg text-navy tracking-tight">
              PneumoVision<span className="text-teal">.AI</span>
            </span>
            <p className="text-[11px] sm:text-xs text-navy/60 font-medium">
              Skrining citra rontgen dada berbasis deep learning ResNet18.
            </p>
          </div>
        </div>

        {/* Tautan Cepat Navigasi */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-heading font-semibold text-navy/70">
          <a href="#detect" className="hover:text-teal transition-colors py-1">
            Deteksi
          </a>
          <a href="#how-it-works" className="hover:text-teal transition-colors py-1">
            Cara Kerja
          </a>
          <a href="#conditions" className="hover:text-teal transition-colors py-1">
            Kondisi Paru
          </a>
          <a href="#model-info" className="hover:text-teal transition-colors py-1">
            Model AI
          </a>
        </div>

        {/* Hak Cipta & Disclaimer */}
        <div className="text-[11px] sm:text-xs font-medium text-navy/50 text-center md:text-right">
          <p>© {new Date().getFullYear()} PneumoVision AI. Hak cipta dilindungi.</p>
          <p className="mt-0.5 text-[10px] text-navy/40">
            Prototipe Penelitian Skrining Radiologi • Bukan Alat Diagnosis Klinis
          </p>
        </div>
      </div>
    </footer>
  );
}
