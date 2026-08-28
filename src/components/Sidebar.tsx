import { NavLink, useLocation } from "react-router-dom"
import logoMagetan from "../imports/logo_magetan.jpg"

interface Props {
  open: boolean
  onClose: () => void
  onToggle: () => void
}

/* ============================================================
ICON COMPONENTS
SVG CUSTOM — TIDAK PERLU PACKAGE TAMBAHAN
============================================================ */

function HomeIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200"
    >
      <path d="M3 10.8 12 3l9 7.8" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M9.5 21v-6h5v6" />

      {active && <path d="M9.5 11.5h5" strokeWidth="2" opacity="0.75" />}
    </svg>
  )
}

function ClipboardIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200"
    >
      <rect x="5" y="4" width="14" height="17" rx="2.5" />
      <path d="M9 4.5V3.8A1.8 1.8 0 0 1 10.8 2h2.4A1.8 1.8 0 0 1 15 3.8v.7" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
      <path d="M9 18h3.5" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200"
    >
      <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M14 3.5V8h4" />
      <path d="M8.5 12h7" />
      <path d="M8.5 15.5h7" />
      <path d="M8.5 19h4" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10.5v5" />
      <path d="M12 7.5h.01" strokeWidth="3" />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.7 9a2.4 2.4 0 1 1 4.1 1.7c-.9.9-1.8 1.1-1.8 2.5" />
      <path d="M12 16.7h.01" strokeWidth="3" />
    </svg>
  )
}

/* ============================================================
NAVIGATION DATA
============================================================ */

const navItems = [
  {
    to: "/home",
    label: "Home",
    icon: HomeIcon,
  },
  {
    to: "/alur-surat",
    label: "Alur Surat",
    icon: ClipboardIcon,
  },
  {
    to: "/layanan",
    label: "Layanan Surat",
    icon: DocumentIcon,
  },
  {
    to: "/about",
    label: "Tentang Kami",
    icon: InfoIcon,
  },
  {
    to: "/bantuan",
    label: "Bantuan",
    icon: HelpIcon,
  },
]

/* ============================================================
SIDEBAR
============================================================ */

