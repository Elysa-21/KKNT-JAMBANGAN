export interface JenisSurat {
  id: string;
  nama: string;
  deskripsi: string;
  kegunaan: string;
  persyaratan: string[];
  gformUrl: string;
  icon: string;
  kategoriId: string;
}

export interface Kategori {
  id: string;
  nama: string;
  deskripsi: string;
  icon: string;
  warna: string;
}

const semuaKategori: Kategori[] = [
  {
    id: "keterangan",
    nama: "Surat Keterangan",
    deskripsi: "Surat untuk memberikan keterangan atau pengesahan mengenai kondisi/status tertentu warga.",
    icon: "📄",
    warna: "from-emerald-400 to-green-500",
  },
  {
    id: "permohonan",
    nama: "Surat Permohonan",
    deskripsi: "Surat untuk mengajukan suatu permohonan resmi kepada pihak desa atau instansi lain.",
    icon: "📑",
    warna: "from-teal-400 to-emerald-500",
  },
  {
    id: "pengantar",
    nama: "Surat Pengantar",
    deskripsi: "Surat yang digunakan untuk mengantar atau mendampingi dokumen/keperluan tertentu warga.",
    icon: "📋",
    warna: "from-green-400 to-teal-500",
  },
  {
    id: "pernyataan",
    nama: "Surat Pernyataan",
    deskripsi: "Surat yang memuat pernyataan resmi dari warga yang diketahui/disahkan oleh pihak desa.",
    icon: "📃",
    warna: "from-lime-400 to-green-500",
  },
];

export const kategoriList = semuaKategori.filter(
  (kategori) => kategori.id === "keterangan",
);

