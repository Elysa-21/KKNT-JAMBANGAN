import { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: Props) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setFading(true);
    }, 4200);

    const finishTimer = window.setTimeout(() => {
      onFinish();
    }, 4900);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <>
      <style>{`
        /* =====================================================
           BACKGROUND ANIMATION
        ===================================================== */

        @keyframes blobFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(18px, -14px, 0) scale(1.05);
          }
        }

        @keyframes blobFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-16px, 14px, 0) scale(0.95);
          }
        }

        /* =====================================================
           ORBIT
        ===================================================== */

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

        /* =====================================================
           CARD
        ===================================================== */

        @keyframes cardAppear {
          0% {
            opacity: 0;
            transform:
              perspective(1000px)
              translateY(40px)
              rotateX(18deg)
              scale(0.85);
            filter: blur(5px);
          }

          70% {
            opacity: 1;
            transform:
              perspective(1000px)
              translateY(-4px)
              rotateX(-2deg)
              scale(1.02);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform:
              perspective(1000px)
              translateY(0)
              rotateX(0)
              scale(1);
            filter: blur(0);
          }
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        /* =====================================================
           ICON
        ===================================================== */

        @keyframes iconAppear {
          0% {
            opacity: 0;
            transform: scale(0.72) rotate(-8deg);
          }

          70% {
            opacity: 1;
            transform: scale(1.05) rotate(2deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        /* =====================================================
           E-SURAT
        ===================================================== */

        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: translateY(22px) scale(0.94);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes logoFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        /* =====================================================
           SUBTITLE
        ===================================================== */

        @keyframes subtitleAppear {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           LINE
        ===================================================== */

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

        /* =====================================================
           PARTICLES
        ===================================================== */

        @keyframes particlePulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.7);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* =====================================================
           LOADING
        ===================================================== */

        @keyframes loadingMove {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(220%);
          }
        }

        @keyframes loadingDot {
          0%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }

          50% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }

        /* =====================================================
           CLASSES
        ===================================================== */

        .splash-card {
          opacity: 0;

          animation:
            cardAppear
            1.1s
            cubic-bezier(.16, 1, .3, 1)
            0.15s
            forwards;
        }

        .splash-card-inner {
          animation:
            cardFloat
            5.5s
            ease-in-out
            1.3s
            infinite;
        }

        .splash-icon {
          opacity: 0;

          animation:
            iconAppear
            0.85s
            cubic-bezier(.16, 1, .3, 1)
            0.55s
            forwards;
        }

        .splash-icon-inner {
          animation:
            iconFloat
            4s
            ease-in-out
            1.5s
            infinite;
        }

        .splash-logo {
          opacity: 0;

          animation:
            logoAppear
            0.9s
            cubic-bezier(.16, 1, .3, 1)
            1.35s
            forwards;
        }

        .splash-logo-inner {
          animation:
            logoFloat
            4.5s
            ease-in-out
            2.3s
            infinite;
        }

        .splash-subtitle {
          opacity: 0;

          animation:
            subtitleAppear
            0.75s
            ease-out
            1.95s
            forwards;
        }

        .splash-line {
          opacity: 0;

          transform-origin: center;

          animation:
            lineAppear
            0.8s
            cubic-bezier(.65, 0, .35, 1)
            2.3s
            forwards;
        }

        .splash-loading {
          opacity: 0;

          animation:
            subtitleAppear
            0.7s
            ease-out
            2.45s
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

        /* =====================================================
           E-SURAT FONT
           
           DISAMAKAN DENGAN BERDECHA TEA:
           font-black
           tracking-[0.18em]
           font sans-serif bawaan
        ===================================================== */

        .e-surat-title {
          font-family:
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          font-weight: 900;

          letter-spacing: 0.18em;

          line-height: 1;

          background:
            linear-gradient(
              180deg,
              #14532d 0%,
              #166534 35%,
              #16a34a 68%,
              #22c55e 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          -webkit-text-fill-color: transparent;

          filter:
            drop-shadow(
              0 5px 10px
              rgba(22, 101, 52, 0.18)
            );
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .main-card {
            width: 245px !important;
            height: 245px !important;
            border-radius: 38px !important;
          }

          .document-box {
            width: 100px !important;
            height: 100px !important;
          }

          .document-svg {
            width: 63px !important;
            height: 63px !important;
          }

          .e-surat-title {
            font-size: 3.5rem !important;
            letter-spacing: 0.12em !important;
          }
        }
      `}</style>


      {/* =====================================================
          SPLASH SCREEN
      ===================================================== */}

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
          ${
            fading
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }
        `}
        style={{
          background:
            "linear-gradient(135deg, #ecfdf5 0%, #dcfce7 45%, #bbf7d0 100%)",
        }}
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[600px]
            h-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-green-300/20
            blur-3xl
          "
          style={{
            animation:
              "blobFloat 7s ease-in-out infinite",
          }}
        />


        {/* =================================================
            TOP LEFT BLOB
        ================================================== */}

        <div
          className="
            absolute
            -top-28
            -left-28
            w-80
            h-80
            rounded-full
            bg-green-400/20
            blur-2xl
          "
          style={{
            animation:
              "blobFloat 8s ease-in-out infinite",
          }}
        />


        {/* =================================================
            BOTTOM RIGHT BLOB
        ================================================== */}

        <div
          className="
            absolute
            -bottom-28
            -right-28
            w-80
            h-80
            rounded-full
            bg-emerald-400/20
            blur-2xl
          "
          style={{
            animation:
              "blobFloatReverse 9s ease-in-out infinite",
          }}
        />


        {/* =================================================
            ORBIT BESAR
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[520px]
            h-[520px]
            rounded-full
            border
            border-green-600/10
            pointer-events-none
          "
          style={{
            transform:
              "translate(-50%, -50%)",
            animation:
              "orbit 20s linear infinite",
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
              boxShadow:
                "0 0 18px rgba(34,197,94,0.7)",
              animation:
                "particlePulse 1.8s ease-in-out infinite",
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
              animation:
                "particlePulse 2.2s ease-in-out infinite",
            }}
          />

        </div>


        {/* =================================================
            ORBIT KECIL
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[420px]
            h-[420px]
            rounded-full
            border
            border-dashed
            border-green-600/10
            pointer-events-none
          "
          style={{
            transform:
              "translate(-50%, -50%)",
            animation:
              "orbitReverse 16s linear infinite",
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
              animation:
                "particlePulse 1.5s ease-in-out infinite",
            }}
          />

        </div>


        {/* =================================================
            PARTICLES
        ================================================== */}

        <span
          className="
            absolute
            left-[25%]
            top-[35%]
            w-1.5
            h-1.5
            rounded-full
            bg-green-400
          "
          style={{
            animation:
              "particlePulse 2s ease-in-out infinite",
          }}
        />

        <span
          className="
            absolute
            right-[23%]
            top-[30%]
            w-1.5
            h-1.5
            rounded-full
            bg-emerald-400
          "
          style={{
            animation:
              "particlePulse 2.4s ease-in-out infinite",
          }}
        />

        <span
          className="
            absolute
            left-[31%]
            bottom-[24%]
            w-1.5
            h-1.5
            rounded-full
            bg-green-300
          "
          style={{
            animation:
              "particlePulse 1.7s ease-in-out infinite",
          }}
        />

        <span
          className="
            absolute
            right-[29%]
            bottom-[30%]
            w-2
            h-2
            rounded-full
            bg-green-400/60
          "
          style={{
            animation:
              "particlePulse 2.6s ease-in-out infinite",
          }}
        />


        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-20
            flex
            flex-col
            items-center
            text-center
            px-6
          "
        >

          {/* =================================================
              LOGO CARD
          ================================================== */}

          <div className="splash-card">

            <div className="splash-card-inner">

              <div
                className="
                  main-card
                  relative
                  w-[280px]
                  h-[280px]
                  rounded-[42px]
                  border
                  border-white/75
                  bg-white/30
                  backdrop-blur-2xl
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
                style={{
                  boxShadow:
                    "0 28px 80px rgba(22,101,52,0.14), inset 0 1px 0 rgba(255,255,255,0.85)",
                }}
              >

                {/* Inner frame */}

                <div
                  className="
                    absolute
                    inset-5
                    rounded-[34px]
                    border
                    border-green-600/10
                  "
                />


                {/* Rotating frame */}

                <div
                  className="
                    absolute
                    inset-8
                    rounded-[30px]
                    border
                    border-dashed
                    border-green-500/10
                  "
                  style={{
                    animation:
                      "orbit 12s linear infinite",
                  }}
                />


                {/* Soft center glow */}

                <div
                  className="
                    absolute
                    inset-12
                    rounded-[28px]
                    bg-green-100/25
                    blur-xl
                  "
                />


                {/* =================================================
                    DOCUMENT
                ================================================== */}

                <div className="splash-icon">

                  <div className="splash-icon-inner">

                    <div
                      className="
                        document-box
                        relative
                        w-[112px]
                        h-[112px]
                        rounded-[28px]
                        bg-white/85
                        border
                        border-white
                        flex
                        items-center
                        justify-center
                        backdrop-blur-xl
                      "
                      style={{
                        boxShadow:
                          "0 18px 45px rgba(22,101,52,0.13)",
                      }}
                    >

                      <svg
                        className="
                          document-svg
                          relative
                          z-10
                          w-[70px]
                          h-[70px]
                        "
                        viewBox="0 0 100 100"
                        fill="none"
                      >

                        {/* Shadow */}

                        <path
                          d="
                            M24 10
                            H58
                            L77 29
                            V88
                            H24
                            Z
                          "
                          fill="rgba(22,101,52,0.08)"
                          transform="translate(2 3)"
                        />

                        {/* Document */}

                        <path
                          d="
                            M24 10
                            H58
                            L77 29
                            V88
                            H24
                            Z
                          "
                          fill="white"
                          stroke="#16a34a"
                          strokeWidth="2"
                        />

                        {/* Fold */}

                        <path
                          d="
                            M58 10
                            V29
                            H77
                          "
                          fill="#dcfce7"
                          stroke="#16a34a"
                          strokeWidth="2"
                        />

                        {/* Lines */}

                        <path
                          d="M35 43 H66"
                          stroke="#22c55e"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <path
                          d="M35 53 H65"
                          stroke="#86efac"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <path
                          d="M35 63 H61"
                          stroke="#86efac"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        {/* Dot */}

                        <circle
                          cx="42"
                          cy="76"
                          r="5"
                          fill="#22c55e"
                        />

                      </svg>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


         {/* =================================================
    E-SURAT
================================================= */}

<div className="splash-logo mt-9">
  <div className="splash-logo-inner">
    <div className="relative">

      <h1
        className="
          e-surat-title
          relative
          z-10
          select-none
          whitespace-nowrap
          text-4xl
          md:text-6xl
          font-black
          tracking-[0.18em]
        "
      >
        E-SURAT
      </h1>

      {/* Garis bawah */}
      <div
        className="
          splash-line
          absolute
          left-[8%]
          right-[8%]
          -bottom-4
          h-[2px]
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-green-500/70
          to-transparent
        "
      />

    </div>
  </div>
</div>


          {/* =================================================
              SUBTITLE
          ================================================== */}

          <div className="splash-subtitle mt-7">

            <p
              className="
                text-[1000px]
                md:text-xs
                font-semibold
                tracking-[0.62em]
                text-green-800
              "
            >
              LAYANAN SURAT DESA JAMBANGAN
            </p>

          </div>


          {/* =================================================
              DIVIDER
          ================================================== */}

          <div
            className="
              splash-loading
              mt-7
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                w-12
                h-px
                bg-green-500/60
              "
            />

            <div
              className="
                w-2
                h-2
                rounded-full
                bg-green-500
              "
              style={{
                boxShadow:
                  "0 0 12px rgba(34,197,94,0.55)",
              }}
            />

            <div
              className="
                w-12
                h-px
                bg-green-500/60
              "
            />

          </div>


          {/* =================================================
              LOADING
          ================================================== */}

          <div className="splash-loading mt-7">

            <div
              className="
                relative
                h-[5px]
                w-56
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
                  from-green-300
                  via-green-500
                  to-emerald-300
                "
                style={{
                  boxShadow:
                    "0 0 18px rgba(34,197,94,0.4)",
                }}
              />

            </div>


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
                    animationDelay:
                      `${index * 0.18}s`,
                  }}
                />
              ))}

            </div>

          </div>


          {/* =================================================
              FOOT TEXT
          ================================================== */}

          <p
            className="
              splash-subtitle
              mt-6
              text-[8px]
              md:text-[9px]
              tracking-[0.42em]
              font-medium
              text-green-700/50
            "
          >
          
          </p>

        </div>


        {/* =================================================
            BOTTOM GLOW
        ================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-32
            pointer-events-none
          "
          style={{
            background:
              "linear-gradient(to top, rgba(34,197,94,0.08), transparent)",
          }}
        />

      </div>
    </>
  );
}