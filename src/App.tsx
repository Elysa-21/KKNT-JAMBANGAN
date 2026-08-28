import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

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

  // ============================================================
  // JUDUL TAB BROWSER
  // ============================================================
  useEffect(() => {
    document.title = "Administrasi Surat | Desa Jambangan";
  }, []);

  // ============================================================
  // PREVENT SCROLL SAAT SPLASH SCREEN
  // ============================================================
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  // ============================================================
  // AUDIO HOME VIDEO
  // ============================================================
  useEffect(() => {
    const playHomeVideoAudio = () => {
      const audio = homeVideoAudioRef.current;

      if (!audio) return;

      audio.muted = false;
      audio.volume = 1;
      audio.currentTime = 0;

      void audio.play().catch(() => {});
    };

    window.addEventListener(
      "play-home-video-audio",
      playHomeVideoAudio
    );

    return () => {
      window.removeEventListener(
        "play-home-video-audio",
        playHomeVideoAudio
      );
    };
  }, []);

  return (
    <>
      {/* ========================================================
          AUDIO HOME VIDEO
      ======================================================== */}
      <audio
        ref={homeVideoAudioRef}
        src="/cinematic-desa.mp4"
        muted
        loop
      />

      {/* ========================================================
          SPLASH SCREEN
      ======================================================== */}
      {showSplash && (
        <SplashScreen
          onFinish={() => {
            setShowSplash(false);
            navigate("/home", { replace: true });
          }}
        />
      )}

      {/* ========================================================
          MAIN APPLICATION
      ======================================================== */}
      <div
        className={`transition-opacity duration-500 ${
          showSplash
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <Routes>
          {/* ====================================================
              DEFAULT ROUTE
          ==================================================== */}
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />

          {/* ====================================================
              LAYOUT + PAGES
          ==================================================== */}
          <Route element={<Layout />}>
            {/* HOME */}
            <Route
              path="/home"
              element={
                <Home splashComplete={!showSplash} />
              }
            />

            {/* ALUR SURAT */}
            <Route
              path="/alur-surat"
              element={<AlurSurat />}
            />

            {/* LAYANAN */}
            <Route
              path="/layanan"
              element={<Layanan />}
            />

            {/* KATEGORI LAYANAN */}
            <Route
              path="/layanan/:kategoriId"
              element={<LayananKategori />}
            />

            {/* DETAIL SURAT */}
            <Route
              path="/layanan/:kategoriId/:suratId"
              element={<DetailSurat />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* BANTUAN */}
            <Route
              path="/bantuan"
              element={<Bantuan />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}