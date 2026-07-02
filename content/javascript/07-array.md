# Array & Method Penting

Array adalah daftar berurutan. Method array — terutama `map`, `filter`, dan `reduce` — adalah **inti dari cara React menampilkan dan mengolah data**. Kuasai bab ini dengan sungguh-sungguh.

## Dasar Array

```javascript
const buah = ["apel", "mangga", "jeruk"];

buah[0];            // "apel"  (index mulai 0)
buah.length;        // 3
buah.push("pisang"); // menambah di akhir
buah.pop();         // menghapus & mengambil item terakhir
buah.includes("apel"); // true
buah.indexOf("mangga"); // 1
```

<!--page-->

## map(): Mengubah Tiap Elemen

`map` membuat array **baru** dengan menjalankan fungsi pada tiap elemen. Ini method paling penting untuk React.

```javascript
const angka = [1, 2, 3, 4];
const dobel = angka.map((n) => n * 2);   // [2, 4, 6, 8]

const nama = ["ani", "budi"];
const kapital = nama.map((n) => n.toUpperCase());  // ["ANI", "BUDI"]
```

> Dipakai di React: menampilkan daftar komponen dari data. Contoh:
> ```jsx
> {courses.map((course) => (
>   <CourseCard key={course.id} data={course} />
> ))}
> ```
> Tiap item data diubah menjadi satu komponen. Atribut `key` wajib agar React efisien.

<!--page-->

## filter(): Menyaring Elemen

`filter` membuat array baru berisi elemen yang **lolos syarat**.

```javascript
const angka = [1, 2, 3, 4, 5, 6];
const genap = angka.filter((n) => n % 2 === 0);   // [2, 4, 6]

const users = [
  { nama: "Ani", aktif: true },
  { nama: "Budi", aktif: false },
];
const yangAktif = users.filter((u) => u.aktif);   // hanya Ani
```

> Dipakai di React: menyaring data sebelum ditampilkan, misalnya menampilkan hanya kursus yang dipublikasikan, atau hasil pencarian.

## find(): Mencari Satu Elemen

```javascript
const users = [{ id: 1, nama: "Ani" }, { id: 2, nama: "Budi" }];
const user = users.find((u) => u.id === 2);   // { id: 2, nama: "Budi" }
```

`find` mengembalikan **satu** elemen pertama yang cocok (atau `undefined`).

<!--page-->

## reduce(): Menggabung Jadi Satu Nilai

`reduce` meringkas seluruh array menjadi satu nilai (jumlah, total, dll).

```javascript
const harga = [10000, 25000, 5000];
const total = harga.reduce((jumlah, h) => jumlah + h, 0);   // 40000
// 0 adalah nilai awal "jumlah"
```

## Method Berguna Lainnya

```javascript
const angka = [3, 1, 2];

angka.forEach((n) => console.log(n));   // menjalankan sesuatu tiap item (tak balik array)
angka.some((n) => n > 2);               // true  (ada yang > 2?)
angka.every((n) => n > 0);              // true  (semua > 0?)
angka.sort((a, b) => a - b);            // [1, 2, 3] (urut menaik)
angka.slice(0, 2);                      // [3, 1]  (potongan, tidak mengubah asli)
```

<!--page-->

## Rangkaian Method (Chaining)

Kekuatan sesungguhnya muncul saat method dirangkai. Pola ini sangat umum di React.

```javascript
const produk = [
  { nama: "A", harga: 50000, stok: 2 },
  { nama: "B", harga: 15000, stok: 0 },
  { nama: "C", harga: 30000, stok: 5 },
];

const hasil = produk
  .filter((p) => p.stok > 0)            // hanya yang ada stok
  .map((p) => p.nama);                  // ambil namanya saja
// ["A", "C"]
```

> Ingat: `map`, `filter`, `slice` membuat array **baru** dan tidak mengubah array asli. Ini penting di React, karena React mengharuskan kita tidak mengubah data lama secara langsung (immutability).

## Ringkasan

- Array menyimpan daftar; akses dengan index, ubah dengan `push`/`pop`.
- **`map`** mengubah tiap elemen — dipakai menampilkan daftar di React.
- **`filter`** menyaring; **`find`** mencari satu; **`reduce`** meringkas jadi satu nilai.
- `map`/`filter`/`slice` membuat array baru (tidak mengubah asli) — cocok dengan prinsip immutability React.

> Latihan: dari array object mahasiswa `[{nama, ipk}]`, tampilkan nama mahasiswa yang ipk-nya >= 3.0 (pakai `filter` lalu `map`).
