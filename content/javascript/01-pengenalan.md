# Pengenalan JavaScript

JavaScript adalah bahasa pemrograman utama untuk **web**. Awalnya hanya jalan di dalam browser untuk membuat halaman menjadi interaktif, kini juga jalan di server lewat **Node.js**. Jika kamu ingin menjadi web developer, JavaScript hampir tidak bisa dihindari.

## Di Mana JavaScript Berjalan?

- **Di browser** — mengatur tombol, animasi, form, dan segala interaksi halaman.
- **Di server (Node.js)** — membangun backend, API, dan aplikasi command line.

## Program Pertama

`console.log()` menampilkan sesuatu ke konsol (mirip `print` di Python):

```javascript
console.log("Halo, Dunia!");
```

## Menjalankan JavaScript

Cara paling cepat: buka browser, tekan F12 untuk membuka **Developer Tools**, lalu pilih tab **Console**. Ketik kode di sana dan tekan Enter.

Menyelipkan JavaScript ke halaman HTML:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Halaman Saya</h1>
    <script>
      console.log("Skrip berjalan!");
    </script>
  </body>
</html>
```

Biasanya kode ditaruh di file terpisah `.js` lalu dihubungkan:

```html
<script src="app.js"></script>
```

## Komentar

```javascript
// komentar satu baris

/*
  komentar
  banyak baris
*/
```

## Titik Koma

JavaScript memakai titik koma `;` di akhir pernyataan. Sebenarnya bersifat opsional (dimasukkan otomatis), tetapi kebiasaan menuliskannya membuat kode lebih aman dan jelas.

## Ringkasan

- JavaScript adalah bahasa utama web, jalan di browser dan server (Node.js).
- `console.log()` menampilkan output ke konsol.
- Kode bisa ditulis langsung dalam tag `<script>` atau file `.js` terpisah.
- Komentar memakai `//` atau `/* */`.
