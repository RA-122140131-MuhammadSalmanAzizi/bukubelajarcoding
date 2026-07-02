# State dengan useState

Props mengirim data dari luar dan bersifat tetap dari sudut pandang komponen. Tetapi aplikasi nyata butuh data yang **berubah** seiring interaksi pengguna: teks yang diketik, tombol yang ditekan, data yang dimuat. Untuk itu React menyediakan **state**, dan cara mengelolanya di function component adalah dengan hook `useState`.

## Masalah yang Dipecahkan State

Coba bayangkan tombol penghitung. Kamu mungkin berpikir cukup memakai variabel biasa:

```jsx
function Penghitung() {
  let jumlah = 0;
  return <button onClick={() => jumlah++}>{jumlah}</button>;
}
```

Kode ini **tidak bekerja**. Meski `jumlah` bertambah, tampilan tidak pernah berubah. Alasannya: React hanya memperbarui tampilan ketika **state** berubah, bukan ketika variabel biasa berubah. React tidak "tahu" bahwa ia harus menggambar ulang.

State memberi tahu React: "data ini bisa berubah, dan setiap kali berubah, perbarui tampilannya."

<!--page-->

## Menggunakan useState

`useState` adalah fungsi (disebut "hook") yang membuat sebuah state. Ia mengembalikan **array berisi dua elemen**: nilai state saat ini, dan fungsi untuk mengubahnya. Karena itu kita men-destructure-nya menjadi dua variabel.

```jsx
import { useState } from "react";

function Penghitung() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <button onClick={() => setJumlah(jumlah + 1)}>
      Ditekan {jumlah} kali
    </button>
  );
}
```

Mari bedah baris `const [jumlah, setJumlah] = useState(0);`:

- `useState(0)` membuat state dengan **nilai awal** `0`.
- `jumlah` adalah nilai state saat ini (untuk dibaca).
- `setJumlah` adalah fungsi untuk **mengubah** state.
- `[jumlah, setJumlah]` adalah destructuring array — nama variabelnya bebas, tetapi konvensinya `nama` dan `setNama`.

Ketika `setJumlah(jumlah + 1)` dipanggil, dua hal terjadi: nilai state diperbarui, dan React **menggambar ulang** komponen dengan nilai baru. Itulah kenapa tampilan ikut berubah.

> Inilah closure dan destructuring array yang kamu pelajari di JavaScript, bekerja bersama. Contoh dari proyekmu: `const [session, setSession] = useState(null);`

<!--page-->

## Aturan Emas: Jangan Ubah State Langsung

Kamu **tidak boleh** mengubah state secara langsung. Selalu gunakan fungsi setter-nya.

```jsx
// SALAH
jumlah = jumlah + 1;
user.nama = "baru";

// BENAR
setJumlah(jumlah + 1);
setUser({ ...user, nama: "baru" });
```

Untuk state berupa **object** atau **array**, kamu harus membuat salinan baru (dengan spread `...`), bukan mengubah yang lama. Ini penerapan langsung dari konsep immutability yang kamu pelajari di JavaScript.

Memperbarui object:

```jsx
const [user, setUser] = useState({ nama: "Salman", aktif: false });

// mengubah satu field
setUser({ ...user, aktif: true });
```

Memperbarui array:

```jsx
const [items, setItems] = useState([]);

setItems([...items, itemBaru]);              // menambah
setItems(items.filter((i) => i.id !== id));  // menghapus
```

> Kenapa harus salinan baru? React membandingkan referensi object untuk memutuskan apakah perlu menggambar ulang. Bila kamu mengubah object lama, referensinya sama, dan React mengira tidak ada perubahan.

<!--page-->

## Contoh Nyata: Form Terkontrol

Salah satu pemakaian state paling umum adalah menghubungkan input form dengan state, agar React selalu tahu isi input. Ini disebut "controlled component".

```jsx
import { useState } from "react";

function FormNama() {
  const [nama, setNama] = useState("");

  return (
    <div>
      <input
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <p>Halo, {nama || "tamu"}</p>
    </div>
  );
}
```

Setiap kali pengguna mengetik, `onChange` memanggil `setNama` dengan isi terbaru (`e.target.value`), state berubah, dan tampilan ikut diperbarui secara langsung. Pola inilah yang dipakai di semua form proyekmu.

<!--page-->

## Beberapa State dalam Satu Komponen

Sebuah komponen boleh punya banyak state, masing-masing untuk data yang berbeda. Ini pola yang persis terlihat di `AuthContext` proyekmu.

```jsx
function Halaman() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // ...
}
```

Memisahkan state seperti ini membuat kode lebih jelas daripada menumpuk semuanya dalam satu object besar.

## Kesalahan Umum

- Memakai variabel biasa (`let`) untuk data yang berubah — tampilan tak akan diperbarui. Gunakan `useState`.
- Mengubah state langsung (`items.push(x)`) alih-alih `setItems([...items, x])`.
- Mengharapkan state langsung berubah setelah memanggil setter di baris yang sama — pembaruan state diproses saat render berikutnya.

## Ringkasan

- **State** adalah data yang bisa berubah; ketika berubah, React memperbarui tampilan.
- `const [nilai, setNilai] = useState(awal)` membuat state; ubah **hanya** lewat `setNilai`.
- Untuk object/array, buat salinan baru dengan spread (`{ ...obj }`, `[...arr]`) — jangan ubah yang lama.
- Input form dihubungkan ke state (controlled component) lewat `value` dan `onChange`.

> Latihan: buat komponen daftar tugas sederhana — sebuah input dan tombol "Tambah". Saat tombol ditekan, tambahkan isi input ke array state dan tampilkan daftarnya dengan `.map()`.
