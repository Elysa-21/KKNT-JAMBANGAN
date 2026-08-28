import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: "folder",
    title: "Pilih Jenis Surat",
    desc: "Pemohon memilih jenis surat yang dibutuhkan melalui halaman Layanan Surat.",
  },
  {
    icon: "clipboard",
    title: "Lihat Persyaratan",
    desc: "Pemohon membaca dan mempersiapkan seluruh persyaratan sesuai jenis surat yang dipilih.",
  },
  {
    icon: "edit",
    title: "Isi Formulir",
    desc: 'Pemohon menekan tombol "Ajukan Surat" dan mengisi Google Form yang telah tersedia.',
  },
  {
    icon: "mail",
    title: "Pengajuan Diterima",
    desc: "Data pengajuan masuk dan diterima oleh perangkat desa melalui formulir resmi.",
  },
  {
    icon: "search",
    title: "Verifikasi",
    desc: "Perangkat desa memeriksa kelengkapan dan kebenaran data serta persyaratan yang diberikan.",
  },
  {
    icon: "settings",
    title: "Pemrosesan Surat",
    desc: "Surat diproses dan disiapkan oleh perangkat desa sesuai prosedur yang berlaku.",
  },
  {
    icon: "check",
    title: "Surat Selesai",
    desc: "Pemohon mendapatkan informasi mengenai penyelesaian surat sesuai prosedur desa.",
  },
    {
    icon: "location",
    title: "Datang ke Balai Desa",
    desc: "Pemohon mengambil atau menyerahkan surat ke Balai Desa untuk mengajukan tanda tangan.",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* =========================================================
   SVG ICON
========================================================= */

function StepIcon({
  type,
}: {
  type: string;
}) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "folder":
      return (
        <svg {...common}>
          <path d="M3.5 7.5a2 2 0 0 1 2-2h4l1.7 2H18.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />
          <path d="M3.5 10h17" />
        </svg>
      );

    case "clipboard":
      return (
        <svg {...common}>
          <rect x="5" y="4.5" width="14" height="16" rx="2" />
          <path d="M9 4.5V3h6v1.5" />
          <path d="M8.5 9h7" />
          <path d="M8.5 12.5h7" />
          <path d="M8.5 16h4.5" />
        </svg>
      );

    case "edit":
      return (
        <svg {...common}>
          <path d="m14.5 5.5 4 4" />
          <path d="M4 20h4l10.8-10.8a2.2 2.2 0 0 0-3.1-3.1L4.9 16.9z" />
          <path d="m13 7 4 4" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );

    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.2" />
          <path d="m16 16 4.5 4.5" />
        </svg>
      );

    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.4v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L8 17l.1-.1A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.5-1H6.7v-2.4h.2a1.7 1.7 0 0 0 1.5-1A1.7 1.7 0 0 0 8.1 8.7L8 8.6l1.7-1.7.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.4v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.7 1.7-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" />
        </svg>
      );

    // Ikon ceklis untuk Langkah 7
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8 12 2.6 2.6L16.5 9" />
        </svg>
      );

    // Ikon lokasi untuk Langkah 8
    case "location":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

/* =========================================================
   MAIN
========================================================= */

