/**
 * Data & konten website Catering Watiyem — Magetan, Jawa Timur.
 * Seluruh teks mengikuti Panduan Website & SEO Lokal Catering Watiyem.
 */

export const BISNIS = {
  nama: "Catering Watiyem",
  tagline: "Jasa Catering Makanan Lezat & Murah di Magetan",
  subTagline:
    "Nasi Box, Prasmanan, Catering Harian, dan Snack Box — dimasak fresh setiap hari untuk acara syukuran, acara kantor, keluarga, dan mahasiswa di Magetan dan sekitarnya.",
  telepon: "+62 857-0680-0961",
  waNumber: "6285706800961",
  alamat:
    "Setro, Tebon, Kec. Barat, Kabupaten Magetan, Jawa Timur 63395",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Catering+Watiyem+Setro+Tebon+Magetan",
  jam: "Setiap hari, 07.00–20.00 WIB",
  area:
    "Magetan & sekitarnya (± 20 km): Maospati, Sukomoro, Kawedanan, Parang, Bendo, Panekan, Nguntoronadi",
} as const;

/** Membuat tautan WhatsApp dengan pesan otomatis terisi. */
export function waLink(pesan: string): string {
  return `https://wa.me/${BISNIS.waNumber}?text=${encodeURIComponent(pesan)}`;
}

export const PESAN_WA = {
  umum: waLink(
    "Halo Catering Watiyem 🙏\nSaya mau tanya-tanya dulu tentang catering untuk acara saya di Magetan. Boleh dikirim menu dan harga terbaru? Terima kasih!"
  ),
  nasiBox: waLink(
    "Halo Catering Watiyem 🙏\nSaya mau pesan *Nasi Box* untuk acara:\n• Tanggal acara: \n• Jumlah box: \n• Paket (Hemat/Standar/Premium): \n• Lokasi pengantaran: \nMohon info total harga dan ketersediaan tanggalnya ya. Terima kasih!"
  ),
  prasmanan: waLink(
    "Halo Catering Watiyem 🙏\nSaya mau konsultasi *Prasmanan* untuk acara kantor/instansi:\n• Nama instansi: \n• Tanggal acara: \n• Estimasi jumlah pax: \n• Budget per pax: \n• Lokasi acara: \nMohon dibantu rekomendasi menu terbaiknya ya. Terima kasih!"
  ),
  harian: waLink(
    "Halo Catering Watiyem 🙏\nSaya tertarik *Catering Harian* (langganan makan siang):\n• Nama: \n• Alamat pengantaran: \n• Waktu makan siang yang diinginkan: \n• Mulai langganan: \n• Alergi / menu yang dihindari: \nMohon info paket mingguannya ya. Terima kasih!"
  ),
  snackBox: waLink(
    "Halo Catering Watiyem 🙏\nSaya mau pesan *Snack Box* untuk rapat/seminar:\n• Tanggal: \n• Jumlah box: \n• Pilihan isi (risoles/pastel/lumpia/campur): \n• Lokasi: \nMohon info harga dan minimal ordernya ya. Terima kasih!"
  ),
  syukuran: waLink(
    "Halo Catering Watiyem 🙏\nSaya mau tanya paket *syukuran/tumpengan*:\n• Tanggal acara: \n• Perkiraan jumlah tamu: \n• Lokasi: \nMohon info paket dan harganya ya. Terima kasih!"
  ),
};

export type Layanan = {
  id: string;
  nama: string;
  hargaMulai: string;
  satuan: string;
  minOrder: string;
  deskripsi: string;
  gambar: string;
  alt: string;
  cocok: string[];
  wa: string;
};

