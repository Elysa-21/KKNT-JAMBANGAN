import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getKategoriById, getSuratByKategori } from "../data/suratData";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function LayananKategori() {
  const { kategoriId } = useParams<{ kategoriId: string }>();
  const navigate = useNavigate();
  const kategori = getKategoriById(kategoriId || "");
  const suratItems = getSuratByKategori(kategoriId || "");

  const header = useInView(0.1);
  const cards = useInView(0.05);

  if (!kategori) {
    return (
      <div className="flex items-center justify-center min-h-64 text-green-600">
        Kategori tidak ditemukan.{" "}
        <Link to="/layanan" className="underline ml-1">Kembali</Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-green-500">
        <Link to="/layanan" className="hover:text-green-700 transition-colors">Layanan Surat</Link>
        <span>›</span>
        <span className="text-green-800 font-medium">{kategori.nama}</span>
      </div>

      {/* Header */}
      <div ref={header.ref} className={`mb-10 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
          >
            {kategori.icon}
          </div>
          <div>
            <h1 className="font-display font-black text-green-900 text-3xl">{kategori.nama}</h1>
            <p className="text-green-600 text-sm mt-1">{kategori.deskripsi}</p>
          </div>
        </div>
        <p className="text-green-600 text-sm">
          {suratItems.length} jenis surat tersedia dalam kategori ini.
        </p>
      </div>

      {/* Surat cards */}
      <div ref={cards.ref} className="grid sm:grid-cols-2 gap-5">
        {suratItems.map((surat, i) => (
          <div
            key={surat.id}
            className={`card-hover bg-white rounded-2xl p-5 border border-green-100 shadow-sm flex flex-col gap-3 transition-all duration-700 ${cards.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-2xl flex-shrink-0 border border-green-100">
                {surat.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-green-900 text-sm leading-tight">{surat.nama}</h3>
                <p className="text-green-600 text-xs mt-1 leading-relaxed line-clamp-2">{surat.deskripsi}</p>
              </div>
            </div>
            <button
              onClick={() => navigate(`/layanan/${kategoriId}/${surat.id}`)}
              className="mt-auto w-full py-2.5 rounded-xl font-display font-bold text-green-700 text-sm bg-green-50 hover:bg-green-100 border border-green-200 transition-all hover:-translate-y-0.5 hover:shadow-sm"
            >
              Lihat Detail →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