export default function AlurSurat() {
  const header = useInView(0.1);
  const timeline = useInView(0.05);
  const note = useInView(0.1);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="relative px-6 py-12 max-w-3xl mx-auto">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-green-200/20 blur-3xl" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        ref={header.ref}
        className={`
          relative
          text-center
          mb-14
          transition-all
          duration-1000
          ease-out
          ${
            header.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
      >
        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-1.5
            rounded-full
            bg-green-50
            border
            border-green-100
            text-green-700
            text-xs
            font-display
            font-semibold
            tracking-[0.18em]
            uppercase
            mb-5
            shadow-sm
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>

          Prosedur
        </div>

        <h1
          className="
            font-display
            font-black
            text-green-900
            text-4xl
            sm:text-[42px]
            leading-tight
            mb-4
          "
        >
          Alur Pengajuan Surat
        </h1>

        <p
          className="
            text-green-600
            max-w-lg
            mx-auto
            text-sm
            leading-7
          "
        >
          Ikuti langkah-langkah berikut untuk mengajukan surat melalui layanan
          E-SURAT Desa Jambangan.
        </p>
      </div>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div ref={timeline.ref} className="relative">

        {/* Timeline base */}

        <div
          className="
            absolute
            left-7
            top-5
            bottom-5
            w-[2px]
            hidden
            sm:block
            bg-green-100
            rounded-full
            overflow-hidden
          "
        />

        {/* Animated progress */}

        <div
          className={`
            absolute
            left-7
            top-5
            w-[2px]
            hidden
            sm:block
            rounded-full
            bg-gradient-to-b
            from-green-400
            via-emerald-400
            to-green-500

            transition-all
            duration-[2200ms]
            ease-out

            ${
              timeline.visible
                ? "h-[calc(100%-40px)]"
                : "h-0"
            }
          `}
        />

        <div className="space-y-7">

          {steps.map((step, i) => {
            const isHovered = hoveredStep === i;
            const isLast = i === steps.length - 1;

            return (
              <div
                key={i}
                className={`
                  relative
                  flex
                  gap-5

                  transition-all
                  duration-700
                  ease-out

                  ${
                    timeline.visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }
                `}
                style={{
                  transitionDelay: `${i * 120}ms`,
                }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >

                {/* =================================================
                    ICON
                ================================================== */}

                <div className="relative flex-shrink-0 w-14">

                  {/* Pulse */}

                  <div
                    className={`
                      absolute
                      inset-0
                      rounded-[18px]
                      bg-green-400
                      blur-xl

                      transition-all
                      duration-500

                      ${
                        isHovered
                          ? "opacity-40 scale-125"
                          : "opacity-0 scale-75"
                      }
                    `}
                  />

                  {/* Orbit */}

                  <div
                    className={`
                      absolute
                      -inset-2
                      rounded-full
                      border
                      border-green-300/50

                      transition-all
                      duration-700

                      ${
                        isHovered
                          ? "opacity-100 scale-100 rotate-180"
                          : "opacity-0 scale-75"
                      }
                    `}
                  />

                  {/* Main icon */}

                  <div
                    className={`
                      relative
                      z-10
                      w-14
                      h-14
                      rounded-[18px]

                      flex
                      items-center
                      justify-center

                      text-white

                      bg-gradient-to-br
                      ${
                        isLast
                          ? "from-emerald-500 to-green-600"
                          : "from-green-500 via-emerald-500 to-green-600"
                      }

                      border
                      border-white/40

                      shadow-[0_8px_24px_rgba(34,197,94,0.20)]

                      transition-all
                      duration-500
                      ease-out

                      ${
                        isHovered
                          ? "-translate-y-2 scale-110 shadow-[0_18px_35px_rgba(34,197,94,0.30)]"
                          : ""
                      }

                      ${
                        isLast && isHovered
                          ? "rotate-3"
                          : ""
                      }
                    `}
                  >
                    <div
                      className={`
                        transition-transform
                        duration-500
                        ${
                          isHovered
                            ? "scale-110 rotate-6"
                            : ""
                        }
                      `}
                    >
                     <StepIcon type={step.icon} />
                    </div>

                    {/* Number */}

                    <div
                      className="
                        absolute
                        -right-2
                        -bottom-2

                        w-6
                        h-6

                        rounded-full

                        bg-white
                        border-[2px]
                        border-green-500

                        flex
                        items-center
                        justify-center

                        text-green-600
                        text-[9px]
                        font-display
                        font-black

                        shadow-md
                      "
                    >
                      {i + 1}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CARD
                ================================================== */}

                <div
                  className={`
                    relative
                    flex-1

                    bg-white
                    rounded-[20px]

                    p-5

                    border
                    ${
                      isHovered
                        ? "border-green-200"
                        : "border-green-100"
                    }

                    shadow-sm

                    overflow-hidden

                    transition-all
                    duration-500
                    ease-out

                    ${
                      isHovered
                        ? "-translate-y-1 translate-x-1 shadow-[0_16px_40px_rgba(22,163,74,0.11)]"
                        : ""
                    }
                  `}
                >

                  {/* Card shine */}

                  <div
                    className={`
                      absolute
                      top-0
                      left-0
                      h-full
                      w-1

                      bg-gradient-to-b
                      from-green-400
                      to-emerald-500

                      transition-all
                      duration-500

                      ${
                        isHovered
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />

                  {/* Background glow */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12

                      w-32
                      h-32

                      rounded-full
                      bg-green-100/50
                      blur-2xl

                      transition-all
                      duration-700

                      ${
                        isHovered
                          ? "scale-150 opacity-100"
                          : "scale-75 opacity-0"
                      }
                    `}
                  />

                  <div className="relative z-10">

                    {/* Step label */}

                    <div className="flex items-center gap-2 mb-2">

                      <span
                        className={`
                          text-[9px]
                          font-display
                          font-bold
                          uppercase
                          tracking-[0.18em]

                          transition-colors
                          duration-300

                          ${
                            isHovered
                              ? "text-green-600"
                              : "text-green-400"
                          }
                        `}
                      >
                        Langkah {i + 1}
                      </span>

                      {isLast && (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1

                            px-2
                            py-0.5

                            rounded-full

                            bg-green-50
                            border
                            border-green-100

                            text-green-600
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-wide
                          "
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Selesai
                        </span>
                      )}
                    </div>

                    {/* Title */}

                    <h3
                      className={`
                        font-display
                        font-bold
                        text-base
                        mb-1

                        transition-all
                        duration-300

                        ${
                          isHovered
                            ? "text-green-700 translate-x-1"
                            : "text-green-900"
                        }
                      `}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        text-green-600
                        text-sm
                        leading-relaxed
                      "
                    >
                      {step.desc}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          NOTE
      ===================================================== */}

      <div
        ref={note.ref}
        className={`
          relative
          mt-12
          rounded-[20px]
          p-5

          border
          border-yellow-200

          flex
          items-start
          gap-4

          overflow-hidden

          transition-all
          duration-1000

          ${
            note.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
        style={{
          background: "#fffbeb",
        }}
      >

        {/* Decorative circle */}

        <div
          className="
            absolute
            -right-10
            -top-10
            w-28
            h-28
            rounded-full
            bg-yellow-200/30
            blur-2xl
            pointer-events-none
          "
        />

        {/* Icon */}

        <div
          className="
            relative
            flex-shrink-0

            w-11
            h-11

            rounded-[14px]

            bg-yellow-100

            border
            border-yellow-200

            flex
            items-center
            justify-center

            text-yellow-600

            transition-all
            duration-300

            hover:scale-110
            hover:rotate-3
          "
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.3 3.5 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.5a2 2 0 0 0-3.4 0Z" />
            <path d="M12 9v4" />
            <path d="M12 16.5h.01" />
          </svg>
        </div>

        {/* Text */}

        <div className="relative z-10">

          <p
            className="
              font-display
              font-bold
              text-yellow-800
              text-sm
              mb-1
            "
          >
            Perhatian
          </p>

          <p
            className="
              text-yellow-700
              text-sm
              leading-relaxed
            "
          >
            Pastikan data yang diisi sesuai dengan dokumen resmi dan
            persyaratan yang berlaku. Ketidaklengkapan atau ketidaksesuaian
            data dapat memperlambat proses pengajuan surat.
          </p>

        </div>
      </div>
    </div>
  );
}