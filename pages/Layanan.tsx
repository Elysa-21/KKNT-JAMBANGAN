import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { kategoriList } from "../data/suratData";

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

const gradients: Record<string, string> = {
  keterangan: "linear-gradient(135deg, #34d399, #22c55e)",
  permohonan: "linear-gradient(135deg, #2dd4bf, #34d399)",
  pengantar: "linear-gradient(135deg, #4ade80, #2dd4bf)",
  pernyataan: "linear-gradient(135deg, #a3e635, #4ade80)",
};

export default function Layanan() {
  const navigate = useNavigate();
  const header = useInView(0.1);
  const cards = useInView(0.05);

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <div ref={header.ref} className={`text-center mb-12 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-display font-semibold tracking-widest uppercase mb-4">
          Kategori
        </span>
        <h1 className="font-display font-black text-green-900 text-4xl mb-3">Layanan Surat</h1>
        <p className="text-green-600 max-w-md mx-auto text-sm leading-relaxed">
          Pilih kategori surat yang Anda butuhkan untuk melihat jenis-jenis surat yang tersedia beserta persyaratannya.
        </p>
      </div>

      <div ref={cards.ref} className="grid sm:grid-cols-2 gap-6">
        {kategoriList.map((kat, i) => (
          <button
            key={kat.id}
            onClick={() => navigate(`/layanan/${kat.id}`)}
            className={`card-hover text-left rounded-3xl overflow-hidden border border-green-100 shadow-sm bg-white group transition-all duration-700 ${cards.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Color strip */}
            <div className="h-2 w-full" style={{ background: gradients[kat.id] || gradients.keterangan }} />
            <div className="p-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm"
                style={{ background: gradients[kat.id] || gradients.keterangan }}
              >
                {kat.icon}
              </div>
              <h2 className="font-display font-black text-green-900 text-lg mb-2 group-hover:text-green-700 transition-colors">
                {kat.nama}
              </h2>
              <p className="text-green-600 text-sm leading-relaxed mb-4">{kat.deskripsi}</p>
              <span className="inline-flex items-center gap-1 text-green-600 font-display font-semibold text-sm group-hover:gap-2 transition-all">
                Lihat Layanan <span>→</span>
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
