import { useEffect, useRef, useState } from "react"

/* =========================================================
   ANIMATION - INTERSECTION OBSERVER
========================================================= */

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold },
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    q: "Bagaimana cara mengajukan surat?",
    a: 'Pilih jenis surat yang Anda butuhkan melalui halaman Layanan Surat, baca persyaratan dengan teliti, lalu klik tombol "Ajukan Surat" di bagian bawah halaman detail. Anda akan diarahkan ke Google Form resmi untuk mengisi data pengajuan.',
  },
  {
    q: "Apa saja dokumen yang harus disiapkan?",
    a: "Dokumen yang diperlukan berbeda-beda sesuai jenis surat. Secara umum, Anda perlu menyiapkan KTP dan Kartu Keluarga. Baca halaman detail setiap jenis surat untuk persyaratan lengkap.",
  },
  {
    q: "Di mana saya mengisi formulir pengajuan?",
    a: 'Formulir pengajuan tersedia melalui tombol "Ajukan Surat" yang ada di halaman detail jenis surat. Tombol tersebut akan mengarahkan Anda ke Google Form resmi Desa Jambangan.',
  },
  {
    q: "Apakah pengajuan surat dilakukan secara online?",
    a: "Pengisian formulir awal dilakukan secara online melalui Google Form. Namun, untuk tanda tangan anda tetap perlu datang ke Kantor Desa Jambangan sesuai prosedur yang berlaku.",
  },
  {
    q: "Apakah pengajuan surat harus dilakukan di balai desa?",
    a: "Pengajuan surat dapat dilakukan secara fleksibel dimana saja, namun untuk tanda tangan harus datang ke balai desa",
  },
  {
    q: "Berapa lama proses pembuatan surat?",
    a: "Lama proses pembuatan surat bervariasi tergantung jenis surat dan kelengkapan data yang diberikan. Umumnya surat dapat selesai dalam 1–2 hari kerja setelah data dinyatakan lengkap dan valid oleh perangkat desa.",
  },
  {
    q: "Bagaimana jika data yang saya masukkan salah?",
    a: "Jika data yang dimasukkan salah, segera hubungi kantor Desa Jambangan melalui kontak yang tersedia. Perangkat desa akan membantu Anda untuk melakukan koreksi sebelum surat diproses lebih lanjut.",
  },
  {
    q: "Apa yang harus dilakukan jika persyaratan belum lengkap?",
    a: "Jangan mengajukan surat sebelum seluruh persyaratan terpenuhi. Kelengkapan dokumen sangat mempengaruhi kecepatan proses. Jika Anda kesulitan memenuhi persyaratan tertentu, konsultasikan dengan perangkat desa.",
  },
  {
    q: "Bagaimana cara mengetahui surat sudah selesai?",
    a: "Jika surat telah selesai, maka surat akan dikirim melalui email pemohon",
  },
]

/* =========================================================
   ICON FAQ
========================================================= */

function QuestionIcon({ index }: { index: number }) {
  const icons = [
    // Document
    <svg
      key="document"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>,

    // Folder
    <svg
      key="folder"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M3 9h18" />
    </svg>,

    // Form
    <svg
      key="form"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </svg>,

    // Globe
    <svg
      key="globe"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>,

    // Clock
    <svg
      key="clock"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>,

    // Edit
    <svg
      key="edit"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>,

    // Checklist
    <svg
      key="check"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
      <path d="M4 4h16" />
      <path d="M4 20h16" />
    </svg>,

    // Bell
    <svg
      key="bell"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>,
  ]

  return icons[index % icons.length]
}

/* =========================================================
   CHEVRON ICON
========================================================= */

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`
        transition-transform
        duration-300
        ${open ? "rotate-180" : "rotate-0"}
      `}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

/* =========================================================
   PHONE ICON
========================================================= */

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 3.18 2 2 0 0 1 4.11 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

/* =========================================================
   EMAIL ICON
========================================================= */

function EmailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Bantuan() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const header = useInView(0.1)
  const list = useInView(0.05)
  const contact = useInView(0.1)

  return (
    <div className="relative px-6 py-12 max-w-2xl mx-auto">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-72
          h-40
          rounded-full
          bg-green-100/30
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

          ${
            header.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
      >
        {/* FAQ Badge */}

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
          <span
            className="
              flex
              items-center
              justify-center
              w-4
              h-4
              rounded-full
              bg-green-500
              text-white
              text-[9px]
              font-bold
            "
          >
            ?
          </span>
          FAQ
        </div>

        <h1
          className="
            font-display
            font-black
            text-green-900
            text-4xl
            mb-3
            tracking-tight
          "
        >
          Bantuan
        </h1>

        <p
          className="
            text-green-600
            max-w-md
            mx-auto
            text-sm
            leading-relaxed
          "
        >
          Temukan jawaban atas pertanyaan yang sering diajukan seputar layanan
          E-SURAT Desa Jambangan.
        </p>
      </div>

      {/* =====================================================
          FAQ ACCORDION
      ===================================================== */}

      <div ref={list.ref} className="space-y-3 relative">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i

          return (
            <div
              key={i}
              className={`
                group
                relative
                bg-white
                rounded-2xl
                border
                overflow-hidden

                transition-all
                duration-500

                ${
                  list.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }

                ${
                  isOpen
                    ? `
                      border-green-300
                      shadow-[0_12px_35px_rgba(22,163,74,0.10)]
                    `
                    : `
                      border-green-100
                      shadow-sm
                      hover:border-green-200
                      hover:shadow-md
                    `
                }
              `}
              style={{
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* =================================================
                  ACTIVE SIDE INDICATOR
              ================================================== */}

              <div
                className={`
                  absolute
                  left-0
                  top-0
                  bottom-0
                  w-[3px]
                  bg-gradient-to-b
                  from-green-400
                  to-emerald-500

                  transition-all
                  duration-300

                  ${isOpen ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* =================================================
                  QUESTION BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-4
                  text-left
                  cursor-pointer
                "
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Icon */}

                  <div
                    className={`
                      flex-shrink-0
                      w-10
                      h-10
                      rounded-xl
                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? `
                            bg-gradient-to-br
                            from-green-500
                            to-emerald-500
                            text-white
                            shadow-[0_6px_15px_rgba(34,197,94,0.20)]
                            scale-105
                          `
                          : `
                            bg-green-50
                            text-green-500
                            group-hover:bg-green-100
                            group-hover:scale-105
                          `
                      }
                    `}
                  >
                    <QuestionIcon index={i} />
                  </div>

                  {/* Question */}

                  <span
                    className={`
                      font-display
                      font-bold
                      text-sm
                      leading-relaxed
                      transition-colors
                      duration-300

                      ${isOpen ? "text-green-800" : "text-green-900"}
                    `}
                  >
                    {faq.q}
                  </span>
                </div>

                {/* =================================================
                    CHEVRON
                ================================================== */}

                <div
                  className={`
                    flex-shrink-0
                    w-8
                    h-8
                    rounded-full
                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? `
                          bg-green-500
                          text-white
                          shadow-sm
                        `
                        : `
                          bg-green-50
                          border
                          border-green-100
                          text-green-500
                          group-hover:bg-green-100
                        `
                    }
                  `}
                >
                  <ChevronIcon open={isOpen} />
                </div>
              </button>

              {/* =================================================
                  ANSWER
              ================================================== */}

              <div
                className="
                  grid
                  transition-[grid-template-rows]
                  duration-400
                  ease-in-out
                "
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div
                    className="
                      px-5
                      pb-5
                      pl-[76px]
                    "
                  >
                    {/* Divider */}

                    <div
                      className="
                        h-px
                        bg-green-100
                        mb-4
                      "
                    />

                    <p
                      className="
                        text-green-700
                        text-sm
                        leading-relaxed
                      "
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* =====================================================
          CONTACT CARD
      ===================================================== */}

      <div
        ref={contact.ref}
        className={`
          relative
          mt-10
          rounded-2xl
          p-6
          border
          border-green-200
          bg-gradient-to-br
          from-green-50
          to-emerald-50
          text-center
          overflow-hidden

          transition-all
          duration-700

          ${
            contact.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
      >
        {/* Decorative glow */}

        <div
          className="
            absolute
            -top-10
            -right-10
            w-32
            h-32
            rounded-full
            bg-green-200/30
            blur-2xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            -bottom-10
            -left-10
            w-28
            h-28
            rounded-full
            bg-emerald-200/30
            blur-2xl
            pointer-events-none
          "
        />

        <div className="relative z-10">
          <div
            className="
              mx-auto
              mb-3
              w-11
              h-11
              rounded-2xl
              bg-white
              border
              border-green-100
              flex
              items-center
              justify-center
              text-green-600
              shadow-sm
            "
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </div>

          <p
            className="
              font-display
              font-bold
              text-green-800
              mb-1
            "
          >
            Masih ada pertanyaan?
          </p>

          <p
            className="
              text-green-600
              text-sm
              mb-5
              leading-relaxed
            "
          >
            Jangan ragu untuk menghubungi kantor Desa Jambangan secara langsung.
          </p>

          {/* =================================================
              CONTACT BUTTONS
          ================================================== */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              justify-center
              items-center
            "
          >
            {/* =================================================
    PHONE / WHATSAPP
================================================== */}

            <a
              href="https://wa.me/62"
              target="_blank"
              rel="noopener noreferrer"
              className="
    group
    flex
    items-center
    gap-2
    px-4
    py-2
    rounded-xl
    bg-white
    border
    border-green-100
    shadow-sm
    transition-all
    duration-300

    hover:-translate-y-0.5
    hover:shadow-md
    hover:border-green-200
  "
            >
              <div
                className="
      w-8
      h-8
      rounded-lg
      bg-green-100
      flex
      items-center
      justify-center
      text-green-600

      transition-all
      duration-300

      group-hover:bg-green-500
      group-hover:text-white
      group-hover:scale-105
    "
              >
                <PhoneIcon />
              </div>

              <span
                className="
      text-sm
      text-green-700
      font-medium
    "
              >
                WhatsApp Desa
              </span>
            </a>

            {/* Divider */}

            <span
              className="
    hidden
    sm:block
    text-green-300
  "
            >
              |
            </span>

            {/* =================================================
                EMAIL - GMAIL
            ================================================== */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=administrasidesajambangan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                bg-white
                border
                border-green-100
                shadow-sm
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-md
                hover:border-green-200
              "
            >
              <div
                className="
                  w-8
                  h-8
                  rounded-lg
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  text-green-600

                  transition-all
                  duration-300

                  group-hover:bg-green-500
                  group-hover:text-white
                  group-hover:scale-105
                "
              >
                <EmailIcon />
              </div>

              <span
                className="
                  text-sm
                  text-green-700
                  font-medium
                  transition-colors
                  duration-300
                  group-hover:text-green-800
                "
              >
                administrasidesajambangan@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
