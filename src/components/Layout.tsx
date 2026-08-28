import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex"
      style={{ background: "#f0fdf4" }}
    >
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onToggle={() => setSidebarOpen((v) => !v)}
      />

      <div
        className={`
          flex-1
          min-h-screen
          flex
          flex-col
          transition-all
          duration-300
          ${sidebarOpen ? "lg:ml-64" : "lg:ml-16"}
        `}
      >
        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}