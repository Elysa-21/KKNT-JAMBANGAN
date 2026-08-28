import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold },
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

/* =========================================================
   TUJUAN APLIKASI
========================================================= */

const tujuan = [
  {
    icon: "🤝",
    title: "Mempermudah Akses Informasi",
    desc: "Mempermudah masyarakat mendapatkan informasi layanan administrasi surat secara mudah dan cepat.",
  },
  {
    icon: "📋",
    title: "Persyaratan Jelas",
    desc: "Menyediakan informasi persyaratan surat secara jelas sehingga masyarakat dapat mempersiapkan diri.",
  },
  {
    icon: "🔄",
    title: "Transparansi Alur",
    desc: "Membantu masyarakat memahami alur pengajuan surat dari awal hingga selesai.",
  },
  {
    icon: "🌐",
    title: "Digitalisasi Layanan",
    desc: "Mendukung digitalisasi pelayanan administrasi desa menuju pelayanan yang modern dan efisien.",
  },
]

/* =========================================================
   DATA PENGEMBANG
   5 Teknik Informatika + 2 Administrasi Negara
========================================================= */

const team = [
  {
    name: "Dewi Berliana",
    prodi: "Teknik Informatika",
    group: "Teknik Informatika",
  },
  {
    name: "Dinda Dwi Febiani",
    prodi: "Teknik Informatika",
    group: "Teknik Informatika",
  },
  {
    name: "Dea Suci Ramadani",
    prodi: "Teknik Informatika",
    group: "Teknik Informatika",
  },
  {
    name: "Elysa Hayu Noorhaini",
    prodi: "Teknik Informatika",
    group: "Teknik Informatika",
  },
  {
    name: "Muhammad Amrullah Widyapratama",
    prodi: "Teknik Informatika",
    group: "Teknik Informatika",
  },
  {
    name: "Hellen Qurotul Nurassifa",
    prodi: "Administrasi Negara",
    group: "Administrasi Negara",
  },
  {
    name: "Brilliant Khoirul Hanafi",
    prodi: "Administrasi Negara",
    group: "Administrasi Negara",
  },
]