export default function Sidebar({ open, onClose, onToggle }: Props) {
  const location = useLocation()

  return (
    <>
      {/* =====================================================
MOBILE OVERLAY
===================================================== */}

      {open && (
        <div
          className="
        fixed
        inset-0
        z-40
        bg-green-950/20
        backdrop-blur-[3px]
        lg:hidden
      "
          onClick={onClose}
        />
      )}

      {/* =====================================================
      SIDEBAR
  ===================================================== */}

      <aside
        className={`
      fixed
      top-0
      left-0
      h-full
      z-50
      flex
      flex-col

      bg-white/95
      backdrop-blur-xl

      transition-all
      duration-300
      ease-in-out

      ${open ? "w-64" : "w-0 lg:w-[72px]"}

      overflow-hidden
    `}
        style={{
          borderRight: "1px solid rgba(22,163,74,0.10)",

          boxShadow: open
            ? "8px 0 40px rgba(22,101,52,0.06)"
            : "4px 0 24px rgba(22,101,52,0.04)",
        }}
      >
        {/* =================================================
        HEADER
    ================================================== */}

        <div
          className={`
        relative
        flex
        items-center
        flex-shrink-0

        ${open ? "gap-3 px-4" : "justify-center px-2"}

pt-15
pb-4
min-h-[135px]

        border-b
        border-green-100/70
      `}
        >
          {open && (
            <div
              className="
            absolute
            top-0
            left-0
            w-32
            h-20
            bg-green-200/20
            blur-2xl
            pointer-events-none
          "
            />
          )}

          {/* LOGO MAGETAN */}

          <button
            type="button"
            onClick={onToggle}
            className="
          relative
          z-10
          flex-shrink-0

          cursor-pointer

          transition-all
          duration-200

          hover:scale-[1.05]
          active:scale-95

          rounded-full
          overflow-hidden

          bg-white
        "
            style={{
              width: open ? "48px" : "48px",
              height: open ? "48px" : "48px",
              boxShadow: "0 4px 14px rgba(22,163,74,0.18)",
            }}
            aria-label={open ? "Tutup sidebar" : "Buka sidebar"}
            title={open ? "Tutup sidebar" : "Buka sidebar"}
          >
            <img
              src={logoMagetan}
              alt="Logo Magetan"
              className="
            w-full
            h-full
            object-cover
          "
            />
          </button>

          {/* APP NAME */}

          {open && (
            <div
              className="
            relative
            z-10
            animate-slide-in
            overflow-hidden
          "
            >
              <p
                className="
              font-display
              font-black
              text-green-800
              leading-none
              text-[15px]
              tracking-tight
              whitespace-nowrap
            "
              >
                E-SURAT
              </p>

              <p
                className="
              mt-1
              text-green-600/75
              text-[10px]
              whitespace-nowrap
              font-semibold
              tracking-wide
            "
              >
                DESA JAMBANGAN
              </p>
            </div>
          )}
        </div>

        {/* =================================================
        NAVIGATION
    ================================================== */}

        <nav
          className="
        flex-1
        py-5
        overflow-y-auto
        overflow-x-hidden
      "
        >
          {/* LABEL */}

          {open && (
            <div
              className="
            px-5
            mb-3

            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]

            text-green-500/60

            animate-slide-in
          "
            >
              MENU UTAMA
            </div>
          )}

          {navItems.map((item) => {
            const isActive =
              location.pathname === item.to ||
              (item.to !== "/home" && location.pathname.startsWith(item.to))

            const Icon = item.icon

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => {
                  if (item.to === "/home") {
                    window.dispatchEvent(new Event("play-home-video-audio"))
                  }

                  if (window.innerWidth < 1024) {
                    onClose()
                  }
                }}
                className={`
              relative

              flex
              items-center

              ${open ? "gap-3 px-3" : "justify-center px-2"}

              py-2.5

              mx-2
              mb-1

              rounded-[14px]

              transition-all
              duration-200

              group

              whitespace-nowrap

              ${
                isActive
                  ? `
                    bg-gradient-to-r
                    from-green-500
                    to-emerald-500
                    text-white
                  `
                  : `
                    text-green-700
                    hover:bg-green-50
                    hover:text-green-800
                  `
              }
            `}
                style={
                  isActive
                    ? {
                        boxShadow: "0 7px 18px rgba(34,197,94,0.16)",
                      }
                    : undefined
                }
              >
                {/* =================================================
                ACTIVE INDICATOR
            ================================================== */}

                {isActive && (
                  <span
                    className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2

                  w-[3px]
                  h-6

                  rounded-r-full

                  bg-white/90

                  shadow-[0_0_8px_rgba(255,255,255,0.7)]
                "
                  />
                )}

                {/* =================================================
                ICON CONTAINER
            ================================================== */}

                <span
                  className={`
                relative

                flex
                items-center
                justify-center

                w-9
                h-9

                rounded-[11px]

                flex-shrink-0

                transition-all
                duration-200

                ${
                  isActive
                    ? `
                      bg-white/15
                      shadow-inner
                    `
                    : `
                      bg-green-50
                      group-hover:bg-green-100
                    `
                }
              `}
                >
                  {/* Soft icon glow saat active */}

                  {isActive && (
                    <span
                      className="
                    absolute
                    inset-0
                    rounded-[11px]

                    bg-white/10
                    blur-[2px]

                    pointer-events-none
                  "
                    />
                  )}

                  {/* SVG ICON */}

                  <span
                    className="
                  relative
                  z-10

                  flex
                  items-center
                  justify-center

                  transition-transform
                  duration-200

                  group-hover:scale-[1.12]
                  group-hover:-translate-y-[1px]
                "
                  >
                    <Icon active={isActive} />
                  </span>
                </span>

                {/* =================================================
                LABEL
            ================================================== */}

                {open && (
                  <span
                    className={`
                  font-display
                  font-semibold
                  text-[13px]

                  animate-slide-in

                  transition-all
                  duration-200

                  ${isActive ? "text-white" : "text-green-700"}
                `}
                  >
                    {item.label}
                  </span>
                )}
              </NavLink>
            )
          })}
        </nav>

        {/* =================================================
        FOOTER
    ================================================== */}

        {open && (
          <div
            className="
          px-4
          py-4

          border-t
          border-green-100/70

          animate-slide-in
        "
          >
            <div
              className="
            relative
            overflow-hidden

            rounded-[14px]

            bg-gradient-to-br
            from-green-50
            to-emerald-50

            border
            border-green-100

            px-3
            py-3
          "
            >
              <div
                className="
              absolute
              -right-5
              -bottom-5

              w-16
              h-16

              rounded-full

              bg-green-200/30
              blur-xl
            "
              />

              <div
                className="
              relative
              z-10
            "
              >
                <p
                  className="
                text-[9px]
                uppercase
                tracking-[0.15em]
                font-bold
                text-green-500/70
              "
                >
                  E-SURAT
                </p>

                <p
                  className="
                mt-1
                text-[10px]
                text-green-700/70
                font-medium
              "
                >
                  © 2026 Desa Jambangan
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* =====================================================
      MOBILE LOGO BUTTON
  ===================================================== */}

      {!open && (
        <button
          type="button"
          onClick={onToggle}
          className="
        lg:hidden

        fixed
        top-15
        left-4

        z-[60]

        rounded-full
        overflow-hidden

        cursor-pointer

        transition-all
        duration-200

        hover:scale-[1.05]
        active:scale-95

        bg-white
      "
          style={{
            width: "50px",
            height: "50px",
            boxShadow: "0 4px 14px rgba(22,163,74,0.22)",
          }}
          aria-label="Buka sidebar"
        >
          <img
            src={logoMagetan}
            alt="Logo Magetan"
            className="
          w-full
          h-full
          object-cover
        "
          />
        </button>
      )}
    </>
  )
}
