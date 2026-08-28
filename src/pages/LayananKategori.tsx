import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  getKategoriById,
  getSuratByKategori,
} from "../data/suratData";

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

  return {
    ref,
    visible,
  };
}

/* =========================================================
   CATEGORY GRADIENT
========================================================= */

const gradients: Record<string, string> = {
  keterangan: "linear-gradient(135deg, #34d399, #16a34a)",
  permohonan: "linear-gradient(135deg, #2dd4bf, #10b981)",
  pengantar: "linear-gradient(135deg, #4ade80, #14b8a6)",
  pernyataan: "linear-gradient(135deg, #a3e635, #22c55e)",
};

/* =========================================================
   CATEGORY ICON
========================================================= */

function CategoryIcon({ type }: { type: string }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "keterangan":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
          <path d="M14 3.5V8h4" />

          <path d="M9 12h6" />
          <path d="M9 15h4" />

          <circle
            cx="16.5"
            cy="17"
            r="3"
            className="fill-white/20"
          />

          <path d="m15.1 17 .9.9 1.8-2" />
        </svg>
      );

    case "permohonan":
      return (
        <svg {...common}>
          <path d="M5.5 4h8l4 4v11.5H5.5z" />
          <path d="M13.5 4v4h4" />

          <path d="M8.5 12h6" />
          <path d="M8.5 15h4" />

          <path d="m14.5 18.5 4-4" />
          <path d="m17.2 13.8 1.5 1.5" />
        </svg>
      );

    case "pengantar":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
          />

          <path d="m4 7 8 6 8-6" />

          <path d="M12 2.5v5" />
          <path d="m9.8 5.2 2.2 2.3 2.2-2.3" />
        </svg>
      );

    case "pernyataan":
      return (
        <svg {...common}>
          <rect
            x="5"
            y="4.5"
            width="14"
            height="17"
            rx="2"
          />

          <path d="M9 4.5V3.8A1.8 1.8 0 0 1 10.8 2h2.4A1.8 1.8 0 0 1 15 3.8v.7" />

          <path d="m8 10 1.2 1.2 2-2" />
          <path d="M13 10h3" />

          <path d="m8 14.5 1.2 1.2 2-2" />
          <path d="M13 14.5h3" />

          <path d="m8 19 1.2 1.2 2-2" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
          <path d="M14 3.5V8h4" />
          <path d="M9 12h6" />
          <path d="M9 15h4" />
        </svg>
      );
  }
}

/* =========================================================
   SERVICE ICON
========================================================= */

function ServiceIcon({ type }: { type: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "home-document":
      return (
        <svg {...common}>
          <path d="M4 10.5 12 4l8 6.5" />
          <path d="M6 9.5V20h12V9.5" />

          <path d="M9 20v-5h3v5" />

          <path d="M14 11h2.5" />
          <path d="M14 13.5h2.5" />
        </svg>
      );

    case "store-document":
      return (
        <svg {...common}>
          <path d="M4 9h16l-1.5-5h-13z" />

          <path d="M5 9v10.5h14V9" />

          <path d="M8 19.5v-5h4v5" />

          <path d="M14 12h2.5" />
          <path d="M14 14.5h2.5" />
        </svg>
      );

    case "file-certificate":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
          <path d="M14 3.5V8h4" />

          <circle cx="12" cy="14" r="3" />
          <path d="m10.5 16.5-.5 3 2-1 2 1-.5-3" />

          <path d="m10.5 14 1 1 2-2" />
        </svg>
      );

    case "file-baby":
      return (
        <svg {...common}>
          <path d="M6 4h8l4 4v12H6z" />
          <path d="M14 4v4h4" />

          <circle cx="12" cy="13" r="3" />
          <path d="M10.5 16c.5 1 3.5 1 4 0" />

          <circle
            cx="11"
            cy="12.5"
            r=".35"
            fill="currentColor"
          />

          <circle
            cx="13"
            cy="12.5"
            r=".35"
            fill="currentColor"
          />
        </svg>
      );

    case "file-request":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
          <path d="M14 3.5V8h4" />

          <path d="M9 12h6" />
          <path d="M9 15h3" />

          <path d="M15.5 16.5v3" />
          <path d="M14 18h3" />
        </svg>
      );

    case "calendar-event":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="5"
            width="16"
            height="15"
            rx="2"
          />

          <path d="M8 3v4" />
          <path d="M16 3v4" />

          <path d="M4 9h16" />

          <circle
            cx="12"
            cy="14"
            r="2.5"
          />

          <path d="M12 12.5v1.5l1 1" />
        </svg>
      );

    case "heart-document":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
          <path d="M14 3.5V8h4" />

          <path
            d="M12 17s-3-1.8-3-4a1.8 1.8 0 0 1 3-1.2 1.8 1.8 0 0 1 3 1.2c0 2.2-3 4-3 4Z"
            className="fill-current"
          />
        </svg>
      );

    case "shield-document":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V12" />
          <path d="M14 3.5V8h4" />

          <path d="M6 12v8.5h7" />

          <path d="M16 12.5 20 14v2.5c0 2.4-1.6 4.3-4 5-2.4-.7-4-2.6-4-5V14z" />

          <path d="m14.5 16.5 1 1 2-2" />
        </svg>
      );

    case "file-user":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
          <path d="M14 3.5V8h4" />

          <circle cx="12" cy="13" r="2" />
          <path d="M8.8 18c.7-2.2 5.7-2.2 6.4 0" />
        </svg>
      );

    case "users-document":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
          <path d="M14 3.5V8h4" />

          <circle cx="10" cy="13" r="1.8" />
          <circle cx="15" cy="13.5" r="1.5" />

          <path d="M7.8 18c.5-2 4-2.3 4.8-.3" />
          <path d="M14 16.5c1.5-.4 2.8.3 3.2 1.5" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20z" />
          <path d="M14 3.5V8h4" />
          <path d="M9 12h6" />
          <path d="M9 15h4" />
        </svg>
      );
  }
}

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
   BACK ICON