export const LAYANAN: Layanan[] = [
  {
    id: "nasi-box",
    nama: "Nasi Box",
    hargaMulai: "Rp 15.000",
    satuan: "/box",
    minOrder: "Min. 20 box",
    deskripsi:
      "Jawaban praktis untuk rapat kantor, acara syukuran, pengajian, hingga seminar di Magetan. Setiap box berisi nasi hangat, lauk pilihan, sayur segar, sambal, dan kerupuk — dimasak fresh di pagi harinya.",
    gambar: "/images/nasi-box.jpg",
    alt: "Nasi box catering Magetan berisi nasi kuning, ayam, dan lauk pendamping dari Catering Watiyem",
    cocok: ["Rapat kantor", "Syukuran", "Pengajian", "Seminar"],
    wa: PESAN_WA.nasiBox,
  },
  {
    id: "prasmanan",
    nama: "Prasmanan Acara",
    hargaMulai: "Rp 28.000",
    satuan: "/pax",
    minOrder: "Min. 50 pax",
    deskripsi:
      "Paket lengkap untuk gathering, halal bihalal, dan acara kantor: nasi, lauk utama, sayur, sambal, hingga dessert dan minuman. Stand prasmanan dirapikan dengan etalase tertutup agar tetap higienis sepanjang acara.",
    gambar: "/images/prasmanan.jpg",
    alt: "Stand prasmanan buffet catering acara kantor di Magetan oleh Catering Watiyem",
    cocok: ["Acara kantor", "Halal bihalal", "Gathering", "Syukuran besar"],
    wa: PESAN_WA.prasmanan,
  },
  {
    id: "harian",
    nama: "Catering Harian",
    hargaMulai: "Rp 25.000",
    satuan: "/hari",
    minOrder: "Min. 5 hari",
    deskripsi:
      "Langganan makan siang untuk karyawan, anak kos, dan keluarga di area Magetan. Menu berganti setiap hari Senin–Sabtu, dimasak pagi hari, dan diantar tepat waktu sekitar pukul 11.00.",
    gambar: "/images/harian.jpg",
    alt: "Menu catering harian makan siang rumahan Magetan dari Catering Watiyem",
    cocok: ["Karyawan", "Anak kos", "Mahasiswa", "Keluarga"],
    wa: PESAN_WA.harian,
  },
  {
    id: "snack-box",
    nama: "Snack Box",
    hargaMulai: "Rp 8.000",
    satuan: "/box",
    minOrder: "Min. 30 box",
    deskripsi:
      "Snack box untuk coffee break rapat, seminar, dan pelatihan di Magetan. Risoles, pastel, lumpia, dan kudapan lain dibuat pada hari yang sama sehingga tetap renyah sampai sesi terakhir acara Anda.",
    gambar: "/images/snack-box.jpg",
    alt: "Snack box risoles dan pastel untuk coffee break seminar dari Catering Watiyem Magetan",
    cocok: ["Coffee break", "Seminar", "Pelatihan", "Rapat"],
    wa: PESAN_WA.snackBox,
  },
];

export type PaketMenu = {
  nama: string;
  harga: string;
  isi: string;
};

