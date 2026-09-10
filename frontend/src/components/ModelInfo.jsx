import React from 'react';
import { Cpu, Maximize2, Tag, Database, Zap, Award } from 'lucide-react';

export default function ModelInfo() {
  const specs = [
    { label: "Arsitektur Model", value: "ResNet18 (Residual Network)", icon: Cpu },
    { label: "Jenis Tugas", value: "Klasifikasi Citra Biner", icon: Zap },
    { label: "Jumlah Kelas", value: "2 Kelas (NORMAL / PNEUMONIA)", icon: Tag },
    { label: "Resolusi Input", value: "224 × 224 piksel", icon: Maximize2 },
    { label: "Dataset Pelatihan", value: "5.856 Citra Rontgen Dada", icon: Database },
    { label: "Latensi Inferensi", value: "~45ms per citra (PyTorch CPU)", icon: Award },
  ];

  return (
    <section id="model-info" className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-10 sm:py-14">
      <div className="clay-card p-5 sm:p-8 lg:p-10 bg-white border-2 border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Kolom Informasi Kiri */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#1677D2] px-3 py-1 rounded-full bg-[#EAF4FF] border border-[#1677D2]/25">
              Spesifikasi Teknis
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#123B78] leading-tight">
              Didukung oleh ResNet18
            </h2>
            <p className="text-xs sm:text-base text-[#123B78]/75 font-medium leading-relaxed">
              ResNet18 memanfaatkan koneksi pintas (<em>residual skip connections</em>) yang memungkinkan pelatihan jaringan konvolusional dalam tanpa kendala <em>vanishing gradient</em>. Model ini diadaptasi melalui <em>transfer learning</em> bobot ImageNet untuk mengenali tekstur opasitas dan infiltrat pada citra rontgen dada secara akurat.
            </p>

            <div className="pt-1 flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-heading font-bold text-[#123B78]">
                PyTorch 2.x
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-heading font-bold text-[#123B78]">
                FastAPI REST API
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-heading font-bold text-[#123B78]">
                Transfer Learning
              </span>
            </div>
          </div>

          {/* Kolom Grid Spesifikasi Kanan */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {specs.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-start gap-3 shadow-inner"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1677D2] shadow-sm shrink-0">
                      <Icon size={18} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-[#123B78]/50">
                        {spec.label}
                      </p>
                      <p className="font-heading font-extrabold text-xs sm:text-sm lg:text-base text-[#123B78] mt-0.5">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
