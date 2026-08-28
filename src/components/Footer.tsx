import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import logoMagetan from "../imports/logo_magetan.jpg"

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/alur-surat", label: "Alur Surat" },
  { to: "/layanan", label: "Layanan Surat" },
  { to: "/about", label: "Tentang Kami" },
  { to: "/bantuan", label: "Bantuan" },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

/* =========================================================
   CONTACT ICON
========================================================= */

function ContactIcon({ type }: { type: "email" | "phone" | "location" }) {
  if (type === "email") {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    )
  }

  if (type === "phone") {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 3.5h2.2c.5 0 .9.3 1 .8l.8 3.1c.1.4 0 .8-.3 1.1L9.2 10a14.5 14.5 0 0 0 4.8 4.8l1.5-1.5c.3-.3.7-.4 1.1-.3l3.1.8c.5.1.8.5.8 1V17c0 1.1-.9 2-2 2C10.5 19 5 13.5 5 6.5c0-1.7.9-3 2-3Z" />
      </svg>
    )
  }

  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const footer = useInView(0.05)

  return (
    <footer
      ref={footer.ref}
      className="
        relative
        mt-auto
        overflow-hidden

        bg-gradient-to-br
        from-green-700
        via-green-600
        to-emerald-600

        border-t
        border-green-500
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-28
          left-1/2
          -translate-x-1/2

          w-[550px]
          h-[220px]

          rounded-full

          bg-green-300/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          -left-20

          w-72
          h-72

          rounded-full

          bg-emerald-300/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-20

          w-80
          h-80

          rounded-full

          bg-green-300/20
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        {/* TOP LINE */}

        <div
          className={`
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            h-[2px]

            bg-gradient-to-r
            from-transparent
            via-green-200
            to-transparent

            transition-all
            duration-[1200ms]
            ease-out

            ${footer.visible ? "w-full opacity-100" : "w-0 opacity-0"}
          `}
        />

        {/* =================================================
            CONTENT GRID
        ================================================== */}

        <div
          className={`
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10

            transition-all
            duration-1000

            ${
              footer.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              {/* LOGO */}

              <div className="relative w-12 h-12 flex-shrink-0">
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-green-200/30
                    blur-md
                    scale-75
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    w-12
                    h-12
                    rounded-full
                    overflow-hidden

                    bg-white

                    border
                    border-white/50

                    shadow-[0_5px_18px_rgba(0,0,0,0.12)]

                    transition-all
                    duration-500

                    group-hover:-translate-y-1
                    group-hover:rotate-3
                  "
                >
                  <img
                    src={logoMagetan}
                    alt="Logo Magetan"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>
              </div>

              {/* BRAND NAME */}

              <div>
                <p
                  className="
                    font-display
                    font-black
                    text-[17px]
                    leading-none
                    text-white
                  "
                >
                  E-SURAT
                </p>

                <p
                  className="
                    mt-1
                    text-green-100
                    text-[11px]
                    font-semibold
                    tracking-wide
                  "
                >
                  Desa Jambangan
                </p>
              </div>
            </div>

            <p
              className="
                text-sm
                text-green-50/90
                leading-relaxed
                max-w-xs
              "
            >
              Portal informasi pelayanan surat Desa Jambangan. Mudah, jelas, dan
              transparan.
            </p>

            {/* STATUS */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                mt-5

                px-3
                py-1.5

                rounded-full

                bg-white/10
                border
                border-white/20

                backdrop-blur-sm
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
                    bg-green-200
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
                    bg-green-100
                  "
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  text-green-50
                  tracking-wide
                "
              >
                Layanan Digital Desa
              </span>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>
            <p
              className="
                font-display
                font-bold
                text-white
                mb-4
                text-sm
              "
            >
              Navigasi
            </p>

            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li
                  key={item.to}
                  className={`
                    transition-all
                    duration-500

                    ${
                      footer.visible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }
                  `}
                  style={{
                    transitionDelay: `${200 + index * 70}ms`,
                  }}
                >
                  <Link
                    to={item.to}
                    onClick={() => {
                      if (item.to === "/home") {
                        window.dispatchEvent(new Event("play-home-video-audio"))
                      }
                    }}
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-3

                      w-fit

                      py-1.5

                      text-sm
                      text-green-50/90

                      transition-all
                      duration-300

                      hover:text-white
                      hover:translate-x-1
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

                        bg-white/10

                        text-green-100
                        text-[10px]

                        transition-all
                        duration-300

                        group-hover:bg-white
                        group-hover:text-green-600
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>

                    {item.label}

                    <span
                      className="
                        absolute
                        left-8
                        -bottom-0.5

                        h-px
                        w-0

                        bg-white

                        transition-all
                        duration-300

                        group-hover:w-[calc(100%-2rem)]
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <p
              className="
                font-display
                font-bold
                text-white
                mb-4
                text-sm
              "
            >
              Hubungi Kami
            </p>

            <div className="space-y-3">
              {/* EMAIL */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=administrasidesajambangan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-2
                  -mx-2
                  rounded-xl

                  transition-all
                  duration-300

                  hover:bg-white/10
                "
              >
                <div
                  className="
                    flex-shrink-0
                    w-9
                    h-9

                    rounded-xl

                    bg-white/10
                    border
                    border-white/20

                    flex
                    items-center
                    justify-center

                    text-green-50

                    transition-all
                    duration-300

                    group-hover:bg-white
                    group-hover:text-green-600
                    group-hover:-translate-y-0.5
                  "
                >
                  <ContactIcon type="email" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-widest
                      font-bold
                      text-green-200
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      text-sm
                      text-green-50
                      mt-0.5
                    "
                  >
                    administrasidesajambangan@gmail.com
                  </p>
                </div>
              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-2
                  -mx-2
                  rounded-xl

                  transition-all
                  duration-300

                  hover:bg-white/10
                "
              >
                <div
                  className="
                    flex-shrink-0
                    w-9
                    h-9

                    rounded-xl

                    bg-white/10
                    border
                    border-white/20

                    flex
                    items-center
                    justify-center

                    text-green-50

                    transition-all
                    duration-300

                    group-hover:bg-white
                    group-hover:text-green-600
                    group-hover:-translate-y-0.5
                  "
                >
                  <ContactIcon type="phone" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-widest
                      font-bold
                      text-green-200
                    "
                  >
                    WhatsApp
                  </p>

                  <p
                    className="
                      text-sm
                      text-green-50
                      mt-0.5
                    "
                  >
                    Hubungi Desa Jambangan
                  </p>
                </div>
              </a>

              {/* LOCATION */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.%20Karya%20Bhakti%20No.%2028%2C%20Jambangan%2C%20Kecamatan%20Kawedanan%2C%20Kabupaten%20Magetan%2C%20Jawa%20Timur%2063382"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-2
                  -mx-2
                  rounded-xl

                  transition-all
                  duration-300

                  hover:bg-white/10
                "
              >
                <div
                  className="
                    flex-shrink-0
                    w-9
                    h-9

                    rounded-xl

                    bg-white/10
                    border
                    border-white/20

                    flex
                    items-center
                    justify-center

                    text-green-50

                    transition-all
                    duration-300

                    group-hover:bg-white
                    group-hover:text-green-600
                    group-hover:-translate-y-0.5
                  "
                >
                  <ContactIcon type="location" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-widest
                      font-bold
                      text-green-200
                    "
                  >
                    Lokasi
                  </p>

                  <p
                    className="
                      text-sm
                      text-green-50
                      mt-0.5
                      leading-relaxed
                    "
                  >
                    Jl. Karya Bhakti No. 28, Jambangan, Kecamatan Kawedanan,
                    Kabupaten Magetan, Jawa Timur (Kode Pos 63382)
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div
          className={`
            relative
            mt-10
            pt-6

            border-t
            border-white/15

            flex
            flex-col
            sm:flex-row

            items-center
            justify-between

            gap-3

            transition-all
            duration-1000
            delay-500

            ${
              footer.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          <p
            className="
              text-xs
              text-green-100/80
              text-center
              sm:text-left
            "
          >
            © 2026 Desa Jambangan. Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-green-200
              "
            />

            <p
              className="
                text-xs
                text-green-100/80
                font-medium
              "
            >
              E-SURAT — Layanan Surat Desa Jambangan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
