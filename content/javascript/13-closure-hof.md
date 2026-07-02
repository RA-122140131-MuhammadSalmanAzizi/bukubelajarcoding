# Closure & Higher-Order Function

Dua konsep ini adalah "sihir" di balik cara kerja React. Memahaminya membuat perilaku `useState` dan event handler jadi masuk akal.

## Higher-Order Function (HOF)

Higher-order function adalah fungsi yang **menerima fungsi lain** sebagai argumen, atau **mengembalikan fungsi**.

Menerima fungsi (yang sudah kamu pakai di array):

```javascript
[1, 2, 3].map((n) => n * 2);        // map menerima sebuah fungsi
[1, 2, 3].filter((n) => n > 1);     // filter juga
```

Mengembalikan fungsi:

```javascript
function pengali(faktor) {
  return (angka) => angka * faktor;   // mengembalikan fungsi baru
}

const kaliDua = pengali(2);
const kaliTiga = pengali(3);
kaliDua(5);    // 10
kaliTiga(5);   // 15
```

<!--page-->

## Closure

Closure adalah kemampuan sebuah fungsi untuk **mengingat variabel dari tempat ia dibuat**, meski dipanggil di tempat lain nanti.

```javascript
function buatPenghitung() {
  let jumlah = 0;              // variabel lokal
  return function () {
    jumlah++;                  // fungsi dalam "mengingat" jumlah
    return jumlah;
  };
}

const hitung = buatPenghitung();
hitung();   // 1
hitung();   // 2
hitung();   // 3
```

Variabel `jumlah` seharusnya hilang setelah `buatPenghitung()` selesai, tetapi fungsi yang dikembalikan **tetap mengingatnya**. Itulah closure.

<!--page-->

## Kaitannya dengan React

Closure adalah alasan `useState` bisa bekerja. Saat kamu menulis:

```javascript
const [jumlah, setJumlah] = useState(0);

const tambah = () => setJumlah(jumlah + 1);
```

Fungsi `tambah` "mengingat" nilai `jumlah` dari render saat ia dibuat — itu closure. Memahami ini membantu menghindari bug umum React seperti "nilai state yang basi" (stale state).

Event handler di React juga memakai closure untuk mengakses props dan state:

```javascript
function Tombol({ id }) {
  const hapus = () => hapusItem(id);   // "mengingat" id lewat closure
  // <button onClick={hapus}>Hapus</button>
}
```

## Ringkasan

- **Higher-order function**: fungsi yang menerima atau mengembalikan fungsi (dasar `map`, `filter`, dan banyak pola React).
- **Closure**: fungsi mengingat variabel dari tempat ia dibuat.
- Closure adalah fondasi cara `useState` dan event handler React bekerja.

> Latihan: buat fungsi `sapaan(salam)` yang mengembalikan fungsi baru; `const halo = sapaan("Halo")` lalu `halo("Salman")` menghasilkan "Halo, Salman".
