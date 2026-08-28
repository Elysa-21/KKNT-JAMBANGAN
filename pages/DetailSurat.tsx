import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSuratById, getKategoriById } from "../data/suratData";

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

export default function DetailSurat() {
  const { kategoriId, suratId } = useParams<{ kategoriId: string; suratId: string }>();
  const surat = getSuratById(suratId || "");
  const kategori = getKategoriById(kategoriId || "");

  const header = useInView(0.1);
  const content = useInView(0.05);
  const cta = useInView(0.1);

  if (!surat) {
    return (
      <div className="flex items-center justify-center min-h-64 text-green-600">
        Surat tidak ditemukan.{" "}
        <Link to="/layanan" className="underline ml-1">Kembali</Link>
      </div>
    );
  }

  const isPlaceholder = surat.gformUrl.startsWith("#");

  return (
    <div className="px-6 py-12 max-w-2xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-green-500 flex-wrap">
        <Link to="/layanan" className="hover:text-green-700 transition-colors">Layanan</Link>
        <span>›</span>
        <Link to={`/layanan/${kategoriId}`} className="hover:text-green-700 transition-colors">{kategori?.nama}</Link>
        <span>›</span>
        <span className="text-green-800 font-medium">{surat.nama}</span>
      </div>

      {/* Header */}
      <div ref={header.ref} className={`mb-8 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
          >
            {surat.icon}
          </div>
          <div>
            <span className="text-xs text-green-500 font-display font-semibold tracking-widest uppercase">{kategori?.nama}</span>
            <h1 className="font-display font-black text-green-900 text-2xl leading-tight mt-0.5">{surat.nama}</h1>
          </div>
        </div>
        <p className="text-green-700 leading-relaxed">{surat.deskripsi}</p>
      </div>

      {/* Detail sections */}
      <div ref={content.ref} className={`space-y-6 transition-all duration-700 ${content.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Kegunaan */}
        <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm">
          <h2 className="font-display font-bold text-green-900 text-base mb-3 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center text-sm">💡</span>
            Kegunaan Surat
          </h2>
          <p className="text-green-700 text-sm leading-relaxed">{surat.kegunaan}</p>
        </div>

        {/* Persyaratan */}
        <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm">
          <h2 className="font-display font-bold text-green-900 text-base mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center text-sm">📋</span>
            Persyaratan
          </h2>
          <ul className="space-y-3">
            {surat.persyaratan.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center mt-0.5"
                  style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-green-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div ref={cta.ref} className={`mt-10 transition-all duration-700 ${cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5 mb-5">
          <p className="text-green-700 text-sm text-center leading-relaxed">
            <span className="font-bold">Pastikan seluruh persyaratan telah disiapkan</span> sebelum mengajukan surat.<br />
            Ketidaklengkapan dokumen dapat memperlambat proses pengajuan.
          </p>
        </div>

        {isPlaceholder ? (
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-gray-100 border border-gray-200 text-gray-400 text-sm">
              <span className="text-2xl">🔗</span>
              <span className="font-display font-bold">AJUKAN SURAT</span>
              <span className="text-xs">[ URL Google Form belum dikonfigurasi ]</span>
              <code className="text-xs bg-gray-200 px-2 py-0.5 rounded font-mono">{surat.gformUrl.replace("#", "")}</code>
            </div>
          </div>
        ) : (
          <a
            href={surat.gformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-4 rounded-2xl font-display font-black text-white text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 animate-pulse-glow"
            style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
          >
            📝 AJUKAN SURAT
          </a>
        )}
        <p className="text-center text-xs text-green-500 mt-3">Anda akan diarahkan ke Google Form resmi Desa Jambangan</p>
      </div>
    </div>
  );
}
