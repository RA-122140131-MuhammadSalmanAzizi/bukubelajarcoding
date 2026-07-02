# Komponen & Props

Komponen adalah inti dari React. Sebuah aplikasi React dibangun dari banyak komponen kecil yang digabung menjadi antarmuka yang utuh — persis seperti proyekmu yang terdiri dari `Navbar`, `Footer`, `CourseCard`, dan puluhan komponen lain. Bab ini membahas cara membuat komponen dan cara mengirim data antar komponen lewat props.

## Apa itu Komponen?

Komponen adalah **fungsi JavaScript yang mengembalikan JSX**. Namanya wajib diawali huruf besar (ini yang membedakan komponen dari elemen HTML biasa di mata React).

```jsx
function Tombol() {
  return <button>Klik saya</button>;
}
```

Setelah dibuat, komponen dipakai seperti tag HTML:

```jsx
function App() {
  return (
    <div>
      <Tombol />
      <Tombol />
      <Tombol />
    </div>
  );
}
```

Satu komponen bisa dipakai berkali-kali. Inilah keunggulan utama React: **membangun sekali, memakai berulang**. Bayangkan `CourseCard` di proyekmu — satu komponen yang menampilkan puluhan kursus berbeda.

Di proyek nyata, tiap komponen biasanya berada di file sendiri, lalu diekspor dan diimpor:

```jsx
// file: Tombol.jsx
export default function Tombol() {
  return <button>Klik saya</button>;
}

// file: App.jsx
import Tombol from "./Tombol.jsx";
```

<!--page-->

## Props: Mengirim Data ke Komponen

Komponen menjadi benar-benar berguna ketika bisa menerima data dari luar. Data itu dikirim lewat **props** (singkatan dari "properties"), yang ditulis seperti atribut HTML.

```jsx
function Sapaan(props) {
  return <h1>Halo, {props.nama}!</h1>;
}

function App() {
  return (
    <div>
      <Sapaan nama="Salman" />
      <Sapaan nama="Budi" />
    </div>
  );
}
```

Komponen `Sapaan` menerima `props`, sebuah object berisi semua data yang dikirim. Di contoh ini `props.nama` bernilai "Salman" pada pemakaian pertama dan "Budi" pada pemakaian kedua.

Props bisa berupa tipe apa saja — teks, angka, boolean, array, object, bahkan fungsi:

```jsx
<KartuProduk
  nama="Kursus React"
  harga={150000}
  tersedia={true}
  tags={["web", "frontend"]}
/>
```

Perhatikan: teks memakai tanda kutip (`nama="..."`), sedangkan nilai JavaScript lain (angka, boolean, array) dibungkus kurung kurawal (`harga={150000}`).

<!--page-->

## Destructuring Props

Menulis `props.nama`, `props.harga` berulang-ulang melelahkan. Cara yang lebih rapi dan paling umum adalah **men-destructure** props langsung di parameter fungsi:

```jsx
function KartuProduk({ nama, harga, tersedia }) {
  return (
    <div className="kartu">
      <h3>{nama}</h3>
      <p>Rp{harga}</p>
      {tersedia ? <span>Tersedia</span> : <span>Habis</span>}
    </div>
  );
}
```

Bandingkan dengan versi `props.nama` — versi destructuring jauh lebih bersih dan langsung terlihat data apa saja yang dibutuhkan komponen. Inilah gaya yang dipakai di hampir semua komponen proyekmu, misalnya `AuthProvider = ({ children }) => {...}`.

### Nilai Default Props

```jsx
function Tombol({ teks = "Klik", warna = "biru" }) {
  return <button className={warna}>{teks}</button>;
}

<Tombol />                    {/* memakai default: "Klik", "biru" */}
<Tombol teks="Simpan" />      {/* teks="Simpan", warna tetap default */}
```

<!--page-->

## Prop Khusus: children

Ada satu prop istimewa bernama `children`. Ia berisi apa pun yang kamu tulis **di antara** tag pembuka dan penutup komponen.

```jsx
function Kotak({ children }) {
  return <div className="kotak">{children}</div>;
}

function App() {
  return (
    <Kotak>
      <h1>Judul di dalam kotak</h1>
      <p>Isi paragraf.</p>
    </Kotak>
  );
}
```

Semua yang ada di antara `<Kotak>` dan `</Kotak>` masuk ke `children`, lalu ditampilkan oleh komponen `Kotak`. Pola ini dipakai untuk membuat komponen "pembungkus" seperti layout, modal, dan card. Di proyekmu, `AuthProvider` memakai `children` untuk membungkus seluruh aplikasi agar semua komponen bisa mengakses data autentikasi.

<!--page-->

## Aturan Penting: Props Bersifat Read-Only

Komponen **tidak boleh mengubah props yang diterimanya**. Props hanya untuk dibaca. Aliran data di React bersifat "satu arah" — dari atas (komponen induk) ke bawah (komponen anak).

```jsx
function Salah({ nama }) {
  nama = "diubah";   // JANGAN lakukan ini
  return <p>{nama}</p>;
}
```

Bila sebuah komponen perlu data yang bisa berubah, ia menggunakan **state** (dibahas di bab berikutnya), bukan mengubah props.

## Menyusun Komponen

Kekuatan React muncul saat komponen disusun bertingkat. Komponen besar tersusun dari komponen kecil:

```jsx
function Halaman() {
  return (
    <div>
      <Navbar />
      <DaftarKursus />
      <Footer />
    </div>
  );
}
```

Cara berpikir ini — memecah antarmuka menjadi komponen-komponen kecil yang bisa dipakai ulang — adalah keterampilan inti seorang React developer.

## Ringkasan

- Komponen adalah fungsi (nama diawali huruf besar) yang mengembalikan JSX; bisa dipakai berulang.
- **Props** mengirim data dari komponen induk ke anak, ditulis seperti atribut.
- **Destructuring props** (`{ nama, harga }`) adalah gaya standar yang lebih rapi.
- Prop khusus **`children`** berisi apa pun di antara tag pembuka & penutup.
- Props **read-only** — untuk data yang berubah, gunakan state.

> Latihan: buat komponen `KartuMahasiswa` yang menerima props `nama`, `nim`, dan `ipk`, lalu tampilkan dalam sebuah `<div>`. Tampilkan tulisan "Berprestasi" dengan `&&` bila ipk >= 3.5.
