# AGENTS.md

Instruksi dan aturan teknis untuk agen AI yang bekerja pada repository **Java Fruit (Next.js Site)**.

---

## 1. Overview Project

- **Nama Proyek**: Java Fruit Company Profile Website (`nextjs-site`).
- **Pemilik / Badan Usaha**: CV Intiplant Agro Lestari (Brand: Java Fruit).
- **Bidang Usaha**: Perkebunan, Budidaya, dan Ekspor Pisang Cavendish & Mas Kirana di Lumajang, Jawa Timur.
- **Framework**: Next.js 14 (App Router).
- **Bahasa**: JavaScript (React 18 client & server components).
- **Styling**: Vanilla CSS di `app/globals.css` menggunakan CSS Custom Properties (`:root`). **DILARANG menggunakan TailwindCSS atau CSS-in-JS**.
- **Tipografi**: `next/font/google`: **Poppins** (`--font-poppins`), **Plus Jakarta Sans** (`--font-jakarta`), dan **Fraunces** (`--font-fraunces`). **DILARANG menggunakan font Monospace / code fonts untuk teks UI**.
- **State & Lokalisasi**: `LanguageContext` (`context/LanguageContext.js`) dan kamus terjemahan `content/translations.js` (mendukung bahasa Indonesia `id` dan Inggris `en`).

---

## 2. Build & Verification Commands

- **Development Server**: `npm run dev`
- **Production Build Check**: `npm run build` (Selalu jalankan ini untuk verifikasi kode sebelum menyelesaikan tugas)
- **Production Preview**: `npm start`

---

## 3. Directory Layout & Architecture

- **`app/`**: Next.js App Router root.
  - `app/layout.js`: Layout utama, konfigurasi font Google (`Fraunces`, `Poppins`, `Plus_Jakarta_Sans`), metadata SEO, dan Schema JSON-LD.
  - `app/page.js`: Landing page utama yang merakit seluruh komponen di dalam `LanguageProvider`.
  - `app/globals.css`: Sistem desain CSS global, variabel warna, grid layout, dan media queries responsif.
  - `app/sitemap.js`, `app/robots.js`: SEO dynamic routes.
- **`components/`**: Komponen UI React reusable.
  - `Header.js`: Navigation bar atas, logo brand, drawer menu mobile, toggle bahasa, dan tombol WhatsApp.
  - `Hero.js`: Banner utama, headline, CTA, statistik cepat, dan lencana stempel **Top Brand**.
  - `About.js`: Profil perusahaan, kutipan, dan foto dokumentasi kelompok tani bersama Gubernur.
  - `Advantages.js`: 3 kartu keunggulan utama + kartu pilihan porsi makan sehat bergizi.
  - `Technology.js`: Tahapan teknologi pematangan etilen pasca-panen & panel cold storage.
  - `Benefits.js`: Bento Grid manfaat teknologi (4 kartu dengan ikon SVG sesuai konteks) + tabel komparasi Etilen vs Karbit (tema terang bersih, **tanpa glassmorphism**).
  - `WhyChoose.js`: 4 alasan memilih Java Fruit dengan kartu bergambar.
  - `Stats.js`: Statistik perkebunan (50ha, 7 ton/minggu) & strip foto dokumentasi.
  - `Contact.js`: Detail kontak, peta lokasi Google Maps iframe, dan tautan sosial media.
  - `Footer.js`: Hak cipta dan lokasi perusahaan.
  - `LanguageToggle.js`: Tombol pengubah bahasa (`ID` / `EN`).
  - `ScrollToTop.js`: Tombol melayang kembali ke atas.
- **`context/`**: `LanguageContext.js` menyediakan state `lang`, `setLang`, dan objek terjemahan `t`.
- **`content/`**: `translations.js` berisi objek terjemahan `id` dan `en`.
- **`public/assets/`**: Asset gambar mentah yang dioptimasi (`logo-javafruit.png`, `logo-cv.png`, `hero-bananas.jpg`, dll.).

