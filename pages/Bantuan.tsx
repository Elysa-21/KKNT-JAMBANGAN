import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const faqs = [
  {
    q: "Bagaimana cara mengajukan surat?",
    a: "Pilih jenis surat yang Anda butuhkan melalui halaman Layanan Surat, baca persyaratan dengan teliti, lalu klik tombol \"Ajukan Surat\" di bagian bawah halaman detail. Anda akan diarahkan ke Google Form resmi untuk mengisi data pengajuan.",
  },
  {
    q: "Apa saja dokumen yang harus disiapkan?",
    a: "Dokumen yang diperlukan berbeda-beda sesuai jenis surat. Secara umum, Anda perlu menyiapkan fotokopi KTP, fotokopi Kartu Keluarga, dan surat pengantar dari RT/RW. Baca halaman detail setiap jenis surat untuk persyaratan lengkap.",
  },
  {
    q: "Di mana saya mengisi formulir pengajuan?",
    a: "Formulir pengajuan tersedia melalui tombol \"Ajukan Surat\" yang ada di halaman detail jenis surat. Tombol tersebut akan mengarahkan Anda ke Google Form resmi Desa Jambangan.",
  },
  {
    q: "Apakah pengajuan surat dilakukan secara online?",
    a: "Pengisian formulir awal dilakukan secara online melalui Google Form. Namun, untuk pengambilan surat yang telah selesai diproses, Anda tetap perlu datang ke Kantor Desa Jambangan sesuai prosedur yang berlaku.",
  },
  {
    q: "Berapa lama proses pembuatan surat?",
    a: "Lama proses pembuatan surat bervariasi tergantung jenis surat dan kelengkapan data yang diberikan. Umumnya surat dapat selesai dalam 1–3 hari kerja setelah data dinyatakan lengkap dan valid oleh perangkat desa.",
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
    a: "Informasi penyelesaian surat akan disampaikan melalui mekanisme yang berlaku di Desa Jambangan, seperti pemberitahuan langsung, telepon, atau cara lain yang ditentukan oleh perangkat desa. Anda juga dapat menanyakan status surat dengan menghubungi kantor desa.",
  },
];

export default function Bantuan() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const header = useInView(0.1);
  const list = useInView(0.05);

  return (
    <div className="px-6 py-12 max-w-2xl mx-auto">
      {/* Header */}
      <div ref={header.ref} className={`text-center mb-12 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-display font-semibold tracking-widest uppercase mb-4">
          FAQ
        </span>
        <h1 className="font-display font-black text-green-900 text-4xl mb-3">Bantuan</h1>
        <p className="text-green-600 max-w-md mx-auto text-sm leading-relaxed">
          Temukan jawaban atas pertanyaan yang sering diajukan seputar layanan E-SURAT Desa Jambangan.
        </p>
      </div>

      {/* FAQ accordion */}
      <div ref={list.ref} className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-700 ${list.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${isOpen ? "border-green-300" : "border-green-100"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-display font-bold text-white mt-0.5"
                    style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-display font-bold text-green-900 text-sm">{faq.q}</span>
                </div>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border border-green-200 flex items-center justify-center text-green-600 text-xs transition-all duration-300 ${isOpen ? "bg-green-500 text-white border-green-500 rotate-180" : "bg-green-50"}`}
                >
                  ▼
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? "300px" : "0px" }}
              >
                <div className="px-5 pb-4 pt-0 ml-9">
                  <p className="text-green-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact card */}
      <div className="mt-10 rounded-2xl p-6 border border-green-200 bg-green-50 text-center">
        <p className="font-display font-bold text-green-800 mb-1">Masih ada pertanyaan?</p>
        <p className="text-green-600 text-sm mb-4">Jangan ragu untuk menghubungi kantor Desa Jambangan secara langsung.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-green-700">
          <span>📞 [NOMOR KONTAK DESA]</span>
          <span className="hidden sm:block text-green-300">|</span>
          <span>📧 [EMAIL DESA]</span>
        </div>
      </div>
    </div>
  );
}
