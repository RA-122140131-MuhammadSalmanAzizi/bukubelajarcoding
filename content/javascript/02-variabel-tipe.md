# Variabel & Tipe Data

Variabel adalah wadah bernama untuk menyimpan nilai. Di JavaScript modern, kamu membuatnya dengan `let` atau `const`.

## let dan const

```javascript
let umur = 22;          // nilai bisa diubah nanti
umur = 23;              // boleh

const nama = "Salman";  // nilai tetap, tidak bisa diubah
// nama = "Budi";       // Error
```

Aturan praktis:
- Gunakan **`const` sebagai default**.
- Pakai **`let`** hanya jika nilainya memang perlu berubah.
- **Hindari `var`** (kata kunci lama) karena perilakunya membingungkan.

> Dipakai di React: hampir semua deklarasi di React memakai `const` — termakuk komponen, hasil `useState`, dan fungsi. Contoh dari kode: `const [session, setSession] = useState(null);`

<!--page-->

## Tipe Data Dasar

JavaScript menentukan tipe secara otomatis dari nilainya.

```javascript
let teks = "halo";        // string
let angka = 42;           // number (tidak ada pembeda int/float)
let desimal = 3.14;       // number juga
let aktif = true;         // boolean
let kosong = null;        // sengaja kosong
let belumAda;             // undefined (dideklarasi tapi belum diisi)
```

| Tipe | Contoh |
|------|--------|
| string | `"halo"`, `'a'` |
| number | `42`, `3.14` |
| boolean | `true`, `false` |
| null | `null` (kosong disengaja) |
| undefined | belum diberi nilai |
| object | `{}`, `[]` (dibahas di bab tersendiri) |

Cek tipe dengan `typeof`:

```javascript
typeof "halo"    // "string"
typeof 42        // "number"
typeof true      // "boolean"
```

### null vs undefined

- `undefined` = variabel ada tapi belum diberi nilai.
- `null` = sengaja dikosongkan oleh programmer.

> Dipakai di React: `useState(null)` sering dipakai untuk state yang "belum ada isinya", misalnya data pengguna sebelum selesai dimuat.

<!--page-->

## Konversi Tipe

```javascript
Number("22")      // 22
String(22)        // "22"
parseInt("22px")  // 22   (mengambil angka di awal)
parseFloat("3.14em") // 3.14
Boolean(0)        // false
```

> Hati-hati: operator `+` bisa berarti tambah ATAU gabung teks. `"2" + 2` menghasilkan `"22"` (teks), bukan `4`. Pastikan tipenya sesuai sebelum berhitung.

## Nilai "Falsy"

Nilai berikut dianggap `false` di dalam kondisi:

```javascript
false, 0, "", null, undefined, NaN
```

Selain itu dianggap `true` (truthy). Ini penting karena sangat sering dipakai:

```javascript
const nama = "";
if (nama) {
  console.log("ada nama");
} else {
  console.log("nama kosong");   // ini yang jalan, karena "" falsy
}
```

> Dipakai di React: pengecekan truthy/falsy dipakai untuk menampilkan sesuatu secara kondisional, misalnya `{user && <Profil user={user} />}` — komponen hanya tampil jika `user` ada.

## Ringkasan

- Deklarasi variabel dengan `const` (default) atau `let` (bila perlu berubah); hindari `var`.
- Tipe dasar: string, number, boolean, null, undefined, object.
- Angka tidak dibedakan int/float — semuanya `number`.
- Pahami nilai falsy (`0`, `""`, `null`, `undefined`) karena sering dipakai di kondisi dan JSX.
