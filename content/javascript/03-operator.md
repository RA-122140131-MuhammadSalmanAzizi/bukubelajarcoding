# Operator

Operator mengolah nilai — menghitung, membandingkan, dan menggabungkan kondisi. Beberapa operator di sini sangat sering muncul di kode React, jadi perhatikan baik-baik.

## Aritmatika

```javascript
10 + 3    // 13
10 - 3    // 7
10 * 3    // 30
10 / 3    // 3.333...
10 % 3    // 1    (sisa bagi / modulo)
2 ** 3    // 8    (pangkat)
```

Assignment gabungan:

```javascript
let x = 10;
x += 5;   // x = 15
x -= 3;   // 12
x *= 2;   // 24
```

<!--page-->

## Perbandingan: === vs ==

```javascript
5 === 5      // true   (nilai DAN tipe sama)
5 === "5"    // false  (tipe beda: number vs string)
5 == "5"     // true   (== mengabaikan tipe -- berbahaya)
5 !== 3      // true
5 > 3        // true
5 <= 5       // true
```

> Penting: **selalu gunakan `===` dan `!==`** (tiga tanda). Operator `==` diam-diam mengubah tipe dan sering menyebabkan bug. Di kode React kamu akan melihat `===` di mana-mana, contoh dari proyek: `role === 'admin'`.

## Logika

```javascript
true && false    // false  (DAN: keduanya harus true)
true || false    // true   (ATAU: salah satu true cukup)
!true            // false  (NOT: membalik)
```

<!--page-->

## Operator Modern yang Wajib untuk React

### Ternary (if singkat)

```javascript
const status = umur >= 18 ? "dewasa" : "anak";
```

> Dipakai di React: ternary adalah cara utama menampilkan sesuatu secara kondisional di JSX:
> `{ isLoading ? <Spinner /> : <Konten /> }`

### Short-circuit dengan &&

```javascript
const a = true && "muncul";    // "muncul"
const b = false && "muncul";   // false
```

> Dipakai di React: `{ user && <Profil /> }` menampilkan `<Profil />` hanya jika `user` bernilai truthy.

### Optional Chaining ?.

Mengakses properti dengan aman, tanpa error bila objeknya `null`/`undefined`:

```javascript
const kota = user?.alamat?.kota;   // undefined jika user/alamat tidak ada, bukan error
```

> Dipakai di React (dari kodemu): `profile?.role` — mengambil `role` dengan aman walau `profile` belum termuat.

### Nullish Coalescing ??

Memberi nilai cadangan hanya jika kiri `null` atau `undefined`:

```javascript
const nama = inputNama ?? "Tanpa Nama";
const jumlah = 0 ?? 10;    // 0 (karena 0 bukan null/undefined)
```

Berbeda dari `||` yang juga menangkap `0` dan `""`. Contoh dari kodemu: `profile?.role || null`.

## Ringkasan

- Aritmatika: `+ - * / % **` dan assignment gabungan (`+=`, dll).
- Gunakan `===`/`!==`, jangan `==`/`!=`.
- Operator modern yang jadi tulang punggung React: **ternary** `? :`, **short-circuit** `&&`, **optional chaining** `?.`, dan **nullish coalescing** `??`.