export const MENU_TABS: Record<string, { label: string; catatan: string; paket: PaketMenu[] }> = {
  "nasi-box": {
    label: "Nasi Box",
    catatan: "Semua paket termasuk box kuat, sendok + tissue, dan stiker label menu. Pilihan lauk bisa ditukar antar paket.",
    paket: [
      {
        nama: "Hemat",
        harga: "Rp 15.000",
        isi: "Nasi · ayam bumbu kuning (½) · tempe orek · sayur capcay · sambal · kerupuk",
      },
      {
        nama: "Standar",
        harga: "Rp 18.000",
        isi: "Nasi · ayam semur (½) · perkedel · sayur asem · sambal terasi · kerupuk",
      },
      {
        nama: "Premium",
        harga: "Rp 22.000",
        isi: "Nasi · ayam bumbu rujak (1) · telur balado · tempe bacem · sayur lodeh · sambal teri kacang · kerupuk · buah potong",
      },
    ],
  },
  prasmanan: {
    label: "Prasmanan",
    catatan: "Harga termasuk etalase/box buffet dan alat makan sekali pakai. Tumpengan grand + Rp 350.000/unit.",
    paket: [
      {
        nama: "Prasmanan 1",
        harga: "Rp 28.000/pax",
        isi: "Nasi putih · ayam bumbu kecap · sayur asem · tempe orek · sambal · kerupuk · air mineral gelas",
      },
      {
        nama: "Prasmanan 2",
        harga: "Rp 35.000/pax",
        isi: "Nasi putih · ayam goreng bumbu · semur telur · sayur capcay · perkedel · sambal · kerupuk · pudding",
      },
      {
        nama: "Prasmanan 3",
        harga: "Rp 45.000/pax",
        isi: "Nasi kuning · ayam bumbu rujak · rendang/semur daging · udang sambal goreng · sayur · telur balado · emping · fruit punch · dessert",
      },
    ],
  },
  harian: {
    label: "Catering Harian",
    catatan: "Menu berganti setiap hari (Senin–Sabtu), diantar jam 11.00–12.00. Contoh rotasi: ayam kecap, telur balado, ayam bumbu kuning, tempe bacem, ikan tongkol sambal.",
    paket: [
      {
        nama: "Harian Lepas",
        harga: "Rp 27.500/hari",
        isi: "Nasi + lauk + sayur + sambal, pesan per hari (konfirmasi H-1 pukul 21.00)",
      },
      {
        nama: "Mingguan (6 hari)",
        harga: "Rp 150.000/mgg",
        isi: "Hemat ±10%, menu Senin–Sabtu berganti, diantar tepat waktu",
      },
      {
        nama: "Bulanan (24 hari)",
        harga: "Rp 560.000/bln",
        isi: "Hemat ±15%, bebas tukar menu, berhenti kapan saja tanpa denda",
      },
    ],
  },
  "snack-box": {
    label: "Snack Box",
    catatan: "Menu satuan untuk rapat kecil juga tersedia: lemper Rp 2.500, risoles Rp 3.000, pastel Rp 3.000 (min. 20 pcs per jenis).",
    paket: [
      {
        nama: "Manis-Gurih 2",
        harga: "Rp 8.000",
        isi: "2 snack pilihan (risoles / pastel / lumpia / pisang goreng) + tissue",
      },
      {
        nama: "Kombi 3",
        harga: "Rp 10.000",
        isi: "3 snack campur + teh kotak / air mineral 220 ml + tissue",
      },
      {
        nama: "Premium 3+",
        harga: "Rp 13.000",
        isi: "3 snack premium (risoles ragout, pastel ayam, mini burger) + jus kemasan + napkin & stiker acara",
      },
    ],
  },
};

export const KEUNGGULAN = [
  {
    judul: "Dimasak Fresh Setiap Hari",
    teks: "Tidak ada masakan stok semalam — bumbu diracik sendiri setiap subuh seperti masakan rumah.",
    ikon: "flame",
  },
  {
    judul: "Harga Bersahabat",
    teks: "Nasi box mulai Rp15 ribu dan snack box mulai Rp8 ribu — pas untuk budget kantor, keluarga, dan mahasiswa.",
    ikon: "wallet",
  },
  {
    judul: "Tepat Waktu",
    teks: "Makanan datang sebelum acara dimulai. Packing rapi, susunan box siap dibagikan.",
    ikon: "clock",
  },
  {
    judul: "Menu Fleksibel",
    teks: "Bisa request menu, budget, sampai level pedas. Kirim anggaran Anda, kami bantu susun kombinasi terbaik.",
    ikon: "utensils",
  },
  {
    judul: "Porsi Mantap & Higienis",
    teks: "Porsi jujur tidak pelit, dapur bersih, dan kemasan tertutup rapat sampai tangan penerima.",
    ikon: "shield",
  },
  {
    judul: "Pesan Gampang",
    teks: "Cukup chat WhatsApp — pesan sudah terisi otomatis, tanpa aplikasi, tanpa ribet.",
    ikon: "chat",
  },
] as const;

export const ALUR_PESAN = [
  {
    judul: "Chat WhatsApp",
    teks: "Klik tombol hijau — pesan sudah terisi otomatis. Tinggal kirim!",
  },
  {
    judul: "Konsultasi Menu",
    teks: "Pilih paket siap jadi atau custom sesuai budget dan jumlah tamu.",
  },
  {
    judul: "DP & Jadwal",
    teks: "DP 50% untuk mengunci tanggal, perubahan pesanan fleksibel sampai H-2.",
  },
  {
    judul: "Kami Masak & Antar",
    teks: "Makanan datang tepat waktu di lokasi acara Anda, siap disajikan.",
  },
] as const;