export default function About() {
  const header = useInView(0.1)
  const about = useInView(0.1)
  const goals = useInView(0.05)
  const devs = useInView(0.05)

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        ref={header.ref}
        className={`text-center mb-12 transition-all duration-700 ${
          header.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-display font-semibold tracking-widest uppercase mb-4">
          Tentang
        </span>

        <h1 className="font-display font-black text-green-900 text-4xl mb-3">
          Tentang Kami
        </h1>

        <p className="text-green-600 max-w-md mx-auto text-sm">
          Kenali lebih jauh E-SURAT dan tim di baliknya.
        </p>
      </div>

      {/* =====================================================
          ABOUT E-SURAT
      ===================================================== */}

      <div
        ref={about.ref}
        className={`bg-white rounded-3xl p-8 border border-green-100 shadow-sm mb-10 transition-all duration-700 ${
          about.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-start gap-6 flex-col sm:flex-row">
          {/* Icon */}

          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-md flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
            }}
          >
            📄
          </div>

          {/* Text */}

          <div>
            <h2 className="font-display font-black text-green-900 text-2xl mb-3">
              Tentang E-SURAT
            </h2>

            <p className="text-green-700 leading-relaxed text-sm mb-3">
              <strong>E-SURAT</strong> merupakan website informasi pelayanan
              surat Desa Jambangan yang dirancang untuk membantu masyarakat
              memperoleh informasi mengenai jenis layanan, persyaratan, dan
              prosedur pengajuan surat dengan lebih mudah dan efisien.
            </p>

            <p className="text-green-700 leading-relaxed text-sm">
              Website ini bukan sekadar portal informasi biasa — E-SURAT hadir
              sebagai wujud komitmen Desa Jambangan dalam memberikan pelayanan
              administrasi yang modern, transparan, dan ramah masyarakat. Dengan
              E-SURAT, masyarakat dapat mengakses informasi layanan kapan saja
              dan di mana saja tanpa harus datang langsung ke kantor desa hanya
              untuk mengetahui persyaratan.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          TUJUAN APLIKASI
      ===================================================== */}

      <div ref={goals.ref} className="mb-12">
        <h2
          className={`font-display font-black text-green-900 text-2xl mb-6 text-center transition-all duration-700 ${
            goals.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Tujuan Aplikasi
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {tujuan.map((item, i) => (
            <div
              key={item.title}
              className={`card-hover bg-white rounded-2xl p-5 border border-green-100 shadow-sm flex gap-4 transition-all duration-700 ${
                goals.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Icon */}

              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-2xl flex-shrink-0 border border-green-100">
                {item.icon}
              </div>

              {/* Text */}

              <div>
                <h3 className="font-display font-bold text-green-900 text-sm mb-1">
                  {item.title}
                </h3>

                <p className="text-green-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          PENGEMBANG
      ===================================================== */}

      <div ref={devs.ref}>
        {/* Judul */}

        <div
          className={`text-center mb-8 transition-all duration-700 ${
            devs.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-black text-green-900 text-2xl mb-2">
            Developer
          </h2>

          <p className="text-green-500 text-xs font-medium tracking-widest uppercase">
            KKNT Desa Jambangan 2026
          </p>
        </div>

        {/* ===================================================
            TEKNIK INFORMATIKA
        =================================================== */}

        <div
          className={`mb-8 transition-all duration-700 ${
            devs.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Prodi Title */}

          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center border border-green-200">
              💻
            </div>

            <div>
              <h3 className="font-display font-bold text-green-900 text-sm">
                Teknik Informatika
              </h3>

              <p className="text-green-500 text-xs">5 anggota</p>
            </div>
          </div>

          {/* 5 Anggota */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team
              .filter((member) => member.group === "Teknik Informatika")
              .map((member, i) => (
                <div
                  key={member.name}
                  className={`card-hover bg-white rounded-2xl px-5 py-4 border border-green-100 shadow-sm transition-all duration-700 ${
                    devs.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <p className="font-display font-bold text-green-900 text-sm leading-tight">
                    {member.name}
                  </p>

                  <p className="text-green-500 text-xs mt-1">{member.prodi}</p>
                </div>
              ))}
          </div>
        </div>

        {/* ===================================================
            ADMINISTRASI NEGARA
        =================================================== */}

        <div
          className={`transition-all duration-700 ${
            devs.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Prodi Title */}

          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center border border-green-200">
              🏛️
            </div>

            <div>
              <h3 className="font-display font-bold text-green-900 text-sm">
                Administrasi Negara
              </h3>

              <p className="text-green-500 text-xs">2 anggota</p>
            </div>
          </div>

          {/* 2 Anggota */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team
              .filter((member) => member.group === "Administrasi Negara")
              .map((member, i) => (
                <div
                  key={member.name}
                  className={`card-hover bg-white rounded-2xl px-5 py-4 border border-green-100 shadow-sm transition-all duration-700 ${
                    devs.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${(i + 5) * 80}ms`,
                  }}
                >
                  <p className="font-display font-bold text-green-900 text-sm leading-tight">
                    {member.name}
                  </p>

                  <p className="text-green-500 text-xs mt-1">{member.prodi}</p>
                </div>
              ))}
          </div>
        </div>

        {/* ===================================================
            FOOTER PENGEMBANG
        =================================================== */}

        <div
          className={`text-center mt-10 transition-all duration-700 ${
            devs.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-green-200" />

            <div className="w-2 h-2 rounded-full bg-green-400" />

            <div className="w-12 h-px bg-green-200" />
          </div>

          <p className="mt-4 text-green-900 text-xl font-large">
            KKNT Desa Jambangan 2026
          </p>
        </div>
      </div>
    </div>
  )
}
