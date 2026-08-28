import { useEffect, useState } from "react"
import logoMagetan from "../imports/logo_magetan.jpg"

interface Props {
  onFinish: () => void
}

export default function SplashScreen({ onFinish }: Props) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setFading(true)
    }, 4200)

    const finishTimer = window.setTimeout(() => {
      onFinish()
    }, 4900)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <>
      <style>{`
        /* =========================================================
           ANIMATIONS
        ========================================================= */

        @keyframes blobFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(20px, -18px, 0) scale(1.06);
          }
        }

        @keyframes blobFloatReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-20px, 16px, 0) scale(0.94);
          }
        }

        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes orbitReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes cardAppear {
          0% {
            opacity: 0;
            transform:
              perspective(1000px)
              translateY(35px)
              scale(0.88);
            filter: blur(5px);
          }

          70% {
            opacity: 1;
            transform:
              perspective(1000px)
              translateY(-4px)
              scale(1.02);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform:
              perspective(1000px)
              translateY(0)
              scale(1);
            filter: blur(0);
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.92);
            filter: blur(4px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes subtitleAppear {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineAppear {
          0% {
            opacity: 0;
            transform: scaleX(0);
          }

          100% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes particlePulse {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.7);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        @keyframes loadingMove {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(220%);
          }
        }

        @keyframes loadingDot {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }

          50% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        /* =========================================================
           ELEMENT ANIMATION
        ========================================================= */

        .splash-card {
          opacity: 0;
          animation:
            cardAppear
            1s
            cubic-bezier(.16, 1, .3, 1)
            0.15s
            forwards;
        }

        .splash-card-inner {
          animation:
            gentleFloat
            5s
            ease-in-out
            1.2s
            infinite;
        }

        .splash-logo {
          opacity: 0;
          animation:
            logoAppear
            0.9s
            cubic-bezier(.16, 1, .3, 1)
            1.15s
            forwards;
        }

        .splash-logo-inner {
          animation:
            gentleFloat
            4.5s
            ease-in-out
            2s
            infinite;
        }

        .splash-subtitle {
          opacity: 0;
          animation:
            subtitleAppear
            0.8s
            ease-out
            1.65s
            forwards;
        }

        .splash-line {
          opacity: 0;
          transform-origin: center;
          animation:
            lineAppear
            0.8s
            cubic-bezier(.65, 0, .35, 1)
            1.9s
            forwards;
        }

        .splash-loading {
          opacity: 0;
          animation:
            subtitleAppear
            0.7s
            ease-out
            2.05s
            forwards;
        }

        .splash-loading-bar {
          animation:
            loadingMove
            1.7s
            ease-in-out
            infinite;
        }

        .splash-loading-dot {
          animation:
            loadingDot
            1.1s
            ease-in-out
            infinite;
        }

        /* =========================================================
           TITLE
        ========================================================= */

        .e-surat-title {
          font-family:
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          font-weight: 900;
          letter-spacing: 0.16em;
          line-height: 1;

          background:
            linear-gradient(
              180deg,
              #064e3b 0%,
              #047857 42%,
              #16a34a 100%
            );

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;

          filter:
            drop-shadow(
              0 7px 14px
              rgba(6, 78, 59, 0.15)
            );
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 640px) {
          .main-card {
            width: 210px !important;
            height: 210px !important;
            border-radius: 34px !important;
          }

          .logo-image {
            width: 92px !important;
            height: 92px !important;
          }

          .e-surat-title {
            font-size: 3rem !important;
            letter-spacing: 0.1em !important;
          }

          .subtitle-text {
            font-size: 8px !important;
            letter-spacing: 0.34em !important;
          }
        }
      `}</style>

      {/* =========================================================
          SPLASH SCREEN
      ========================================================= */}

      <div
        className={`
          fixed
          inset-0
          z-[9999]
          overflow-hidden
          flex
          items-center
          justify-center
          transition-opacity
          duration-700
          ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
        style={{
          background:
            "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 48%, #bbf7d0 100%)",
        }}
      >
        {/* =======================================================
            BACKGROUND GLOW
        ======================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[700px]
            h-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/50
            blur-3xl
            pointer-events-none
          "
          style={{
            animation: "blobFloat 8s ease-in-out infinite",
          }}
        />

        {/* Top left glow */}

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[420px]
            h-[420px]
            rounded-full
            bg-green-300/25
            blur-3xl
            pointer-events-none
          "
          style={{
            animation: "blobFloat 9s ease-in-out infinite",
          }}
        />

        {/* Bottom right glow */}

        <div
          className="
            absolute
            -bottom-40
            -right-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-emerald-400/20
            blur-3xl
            pointer-events-none
          "
          style={{
            animation: "blobFloatReverse 10s ease-in-out infinite",
          }}
        />

        {/* =======================================================
            ORBIT BESAR
        ======================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[600px]
            h-[600px]
            rounded-full
            border
            border-green-600/10
            pointer-events-none
          "
          style={{
            transform: "translate(-50%, -50%)",
            animation: "orbit 24s linear infinite",
          }}
        >
          <span
            className="
              absolute
              left-0
              top-1/2
              w-2
              h-2
              rounded-full
              bg-green-500
            "
            style={{
              boxShadow: "0 0 20px rgba(34,197,94,0.65)",
              animation: "particlePulse 2s ease-in-out infinite",
            }}
          />

          <span
            className="
              absolute
              right-0
              bottom-1/4
              w-1.5
              h-1.5
              rounded-full
              bg-emerald-400
            "
            style={{
              animation: "particlePulse 2.4s ease-in-out infinite",
            }}
          />
        </div>

        {/* =======================================================
            ORBIT KECIL
        ======================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[460px]
            h-[460px]
            rounded-full
            border
            border-dashed
            border-green-600/10
            pointer-events-none
          "
          style={{
            transform: "translate(-50%, -50%)",
            animation: "orbitReverse 18s linear infinite",
          }}
        >
          <span
            className="
              absolute
              top-0
              left-1/2
              w-1.5
              h-1.5
              rounded-full
              bg-green-400
            "
            style={{
              animation: "particlePulse 1.6s ease-in-out infinite",
            }}
          />
        </div>

        {/* =======================================================
            PARTICLES
        ======================================================= */}

        <span
          className="
            absolute
            left-[24%]
            top-[30%]
            w-1.5
            h-1.5
            rounded-full
            bg-green-400
          "
          style={{
            animation: "particlePulse 2s ease-in-out infinite",
          }}
        />

        <span
          className="
            absolute
            right-[22%]
            top-[28%]
            w-2
            h-2
            rounded-full
            bg-emerald-400
          "
          style={{
            animation: "particlePulse 2.5s ease-in-out infinite",
          }}
        />

        <span
          className="
            absolute
            left-[30%]
            bottom-[24%]
            w-1.5
            h-1.5
            rounded-full
            bg-green-300
          "
          style={{
            animation: "particlePulse 1.8s ease-in-out infinite",
          }}
        />

        <span
          className="
            absolute
            right-[28%]
            bottom-[27%]
            w-2
            h-2
            rounded-full
            bg-green-400/70
          "
          style={{
            animation: "particlePulse 2.7s ease-in-out infinite",
          }}
        />

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div
          className="
            relative
            z-20
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
            w-full
          "
        >
          {/* =====================================================
              LOGO CARD
          ===================================================== */}

          <div className="splash-card">
            <div className="splash-card-inner">
              <div
                className="
                  main-card
                  relative
                  w-[250px]
                  h-[250px]
                  rounded-[38px]
                  border
                  border-white/80
                  bg-white/45
                  backdrop-blur-2xl
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
                style={{
                  boxShadow:
                    "0 25px 70px rgba(6,78,59,0.13), inset 0 1px 0 rgba(255,255,255,0.95)",
                }}
              >
                {/* Outer decorative frame */}

                <div
                  className="
                    absolute
                    inset-4
                    rounded-[30px]
                    border
                    border-green-600/10
                  "
                />

                {/* Inner decorative frame */}

                <div
                  className="
                    absolute
                    inset-7
                    rounded-[26px]
                    border
                    border-dashed
                    border-green-500/10
                  "
                />

                {/* Soft glow */}

                <div
                  className="
                    absolute
                    inset-12
                    rounded-full
                    bg-green-100/40
                    blur-2xl
                  "
                />

                {/* Logo */}

                <div className="relative z-10">
                  <img
                    src={logoMagetan}
                    alt="Logo Kabupaten Magetan"
                    className="
                      logo-image
                      w-[112px]
                      h-[112px]
                      rounded-full
                      object-cover
                    "
                    style={{
                      boxShadow:
                        "0 18px 45px rgba(6,78,59,0.18), 0 0 0 7px rgba(255,255,255,0.9)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              TITLE
          ===================================================== */}

          <div className="splash-logo mt-8">
            <div className="splash-logo-inner">
              <div className="relative flex flex-col items-center">
                {/* Decorative left */}

                <div
                  className="
                    absolute
                    -left-12
                    top-1/2
                    -translate-y-1/2
                    text-green-500/70
                    text-2xl
                    rotate-[-20deg]
                  "
                >
                  ❧
                </div>

                <h1
                  className="
                    e-surat-title
                    relative
                    z-10
                    select-none
                    whitespace-nowrap
                    text-5xl
                    md:text-7xl
                  "
                >
                  E-SURAT
                </h1>

                {/* Decorative right */}

                <div
                  className="
                    absolute
                    -right-12
                    top-1/2
                    -translate-y-1/2
                    text-green-500/70
                    text-2xl
                    rotate-[20deg]
                    scale-x-[-1]
                  "
                >
                  ❧
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              SUBTITLE
          ===================================================== */}

          <div className="splash-subtitle mt-5">
            <p
              className="
                subtitle-text
                text-[10px]
                md:text-xs
                font-bold
                tracking-[0.5em]
                text-green-900
              "
            >
              LAYANAN SURAT DESA JAMBANGAN
            </p>
          </div>

          {/* =====================================================
              DECORATIVE LINE
          ===================================================== */}

          <div
            className="
              splash-line
              flex
              items-center
              justify-center
              gap-4
              mt-8
            "
          >
            {/* Left line */}

            <div
              className="
                w-14
                md:w-16
                h-[1px]
                rounded-full
                bg-green-500/60
              "
            />

            {/* Center dot */}

            <div
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-green-500
              "
              style={{
                boxShadow: "0 0 12px rgba(34,197,94,0.55)",
              }}
            />

            {/* Right line */}

            <div
              className="
                w-14
                md:w-16
                h-[1px]
                rounded-full
                bg-green-500/60
              "
            />
          </div>

          {/* =====================================================
              LOADING
          ===================================================== */}

          <div className="splash-loading mt-7">
            {/* Loading bar */}

            <div
              className="
                relative
                h-[5px]
                w-52
                md:w-64
                overflow-hidden
                rounded-full
                bg-green-900/10
              "
            >
              <div
                className="
                  splash-loading-bar
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-green-400
                  via-green-500
                  to-emerald-400
                "
                style={{
                  boxShadow: "0 0 12px rgba(34,197,94,0.4)",
                }}
              />
            </div>

            {/* Loading dots */}

            <div
              className="
                mt-3
                flex
                justify-center
                gap-2
              "
            >
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className="
                    splash-loading-dot
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-green-600
                  "
                  style={{
                    animationDelay: `${index * 0.18}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM SOFT GRADIENT
        ======================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-24
            pointer-events-none
          "
          style={{
            background:
              "linear-gradient(to top, rgba(34,197,94,0.10), transparent)",
          }}
        />
      </div>
    </>
  )
}
