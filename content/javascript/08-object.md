# Object

Object menyimpan data sebagai pasangan **kunci: nilai**. Di React, props, state, dan data dari server hampir semuanya berbentuk object.

## Membuat & Mengakses Object

```javascript
const user = {
  nama: "Salman",
  umur: 22,
  aktif: true,
};

user.nama;          // "Salman"  (akses dengan titik)
user["umur"];       // 22        (akses dengan kurung siku)
user.kota = "Bogor"; // menambah properti baru
user.umur = 23;      // mengubah nilai
```

<!--page-->

## Menelusuri Object

```javascript
const user = { nama: "Salman", umur: 22 };

Object.keys(user);     // ["nama", "umur"]
Object.values(user);   // ["Salman", 22]
Object.entries(user);  // [["nama","Salman"], ["umur",22]]

for (const kunci in user) {
  console.log(kunci, user[kunci]);
}
```

## Object Bersarang & Optional Chaining

Data nyata sering berlapis. Gunakan `?.` agar aman:

```javascript
const user = {
  nama: "Salman",
  alamat: { kota: "Bogor", kodePos: "16111" },
};

user.alamat.kota;        // "Bogor"
user.kontak?.email;      // undefined (aman, tidak error walau 'kontak' tak ada)
```

> Dipakai di React (dari kodemu): `profile?.role`, `profile?.is_active !== false` — mengambil properti dengan aman saat data mungkin belum termuat.

<!--page-->

## Shorthand Properti

Bila nama variabel sama dengan nama kunci, cukup tulis sekali:

```javascript
const nama = "Salman";
const umur = 22;

// cara panjang
const user1 = { nama: nama, umur: umur };

// shorthand (lebih ringkas)
const user2 = { nama, umur };
```

> Dipakai di React: sangat umum saat menyusun data untuk dikirim ke Supabase atau ke state, misalnya `{ nama, email, role }`.

## Method dalam Object

```javascript
const kalkulator = {
  nilai: 0,
  tambah(n) {           // shorthand method
    this.nilai += n;
    return this.nilai;
  },
};
kalkulator.tambah(5);   // 5
```

`this` di dalam method merujuk ke object itu sendiri.

<!--page-->

## Menyalin & Menggabung Object

Menggunakan spread `...` (dibahas lebih lanjut di bab Destructuring):

```javascript
const dasar = { nama: "Salman", role: "customer" };

// salinan dengan satu perubahan (tidak mengubah asli)
const diperbarui = { ...dasar, role: "admin" };
// { nama: "Salman", role: "admin" }
```

> Dipakai di React: memperbarui state object harus membuat object BARU, bukan mengubah yang lama. Pola `{ ...state, field: nilaiBaru }` dipakai terus-menerus.

## Ringkasan

- Object menyimpan pasangan kunci: nilai; akses dengan `.kunci` atau `["kunci"]`.
- `Object.keys/values/entries` untuk menelusuri isinya.
- Gunakan optional chaining `?.` untuk akses aman pada data berlapis.
- Shorthand `{ nama, umur }` dan spread `{ ...obj, field: baru }` sangat sering dipakai di React.

> Latihan: buat object `mahasiswa` dengan properti `nama`, `nim`, dan `nilai` (object berisi `uts` dan `uas`), lalu tampilkan nilai `uas`-nya dengan optional chaining.
