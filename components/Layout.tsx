import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex" style={{ background: "#f0fdf4" }}>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onToggle={() => setSidebarOpen((v) => !v)}
      />

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300
          ${sidebarOpen ? "lg:ml-64" : "lg:ml-16"}
          ml-0`}
      >
        {/* Top bar for desktop toggle */}
        <header className="hidden lg:flex items-center justify-between px-6 py-4 bg-white border-b border-green-100 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-green-700 hover:bg-green-50 active:bg-green-100 transition-all duration-150 border border-green-100 shadow-sm group"
            aria-label="Toggle sidebar"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:scale-110">
              <rect y="0" width="18" height="2" rx="1" fill="#16a34a"/>
              <rect y="6" width="13" height="2" rx="1" fill="#16a34a"/>
              <rect y="12" width="9" height="2" rx="1" fill="#16a34a"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
              <span className="text-white font-display font-black text-xs">E</span>
            </div>
            <span className="font-display font-bold text-green-800 text-sm">E-SURAT Desa Jambangan</span>
          </div>
          <div className="w-9" />
        </header>

        {/* Mobile top bar */}
        <header className="lg:hidden flex items-center justify-center px-14 py-4 bg-white border-b border-green-100 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
              <span className="text-white font-display font-black text-xs">E</span>
            </div>
            <span className="font-display font-bold text-green-800 text-sm">E-SURAT</span>
          </div>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
