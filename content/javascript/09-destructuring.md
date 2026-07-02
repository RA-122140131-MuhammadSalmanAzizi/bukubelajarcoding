# Destructuring, Spread & Rest

Tiga fitur ini muncul di **hampir setiap file React**. Menguasainya membuat kode React langsung terasa masuk akal.

## Destructuring Object

Membongkar properti object menjadi variabel terpisah:

```javascript
const user = { nama: "Salman", umur: 22, role: "admin" };

// cara panjang
const nama = user.nama;
const umur = user.umur;

// destructuring (ringkas)
const { nama, umur } = user;
console.log(nama);   // "Salman"
```

Bisa memberi nilai default dan mengganti nama:

```javascript
const { role = "customer" } = user;    // default bila tidak ada
const { nama: namaLengkap } = user;    // ganti nama variabel jadi namaLengkap
```

> Dipakai di React (dari kodemu): `import { useState, useContext } from 'react'` dan `export const AuthProvider = ({ children }) => {...}` — `{ children }` adalah destructuring props.

<!--page-->

## Destructuring Array

Membongkar berdasar urutan:

```javascript
const warna = ["merah", "hijau", "biru"];
const [pertama, kedua] = warna;
console.log(pertama);   // "merah"

const [a, , c] = warna;  // lewati yang tengah -> a="merah", c="biru"
```

> Dipakai di React: inilah bentuk `useState`! Contoh dari kodemu: `const [session, setSession] = useState(null);` — `useState` mengembalikan array `[nilai, fungsiPengubah]`, lalu di-destructure.

## Destructuring di Parameter Fungsi

Sangat umum di komponen React:

```javascript
function Kartu({ judul, harga }) {
  return `${judul}: ${harga}`;
}
Kartu({ judul: "Kursus React", harga: 50000 });
```

Dibanding menulis `props.judul`, `props.harga`, kita langsung ambil yang dibutuhkan.

<!--page-->

## Spread Operator (...)

Menyebar isi array atau object.

Menyalin & menggabung array:

```javascript
const a = [1, 2];
const b = [3, 4];
const gabung = [...a, ...b];    // [1, 2, 3, 4]
const salinan = [...a];         // salinan baru (bukan referensi sama)
```

Menyalin & memperbarui object:

```javascript
const user = { nama: "Salman", role: "customer" };
const admin = { ...user, role: "admin" };
// { nama: "Salman", role: "admin" }  (user asli tidak berubah)
```

> Dipakai di React: memperbarui state **wajib** membuat salinan baru, bukan mengubah yang lama. Pola `setUser({ ...user, aktif: true })` dipakai terus-menerus. Inilah inti "immutability" di React.

<!--page-->

## Rest Operator (...)

Bentuknya sama (`...`), tetapi kegunaannya **mengumpulkan** sisa menjadi satu.

Rest di destructuring:

```javascript
const { nama, ...sisanya } = { nama: "Salman", umur: 22, role: "admin" };
// nama = "Salman"
// sisanya = { umur: 22, role: "admin" }

const [pertama, ...ekor] = [1, 2, 3, 4];
// pertama = 1, ekor = [2, 3, 4]
```

Rest di parameter fungsi (dari bab fungsi):

```javascript
function jumlahkan(...angka) {
  return angka.reduce((t, n) => t + n, 0);
}
```

> Cara mengingat: **spread** memecah/menyebar keluar, **rest** mengumpulkan ke dalam. Simbolnya sama (`...`), bedanya di posisi pemakaian.

## Ringkasan

- **Destructuring** membongkar object/array jadi variabel — dasar dari `useState`, props, dan import.
- **Spread** `...` menyalin & menggabung; dipakai untuk memperbarui state secara immutable di React.
- **Rest** `...` mengumpulkan sisa jadi satu (di destructuring atau parameter).

> Latihan: dari object `{ nama, email, password }`, gunakan rest untuk memisahkan `password` dari sisanya, lalu buat object baru tanpa password memakai spread.
