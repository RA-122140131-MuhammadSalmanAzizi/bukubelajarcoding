# Variabel & Tipe Data

Berbeda dengan Python, di JavaScript kamu mendeklarasikan variabel dengan kata kunci `let` atau `const`.

## let dan const

```javascript
let umur = 22;          // bisa diubah nanti
umur = 23;              // boleh

const nama = "Salman";  // tetap, tidak bisa diubah
// nama = "Budi";       // Error
```

> Tip: gunakan `const` sebagai default. Pakai `let` hanya jika nilainya memang perlu berubah. Hindari kata kunci lama `var` karena perilakunya membingungkan.

## Tipe Data Dasar

```javascript
let teks = "halo";        // string
let angka = 42;           // number (tidak ada pembeda int/float)
let desimal = 3.14;       // number juga
let aktif = true;         // boolean
let kosong = null;        // sengaja kosong
let belumAda;             // undefined (belum diberi nilai)
```

| Tipe | Contoh |
|------|--------|
| string | `"halo"`, `'a'` |
| number | `42`, `3.14` |
| boolean | `true`, `false` |
| null | `null` |
| undefined | variabel belum diisi |

Cek tipe dengan `typeof`:

```javascript
typeof "halo"    // "string"
typeof 42        // "number"
typeof true      // "boolean"
```

## String dan Template Literal

Gabungkan teks dan variabel dengan backtick dan `${ }` (mirip f-string Python):

```javascript
const nama = "Salman";
const umur = 22;
console.log(`Namaku ${nama}, umur ${umur} tahun.`);
// Namaku Salman, umur 22 tahun.
```

## Konversi Tipe

```javascript
Number("22")      // 22
String(22)        // "22"
parseInt("22px")  // 22 (ambil angka di awal)
```

> Hati-hati: `+` bisa berarti tambah ATAU gabung teks. `"2" + 2` menghasilkan `"22"` (teks), bukan `4`. Pastikan tipenya sesuai.

## Perbandingan: == vs ===

```javascript
5 == "5"     // true  (membandingkan nilai saja, mengabaikan tipe)
5 === "5"    // false (membandingkan nilai DAN tipe)
```

> Penting: selalu gunakan `===` dan `!==` (tiga tanda). Ini lebih aman karena tidak diam-diam mengubah tipe.

## Ringkasan

- Deklarasi variabel dengan `const` (default) atau `let` (jika perlu berubah).
- Angka tidak dibedakan int/float, semuanya `number`.
- Template literal `` `${variabel}` `` untuk menggabung teks.
- Gunakan `===` untuk perbandingan, bukan `==`.
