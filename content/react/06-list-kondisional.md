# Rendering Daftar & Kondisional

Dua tugas paling sering di React adalah menampilkan daftar data dan menampilkan sesuatu secara bersyarat. Halaman seperti daftar kursus, tabel pengguna, dan riwayat quiz di proyekmu semuanya bergantung pada dua teknik ini.

## Menampilkan Daftar dengan map

Untuk mengubah array data menjadi banyak elemen, gunakan `.map()`. Tiap item data diubah menjadi satu elemen JSX.

```jsx
function DaftarKursus({ kursus }) {
  return (
    <ul>
      {kursus.map((k) => (
        <li key={k.id}>{k.nama}</li>
      ))}
    </ul>
  );
}
```

Biasanya tiap item ditampilkan sebagai komponen tersendiri, mengoper data lewat props:

```jsx
{kursus.map((k) => (
  <KartuKursus key={k.id} data={k} />
))}
```

<!--page-->

## Pentingnya key

React membutuhkan atribut `key` yang **unik** pada tiap elemen dalam daftar. `key` membantu React melacak elemen mana yang berubah, ditambah, atau dihapus — sehingga pembaruan tampilan efisien.

```jsx
{users.map((u) => <Baris key={u.id} user={u} />)}
```

Aturan `key`:
- Gunakan **id unik** dari data (paling ideal).
- Jangan memakai index array sebagai key bila daftar bisa berubah urutan, disaring, atau item bisa dihapus — ini bisa menyebabkan bug tampilan.
- `key` cukup unik di antara saudara-saudaranya, tidak harus unik di seluruh aplikasi.

> Kesalahan umum: lupa `key` (React memberi peringatan di console), atau memakai `key={index}` pada daftar yang dinamis.

<!--page-->

## Rendering Kondisional

Menampilkan elemen berbeda tergantung kondisi. Ada beberapa pola.

### Ternary (dua kemungkinan)

```jsx
{isLogin ? <Dashboard /> : <HalamanLogin />}
```

### Short-circuit && (tampil bila benar)

```jsx
{error && <p className="error">{error}</p>}
{items.length === 0 && <p>Belum ada data</p>}
```

### Menyimpan ke Variabel Dulu

Bila logikanya bercabang banyak, siapkan elemen dalam variabel agar JSX tetap bersih.

```jsx
function Status({ state }) {
  let tampilan;
  if (state === "loading") tampilan = <Spinner />;
  else if (state === "error") tampilan = <Pesan>Gagal memuat</Pesan>;
  else tampilan = <Konten />;

  return <div>{tampilan}</div>;
}
```

### Early Return

Komponen boleh mengembalikan lebih awal untuk kasus tertentu.

```jsx
function Profil({ user }) {
  if (!user) return <p>Silakan masuk.</p>;
  return <h1>Halo, {user.nama}</h1>;
}
```

<!--page-->

## Menggabung Daftar, Filter, dan Kondisional

Pola nyata sering menggabungkan semuanya: menyaring data, menampilkannya, dan menangani kondisi kosong.

```jsx
function HasilPencarian({ produk, cari }) {
  const hasil = produk.filter((p) =>
    p.nama.toLowerCase().includes(cari.toLowerCase())
  );

  if (hasil.length === 0) {
    return <p>Tidak ada produk yang cocok.</p>;
  }

  return (
    <div>
      {hasil.map((p) => (
        <KartuProduk key={p.id} data={p} />
      ))}
    </div>
  );
}
```

Perhatikan alurnya: `filter` menyaring → cek kondisi kosong (early return) → `map` menampilkan. Ini pola yang persis dipakai untuk fitur pencarian dan daftar di aplikasi nyata.

## Ringkasan

- Tampilkan daftar dengan **`.map()`**; tiap item wajib punya **`key`** unik (idealnya id data).
- Rendering kondisional: **ternary** `? :`, **short-circuit** `&&`, variabel elemen, atau **early return**.
- Pola umum: `filter` untuk menyaring → cek kondisi kosong → `map` untuk menampilkan.

> Latihan: buat komponen yang menerima array mahasiswa dan sebuah kata kunci; tampilkan hanya mahasiswa yang namanya mengandung kata kunci, dan tampilkan pesan "Tidak ditemukan" bila kosong.