export const TESTIMONI = [
  {
    nama: "Rina",
    asal: "Staf Kantor Kab. Magetan",
    teks: "Nasi boxnya ludes duluan di rapat kerja! Ayam semurnya empuk dan bumbunya nampol. Tim kami sudah repeat order tiga kali bulan ini.",
  },
  {
    nama: "Pak Budi",
    asal: "Warga Kec. Barat",
    teks: "Tumpengan syukuran rumah jadi lancar. Ibu Watiyem responsif banget di WA, menunya disesuaikan dengan budget kami. Recommended!",
  },
  {
    nama: "Dimas",
    asal: "Mahasiswa Magetan",
    teks: "Langganan catering harian satu bulan, menu ganti-ganti terus jadi nggak bosan. Harga paling bersahabat buat anak kos.",
  },
  {
    nama: "Ibu Ratna",
    asal: "Admin Instansi",
    teks: "Prasmanan 80 pax untuk acara kantor selesai tepat waktu, semua peserta puas. Penataan stand rapi dan petugasnya ramah.",
  },
  {
    nama: "Mbak Sari",
    asal: "Panitia Seminar",
    teks: "Snack box untuk seminar kami aman — sampai sesi kedua masih renyah. Pastel dan risolesnya jadi bahan pujian peserta.",
  },
  {
    nama: "Keluarga Bu Sri",
    asal: "Magetan Kota",
    teks: "Pesan mendadak H-1 tetap dilayani ramah. Porsi pas tidak pelit, dan pengantaran lebih awal dari jadwal. Terima kasih!",
  },
] as const;

export const FAQ = [
  {
    q: "Berapa minimal order-nya?",
    a: "Nasi Box minimal 20 box, Prasmanan minimal 50 pax, Snack Box minimal 30 box, dan Catering Harian cukup mulai langganan 5 hari. Di bawah jumlah itu tetap bisa kita bahas — kadang slot dapur sedang longgar.",
  },
  {
    q: "Apakah melayani di luar kota Magetan?",
    a: "Kami melayani Magetan dan sekitarnya hingga radius ± 20 km: Maospati, Sukomoro, Kawedanan, Parang, Bendo, Panekan, Nguntoronadi, dan sekitarnya. Di luar radius itu silakan chat dulu — biasanya masih bisa diatur dengan penyesuaian ongkos antar.",
  },
  {
    q: "Berapa hari sebelum acara harus memesan?",
    a: "Idealnya H-3 agar pilihan menu lengkap dan bahan terbaik bisa kami siapkan. Untuk nasi box dan snack box, pesanan mendadak H-1 sering masih bisa kami tampung selama slot dapur tersedia — langsung chat saja.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "DP 50% untuk mengunci tanggal pesanan Anda, sisanya dilunasi saat pengantaran. Pembayaran via transfer bank atau tunai saat serah terima. Untuk instansi yang butuh faktur dan pembayaran tempo, tersedia juga — sebutkan saat chat.",
  },
  {
    q: "Bisakah menu disesuaikan budget atau selera?",
    a: "Sangat bisa. Kirimkan jumlah tamu dan budget per pax Anda, kami bantu susun kombinasi menu terbaik yang pas — mulai dari tingkat pedas sampai menu yang ingin dihindari (alergi, vegetarian, dsb.).",
  },
  {
    q: "Apakah menyediakan tumpengan untuk syukuran?",
    a: "Tersedia. Tumpengan grand lengkap dengan lauk-pauk komplit Rp 350.000/unit, biasanya dipadukan prasmanan atau nasi box untuk tamu. Ada juga paket bundling syukuran mulai Rp 1.450.000 untuk 50 tamu.",
  },
  {
    q: "Apakah alat makan termasuk?",
    a: "Ya. Nasi box sudah termasuk box kuat, sendok, tissue, dan stiker label menu. Prasmanan termasuk piring, gelas, alat makan sekali pakai, dan etalase buffet. Tidak ada biaya tersembunyi di belakangnya.",
  },
  {
    q: "Bagaimana kalau pesanan ingin diubah atau dibatalkan?",
    a: "Perubahan jumlah atau menu masih bisa dilakukan sampai H-2 sebelum acara. Untuk pembatalan, DP dikembalikan penuh bila info masuk lebih dari 3 hari sebelum acara — kami hanya menahan biaya bahan yang sudah dibeli.",
  },
] as const;
