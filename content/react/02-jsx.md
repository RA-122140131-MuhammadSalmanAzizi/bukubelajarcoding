# JSX

JSX adalah sintaks khas React yang memungkinkanmu menulis tampilan yang mirip HTML **di dalam** file JavaScript. Ini terlihat seperti mencampur dua bahasa, tetapi sebenarnya JSX hanyalah cara penulisan yang lebih nyaman — di balik layar ia diubah menjadi pemanggilan fungsi JavaScript biasa.

## Seperti Apa JSX Itu?

```jsx
const elemen = <h1>Halo, Dunia!</h1>;
```

Baris di atas bukan string dan bukan HTML — itu JSX. Sebuah komponen React mengembalikan JSX untuk mendeskripsikan apa yang harus ditampilkan di layar:

```jsx
function Sapaan() {
  return <h1>Selamat datang di aplikasiku</h1>;
}
```

Kenapa React memakai JSX? Karena logika tampilan dan logika data sering saling terkait. Dengan JSX, keduanya bisa berada di satu tempat yang mudah dibaca, alih-alih dipisah antara file HTML dan file JavaScript.

<!--page-->

## Menyisipkan Nilai JavaScript dengan { }

Kekuatan JSX adalah kemampuan menyisipkan **ekspresi JavaScript** menggunakan kurung kurawal `{ }`. Apa pun yang valid sebagai ekspresi JavaScript bisa ditaruh di dalamnya.

```jsx
function Profil() {
  const nama = "Salman";
  const umur = 22;

  return (
    <div>
      <h1>Halo, {nama}</h1>
      <p>Umurmu {umur} tahun.</p>
      <p>Tahun depan kamu {umur + 1} tahun.</p>
      <p>Namamu terdiri dari {nama.length} huruf.</p>
    </div>
  );
}
```

Di dalam `{ }` kamu bisa menaruh variabel, operasi matematika, pemanggilan fungsi, template literal, ternary — apa saja yang menghasilkan nilai. Yang **tidak** bisa ditaruh langsung adalah pernyataan seperti `if` atau `for` (itu bukan ekspresi); untuk itu ada cara khusus yang dibahas nanti.

> Perhatikan penggunaan tanda kurung `( )` setelah `return` saat JSX ditulis di banyak baris. Ini agar JavaScript tidak salah menafsirkan akhir pernyataan.

<!--page-->

## Aturan Penting JSX

JSX mirip HTML, tetapi ada beberapa perbedaan yang wajib diingat karena sering menjadi sumber error pemula.

### 1. Harus Ada Satu Elemen Induk

Sebuah komponen hanya boleh mengembalikan **satu** elemen teratas. Bila butuh beberapa elemen, bungkus dalam satu induk:

```jsx
// SALAH: dua elemen sejajar tanpa induk
return (
  <h1>Judul</h1>
  <p>Paragraf</p>
);

// BENAR: dibungkus satu <div>
return (
  <div>
    <h1>Judul</h1>
    <p>Paragraf</p>
  </div>
);
```

Bila tidak ingin menambah `<div>` yang tak perlu, gunakan **Fragment** (`<> </>`):

```jsx
return (
  <>
    <h1>Judul</h1>
    <p>Paragraf</p>
  </>
);
```

### 2. `className`, bukan `class`

Karena `class` adalah kata kunci JavaScript, JSX memakai `className` untuk atribut kelas CSS:

```jsx
<div className="kartu aktif">...</div>
```

### 3. Atribut memakai camelCase

Atribut HTML yang biasanya ditulis dengan huruf kecil ditulis camelCase di JSX: `onclick` menjadi `onClick`, `onchange` menjadi `onChange`, `tabindex` menjadi `tabIndex`.

### 4. Tag Harus Ditutup

Semua tag wajib ditutup, termasuk yang di HTML biasa boleh dibiarkan terbuka:

```jsx
<img src="foto.jpg" alt="foto" />    {/* wajib diakhiri /> */}
<br />
<input type="text" />
```

<!--page-->

## Rendering Kondisional

Karena `if` tidak bisa ditaruh langsung di dalam `{ }`, React memakai teknik lain untuk menampilkan sesuatu secara bersyarat.

### Ternary

```jsx
function Status({ login }) {
  return (
    <div>
      {login ? <p>Selamat datang!</p> : <p>Silakan masuk.</p>}
    </div>
  );
}
```

### Short-circuit dengan &&

Menampilkan sesuatu hanya bila kondisi benar:

```jsx
function Notifikasi({ jumlah }) {
  return (
    <div>
      {jumlah > 0 && <span>Kamu punya {jumlah} pesan baru</span>}
    </div>
  );
}
```

Bila `jumlah` bernilai 0 (falsy), tidak ada yang ditampilkan. Ini pola yang sangat umum di React, termasuk di proyekmu.

<!--page-->

## Menampilkan Daftar dengan map

Untuk menampilkan banyak item dari sebuah array, gunakan method `.map()` yang mengubah tiap data menjadi satu elemen JSX.

```jsx
function DaftarBuah() {
  const buah = ["apel", "mangga", "jeruk"];

  return (
    <ul>
      {buah.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```

Perhatikan atribut **`key`**. React membutuhkan `key` yang unik pada tiap item daftar agar bisa melacak perubahan secara efisien. Biasanya `key` diambil dari id data yang unik:

```jsx
{courses.map((course) => (
  <CourseCard key={course.id} data={course} />
))}
```

> Kesalahan umum: lupa memberi `key`, atau memakai index array sebagai key saat daftar bisa berubah urutannya. Gunakan id unik bila tersedia.

## Komentar di JSX

Komentar di dalam JSX ditulis dalam kurung kurawal:

```jsx
return (
  <div>
    {/* ini komentar di dalam JSX */}
    <h1>Judul</h1>
  </div>
);
```

## Ringkasan

- JSX menyatukan tampilan dan logika di dalam JavaScript; ekspresi disisipkan dengan `{ }`.
- Aturan wajib: satu elemen induk (atau Fragment `<> </>`), `className` bukan `class`, atribut camelCase, semua tag ditutup.
- Rendering kondisional memakai **ternary** `? :` atau **short-circuit** `&&`.
- Menampilkan daftar memakai **`.map()`** dengan atribut **`key`** yang unik.

> Latihan: buat komponen yang menerima array angka `[1, 2, 3, 4]` dan menampilkannya sebagai daftar `<li>`, dengan tulisan "genap"/"ganjil" di sebelah tiap angka memakai ternary.
