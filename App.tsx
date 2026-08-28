import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Prevent scroll while splash is showing
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className={`transition-opacity duration-500 ${showSplash ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/alur-surat" element={<AlurSurat />} />
              <Route path="/layanan" element={<Layanan />} />
              <Route path="/layanan/:kategoriId" element={<LayananKategori />} />
              <Route path="/layanan/:kategoriId/:suratId" element={<DetailSurat />} />
              <Route path="/about" element={<About />} />
              <Route path="/bantuan" element={<Bantuan />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
