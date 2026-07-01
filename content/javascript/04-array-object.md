# Array & Object

Dua struktur data paling penting di JavaScript. Array untuk daftar berurutan, object untuk data berlabel.

## Array

```javascript
const buah = ["apel", "mangga", "jeruk"];

buah[0];             // 'apel' (index mulai 0)
buah.length;         // 3
buah.push("pisang"); // tambah di akhir
buah.pop();          // hapus & ambil item terakhir
buah.includes("apel"); // true
```

### Method Array yang Sering Dipakai

```javascript
const angka = [1, 2, 3, 4, 5];

angka.map(x => x * 2);          // [2,4,6,8,10] ubah tiap elemen
angka.filter(x => x > 2);       // [3,4,5] saring
angka.reduce((t, x) => t + x, 0); // 15 kumpulkan jadi satu nilai
angka.find(x => x > 3);         // 4 elemen pertama yang cocok
angka.forEach(x => console.log(x)); // ulang tiap elemen
```

## Object

Menyimpan pasangan kunci menuju nilai:

```javascript
const orang = {
  nama: "Salman",
  umur: 22,
  hobi: ["ngoding", "ngopi"],
};

orang.nama;          // 'Salman' (akses dengan titik)
orang["umur"];       // 22 (akses dengan kurung siku)
orang.kota = "Bogor"; // menambah properti baru
```

### Mengulang Isi Object

```javascript
for (const kunci in orang) {
  console.log(kunci, orang[kunci]);
}

Object.keys(orang);     // ['nama', 'umur', 'hobi', 'kota']
Object.values(orang);   // ['Salman', 22, [...], 'Bogor']
```

## Destructuring

Membongkar array atau object menjadi variabel secara ringkas:

```javascript
const [a, b] = [1, 2];             // a=1, b=2
const { nama, umur } = orang;      // nama='Salman', umur=22
```

## Spread Operator

Menyalin atau menggabungkan dengan `...`:

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];      // [1, 2, 3, 4]

const dasar = { nama: "Salman" };
const lengkap = { ...dasar, umur: 22 }; // {nama:'Salman', umur:22}
```

## Ringkasan

- Array untuk daftar berurutan; `map`, `filter`, `reduce` adalah method inti.
- Object untuk data berlabel; akses dengan `.kunci` atau `["kunci"]`.
- Destructuring membongkar data jadi variabel dengan ringkas.
- Spread `...` untuk menyalin dan menggabungkan array/object.
