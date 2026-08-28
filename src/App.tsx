import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AlurSurat from "./pages/AlurSurat";
import Layanan from "./pages/Layanan";
import LayananKategori from "./pages/LayananKategori";
import DetailSurat from "./pages/DetailSurat";
import About from "./pages/About";
import Bantuan from "./pages/Bantuan";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const homeVideoAudioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent scroll while splash is showing
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showSplash]);

  useEffect(() => {
    const playHomeVideoAudio = () => {
      const audio = homeVideoAudioRef.current;
      if (!audio) return;

      audio.muted = false;
      audio.volume = 1;
      audio.currentTime = 0;
      void audio.play().catch(() => {});
    };

    window.addEventListener("play-home-video-audio", playHomeVideoAudio);
    return () => window.removeEventListener("play-home-video-audio", playHomeVideoAudio);
  }, []);

  return (
    <>
      <audio ref={homeVideoAudioRef} src="/cinematic-desa.mp4" muted loop />
      {showSplash && (
        <SplashScreen
          onFinish={() => {
            setShowSplash(false);
            navigate("/home", { replace: true });
          }}
        />
      )}
      <div className={`transition-opacity duration-500 ${showSplash ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home splashComplete={!showSplash} />} />
            <Route path="/alur-surat" element={<AlurSurat />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/layanan/:kategoriId" element={<LayananKategori />} />
            <Route path="/layanan/:kategoriId/:suratId" element={<DetailSurat />} />
            <Route path="/about" element={<About />} />
            <Route path="/bantuan" element={<Bantuan />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
