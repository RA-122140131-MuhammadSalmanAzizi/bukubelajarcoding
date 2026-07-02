# Instalasi & Setup Proyek

Sebelum menulis satu baris React pun, kamu perlu menyiapkan lingkungan kerja. Bab ini membahas tuntas: apa yang harus dipasang, cara membuat proyek, memahami setiap file yang dihasilkan, dan alur kerja sehari-hari. Menyiapkan lingkungan dengan benar akan menghemat banyak waktu dan frustrasi nanti.

## Prasyarat: Node.js dan npm

React ditulis dengan JavaScript, tetapi alat-alat untuk membangun aplikasi React (menggabungkan file, mengoptimalkan, menjalankan server pengembangan) berjalan di luar browser. Untuk itu kamu butuh **Node.js**.

Node.js adalah "mesin" yang menjalankan JavaScript di komputermu (bukan di browser). Saat memasang Node.js, kamu otomatis mendapat **npm** (Node Package Manager) — alat untuk memasang dan mengelola library, termasuk React itu sendiri.

Cara memeriksa apakah Node.js sudah terpasang, buka terminal dan ketik:

```bash
node --version    # contoh keluaran: v20.11.0
npm --version     # contoh keluaran: 10.2.4
```

Jika muncul nomor versi, berarti sudah terpasang. Jika muncul pesan error "command not found", unduh dan pasang dari situs resmi **nodejs.org** (pilih versi LTS yang stabil). Disarankan Node.js versi 18 ke atas untuk React modern.

> Kenapa perlu Node meski React jalan di browser? Karena selama pengembangan, banyak proses terjadi di komputermu: menggabungkan puluhan file `.jsx` menjadi kode yang dimengerti browser, memperbarui halaman otomatis saat kamu menyimpan, dan memasang library. Semua itu ditangani Node.js.

<!--page-->

## Membuat Proyek React dengan Vite

Dulu orang memakai "Create React App", tetapi kini alat yang disarankan (dan yang dipakai proyekmu) adalah **Vite** — jauh lebih cepat. Vite menyiapkan struktur proyek, server pengembangan yang instan, dan proses build yang optimal.

Untuk membuat proyek baru, jalankan perintah ini di terminal, di folder tempat kamu ingin menyimpan proyek:

```bash
npm create vite@latest
```

Vite akan menanyakan beberapa hal secara interaktif:

1. **Project name** — nama folder proyek, misalnya `aplikasi-saya`.
2. **Select a framework** — pilih **React**.
3. **Select a variant** — pilih **JavaScript** (atau **TypeScript** bila ingin lebih ketat; proyekmu memakai JavaScript).

Setelah selesai, masuk ke folder proyek dan pasang semua library yang dibutuhkan:

```bash
cd aplikasi-saya      # masuk ke folder proyek
npm install           # memasang React dan dependensi lain
```

`npm install` membaca daftar library di file `package.json`, lalu mengunduh semuanya ke folder `node_modules`. Proses ini bisa memakan waktu satu-dua menit pada pertama kali.

> Alternatif satu baris: `npm create vite@latest aplikasi-saya -- --template react` langsung membuat proyek React tanpa pertanyaan interaktif.

<!--page-->

## Memahami Struktur Folder

Setelah proyek dibuat, kamu akan melihat struktur seperti ini. Memahami peran tiap bagian penting agar tidak bingung.

```text
aplikasi-saya/
├── node_modules/       # semua library terpasang (jangan diutak-atik)
├── public/             # aset statis (gambar, favicon) yang disalin apa adanya
├── src/                # KODE UTAMAMU ada di sini
│   ├── assets/         # gambar & aset yang diimpor komponen
│   ├── App.jsx         # komponen utama aplikasi
│   ├── App.css         # gaya untuk App
│   ├── main.jsx        # titik masuk: menempelkan App ke halaman
│   └── index.css       # gaya global
├── index.html          # satu-satunya file HTML
├── package.json        # daftar library & skrip perintah
└── vite.config.js      # konfigurasi Vite
```