========================================================= */

function BackIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function LayananKategori() {
  const { kategoriId } = useParams<{
    kategoriId: string;
  }>();

  const navigate = useNavigate();

  const kategori = getKategoriById(
    kategoriId || ""
  );

  const suratItems = getSuratByKategori(
    kategoriId || ""
  );

  const header = useInView(0.1);
  const cards = useInView(0.05);

  /* =======================================================
     KATEGORI TIDAK DITEMUKAN
  ======================================================= */

  if (!kategori) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">

          <div
            className="
              w-16
              h-16
              mx-auto
              mb-4

              rounded-2xl

              bg-green-50
              border
              border-green-100

              flex
              items-center
              justify-center

              text-green-500
            "
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </div>

          <h2 className="font-display font-black text-green-900 text-xl">
            Kategori tidak ditemukan
          </h2>

          <Link
            to="/layanan"
            className="
              inline-flex
              items-center
              gap-1

              mt-4

              text-sm
              font-semibold
              text-green-600

              hover:text-green-800

              transition-colors
            "
          >
            <BackIcon />
            Kembali ke Layanan
          </Link>

        </div>
      </div>
    );
  }

  const gradient =
    gradients[kategori.id] ||
    gradients.keterangan;

  return (
    <div className="relative min-h-full overflow-hidden">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-32
          left-1/2
          -translate-x-1/2

          w-[600px]
          h-[300px]

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
          -left-40

          w-72
          h-72

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
          -right-40

          w-80
          h-80

          rounded-full

          bg-green-100/20

          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative px-6 py-10 max-w-5xl mx-auto">

        {/* ===================================================
            BREADCRUMB
        =================================================== */}

        <div
          className="
            mb-8

            flex
            items-center
            gap-2

            text-xs
            text-green-500
          "
        >

          <Link
            to="/layanan"
            className="
              inline-flex
              items-center
              gap-1.5

              px-3
              py-1.5

              rounded-full

              bg-white
              border
              border-green-100

              shadow-sm

              hover:bg-green-50
              hover:border-green-200

              transition-all
              duration-200
            "
          >
            <BackIcon />
            Layanan Surat
          </Link>

          <span className="text-green-300">
            /
          </span>

          <span
            className="
              px-3
              py-1.5

              rounded-full

              bg-green-50
              border
              border-green-100

              text-green-700
              font-semibold
            "
          >
            {kategori.nama}
          </span>

        </div>

        {/* ===================================================
            HEADER CATEGORY
        =================================================== */}

        <div
          ref={header.ref}
          className={`
            relative
            mb-10

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

          <div
            className="
              relative
              overflow-hidden

              rounded-[30px]

              bg-white

              border
              border-green-100

              shadow-[0_12px_40px_rgba(22,101,52,0.07)]

              p-6
              sm:p-7
            "
          >

            {/* Header glow */}

            <div
              className="
                absolute
                -right-20
                -top-20

                w-56
                h-56

                rounded-full

                opacity-10

                blur-3xl
              "
              style={{
                background: gradient,
              }}
            />

            {/* Decorative circle */}

            <div
              className="
                absolute
                right-8
                top-8

                w-20
                h-20

                rounded-full

                border
                border-green-100/70

                opacity-60
              "
            />

            <div
              className="
                absolute
                right-12
                top-12

                w-12
                h-12

                rounded-full

                border
                border-dashed
                border-green-200

                animate-[spin_15s_linear_infinite]
              "
            />

            <div
              className="
                relative

                flex
                flex-col
                sm:flex-row

                sm:items-center

                gap-5
              "
            >

              {/* ===========================================
                  CATEGORY ICON
              ============================================ */}

              <div className="relative flex-shrink-0 w-fit">

                {/* Glow */}

                <div
                  className="
                    absolute
                    -inset-3

                    rounded-[27px]

                    blur-xl

                    opacity-20
                  "
                  style={{
                    background: gradient,
                  }}
                />

                {/* Ring */}

                <div
                  className="
                    absolute
                    -inset-1

                    rounded-[23px]

                    border
                    border-dashed
                    border-green-300/60

                    animate-[spin_18s_linear_infinite]
                  "
                />

                {/* Main icon */}

                <div
                  className="
                    relative

                    w-20
                    h-20

                    rounded-[22px]

                    flex
                    items-center
                    justify-center

                    text-white

                    shadow-[0_12px_25px_rgba(22,163,74,0.18)]

                    transition-all
                    duration-500

                    hover:scale-105
                    hover:-translate-y-1
                  "
                  style={{
                    background: gradient,
                  }}
                >

                  <div
                    className="
                      absolute
                      inset-[2px]

                      rounded-[20px]

                      border
                      border-white/20
                    "
                  />

                  <div className="relative z-10">
                    <CategoryIcon type={kategori.id} />
                  </div>

                </div>

              </div>

              {/* ===========================================
                  CATEGORY INFORMATION
              ============================================ */}

              <div className="relative flex-1">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    mb-2

                    text-[9px]
                    uppercase
                    tracking-[0.18em]

                    font-bold

                    text-green-500
                  "
                >

                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-green-500

                      animate-pulse
                    "
                  />

                  Kategori Surat

                </div>

                <h1
                  className="
                    font-display
                    font-black

                    text-green-900

                    text-2xl
                    sm:text-3xl

                    tracking-tight
                  "
                >
                  {kategori.nama}
                </h1>

                <p
                  className="
                    text-green-600
                    text-sm

                    mt-2

                    max-w-2xl

                    leading-relaxed
                  "
                >
                  {kategori.deskripsi}
                </p>

                {/* Count */}

                <div
                  className="
                    mt-4

                    inline-flex
                    items-center
                    gap-2

                    px-3
                    py-1.5

                    rounded-full

                    bg-green-50

                    border
                    border-green-100

                    text-xs
                    font-semibold
                    text-green-700
                  "
                >

                  <span
                    className="
                      w-5
                      h-5

                      rounded-full

                      bg-green-500

                      text-white

                      flex
                      items-center
                      justify-center

                      text-[9px]
                    "
                  >
                    {suratItems.length}
                  </span>

                  jenis surat tersedia

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ===================================================
            SECTION TITLE
        =================================================== */}

        <div
          className={`
            mb-5

            flex
            items-end
            justify-between
            gap-4

            transition-all
            duration-700

            ${
              cards.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >

          <div>

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                font-bold
                text-green-400
                mb-1
              "
            >
              Pilihan Layanan
            </p>

            <h2
              className="
                font-display
                font-black

                text-green-900
                text-xl
              "
            >
              Jenis Surat
            </h2>

          </div>

          <span
            className="
              hidden
              sm:block

              text-xs
              text-green-500
            "
          >
            Pilih surat yang Anda butuhkan
          </span>

        </div>

        {/* ===================================================
            SURAT CARDS
        =================================================== */}

        <div
          ref={cards.ref}
          className="
            relative

            grid
            sm:grid-cols-2

            gap-5
          "
        >

          {suratItems.map((surat, i) => (

            <div
              key={surat.id}
              className={`
                group
                relative

                overflow-hidden

                rounded-[24px]

                bg-white

                border
                border-green-100

                shadow-[0_8px_30px_rgba(22,101,52,0.055)]

                transition-all
                duration-700
                ease-out

                hover:-translate-y-2

                hover:border-green-200

                hover:shadow-[0_20px_45px_rgba(22,101,52,0.11)]

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

              {/* =========================================
                  TOP COLOR LINE
              ========================================== */}

              <div
                className="
                  relative

                  h-1.5
                  w-full

                  overflow-hidden
                "
                style={{
                  background: gradient,
                }}
              >

                {/* Shine */}

                <div
                  className="
                    absolute
                    top-0
                    bottom-0

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

              {/* =========================================
                  DECORATIVE BACKGROUND
              ========================================== */}

              <div
                className="
                  pointer-events-none

                  absolute
                  -right-14
                  -top-14

                  w-36
                  h-36

                  rounded-full

                  opacity-0

                  blur-3xl

                  transition-all
                  duration-500

                  group-hover:opacity-20
                  group-hover:scale-125
                "
                style={{
                  background: gradient,
                }}
              />

              {/* =========================================
                  CARD CONTENT
              ========================================== */}

              <div className="relative p-5">

                {/* Number */}

                <div
                  className="
                    absolute
                    right-5
                    top-5

                    text-[10px]

                    font-display
                    font-black

                    text-green-200

                    transition-all
                    duration-300

                    group-hover:text-green-300
                    group-hover:scale-110
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* =======================================
                    ICON
                ======================================== */}

                <div className="relative mb-5 w-fit">

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -inset-2

                      rounded-[20px]

                      blur-xl

                      opacity-0

                      transition-all
                      duration-500

                      group-hover:opacity-30
                      group-hover:scale-110
                    "
                    style={{
                      background: gradient,
                    }}
                  />

                  {/* Rotating ring */}

                  <div
                    className="
                      absolute
                      -inset-1

                      rounded-[18px]

                      border
                      border-dashed
                      border-green-300/0

                      transition-all
                      duration-700

                      group-hover:border-green-300/70
                      group-hover:rotate-180
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative

                      w-14
                      h-14

                      rounded-[17px]

                      flex
                      items-center
                      justify-center

                      text-white

                      shadow-[0_8px_18px_rgba(22,163,74,0.14)]

                      transition-all
                      duration-500
                      ease-out

                      group-hover:scale-110
                      group-hover:-translate-y-1
                      group-hover:rotate-2

                      overflow-hidden
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

                        rounded-[15px]

                        border
                        border-white/20
                      "
                    />

                    {/* Shine */}

                    <div
                      className="
                        absolute
                        -top-10
                        -left-10

                        w-16
                        h-24

                        bg-white/15

                        rotate-45

                        transition-all
                        duration-700

                        group-hover:translate-x-20
                        group-hover:translate-y-10
                      "
                    />

                    <div
                      className="
                        relative
                        z-10

                        transition-transform
                        duration-500

                        group-hover:scale-110
                      "
                    >
                      <ServiceIcon type={surat.icon} />
                    </div>

                  </div>

                </div>

                {/* =======================================
                    TITLE
                ======================================== */}

                <h3
                  className="
                    font-display
                    font-black

                    text-green-900
                    text-[15px]

                    leading-snug

                    pr-8

                    transition-colors
                    duration-300

                    group-hover:text-green-700
                  "
                >
                  {surat.nama}
                </h3>

                {/* =======================================
                    DESCRIPTION
                ======================================== */}

                <p
                  className="
                    text-green-600
                    text-xs

                    mt-2

                    leading-relaxed

                    line-clamp-3

                    min-h-[54px]
                  "
                >
                  {surat.deskripsi}
                </p>

                {/* =======================================
                    DIVIDER
                ======================================== */}

                <div
                  className="
                    my-4

                    h-px

                    bg-green-100

                    transition-all
                    duration-300

                    group-hover:bg-green-200
                  "
                />

                {/* =======================================
                    BUTTON
                ======================================== */}

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/layanan/${kategoriId}/${surat.id}`
                    )
                  }
                  className="
                    relative

                    w-full

                    flex
                    items-center
                    justify-between

                    px-3
                    py-2.5

                    rounded-xl

                    bg-green-50

                    border
                    border-green-100

                    text-green-700

                    font-display
                    font-bold
                    text-xs

                    overflow-hidden

                    transition-all
                    duration-300

                    hover:bg-green-500
                    hover:text-white
                    hover:border-green-500

                    hover:shadow-[0_8px_20px_rgba(34,197,94,0.18)]

                    active:scale-[0.98]
                  "
                >

                  <span>
                    Lihat Detail
                  </span>

                  <span
                    className="
                      w-7
                      h-7

                      rounded-lg

                      bg-white/70

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-300

                      group-hover:bg-white/20
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowIcon />
                  </span>

                </button>

              </div>

              {/* =========================================
                  BOTTOM ACTIVE LINE
              ========================================== */}

              <div
                className="
                  absolute

                  bottom-0
                  left-5
                  right-5

                  h-[2px]

                  rounded-full

                  origin-left
                  scale-x-0

                  transition-transform
                  duration-500

                  group-hover:scale-x-100
                "
                style={{
                  background: gradient,
                }}
              />

            </div>

          ))}

        </div>

        {/* ===================================================
            BOTTOM INFORMATION
        =================================================== */}

        <div
          className={`
            mt-10

            flex
            justify-center

            transition-all
            duration-700

            ${
              cards.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
          style={{
            transitionDelay: "600ms",
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

              text-xs
              text-green-600
            "
          >

            <span
              className="
                flex
                items-center
                justify-center

                w-5
                h-5

                rounded-full

                bg-green-500

                text-white
              "
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
            </span>

            Pilih surat sesuai kebutuhan Anda

          </div>

        </div>

      </div>

    </div>
  );
}