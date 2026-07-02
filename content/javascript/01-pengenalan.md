# Pengenalan JavaScript

JavaScript (sering disingkat JS) adalah bahasa pemrograman utama untuk **web**. Awalnya hanya berjalan di dalam browser untuk membuat halaman menjadi interaktif, kini juga berjalan di server lewat **Node.js**. Semua framework front-end modern — termasuk **React** — dibangun di atas JavaScript.

## Kenapa JavaScript Penting untuk React?

React bukan bahasa baru; React adalah **library JavaScript**. Semua yang kamu tulis di React sebenarnya JavaScript:

- Komponen React adalah **fungsi JavaScript** yang mengembalikan tampilan.
- Menampilkan daftar memakai **method array** (`map`).
- Mengambil data dari server memakai **async/await** dan `fetch`.
- Mengirim data antar komponen memakai **object** dan **destructuring**.

Artinya: semakin kuat JavaScript-mu, semakin mudah React terasa. Itulah kenapa materi ini fokus ke JavaScript modern (ES6+) yang dipakai di React.

<!--page-->

## Di Mana JavaScript Berjalan?

- **Di browser** — mengatur tombol, form, animasi, dan seluruh interaksi halaman.
- **Di server (Node.js)** — membangun backend, API, dan menjalankan alat seperti Vite (yang dipakai proyek React).

## Program Pertama

`console.log()` menampilkan sesuatu ke konsol (mirip `print` di Python):

```javascript
console.log("Halo, Dunia!");
```

Cara paling cepat mencobanya: buka browser, tekan **F12** untuk membuka Developer Tools, pilih tab **Console**, ketik kode di sana, lalu Enter.

> Dipakai di React: `console.log()` adalah alat debugging paling sering dipakai untuk mengecek isi variabel atau props saat aplikasi berjalan.

<!--page-->

## Menaruh JavaScript di Halaman

Dalam HTML biasa, JavaScript ditaruh di tag `<script>`:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Halaman Saya</h1>
    <script src="app.js"></script>
  </body>
</html>
```

Namun di proyek React modern (dengan **Vite**), kamu jarang menulis HTML seperti ini. Struktur proyek sudah diatur, dan kamu menulis kode di file `.jsx`. Perintah `npm run dev` menjalankan server pengembangan.

## Komentar & Titik Koma

```javascript
// komentar satu baris

/*
  komentar
  banyak baris
*/

let x = 5;   // titik koma di akhir pernyataan
```

Titik koma bersifat opsional (JavaScript menyisipkannya otomatis), tetapi kebiasaan menuliskannya membuat kode lebih aman dan konsisten.

## Ringkasan

- JavaScript adalah bahasa utama web dan **fondasi React**.
- Berjalan di browser dan di server (Node.js).
- `console.log()` menampilkan output; sangat berguna untuk debugging.
- Di proyek React, kamu menulis kode `.jsx` dan menjalankannya dengan Vite.
