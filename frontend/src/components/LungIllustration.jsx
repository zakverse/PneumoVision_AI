import React from 'react';

export default function LungIllustration({ className = "w-full h-full text-[#1677D2]/20" }) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Trakea dan Percabangan Bronkus Utama */}
      <path
        d="M200 20 L200 80 M200 80 L165 125 M200 80 L235 125"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Cincin Trakea */}
      <line x1="192" y1="35" x2="208" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="192" y1="50" x2="208" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="192" y1="65" x2="208" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

      {/* Kontur Paru Kanan (3 Lobus) */}
      <path
        d="M175 90 C140 90 90 120 80 170 C70 220 85 270 120 285 C155 295 180 270 185 240 C190 200 185 130 175 90 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.04"
      />
      {/* Fissura Paru Kanan */}
      <path d="M95 185 Q135 190 175 175" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.35" />
      <path d="M110 230 Q145 225 180 220" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.35" />

      {/* Kontur Paru Kiri (2 Lobus dengan Cardiac Notch) */}
      <path
        d="M225 90 C260 90 310 120 320 170 C330 220 315 270 280 285 C245 295 220 270 215 235 C210 200 215 130 225 90 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.04"
      />
      {/* Fissura Paru Kiri */}
      <path d="M305 185 Q265 205 225 215" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.35" />

      {/* Indikator Lekukan Jantung (Cardiac Notch) */}
      <path
        d="M215 180 C230 195 230 220 220 235"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        opacity="0.4"
      />

      {/* Garis-garis Percabangan Bronkial Halus */}
      <path d="M165 125 Q135 150 115 175" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M165 125 Q145 170 140 210" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M235 125 Q265 150 285 175" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M235 125 Q255 170 260 210" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />

      {/* Titik Marker Medis */}
      <circle cx="85" cy="115" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="315" cy="115" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="75" cy="255" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="325" cy="255" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
