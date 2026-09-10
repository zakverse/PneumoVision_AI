import React from 'react';
import { ShieldCheck, AlertTriangle, ArrowUpRight } from 'lucide-react';

export default function ConditionGuide() {
  const conditions = [
    {
      name: "NORMAL",
      subtitle: "Kondisi Paru-Paru Sehat",
      description: "Lapang paru tampak jernih dan radiolusen merata tanpa adanya bayangan bercak opasitas abnormal. Percabangan bronkovaskular dalam batas wajar dan sudut kostofrenikus terlihat tajam.",
      badge: "Kategori Negatif",
      icon: ShieldCheck,
      colorClass: "clay-card-teal text-navy",
      accentBg: "bg-white text-teal border-teal/30",
      badgeColor: "bg-teal text-white"
    },
    {
      name: "PNEUMONIA",
      subtitle: "Infeksi & Konsolidasi Paru",
      description: "Tampak adanya konsolidasi fokal atau infiltrat interstitial berwarna putih akibat akumulasi cairan eksudat dan peradangan di dalam kantung udara alveoli yang menghalangi berkas sinar-X.",
      badge: "Kategori Positif",
      icon: AlertTriangle,
      colorClass: "clay-card-mint text-navy",
      accentBg: "bg-white text-navy border-mint-border",
      badgeColor: "bg-navy text-white"
    }
  ];

  return (
    <section id="conditions" className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-10 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="font-heading font-bold text-xs uppercase tracking-wider text-teal-dark px-3 py-1 rounded-full bg-teal-soft border border-teal/40">
          Karakteristik Citra Rontgen
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-navy mt-2 sm:mt-3 mb-2 sm:mb-3">
          2 Kategori Kondisi Paru
        </h2>
        <p className="text-xs sm:text-base text-navy/70 font-medium px-2 sm:px-0">
          Model dilatih untuk membedakan struktur radiologis paru normal dengan paru yang terdampak peradangan pneumonia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {conditions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`${item.colorClass} p-5 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5`}
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl ${item.accentBg} border flex items-center justify-center shadow-sm`}>
                    <Icon size={24} className="stroke-[2.5]" />
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-heading font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight mb-1 text-navy">
                  {item.name}
                </h3>
                <p className="font-heading font-semibold text-xs sm:text-sm text-teal-dark mb-2 sm:mb-3">
                  "{item.subtitle}"
                </p>
                <p className="text-xs sm:text-sm text-navy/75 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-mint-border flex items-center justify-between text-[11px] sm:text-xs font-heading font-bold text-navy/70">
                <span>Kelas Model ID: {idx}</span>
                <span className="flex items-center gap-1 text-teal-dark">
                  ResNet18 Softmax <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