const semuaSurat: JenisSurat[] = [
  // SURAT KETERANGAN
  {
    id: "keterangan-domisili",
    nama: "Surat Keterangan Domisili",
    deskripsi: "Surat yang menerangkan bahwa seseorang berdomisili di wilayah Desa Jambangan.",
    kegunaan: "Digunakan untuk keperluan pendaftaran sekolah, pembuatan rekening bank, pendaftaran kerja, dan keperluan administrasi lainnya yang memerlukan bukti domisili.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Fotokopi Kartu Keluarga (KK)",
      "Surat pengantar dari RT/RW setempat",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfaLKVOSAWOndMl01FqzaJQRY4olS028qIsu3SQaSzDH1VAfA/viewform?usp=publish-editor",
    icon: "🏠",
    kategoriId: "keterangan",
  },
  {
    id: "keterangan-usaha",
    nama: "Surat Keterangan Usaha",
    deskripsi: "Surat yang menerangkan bahwa seseorang menjalankan kegiatan usaha di wilayah Desa Jambangan.",
    kegunaan: "Digunakan untuk keperluan pengajuan kredit usaha, pendaftaran UMKM, perizinan usaha, dan keperluan administrasi usaha lainnya.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Fotokopi Kartu Keluarga (KK)",
      "Surat pengantar dari RT/RW setempat",
      "Foto tempat usaha (minimal 2 foto)",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_USAHA_GFORM_URL",
    icon: "🏪",
    kategoriId: "keterangan",
  },
  {
    id: "keterangan-kematian",
    nama: "Surat Keterangan Kematian",
    deskripsi: "Surat yang menerangkan bahwa seseorang telah meninggal dunia di wilayah Desa Jambangan.",
    kegunaan: "Digunakan untuk keperluan pengurusan akta kematian, administrasi ahli waris, penutupan data kependudukan, dan keperluan administrasi lainnya.",
    persyaratan: [
      "Fotokopi KTP almarhum/almarhumah",
      "Fotokopi Kartu Keluarga (KK) almarhum/almarhumah",
      "Fotokopi KTP pelapor",
      "Surat pengantar dari RT/RW setempat",
      "Surat keterangan kematian dari dokter/rumah sakit (jika ada)",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_KEMATIAN_GFORM_URL",
    icon: "file-certificate",
    kategoriId: "keterangan",
  },
  {
    id: "keterangan-tidak-mampu",
    nama: "Surat Keterangan Tidak Mampu",
    deskripsi: "Surat yang menerangkan bahwa seseorang termasuk dalam kategori tidak mampu secara ekonomi.",
    kegunaan: "Digunakan untuk pengajuan beasiswa, keringanan biaya kesehatan, bantuan sosial, dan keperluan lain yang memerlukan bukti ketidakmampuan ekonomi.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Fotokopi Kartu Keluarga (KK)",
      "Surat pengantar dari RT/RW setempat",
      "Fotokopi surat keterangan tidak mampu dari RT (jika ada)",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SKTM_GFORM_URL",
    icon: "📜",
    kategoriId: "keterangan",
  },
  {
    id: "keterangan-belum-menikah",
    nama: "Surat Keterangan Belum Menikah",
    deskripsi: "Surat yang menerangkan bahwa seseorang berstatus belum menikah.",
    kegunaan: "Digunakan untuk keperluan pendaftaran kerja, pendidikan, administrasi pernikahan, atau keperluan resmi lainnya yang memerlukan keterangan status belum menikah.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Fotokopi Kartu Keluarga (KK)",
      "Surat pengantar dari RT/RW setempat",
      "Surat pernyataan belum menikah bermaterai",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_BELUM_MENIKAH_GFORM_URL",
    icon: "👶",
    kategoriId: "keterangan",
  },
  // SURAT PERMOHONAN
  {
    id: "permohonan-umum",
    nama: "Surat Permohonan Umum",
    deskripsi: "Surat permohonan yang digunakan untuk mengajukan keperluan tertentu kepada pihak desa.",
    kegunaan: "Digunakan untuk mengajukan berbagai keperluan administrasi yang memerlukan surat resmi dari desa.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Fotokopi Kartu Keluarga (KK)",
      "Surat pengantar dari RT/RW setempat",
      "Dokumen pendukung sesuai keperluan",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_PERMOHONAN_GFORM_URL",
    icon: "✉️",
    kategoriId: "permohonan",
  },
  {
    id: "permohonan-izin-keramaian",
    nama: "Surat Permohonan Izin Keramaian",
    deskripsi: "Surat permohonan untuk mendapatkan izin penyelenggaraan kegiatan yang bersifat keramaian.",
    kegunaan: "Diperlukan untuk menyelenggarakan hajatan, acara warga, pertunjukan, atau kegiatan yang mengumpulkan banyak orang.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Surat pengantar dari RT/RW setempat",
      "Rincian kegiatan (tanggal, waktu, tempat, jumlah peserta)",
      "Daftar panitia kegiatan",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_IZIN_KERAMAIAN_GFORM_URL",
    icon: "🎉",
    kategoriId: "permohonan",
  },
  // SURAT PENGANTAR
  {
    id: "pengantar-nikah",
    nama: "Surat Pengantar Nikah",
    deskripsi: "Surat pengantar dari desa untuk keperluan pencatatan pernikahan di KUA.",
    kegunaan: "Digunakan sebagai salah satu persyaratan mendaftar pernikahan di Kantor Urusan Agama (KUA) setempat.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Fotokopi Kartu Keluarga (KK)",
      "Surat pengantar dari RT/RW setempat",
      "Fotokopi akta kelahiran",
      "Pas foto 2x3 dan 3x4 masing-masing 4 lembar",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_PENGANTAR_NIKAH_GFORM_URL",
    icon: "💍",
    kategoriId: "pengantar",
  },
  {
    id: "pengantar-skck",
    nama: "Surat Pengantar SKCK",
    deskripsi: "Surat pengantar dari desa untuk keperluan pembuatan Surat Keterangan Catatan Kepolisian (SKCK).",
    kegunaan: "Digunakan sebagai salah satu persyaratan membuat SKCK di Kepolisian setempat.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Fotokopi Kartu Keluarga (KK)",
      "Surat pengantar dari RT/RW setempat",
      "Pas foto terbaru ukuran 4x6 sebanyak 4 lembar",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_PENGANTAR_SKCK_GFORM_URL",
    icon: "🚔",
    kategoriId: "pengantar",
  },
  // SURAT PERNYATAAN
  {
    id: "pernyataan-belum-menikah",
    nama: "Surat Pernyataan Belum Menikah",
    deskripsi: "Surat pernyataan resmi yang menyatakan bahwa seseorang belum pernah menikah.",
    kegunaan: "Diperlukan untuk keperluan pendaftaran sekolah, melamar pekerjaan, atau keperluan administrasi lainnya.",
    persyaratan: [
      "Fotokopi KTP pemohon yang masih berlaku",
      "Fotokopi Kartu Keluarga (KK)",
      "Surat pengantar dari RT/RW setempat",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_BELUM_MENIKAH_GFORM_URL",
    icon: "💼",
    kategoriId: "pernyataan",
  },
  {
    id: "pernyataan-ahli-waris",
    nama: "Surat Pernyataan Ahli Waris",
    deskripsi: "Surat pernyataan yang menerangkan ahli waris yang sah dari seseorang yang telah meninggal dunia.",
    kegunaan: "Digunakan untuk keperluan pengurusan warisan, penutupan rekening, pengalihan hak, dan keperluan hukum lainnya.",
    persyaratan: [
      "Fotokopi KTP semua ahli waris",
      "Fotokopi Kartu Keluarga (KK)",
      "Fotokopi akta kematian",
      "Surat pengantar dari RT/RW setempat",
      "Mengisi formulir permohonan yang tersedia",
    ],
    gformUrl: "#SURAT_AHLI_WARIS_GFORM_URL",
    icon: "📝",
    kategoriId: "pernyataan",
  },
];

export const suratList = semuaSurat.filter(
  (surat) => surat.kategoriId === "keterangan",
);

export function getSuratByKategori(kategoriId: string): JenisSurat[] {
  return suratList.filter((s) => s.kategoriId === kategoriId);
}

export function getSuratById(id: string): JenisSurat | undefined {
  return suratList.find((s) => s.id === id);
}

export function getKategoriById(id: string): Kategori | undefined {
  return kategoriList.find((k) => k.id === id);
}
