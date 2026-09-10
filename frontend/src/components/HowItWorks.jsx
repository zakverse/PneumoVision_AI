import React from 'react';
import { Upload, ScanEye, BarChart3, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Unggah Rontgen",
      description: "Pilih foto rontgen dada Anda dari perangkat atau seret langsung ke dalam area unggah.",
      icon: Upload,
      badgeClass: "bg-teal text-white border-teal-dark"
    },
    {
      step: "02",
      title: "Analisis ResNet18",
      description: "Model deep learning ResNet18 mengekstraksi pola radiologis paru-paru secara instan.",
      icon: ScanEye,
      badgeClass: "bg-slate-100 text-navy border-slate-200"
    },
    {
      step: "03",
      title: "Hasil & Probabilitas",
      description: "Lihat hasil klasifikasi status paru-paru, tingkat keyakinan, dan perbandingan probabilitas.",
      icon: BarChart3,
      badgeClass: "bg-teal text-white border-teal-dark"
    }
  ];

  return (
    <section id="how-it-works" className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-10 sm:py-14">
      <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-10">
        <span className="font-heading font-bold text-xs uppercase tracking-wider text-teal-dark px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
          Alur 3 Langkah Sederhana
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-navy mt-2 sm:mt-3 mb-2">
          Cara Kerja PneumoVision AI
        </h2>
        <p className="text-xs sm:text-base text-navy/70 font-medium px-2 sm:px-0">
          Dirancang untuk mempermudah skrining awal citra rontgen dada dengan teknologi deep learning yang cepat dan transparan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="clay-card p-5 sm:p-7 bg-white border-2 border-slate-200 text-navy flex flex-col justify-between relative transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className={`font-heading font-extrabold text-base sm:text-lg px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-2xl border ${item.badgeClass} shadow-sm`}>
                    {item.step}
                  </span>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-teal shadow-sm">
                    <Icon size={19} className="stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold mb-1.5 text-navy">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy/75 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] sm:text-xs font-heading font-bold text-teal-dark">
                <span>Cepat & Otomatis</span>
                <ArrowRight size={13} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
