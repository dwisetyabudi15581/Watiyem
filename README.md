# Watiyem — Sambal Pecel Madiun & Katering

Website untuk **Watiyem**, dapur rumahan di Magetan, Jawa Timur yang menjual **sambal pecel Madiun kering** (dijual per gram, 500 gram Rp25.000) dan **jasa katering**. Dibangun dengan fokus pada **SEO lokal**, **pesan langsung via WhatsApp**, dan **pengalaman mobile-first** untuk pelanggan di Magetan dan sekitarnya.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8) ![License](https://img.shields.io/badge/Usage-Bisnis%20Pribadi-orange)

---

## Tentang Bisnis

| | |
|---|---|
| **Nama** | Watiyem — Sambal Pecel Madiun & Katering |
| **Area layanan** | Magetan dan sekitarnya, Jawa Timur (sambal pecel: kirim se-Indonesia) |
| **Alamat** | Setro, Tebon, Kec. Barat, Kabupaten Magetan, Jawa Timur 63395 |
| **Plus Code** | 6P4HCFR3+4M |
| **Kontak** | WhatsApp / Telepon: +62 857-0680-0961 |

### Produk & Layanan

- 🌶️ **Sambal Pecel Madiun (Kering)** — Rp 25.000/500 gram, dijual bebas per gram (mulai 100 gr Rp 5.000), tinggal seduh air panas — bisa kirim se-Indonesia via JNE/J&T
- 🍱 **Nasi Box** — mulai Rp 15.000/box, cocok untuk rapat kantor & acara kantor
- 🍽️ **Prasmanan** — mulai Rp 28.000/pax untuk acara syukuran & gathering
- 📅 **Catering Harian** — mulai Rp 25.000/hari untuk kebutuhan rutin
- 🍰 **Snack Box** — mulai Rp 8.000/box untuk coffee break & seminar

Target pengunjung website: panitia syukuran & kodhongan, perusahaan/instansi yang mengadakan acara, keluarga, dan mahasiswa.

---

## Fitur Website

- **Hero section** dengan headline SEO lokal + tombol WhatsApp langsung order
- **5 kartu produk & layanan** dengan foto dan tombol WA per layanan (pesan sudah terisi otomatis)
- **Menu interaktif** dengan tab per kategori (Sambal Pecel / Nasi Box / Prasmanan / Harian / Snack Box) lengkap dengan harga
- **Galeri foto** & section **Tentang Kami** (profil Bu Watiyem)
- **Peta Google Maps** embed dengan pin lokasi persis
- **Alur pemesanan 4 langkah** + banner paket nasi tumpeng
- **Testimoni pelanggan** (6 ulasan — ganti dengan testimoni asli saat live)
- **FAQ accordion** 11 pertanyaan yang sering ditanyakan calon pelanggan
- **Tombol WhatsApp mengambang** di semua halaman
- **SEO on-page**: meta title & description, Open Graph, 18 keyword lokal, JSON-LD schema `FoodEstablishment`
- **Responsive** — tampil optimal di HP (mayoritas pengunjung) dan desktop

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** (App Router) + React 19
- **TypeScript**
- **Tailwind CSS 4** dengan custom brand colors (`--color-brand`, `--color-wa`)
- **shadcn/ui** components
- **wa.me deep-link** untuk auto-message WhatsApp

---

## Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser
# http://localhost:3000
```

Build produksi:

```bash
npm run build
npm run start
```

---

## Struktur Proyek

```
├── public/
│   ├── images/              # Foto hero, layanan, tumpeng
│   ├── robots.txt           # Crawl rules
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Metadata SEO + JSON-LD schema
│   │   ├── page.tsx         # Halaman utama (assembled)
│   │   └── globals.css      # Tailwind + brand colors
│   ├── components/
│   │   └── catering/        # Header, Hero, Layanan, Menu,
│   │                        # Testimoni, CTA+FAQ, Footer, FloatingWA
│   └── lib/
│       └── catering-data.ts # SEMUA konten & harga di sini
└── download/
    └── Panduan-Website-Catering-Watiyem.pdf   # Panduan lengkap 29 halaman
```

## Cara Mengubah Konten

> **Penting:** Semua teks, harga, nomor WA, dan template pesan terpusat di **satu file**: [`src/lib/catering-data.ts`](src/lib/catering-data.ts)

| Ingin mengubah... | Ubah di... |
|---|---|
| Harga menu | `MENU_TABS` di `catering-data.ts` |
| Template pesan WhatsApp | `PESAN_WA` di `catering-data.ts` |
| Nomor telepon / alamat | `BISNIS` di `catering-data.ts` |
| Testimoni (ganti jadi yang asli!) | `TESTIMONI` di `catering-data.ts` |
| Foto menu | Ganti file di `public/images/` (nama sama) |
| Warna brand | `globals.css` → `@theme` |

---

## Panduan Lengkap

Dokumen **`download/Panduan-Website-Catering-Watiyem.pdf`** (29 halaman) berisi:

1. Strategi & positioning bisnis
2. Sitemap dan layout homepage
3. Copywriting SEO lengkap + template pesan WhatsApp
4. Struktur menu & harga
5. Panduan pendaftaran **Google Search Console** (sitemap, robots.txt)
6. Panduan **Google Business Profile** & Google Maps
7. Checklist SEO lokal + JSON-LD
8. FAQ + **rencana aksi 30 hari**

## Deployment

Proyek ini sudah ter-deploy di **Vercel**:

1. Push ke GitHub → Vercel auto-deploy
2. Atau deploy manual: `npx vercel` dari direktori proyek
3. Domain custom bisa ditambahkan di dashboard Vercel → Settings → Domains

---

## Kontak

Pertanyaan tentang bisnis: **+62 857-0680-0961** (WhatsApp)

---

© Watiyem — Sambal Pecel Madiun & Katering, Magetan, Jawa Timur
