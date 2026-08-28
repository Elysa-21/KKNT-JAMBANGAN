import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold }
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

// ============================================================
// ICON COMPONENTS
// Tidak membutuhkan library tambahan
// ============================================================

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  )
}

function ChecklistIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h1" />
      <path d="m8 12 1.2 1.2L11.5 11" />
      <path d="M13 8h3" />
      <path d="M13 12h3" />
      <path d="M8 17h1" />
      <path d="M13 17h3" />
    </svg>
  )
}

function RouteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="5" r="2" />
      <circle cx="18" cy="19" r="2" />
      <path d="M6 7v3c0 2.2 1.8 4 4 4h4c2.2 0 4 1.8 4 4v1" />
      <path d="M14 14l2-2 2 2" />
    </svg>
  )
}

function DocumentCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="m8 14 2 2 5-5" />
    </svg>
  )
}

function DocumentPlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 13v5" />
      <path d="M9.5 15.5h5" />
    </svg>
  )
}

// ============================================================
// DATA FITUR PELAYANAN
// ============================================================

const features = [
  {
    icon: SearchIcon,
    title: "Informasi Mudah Ditemukan",
    desc: "Semua jenis layanan surat tersedia dalam satu portal yang terorganisir dan mudah diakses.",
  },
  {
    icon: ChecklistIcon,
    title: "Persyaratan Jelas",
    desc: "Setiap jenis surat dilengkapi daftar persyaratan yang jelas dan lengkap.",
  },
  {
    icon: RouteIcon,
    title: "Alur Pengajuan Transparan",
    desc: "Proses pengajuan surat dari awal hingga selesai diinformasikan secara terbuka.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Pengajuan via Formulir Resmi",
    desc: "Pengajuan dilakukan melalui Google Form resmi yang aman dan terverifikasi.",
  },
]

// ============================================================
// STATISTIK
// ============================================================

const stats = [
  {
    value: "Mudah",
    label: "Akses Layanan",
  },
  {
    value: "Jelas",
    label: "Informasi Persyaratan",
  },
]

// ============================================================
// PROPS
// ============================================================

interface HomeProps {
  splashComplete: boolean
}

// ============================================================
// HOME
// ============================================================

export default function Home({ splashComplete }: HomeProps) {
  const navigate = useNavigate()
  const videoRef = useRef<HTMLVideoElement>(null)

  const hero = useInView(0.1)
  const profil = useInView(0.1)
  const fitur = useInView(0.1)

  // ============================================================
  // PLAY VIDEO
  // ============================================================

  useEffect(() => {
    if (!splashComplete) return

    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.currentTime = 0

    void video.play().catch(() => {})
  }, [splashComplete])

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        ref={hero.ref}
        className="relative overflow-hidden px-6 py-24 md:py-32"
        style={{
          background:
            "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 60%, #a7f3d0 100%)",
        }}
      >
        {/* Decorative background */}

        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, #4ade80, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, #22c55e, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              hero.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}

            <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 text-green-700 text-xs font-display font-semibold tracking-widest uppercase mb-6 border border-green-200">
              Portal Administrasi Desa Jambangan
            </span>

            {/* Title */}

            <h1
              className="font-display font-black text-green-900 mb-4 leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Selamat Datang di
              <br />

              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #16a34a, #22c55e)",
                }}
              >
                E-SURAT
              </span>
            </h1>

            {/* Subtitle */}

            <p className="text-green-700 font-display font-semibold text-lg mb-3 tracking-wide">
              Layanan Surat Desa Jambangan
            </p>

            {/* Description */}

            <p className="text-green-700 mb-10 leading-relaxed max-w-xl mx-auto text-base">
              Platform informasi pelayanan surat Desa Jambangan yang membantu
              masyarakat mengetahui jenis layanan, persyaratan, dan alur
              pengajuan surat dengan lebih mudah.
            </p>

            {/* Button */}

            <button
              type="button"
              onClick={() => navigate("/layanan")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-display font-bold text-white text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #22c55e, #16a34a)",
              }}
            >
              <DocumentPlusIcon />
              <span>Ajukan Surat</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROFIL DESA
      ========================================================= */}

      <section
        ref={profil.ref}
        className="px-6 py-16 max-w-5xl mx-auto"
      >
        <div
          className={`transition-all duration-700 delay-100 ${
            profil.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Heading */}

          <div className="text-center mb-10">
            <h2 className="font-display font-black text-green-900 text-3xl mb-2">
              Profil Desa Jambangan
            </h2>

            <p className="text-green-600 max-w-md mx-auto text-sm">
              Mengenal lebih dekat Desa Jambangan dan pelayanan yang kami
              berikan.
            </p>
          </div>

          {/* Content */}

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Video */}

            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-green-900 aspect-video border border-green-200">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/cinematic-desa.mp4"
                controls
                muted
                loop
                playsInline
                onEnded={(event) => {
                  event.currentTarget.currentTime = 0
                  void event.currentTarget.play().catch(() => {})
                }}
              />
            </div>

            {/* Description */}

            <div>
              <h3 className="font-display font-black text-green-900 text-xl mb-3">
                Tentang Desa Jambangan
              </h3>

              <p className="text-green-700 leading-relaxed text-sm mb-4">
                Desa Jambangan merupakan salah satu desa yang berkomitmen
                memberikan pelayanan administrasi terbaik bagi seluruh warganya.
                Dengan semangat digitalisasi layanan publik, kami terus berupaya
                mempermudah akses masyarakat terhadap berbagai layanan
                administrasi desa.
              </p>

              <p className="text-green-700 leading-relaxed text-sm">
                E-SURAT hadir sebagai wujud komitmen Desa Jambangan dalam
                memberikan informasi pelayanan surat yang mudah dipahami,
                transparan, dan dapat diakses kapan saja dan di mana saja.
              </p>

              {/* Statistics */}

              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-green-50 border border-green-100 p-3 text-center"
                  >
                    <p className="font-display font-black text-green-700 text-2xl">
                      {stat.value}
                    </p>

                    <p className="text-green-600 text-xs font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PELAYANAN ADMINISTRASI
      ========================================================= */}

      <section
        ref={fitur.ref}
        className="px-6 py-14"
        style={{
          background:
            "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">

          {/* Heading */}

          <div
            className={`text-center mb-10 transition-all duration-700 ${
              fitur.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display font-black text-green-900 text-3xl mb-2">
              Pelayanan Administrasi Desa
            </h2>

            <p className="text-green-600 max-w-md mx-auto text-sm">
              Kami berkomitmen memberikan pelayanan yang mudah, jelas, dan
              transparan.
            </p>
          </div>

          {/* Feature Cards */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={`group bg-white rounded-2xl p-5 border border-green-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                    fitur.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >

                  {/* Icon */}

                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 border border-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:scale-105">
                    <Icon />
                  </div>

                  {/* Title */}

                  <h3 className="font-display font-bold text-green-900 text-sm mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}

                  <p className="text-green-600 text-xs leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}