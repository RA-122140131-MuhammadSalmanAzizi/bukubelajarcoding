# Percabangan & Perulangan

Membuat program mengambil keputusan dan mengulang pekerjaan. Di JavaScript, blok kode ditandai dengan kurung kurawal `{ }`.

## Percabangan: if / else if / else

```javascript
const umur = 20;

if (umur < 13) {
  console.log("anak-anak");
} else if (umur < 18) {
  console.log("remaja");
} else {
  console.log("dewasa");
}
```

Syarat ditulis di dalam tanda kurung `( )`, dan blok di dalam `{ }`.

### switch

Alternatif rapi untuk banyak pilihan berdasar satu nilai:

```javascript
switch (peran) {
  case "admin":
    console.log("Halaman admin");
    break;              // jangan lupa break
  case "dosen":
    console.log("Halaman dosen");
    break;
  default:
    console.log("Halaman umum");
}
```

<!--page-->

## Perulangan: for

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);       // 0, 1, 2, 3, 4
}
```

Tiga bagian dalam `for`: inisialisasi (`let i = 0`), syarat (`i < 5`), perubahan (`i++`).

### for...of (mengulang isi array)

```javascript
const buah = ["apel", "mangga", "jeruk"];
for (const b of buah) {
  console.log(b);
}
```

### while

```javascript
let n = 5;
while (n > 0) {
  console.log(n);
  n--;                  // wajib mengubah, agar berhenti
}
```

`break` keluar dari loop, `continue` melompat ke putaran berikutnya.

<!--page-->

## Catatan Penting untuk React

Di React, kamu **jarang** memakai loop `for` biasa untuk menampilkan daftar. Sebagai gantinya, kamu memakai **method array** seperti `.map()` (dibahas detail di bab Array):

```javascript
// cara React menampilkan daftar (bukan for):
const daftar = ["apel", "mangga"];
// di dalam JSX:
// {daftar.map((item) => <li key={item}>{item}</li>)}
```

Namun `if`/ternary tetap sering dipakai untuk logika kondisional. Jadi bab ini tetap penting sebagai fondasi.

## Ringkasan

- `if / else if / else` untuk percabangan; syarat di `( )`, blok di `{ }`.
- `switch` untuk banyak pilihan (ingat `break`).
- `for`, `for...of`, dan `while` untuk perulangan.
- Di React, menampilkan daftar biasanya memakai `.map()`, bukan `for`.

> Latihan: buat fungsi yang menerima angka nilai (0-100) dan mengembalikan "A", "B", "C", atau "D" memakai `if/else if`.
