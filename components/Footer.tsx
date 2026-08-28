import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-white border-t border-green-100">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
                <span className="text-white font-display font-black text-sm">E</span>
              </div>
              <div>
                <p className="font-display font-black text-green-800 text-sm leading-none">E-SURAT</p>
                <p className="text-green-600 text-xs">Desa Jambangan</p>
              </div>
            </div>
            <p className="text-sm text-green-700 leading-relaxed">
              Portal informasi pelayanan surat Desa Jambangan. Mudah, jelas, dan transparan.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-display font-bold text-green-800 mb-3 text-sm">Navigasi</p>
            <ul className="space-y-2">
              {[
                { to: "/home", label: "Home" },
                { to: "/alur-surat", label: "Alur Surat" },
                { to: "/layanan", label: "Layanan Surat" },
                { to: "/about", label: "Tentang Kami" },
                { to: "/bantuan", label: "Bantuan" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-green-600 hover:text-green-800 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-green-800 mb-3 text-sm">Hubungi Kami</p>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>[EMAIL DESA JAMBANGAN]</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>[NOMOR KONTAK DESA]</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>[ALAMAT KANTOR DESA JAMBANGAN]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-green-500">© 2025 Desa Jambangan. Hak Cipta Dilindungi.</p>
          <p className="text-xs text-green-400">E-SURAT — Layanan Surat Desa Jambangan</p>
        </div>
      </div>
    </footer>
  );
}