---

## 4. Design & Typography Guidelines

- **Karakter Visual**: Bersih, alami, profesional, tepercaya, dan cocok untuk profil perusahaan agrikultur (*Corporate Agricultural*). **Dilarang menggunakan efek neon, cyber, atau glassmorphism gelap yang berlebihan**.
- **Token Warna CSS**: Gunakan variabel warna yang sudah ada di `:root`:
  - `--green-deep`: `#184524` (Hijau Tua Utama)
  - `--green-mid`: `#276E3A` (Hijau Sedang)
  - `--gold`: `#E5B217` (Emas Utama)
  - `--gold-soft`: `#F3CD50` (Emas Halus)
  - `--cream`: `#FAF8F3` (Krem Latar Belakang)
  - `--sage`: `#EAF1E7` (Latar Kontainer Halus)
  - `--ink`: `#17221A` (Teks Hitam Alami)
  - `--ink-soft`: `#4D5D50` (Teks Sekunder)
  - `--line`: `#D9E2D4` (Garis Pembatas)
  - `--radius`: `18px` (Radius Sudut Kartu)
- **Hierarki Ukuran Font (Wajib Konsisten)**:
  - **Eyebrow Label**: `font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;`
  - **Judul Utama (`h2`)**: `font-size: clamp(1.85rem, 3.2vw, 2.4rem); line-height: 1.18; color: var(--green-deep);`
  - **Judul Kartu (`h3` / `h4`)**: `font-size: 1.15rem; font-weight: 700; line-height: 1.3; color: var(--green-deep);`
  - **Teks Sub-judul / Lead**: `font-size: 1.02rem; line-height: 1.6; color: var(--ink-soft);`
  - **Teks Deskripsi / Body (`p`)**: `font-size: 0.94rem; line-height: 1.6; color: var(--ink-soft);`
- **Ikon**: Gunakan SVG inline yang presisi dan sesuai konteks pembahasan (misal: daun/tunas untuk pematangan alami, termometer untuk cold storage, perisai centang untuk keamanan pangan).

---

## 5. Responsive Layout Rules

- **Breakpoints Utama**: `@media(max-width: 1024px)`, `@media(max-width: 768px)`, dan `@media(max-width: 640px)`.
- **Kolom Grid Mobile**: Seluruh grid kartu (`cards3`, `bento-grid`, `compare-grid`, `stats-grid`, `why-grid`) wajib berganti ke **1 kolom** pada layar mobile (`< 640px`).
- **Word Wrapping pada Tag**: Komponen label/tag (seperti `.bento-tag`) wajib menggunakan `white-space: normal; word-break: break-word;` agar tidak pernah keluar (*overflow*) dari batas layar mobile.
- **Drawer Menu Mobile**: Pastikan divider pembatas dan padding menu drawer hamburger 100% presisi dan seragam.

---

## 6. Guidelines Lokalisasi (Bilingual)

- Seluruh teks yang tampil ke pengguna **wajib** dideklarasikan di `content/translations.js` untuk bahasa Indonesia (`id`) dan bahasa Inggris (`en`).
- **Dilarang hardcode teks bahasa di dalam JSX komponen**. Selalu konsumsi via `const { t } = useLanguage()`.
- Setiap penambahan fitur atau kartu baru harus memiliki terjemahan di kedua bahasa (`id` & `en`).

---

## 7. Safety & Execution Rules

1. **Verifikasi Wajib**: Jalankan `npm run build` setelah mengubah kode untuk memastikan tidak ada error kompilasi, linting, atau typo CSS.
2. **Penggunaan Komponen Gambar**: Selalu gunakan komponen `<Image>` dari `next/image` untuk seluruh gambar UI agar teroptimasi otomatis (format WebP/AVIF).
3. **Preservasi Kontrak & Struktur**: Jangan mengubah nama properti translation atau kelas CSS global tanpa memperbarui seluruh lokasi penggunaannya.
