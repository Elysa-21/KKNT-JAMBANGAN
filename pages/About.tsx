import { useEffect, useRef, useState } from "react";

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

const tujuan = [
  { icon: "🤝", title: "Mempermudah Akses Informasi", desc: "Mempermudah masyarakat mendapatkan informasi layanan administrasi surat secara mudah dan cepat." },
  { icon: "📋", title: "Persyaratan Jelas", desc: "Menyediakan informasi persyaratan surat secara jelas sehingga masyarakat dapat mempersiapkan diri." },
  { icon: "🔄", title: "Transparansi Alur", desc: "Membantu masyarakat memahami alur pengajuan surat dari awal hingga selesai." },
  { icon: "🌐", title: "Digitalisasi Layanan", desc: "Mendukung digitalisasi pelayanan administrasi desa menuju pelayanan yang modern dan efisien." },
];

const team = [
  { name: "[Nama Pengembang 1]", role: "Project Manager", avatar: "👨‍💼" },
  { name: "[Nama Pengembang 2]", role: "UI/UX Designer", avatar: "👩‍🎨" },
  { name: "[Nama Pengembang 3]", role: "Frontend Developer", avatar: "👨‍💻" },
  { name: "[Nama Pengembang 4]", role: "Content Writer", avatar: "👩‍💼" },
];

export default function About() {
  const header = useInView(0.1);
  const about = useInView(0.1);
  const goals = useInView(0.05);
  const devs = useInView(0.05);

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      {/* Header */}
      <div ref={header.ref} className={`text-center mb-12 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-display font-semibold tracking-widest uppercase mb-4">
          Tentang
        </span>
        <h1 className="font-display font-black text-green-900 text-4xl mb-3">Tentang Kami</h1>
        <p className="text-green-600 max-w-md mx-auto text-sm">Kenali lebih jauh E-SURAT dan tim di baliknya.</p>
      </div>

      {/* About E-SURAT */}
      <div
        ref={about.ref}
        className={`bg-white rounded-3xl p-8 border border-green-100 shadow-sm mb-10 transition-all duration-700 ${about.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-start gap-6 flex-col sm:flex-row">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-md flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
          >
            📄
          </div>
          <div>
            <h2 className="font-display font-black text-green-900 text-2xl mb-3">Tentang E-SURAT</h2>
            <p className="text-green-700 leading-relaxed text-sm mb-3">
              <strong>E-SURAT</strong> merupakan website informasi pelayanan surat Desa Jambangan yang dirancang untuk membantu masyarakat memperoleh informasi mengenai jenis layanan, persyaratan, dan prosedur pengajuan surat dengan lebih mudah dan efisien.
            </p>
            <p className="text-green-700 leading-relaxed text-sm">
              Website ini bukan sekadar portal informasi biasa — E-SURAT hadir sebagai wujud komitmen Desa Jambangan dalam memberikan pelayanan administrasi yang modern, transparan, dan ramah masyarakat. Dengan E-SURAT, masyarakat dapat mengakses informasi layanan kapan saja dan di mana saja tanpa harus datang langsung ke kantor desa hanya untuk mengetahui persyaratan.
            </p>
          </div>
        </div>
      </div>

      {/* Tujuan */}
      <div ref={goals.ref} className="mb-12">
        <h2 className={`font-display font-black text-green-900 text-2xl mb-6 text-center transition-all duration-700 ${goals.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Tujuan Aplikasi
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {tujuan.map((item, i) => (
            <div
              key={item.title}
              className={`card-hover bg-white rounded-2xl p-5 border border-green-100 shadow-sm flex gap-4 transition-all duration-700 ${goals.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-2xl flex-shrink-0 border border-green-100">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-green-900 text-sm mb-1">{item.title}</h3>
                <p className="text-green-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div ref={devs.ref}>
        <h2 className={`font-display font-black text-green-900 text-2xl mb-6 text-center transition-all duration-700 ${devs.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Pengembang
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`card-hover bg-white rounded-2xl p-5 border border-green-100 shadow-sm text-center transition-all duration-700 ${devs.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto mb-3 border-2 border-green-200">
                {member.avatar}
              </div>
              <p className="font-display font-bold text-green-900 text-xs leading-tight mb-1">{member.name}</p>
              <p className="text-green-500 text-xs">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
