import React from 'react';
import { Activity, CheckCircle, Cpu, Images } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      value: "99,23%",
      label: "Sensitivitas Pneumonia",
      subtext: "Tinggi dalam deteksi kasus positif",
      icon: Activity,
      cardClass: "clay-card-blue text-[#123B78]",
      iconBg: "bg-[#1677D2] text-white border-[#1162B0]"
    },
    {
      value: "83,33%",
      label: "Akurasi Test Set",
      subtext: "Evaluasi dataset uji independen",
      icon: CheckCircle,
      cardClass: "clay-card-sm text-[#123B78]",
      iconBg: "bg-white text-[#1677D2] border-slate-200"
    },
    {
      value: "ResNet18",
      label: "Model Transfer Learning",
      subtext: "Deep Convolutional Neural Network",
      icon: Cpu,
      cardClass: "clay-card-blue text-[#123B78]",
      iconBg: "bg-[#1677D2] text-white border-[#1162B0]"
    },
    {
      value: "5.856",
      label: "Total Citra Rontgen",
      subtext: "Data latih, validasi, & pengujian",
      icon: Images,
      cardClass: "clay-card-sm text-[#123B78]",
      iconBg: "bg-white text-[#123B78] border-slate-200"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 mb-8 sm:mb-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`${item.cardClass} p-3.5 sm:p-5 lg:p-6 transition-transform hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center border ${item.iconBg} shadow-sm shrink-0`}>
                  <Icon size={18} className="stroke-[2.5]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-navy/50">
                  Terverifikasi
                </span>
              </div>
              <div className="font-heading text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-0.5 sm:mb-1 text-navy">
                {item.value}
              </div>
              <div className="font-heading font-bold text-xs sm:text-base text-navy/90">
                {item.label}
              </div>
              <div className="text-[10px] sm:text-xs text-navy/60 mt-0.5 font-medium truncate">
                {item.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
