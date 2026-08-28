import { NavLink, useLocation } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const navItems = [
  { to: "/home", label: "Home", icon: "🏠" },
  { to: "/alur-surat", label: "Alur Surat", icon: "📋" },
  { to: "/layanan", label: "Layanan Surat", icon: "📝" },
  { to: "/about", label: "Tentang Kami", icon: "ℹ️" },
  { to: "/bantuan", label: "Bantuan", icon: "❓" },
];

export default function Sidebar({ open, onClose, onToggle }: Props) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 flex flex-col bg-white shadow-xl transition-all duration-300 ease-in-out
          ${open ? "w-64" : "w-0 lg:w-16"}
          overflow-hidden`}
        style={{ borderRight: "1px solid #dcfce7" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-green-100 min-h-[72px]">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
          >
            <span className="text-white font-display font-black text-sm">E</span>
          </div>
          {open && (
            <div className="animate-slide-in overflow-hidden">
              <p className="font-display font-black text-green-800 leading-tight text-sm whitespace-nowrap">E-SURAT</p>
              <p className="text-green-600 text-xs whitespace-nowrap font-medium">Desa Jambangan</p>
            </div>
          )}
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to || (item.to !== "/home" && location.pathname.startsWith(item.to));
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl mb-1 transition-all duration-200 group relative whitespace-nowrap
                  ${isActive
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md"
                    : "text-green-700 hover:bg-green-50"
                  }`}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                {open && (
                  <span className={`font-display font-semibold text-sm animate-slide-in ${isActive ? "text-white" : ""}`}>
                    {item.label}
                  </span>
                )}
                {/* Active indicator dot (collapsed) */}
                {!open && isActive && (
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-500" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer info */}
        {open && (
          <div className="px-4 py-4 border-t border-green-100 animate-slide-in">
            <p className="text-xs text-green-500 font-medium">© 2025 Desa Jambangan</p>
          </div>
        )}
      </aside>

      {/* Mobile hamburger (floating, not inside sidebar) */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-[60] w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-green-700 border border-green-100 active:bg-green-50 transition-all duration-150"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="1" x2="13" y2="13" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
            <line x1="13" y1="1" x2="1" y2="13" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0" width="18" height="2" rx="1" fill="#16a34a"/>
            <rect y="6" width="13" height="2" rx="1" fill="#16a34a"/>
            <rect y="12" width="9" height="2" rx="1" fill="#16a34a"/>
          </svg>
        )}
      </button>
    </>
  );
}
