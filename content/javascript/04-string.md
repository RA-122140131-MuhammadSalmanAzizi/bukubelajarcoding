# String & Template Literal

String adalah teks. JavaScript modern punya cara yang sangat nyaman untuk menyusun teks, yang juga dipakai di React.

## Membuat String

```javascript
const a = "kutip dua";
const b = 'kutip satu';      // sama saja
```

## Template Literal (backtick)

Gunakan tanda backtick `` ` `` dan `${ }` untuk menyisipkan variabel ke dalam teks (mirip f-string di Python):

```javascript
const nama = "Salman";
const umur = 22;

const pesan = `Namaku ${nama}, umur ${umur} tahun.`;
// "Namaku Salman, umur 22 tahun."

const hitung = `Tahun depan umurku ${umur + 1}.`;  // ekspresi juga boleh
```

Template literal juga mendukung banyak baris:

```javascript
const teks = `Baris pertama
Baris kedua`;
```

> Dipakai di React (dari kodemu): membuat kunci penyimpanan dinamis, `` `dosenCourseDraft_${profileId}` `` — nama kunci berubah sesuai id pengguna.

<!--page-->

## Method String yang Sering Dipakai

```javascript
"halo".toUpperCase()      // "HALO"
"HALO".toLowerCase()      // "halo"
"  halo  ".trim()         // "halo"  (buang spasi kiri-kanan)
"halo dunia".replace("dunia", "react")   // "halo react"
"halo".includes("lo")     // true   (mengandung?)
"halo".startsWith("ha")   // true
"file.jsx".endsWith(".jsx")  // true
"a,b,c".split(",")        // ["a", "b", "c"]  (jadi array)
"halo".length             // 4
"halo".charAt(0)          // "h"
"halo"[0]                 // "h"  (bisa juga pakai index)
```

<!--page-->

## Mengakses Karakter & Memotong

```javascript
const teks = "JavaScript";
teks[0]           // "J"
teks.slice(0, 4)  // "Java"   (dari index 0 sampai sebelum 4)
teks.slice(-6)    // "Script" (6 karakter terakhir)
```

## Menggabung String

```javascript
"Halo " + nama                    // dengan +
`Halo ${nama}`                    // dengan template literal (lebih disukai)
["a", "b", "c"].join("-")         // "a-b-c" (menggabung array jadi string)
```

## Ringkasan

- Template literal `` `teks ${variabel}` `` adalah cara modern menyusun teks — dipakai luas di React.
- Method umum: `toUpperCase`, `toLowerCase`, `trim`, `replace`, `includes`, `split`, `slice`.
- `split` mengubah string jadi array; `join` mengubah array jadi string.

> Latihan: buat variabel `nama` dan `nilai`, lalu susun kalimat "Selamat NAMA, nilaimu NILAI" memakai template literal.
