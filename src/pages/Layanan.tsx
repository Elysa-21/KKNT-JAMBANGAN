import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSuratByKategori, kategoriList } from "../data/suratData";

/* =========================================================
   INTERSECTION OBSERVER
========================================================= */

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* =========================================================
   GRADIENT KATEGORI
========================================================= */

const gradients: Record<string, string> = {
  keterangan: "linear-gradient(135deg, #34d399, #22c55e)",
  permohonan: "linear-gradient(135deg, #2dd4bf, #34d399)",
  pengantar: "linear-gradient(135deg, #4ade80, #2dd4bf)",
  pernyataan: "linear-gradient(135deg, #a3e635, #4ade80)",
};

/* =========================================================
   ARROW ICON
========================================================= */

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* =========================================================
   CHECK ICON
========================================================= */

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/* =========================================================
   SERVICE ICONS
========================================================= */

function ServiceIcon({ type }: { type: string }) {
  const common = {
    width: 31,
    height: 31,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  /* =======================================================
     KETERANGAN
  ======================================================= */

  if (type === "keterangan") {
    return (
      <svg {...common}>
        {/* Document */}
        <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />

        {/* Fold */}
        <path d="M14 3.5V8h4" />

        {/* Text */}
        <path d="M9 11.5h5" />
        <path d="M9 14.5h5" />

        {/* Check circle */}
        <circle
          cx="16.7"
          cy="17.1"
          r="3"
          className="fill-green-500 stroke-white"
        />

        {/* Check */}
        <path
          d="m15.3 17.1.9.9 1.8-2"
          className="stroke-white"
        />
      </svg>
    );
  }

  /* =======================================================
     PERMOHONAN
  ======================================================= */

  if (type === "permohonan") {
    return (
      <svg {...common}>
        {/* Paper */}
        <path d="M5.5 4h8l4 4v11.5H5.5z" />

        {/* Fold */}
        <path d="M13.5 4v4h4" />

        {/* Text */}
        <path d="M8.5 11.5h6" />
        <path d="M8.5 14.5h4" />

        {/* Pen */}
        <path d="m13.5 17.5 4.3-4.3 1.6 1.6-4.3 4.3-2.2.6z" />

        {/* Pen line */}
        <path d="m17.8 13.2 1.1-1.1" />
      </svg>
    );
  }

  /* =======================================================
     PENGANTAR
  ======================================================= */

  if (type === "pengantar") {
    return (
      <svg {...common}>
        {/* Envelope */}
        <rect
          x="3"
          y="6"
          width="18"
          height="12.5"
          rx="2"
        />

        {/* Envelope flap */}
        <path d="m4 7 8 6 8-6" />

        {/* Arrow */}
        <path d="M12 2.5v4" />
        <path d="m9.8 4.6 2.2 2.2 2.2-2.2" />
      </svg>
    );
  }

  /* =======================================================
     PERNYATAAN
  ======================================================= */

  if (type === "pernyataan") {
    return (
      <svg {...common}>
        {/* Clipboard */}
        <rect
          x="5"
          y="4.5"
          width="14"
          height="17"
          rx="2"
        />

        {/* Clip */}
        <path d="M9 4.5V3.5A1.5 1.5 0 0 1 10.5 2h3A1.5 1.5 0 0 1 15 3.5v1" />

        {/* First check */}
        <path d="m8 10 1.2 1.2L11 9.3" />
        <path d="M13 10h3" />

        {/* Second check */}
        <path d="m8 14.5 1.2 1.2L11 13.8" />
        <path d="M13 14.5h3" />

        {/* Third check */}
        <path d="m8 19 1.2 1.2L11 18.3" />
      </svg>
    );
  }

  /* =======================================================
     DEFAULT
  ======================================================= */

  return (
    <svg {...common}>
      <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 12h6" />
      <path d="M9 15h6" />
    </svg>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Layanan() {
  const navigate = useNavigate();
  const jumlahSuratKeterangan = getSuratByKategori("keterangan").length;

  const header = useInView(0.1);
  const cards = useInView(0.05);

  return (
    <div className="relative px-6 py-12 max-w-5xl mx-auto overflow-hidden">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-20
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[250px]
          rounded-full
          bg-green-100/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          top-[420px]
          -left-32
          w-64
          h-64
          rounded-full
          bg-emerald-100/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          -right-32
          w-72
          h-72
          rounded-full
          bg-green-100/20
          blur-3xl
        "
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        ref={header.ref}
        className={`
          relative
          text-center
          mb-12

          transition-all
          duration-700
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

            bg-green-100
            border
            border-green-200

            text-green-700

            text-xs
            font-display
            font-semibold

            tracking-widest
            uppercase

            mb-4
          "
        >
          <span className="relative flex h-2 w-2">

            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-green-400
                opacity-60
                animate-ping
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-green-500
              "
            />

          </span>

          Layanan Desa Jambangan
        </div>

        {/* Title */}

        <h1
          className="
            font-display
            font-black
            text-green-900
            text-4xl
            sm:text-[42px]
            mb-3
            tracking-tight
          "
        >
          Layanan Surat
        </h1>

        {/* Decorative line */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            mb-4
          "
        >
          <div
            className="
              w-10
              h-[2px]
              rounded-full
              bg-green-200
            "
          />

          <div
            className="
              w-2
              h-2
              rounded-full
              bg-green-400
            "
          />

          <div
            className="
              w-10
              h-[2px]
              rounded-full
              bg-green-200
            "
          />
        </div>

        {/* Description */}

        <p
          className="
            text-green-600
            max-w-lg
            mx-auto
            text-sm
            leading-relaxed
          "
        >
          Informasi dan pengajuan Surat Keterangan tersedia dalam satu layanan
          yang jelas, praktis, dan mudah diakses.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-green-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-3.5 py-2 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
              {jumlahSuratKeterangan}
            </span>
            jenis surat tersedia
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-3.5 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Persyaratan lengkap
          </span>
        </div>

      </div>

      {/* =====================================================
          CATEGORY CARDS
      ===================================================== */}

      <div
        ref={cards.ref}
        className="
          relative
          mx-auto
          max-w-4xl
        "
      >

        {kategoriList.map((kat, i) => {

          const gradient =
            gradients[kat.id] || gradients.keterangan;

          return (
            <button
              key={kat.id}
              type="button"
              onClick={() => navigate(`/layanan/${kat.id}`)}
              className={`
                group
                relative
                text-left

                rounded-[30px]
                overflow-hidden

                bg-white

                border
                border-green-100

                shadow-[0_8px_30px_rgba(22,101,52,0.06)]

                cursor-pointer

                transition-all
                duration-700
                ease-out

                hover:-translate-y-1
                hover:border-green-200
                hover:shadow-[0_20px_45px_rgba(22,101,52,0.12)]

                ${
                  cards.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >

              {/* =================================================
                  TOP COLOR STRIP
              ================================================== */}

              <div
                className="
                  relative
                  h-[5px]
                  w-full
                  overflow-hidden
                "
                style={{
                  background: gradient,
                }}
              >

                <div
                  className="
                    absolute
                    inset-y-0
                    -left-full
                    w-1/2

                    bg-white/30

                    skew-x-[-25deg]

                    transition-all
                    duration-700

                    group-hover:left-[120%]
                  "
                />

              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="relative p-6 sm:flex sm:items-center sm:gap-8 sm:p-8">

                {/* Decorative background */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10

                    w-32
                    h-32

                    rounded-full

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-500

                    blur-2xl
                  "
                  style={{
                    background: gradient,
                  }}
                />

                {/* Number */}

                <div
                  className="
                    absolute
                    top-5
                    right-5

                    text-[10px]
                    font-display
                    font-bold

                    text-green-200

                    transition-all
                    duration-300

                    group-hover:text-green-300
                    group-hover:scale-110
                  "
                >
                  0{i + 1}
                </div>

                {/* =================================================
                    INTERACTIVE SERVICE ICON
                ================================================== */}

                <div className="relative mb-5 w-fit sm:mb-0 sm:flex-none">

                  {/* Outer glow */}

                  <div
                    className="
                      absolute
                      -inset-3

                      rounded-[26px]

                      opacity-0
                      blur-xl

                      transition-all
                      duration-500

                      group-hover:opacity-30
                      group-hover:scale-110
                    "
                    style={{
                      background: gradient,
                    }}
                  />

                  {/* Rotating dashed ring */}

                  <div
                    className="
                      absolute
                      -inset-1

                      rounded-[23px]

                      border
                      border-dashed
                      border-transparent

                      transition-all
                      duration-700

                      group-hover:border-green-300/70
                      group-hover:rotate-180
                    "
                  />

                  {/* Main icon */}

                  <div
                    className="
                      relative

                      w-16
                      h-16

                      rounded-[20px]

                      flex
                      items-center
                      justify-center

                      text-white

                      shadow-[0_8px_20px_rgba(22,163,74,0.15)]

                      transition-all
                      duration-500
                      ease-out

                      group-hover:scale-110
                      group-hover:-translate-y-1

                      group-hover:shadow-[0_14px_28px_rgba(22,163,74,0.25)]
                    "
                    style={{
                      background: gradient,
                    }}
                  >

                    {/* Inner border */}

                    <div
                      className="
                        absolute
                        inset-[2px]

                        rounded-[18px]

                        border
                        border-white/20

                        pointer-events-none
                      "
                    />

                    {/* Soft shine */}

                    <div
                      className="
                        absolute
                        top-0
                        left-1/2
                        -translate-x-1/2

                        w-8
                        h-3

                        rounded-full

                        bg-white/20
                        blur-md

                        opacity-50
                      "
                    />

                    {/* SVG */}

                    <div
                      className="
                        relative
                        z-10

                        transition-all
                        duration-500

                        group-hover:scale-110
                      "
                    >
                      <ServiceIcon type={kat.id} />
                    </div>

                    {/* Floating dot */}

                    <span
                      className="
                        absolute
                        -right-1
                        -top-1

                        w-3
                        h-3

                        rounded-full

                        bg-white

                        shadow-sm

                        opacity-0
                        scale-0

                        transition-all
                        duration-300

                        group-hover:opacity-100
                        group-hover:scale-100
                      "
                    />

                  </div>

                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <div className="relative flex-1">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Layanan tersedia
                  </div>

                <h2
                  className="
                    relative

                    font-display
                    font-black

                    text-green-900
                    text-xl
                    sm:text-2xl

                    mb-2

                    transition-all
                    duration-300

                    group-hover:text-green-700
                  "
                >
                  {kat.nama}
                </h2>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    relative

                    text-green-600
                    text-sm
                    leading-relaxed

                    mb-5

                    transition-colors
                    duration-300
                  "
                >
                  {kat.deskripsi}
                </p>

                {/* =================================================
                    CTA
                ================================================== */}

                <div
                  className="
                    relative

                    inline-flex
                    items-center
                    gap-2

                    text-green-600

                    font-display
                    font-semibold
                    text-sm

                    transition-all
                    duration-300

                    group-hover:text-green-700
                    group-hover:gap-3
                  "
                >

                  <span>
                    Lihat Layanan
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      justify-center

                      w-7
                      h-7

                      rounded-full

                      bg-green-50

                      transition-all
                      duration-300

                      group-hover:bg-green-500
                      group-hover:text-white
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowIcon />
                  </span>

                </div>

                </div>

              </div>

              {/* =================================================
                  BOTTOM DECORATIVE LINE
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-6
                  right-6

                  h-[2px]

                  rounded-full

                  scale-x-0
                  origin-left

                  transition-transform
                  duration-500

                  group-hover:scale-x-100
                "
                style={{
                  background: gradient,
                }}
              />

            </button>
          );
        })}

      </div>

      {/* =====================================================
          BOTTOM INFO
      ===================================================== */}

      <div
        className={`
          relative
          mt-10
          text-center

          transition-all
          duration-700

          ${
            cards.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
        style={{
          transitionDelay: "500ms",
        }}
      >

        <div
          className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            bg-green-50
            border
            border-green-100

            transition-all
            duration-300

            hover:bg-green-100
            hover:border-green-200
            hover:-translate-y-0.5
          "
        >

          {/* Check */}

          <div
            className="
              w-5
              h-5

              rounded-full

              bg-green-500
              text-white

              flex
              items-center
              justify-center

              shadow-sm
            "
          >
            <CheckIcon />
          </div>

          <span
            className="
              text-xs
              font-medium
              text-green-600
            "
          >
            Pilih layanan sesuai kebutuhan Anda
          </span>

        </div>

      </div>

    </div>
  );
}
