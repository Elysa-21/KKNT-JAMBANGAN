import { useEffect, useRef, useState } from "react";

const steps = [
  { icon: "🗂️", title: "Pilih Jenis Surat", desc: "Pemohon memilih jenis surat yang dibutuhkan melalui halaman Layanan Surat." },
  { icon: "📋", title: "Lihat Persyaratan", desc: "Pemohon membaca dan mempersiapkan seluruh persyaratan sesuai jenis surat yang dipilih." },
  { icon: "📝", title: "Isi Formulir", desc: 'Pemohon menekan tombol "Ajukan Surat" dan mengisi Google Form yang telah tersedia.' },
  { icon: "📬", title: "Pengajuan Diterima", desc: "Data pengajuan masuk dan diterima oleh perangkat desa melalui formulir resmi." },
  { icon: "🔍", title: "Verifikasi", desc: "Perangkat desa memeriksa kelengkapan dan kebenaran data serta persyaratan yang diberikan." },
  { icon: "⚙️", title: "Pemrosesan Surat", desc: "Surat diproses dan disiapkan oleh perangkat desa sesuai prosedur yang berlaku." },
  { icon: "✅", title: "Surat Selesai", desc: "Pemohon mendapatkan informasi mengenai penyelesaian surat sesuai prosedur desa." },
];

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

export default function AlurSurat() {
  const header = useInView(0.1);
  const timeline = useInView(0.05);
  const note = useInView(0.1);

  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      {/* Header */}
      <div ref={header.ref} className={`text-center mb-12 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-display font-semibold tracking-widest uppercase mb-4">
          Prosedur
        </span>
        <h1 className="font-display font-black text-green-900 text-4xl mb-3">Alur Pengajuan Surat</h1>
        <p className="text-green-600 max-w-md mx-auto text-sm leading-relaxed">
          Ikuti langkah-langkah berikut untuk mengajukan surat melalui layanan E-SURAT Desa Jambangan.
        </p>
      </div>

      {/* Timeline */}
      <div ref={timeline.ref} className="relative">
        {/* Vertical line */}
        <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-green-400 via-emerald-300 to-green-200 hidden sm:block" />

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex gap-5 transition-all duration-700 ${timeline.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Step number + icon */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center shadow-md z-10 relative"
                  style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
                >
                  <span className="text-xl">{step.icon}</span>
                  <span className="text-white text-[10px] font-display font-bold leading-none mt-0.5">{i + 1}</span>
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 bg-white rounded-2xl p-4 border border-green-100 shadow-sm card-hover mb-1">
                <h3 className="font-display font-bold text-green-900 text-base mb-1">{step.title}</h3>
                <p className="text-green-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div
        ref={note.ref}
        className={`mt-10 rounded-2xl p-5 border border-yellow-200 flex items-start gap-3 transition-all duration-700 ${note.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ background: "#fffbeb" }}
      >
        <span className="text-2xl flex-shrink-0">⚠️</span>
        <div>
          <p className="font-display font-bold text-yellow-800 text-sm mb-1">Perhatian</p>
          <p className="text-yellow-700 text-sm leading-relaxed">
            Pastikan data yang diisi sesuai dengan dokumen resmi dan persyaratan yang berlaku. Ketidaklengkapan atau ketidaksesuaian data dapat memperlambat proses pengajuan surat.
          </p>
        </div>
      </div>
    </div>
  );
}
