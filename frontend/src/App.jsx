import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageUploader from './components/ImageUploader';
import DetectionResult from './components/DetectionResult';
import HowItWorks from './components/HowItWorks';
import ConditionGuide from './components/ConditionGuide';
import ModelInfo from './components/ModelInfo';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { AlertCircle, X, Sparkles } from 'lucide-react';

const RAW_API_URL = import.meta.env.VITE_API_URL;
const API_BASE_URL = RAW_API_URL !== undefined ? RAW_API_URL.replace(/\/+$/, '') : 'http://127.0.0.1:8000';
const HEALTH_URL = API_BASE_URL ? `${API_BASE_URL}/health` : '/health';
const PREDICT_URL = API_BASE_URL ? `${API_BASE_URL}/predict` : '/predict';

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeSample, setActiveSample] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isBackendOnline, setIsBackendOnline] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  // Memeriksa Status Kesehatan Backend FastAPI
  const checkHealth = async () => {
    try {
      setCheckingStatus(true);
      const res = await fetch(HEALTH_URL);
      if (res.ok) {
        setIsBackendOnline(true);
      } else {
        setIsBackendOnline(false);
      }
    } catch (err) {
      setIsBackendOnline(false);
    } finally {
      setCheckingStatus(false);
    }
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  // Penanganan Pemilihan Berkas Gambar Rontgen oleh Pengguna
  const handleImageSelected = (file) => {
    if (!file) return;

    // Validasi Format Gambar
    const validExtensions = ['.jpg', '.jpeg', '.png'];
    const hasValidExtension = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
    if (!file.type.startsWith('image/') && !hasValidExtension) {
      setErrorMessage('Format berkas tidak didukung. Harap unggah foto rontgen dengan format JPG, JPEG, atau PNG.');
      return;
    }

    // Validasi Ukuran Berkas (Maksimal 15MB)
    if (file.size > 15 * 1024 * 1024) {
      setErrorMessage('Ukuran berkas terlalu besar (maksimal 15MB). Harap pilih citra yang lebih kecil.');
      return;
    }

    setSelectedFile(file);
    setActiveSample(null);
    setImagePreview(URL.createObjectURL(file));
    setResult(null);
    setErrorMessage(null);
  };

  // Penanganan Pemilihan Contoh Demo dari Chip Teks
  const handleSelectSample = (sample) => {
    setSelectedFile(null);
    setActiveSample(sample);
    setImagePreview(sample.url);
    setResult(null);
    setErrorMessage(null);
  };

  // Penanganan Eksekusi Analisis Inferensi
  const handleAnalyze = async () => {
    if (!selectedFile && !activeSample) {
      setErrorMessage('Harap pilih atau unggah foto rontgen terlebih dahulu sebelum memulai analisis.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    // Kasus 1: Menggunakan Berkas Gambar yang Diunggah Pengguna
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      try {
        const response = await fetch(PREDICT_URL, {
          method: 'POST',
          body: formData,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.detail || `Server backend mengembalikan status HTTP ${response.status}`);
        }

        const data = await response.json();
        setResult(data);
      } catch (error) {
        clearTimeout(timeoutId);
        console.error('Kesalahan analisis:', error);
        if (error.name === 'AbortError') {
          setErrorMessage('Batas waktu habis (timeout 30 detik). Server membutuhkan waktu lebih lama untuk memproses gambar.');
        } else {
          setErrorMessage(
            error.message || 'Gagal terhubung ke backend FastAPI. Pastikan server backend sedang aktif pada port 8000.'
          );
        }
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // Kasus 2: Menggunakan Contoh Sampel Demo
    if (activeSample) {
      // Jika Backend Online: Jalankan inferensi langsung dengan mengambil blob gambar sampel
      if (isBackendOnline) {
        try {
          const imgResponse = await fetch(activeSample.url);
          const blob = await imgResponse.blob();
          const fileObj = new File([blob], activeSample.fileName, { type: blob.type || 'image/jpeg' });

          const formData = new FormData();
          formData.append('file', fileObj);

          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 30000);

          const response = await fetch(PREDICT_URL, {
            method: 'POST',
            body: formData,
            signal: controller.signal,
          });
          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            setResult(data);
            setIsLoading(false);
            return;
          }
        } catch (sampleErr) {
          console.warn('Gagal inferensi live sampel, menggunakan fallback hasil precomputed:', sampleErr);
        }
      }

      // Fallback Mode Demo (Precomputed terverifikasi dari evaluasi checkpoint)
      setTimeout(() => {
        setResult(activeSample.precomputed);
        setIsLoading(false);
      }, 500);
    }
  };

  // Atur Ulang Status Berkas & Hasil
  const handleReset = () => {
    setSelectedFile(null);
    setActiveSample(null);
    setImagePreview(null);
    setResult(null);
    setErrorMessage(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF] flex flex-col selection:bg-[#1677D2]/20 selection:text-[#123B78]">
      {/* 1. Bar Navigasi Mengambang (Header) */}
      <Header
        isBackendOnline={isBackendOnline}
        checkingStatus={checkingStatus}
        onCheckHealth={checkHealth}
      />

      <main className="flex-grow">
        {/* 2. Hero Section dengan Dock Statistik Terintegrasi */}
        <Hero onSelectDemoTab={() => {
          // Scroll halus ke workspace deteksi
          document.getElementById('detect')?.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 4. Detection Workspace (Area Deteksi Dual-Panel Tanpa Sidebar) */}
        <section id="detect" className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12 scroll-mt-20 sm:scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#1677D2] px-3 py-1 rounded-full bg-[#EAF4FF] border border-[#1677D2]/30 inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles size={14} className="fill-[#1677D2] text-[#1677D2]" />
              Ruang Skrining Interaktif
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B78] mt-2 sm:mt-3 mb-2 tracking-tight">
              Deteksi Pneumonia dari Foto Rontgen
            </h2>
            <p className="text-xs sm:text-base text-[#123B78]/70 font-medium px-2 sm:px-0">
              Unggah foto rontgen dada atau pilih salah satu contoh untuk menganalisis kondisi paru-paru secara langsung.
            </p>
          </div>

          {/* Notifikasi Peringatan Kesalahan */}
          {errorMessage && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-900 text-xs sm:text-sm font-semibold flex items-center justify-between shadow-clay-sm animate-shake">
              <div className="flex items-center gap-2 sm:gap-3">
                <AlertCircle size={20} className="text-rose-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
              <button
                onClick={() => setErrorMessage(null)}
                className="p-1 rounded-lg hover:bg-rose-100 text-rose-700 transition-colors shrink-0"
                aria-label="Tutup pesan kesalahan"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* Grid Dual-Panel Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Panel Kiri: 1. Unggah Gambar Rontgen */}
            <div className="lg:col-span-5">
              <ImageUploader
                selectedFile={selectedFile}
                activeSample={activeSample}
                onImageSelected={handleImageSelected}
                onSelectSample={handleSelectSample}
                onAnalyze={handleAnalyze}
                isLoading={isLoading}
                onReset={handleReset}
              />
            </div>

            {/* Panel Kanan: Pratinjau & 2. Hasil Analisis */}
            <div className="lg:col-span-7">
              <DetectionResult
                result={result}
                imagePreview={imagePreview}
                selectedFile={selectedFile}
                activeSample={activeSample}
                isLoading={isLoading}
              />
            </div>
          </div>
        </section>

        {/* 5. Cara Kerja (3 Langkah Sederhana) */}
        <HowItWorks />

        {/* 6. Panduan Karakteristik Paru (NORMAL vs PNEUMONIA) */}
        <ConditionGuide />

        {/* 7. Spesifikasi Teknis Model ResNet18 */}
        <ModelInfo />

        {/* 8. Banner Ajakan Bertindak Terakhir */}
        <FinalCTA />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