Beberapa file yang wajib kamu pahami:

- **`index.html`** — berbeda dari web biasa, di sini hanya ada satu file HTML dengan sebuah `<div id="root"></div>` kosong. Seluruh aplikasi React akan "disuntikkan" ke dalam div ini.
- **`src/main.jsx`** — titik masuk program. Ia mengambil komponen `App` dan menempelkannya ke `#root`.
- **`src/App.jsx`** — komponen utama, tempat aplikasimu dimulai. Di proyek nyata seperti milikmu, `App.jsx` biasanya mengatur routing ke banyak halaman.

Isi `main.jsx` yang khas:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Baris ini berarti: ambil elemen `#root` dari `index.html`, lalu render komponen `App` ke dalamnya.

<!--page-->

## Menjalankan Proyek

Di dalam folder proyek, jalankan server pengembangan:

```bash
npm run dev
```

Vite akan menampilkan alamat lokal, biasanya `http://localhost:5173`. Buka alamat itu di browser, dan kamu akan melihat aplikasimu. Keunggulan Vite: setiap kali kamu menyimpan perubahan pada file, halaman **otomatis diperbarui** tanpa perlu me-refresh manual (disebut Hot Module Replacement).

Perintah penting lain yang ada di `package.json` (bagian `scripts`):

```bash
npm run dev       # menjalankan server pengembangan (dipakai sehari-hari)
npm run build     # membuat versi produksi yang teroptimasi (folder dist/)
npm run preview   # melihat hasil build secara lokal
npm run lint      # memeriksa kualitas kode dengan ESLint
```

Saat aplikasimu siap dipublikasikan, `npm run build` menghasilkan folder `dist/` berisi file statis yang bisa di-*hosting* di mana saja (Vercel, Netlify, GitHub Pages). Proyekmu sendiri memakai skrip `vercel-build` untuk dideploy ke Vercel.

<!--page-->

## Menambah Library

Aplikasi nyata membutuhkan banyak library. Cara memasangnya:

```bash
npm install react-router-dom      # untuk navigasi antar halaman
npm install @supabase/supabase-js # untuk database & autentikasi
npm install lucide-react          # untuk ikon
```

Setelah dipasang, library masuk ke `node_modules` dan tercatat di `package.json`. Kamu tinggal mengimpornya di kode:

```javascript
import { BrowserRouter } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
```

> Catatan tentang `node_modules`: folder ini sangat besar dan tidak pernah di-upload ke GitHub (dicantumkan di `.gitignore`). Siapa pun yang mengunduh proyekmu cukup menjalankan `npm install` untuk membangun ulang folder ini dari `package.json`.

## Editor & Alat Bantu

- **VS Code** (atau editor sejenis) adalah pilihan paling umum.
- Pasang ekstensi yang membantu React: dukungan JSX, ESLint, dan formatter seperti Prettier.
- **ESLint** (sudah termasuk di proyek Vite) memberi peringatan bila ada kode bermasalah — sangat membantu menjaga kualitas.

## Kesalahan Umum Saat Setup

- Menjalankan `npm run dev` **di luar** folder proyek — pastikan sudah `cd` ke folder yang benar.
- Lupa menjalankan `npm install` setelah mengunduh proyek orang lain — akibatnya banyak error "module not found".
- Node.js versi terlalu lama — perbarui ke versi LTS terbaru bila menemui error aneh saat instalasi.

## Ringkasan

- React butuh **Node.js** dan **npm** untuk alat pengembangannya.
- Buat proyek dengan **Vite**: `npm create vite@latest`, pilih React, lalu `npm install`.
- Kode utamamu ada di folder **`src/`**; `main.jsx` menempelkan `App` ke `#root` di `index.html`.
- Jalankan dengan **`npm run dev`**, build dengan **`npm run build`**.
- Pasang library dengan **`npm install nama-library`**.

> Latihan: buat proyek React baru bernama `latihan-react` dengan Vite, jalankan `npm run dev`, lalu ubah teks di `App.jsx` dan lihat perubahannya muncul otomatis di browser.
