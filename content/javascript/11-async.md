# Async: Promise & await

Mengambil data dari server (seperti Supabase) tidak terjadi seketika — butuh waktu. JavaScript menangani ini dengan kode **asynchronous** (asinkron). Ini wajib dikuasai untuk React yang mengambil data.

## Masalah: Kode yang Butuh Waktu

Saat memanggil server, hasilnya tidak langsung ada. JavaScript tidak menunggu diam; ia melanjutkan kode lain, lalu kembali saat hasil siap. Untuk mengatur ini, dulu dipakai callback, kini dipakai **Promise** dan **async/await**.

## Promise

Promise adalah "janji" bahwa suatu nilai akan tersedia nanti. Ia punya dua kemungkinan: berhasil (`then`) atau gagal (`catch`).

```javascript
fetch("https://api.example.com/data")
  .then((respons) => respons.json())   // saat data tiba
  .then((data) => console.log(data))
  .catch((error) => console.log("Gagal:", error));
```

`fetch` adalah fungsi bawaan untuk mengambil data dari internet, dan ia mengembalikan Promise.

<!--page-->

## async / await (Cara Modern)

`async/await` membuat kode asinkron terlihat seperti kode biasa yang berurutan — jauh lebih mudah dibaca daripada rantai `.then()`.

```javascript
async function ambilData() {
  const respons = await fetch("https://api.example.com/data");
  const data = await respons.json();
  console.log(data);
}
```

Aturannya:
- Tambahkan `async` di depan fungsi.
- Pakai `await` sebelum operasi yang mengembalikan Promise. `await` "menunggu" hasilnya sebelum lanjut.

> Dipakai di React (dari kodemu): `const fetchProfile = useCallback(async (userId) => { const data = await authService.getProfile(userId); ... })`. Hampir semua pengambilan data Supabase memakai pola `await`.

<!--page-->

## Menangani Error dengan try/catch

Operasi jaringan bisa gagal (internet putus, server error). Bungkus dengan `try/catch`:

```javascript
async function ambilProfil(id) {
  try {
    const data = await authService.getProfile(id);
    return data;
  } catch (error) {
    console.error("Gagal memuat profil:", error.message);
    return null;
  }
}
```

> Dari kodemu: blok `try { const data = await authService.getProfile(userId); ... } catch (err) { console.warn(...) }` — persis pola ini untuk menangani kegagalan pengambilan data.

<!--page-->

## Menunggu Beberapa Sekaligus

`Promise.all` menjalankan beberapa operasi asinkron bersamaan lalu menunggu semuanya selesai:

```javascript
const [users, courses] = await Promise.all([
  ambilUsers(),
  ambilCourses(),
]);
```

Lebih cepat daripada menunggu satu per satu.

## Kaitannya dengan React

Di React, pengambilan data biasanya dilakukan di dalam `useEffect`:

```javascript
useEffect(() => {
  async function muat() {
    const data = await ambilData();
    setData(data);        // simpan hasil ke state
  }
  muat();
}, []);
```

## Ringkasan

- Operasi yang butuh waktu (ambil data) bersifat asinkron dan mengembalikan **Promise**.
- **`async/await`** membuat kode asinkron mudah dibaca; `await` menunggu hasil Promise.
- Bungkus dengan **`try/catch`** untuk menangani kegagalan jaringan.
- Di React, pola ini dipakai di dalam `useEffect` untuk mengambil dan menyimpan data ke state.

> Latihan: buat fungsi `async` yang mengambil data dari `https://api.quotable.io/random`, menampilkan kutipannya, dan menangani error dengan `try/catch`.
