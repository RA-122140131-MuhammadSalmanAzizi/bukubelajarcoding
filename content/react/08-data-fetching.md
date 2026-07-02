# Mengambil Data (Fetch & Supabase)

Aplikasi nyata menampilkan data dari server: daftar kursus, profil pengguna, riwayat transaksi. Bab ini menggabungkan semua yang sudah kamu pelajari — `useState`, `useEffect`, dan `async/await` — menjadi pola pengambilan data yang benar, termasuk contoh dengan Supabase seperti di proyekmu.

## Pola Dasar: useEffect + async

Pengambilan data dilakukan di dalam `useEffect` (agar berjalan setelah render), memakai fungsi `async` di dalamnya.

```jsx
import { useState, useEffect } from "react";

function DaftarKursus() {
  const [kursus, setKursus] = useState([]);

  useEffect(() => {
    async function muat() {
      const res = await fetch("https://api.example.com/kursus");
      const data = await res.json();
      setKursus(data);          // simpan hasil ke state
    }
    muat();
  }, []);                        // [] = ambil sekali saat komponen muncul

  return (
    <ul>
      {kursus.map((k) => <li key={k.id}>{k.nama}</li>)}
    </ul>
  );
}
```

> Kenapa fungsi `async` ditaruh di dalam, bukan langsung `useEffect(async () => ...)`? Karena `useEffect` tidak boleh mengembalikan Promise (nilai kembalian dipakai untuk cleanup). Jadi kita buat fungsi async terpisah lalu memanggilnya.

<!--page-->

## Pola Lengkap: Loading & Error

Aplikasi profesional selalu menangani tiga keadaan: sedang memuat, berhasil, dan gagal. Ini pola standar yang dipakai di seluruh proyekmu.

```jsx
function DaftarKursus() {
  const [kursus, setKursus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function muat() {
      try {
        setLoading(true);
        const res = await fetch("https://api.example.com/kursus");
        if (!res.ok) throw new Error("Gagal memuat data");
        const data = await res.json();
        setKursus(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);      // apa pun hasilnya, matikan loading
      }
    }
    muat();
  }, []);

  if (loading) return <p>Memuat...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {kursus.map((k) => <li key={k.id}>{k.nama}</li>)}
    </ul>
  );
}
```

Perhatikan urutan render di bawah: tampilkan loading dulu, lalu error, baru data. Ini pengalaman pengguna yang baik.

<!--page-->

## Mengambil Data dengan Supabase

Proyekmu memakai Supabase. Polanya sama, hanya `fetch` diganti pemanggilan Supabase.

```jsx
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function DaftarKursus() {
  const [kursus, setKursus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function muat() {
      try {
        const { data, error } = await supabase
          .from("courses")
          .select("*")
          .eq("published", true);      // hanya yang dipublikasikan

        if (error) throw error;
        setKursus(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }
    muat();
  }, []);

  if (loading) return <p>Memuat...</p>;
  return kursus.map((k) => <KartuKursus key={k.id} data={k} />);
}
```

Supabase mengembalikan object `{ data, error }` yang di-destructure. Pola `select`, `eq`, `insert`, `update` inilah yang kamu pakai di seluruh halaman admin, dosen, dan customer.

<!--page-->

## Mengambil Data Berdasar Perubahan

Kadang data perlu diambil ulang ketika sesuatu berubah, misalnya id pengguna. Masukkan variabel itu ke dependency array.

```jsx
useEffect(() => {
  async function muatProfil() {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    setProfil(data);
  }
  if (userId) muatProfil();
}, [userId]);   // ambil ulang setiap userId berubah
```

## Ringkasan

- Ambil data di dalam `useEffect` memakai fungsi `async` terpisah, dengan `[]` agar berjalan sekali.
- Kelola tiga keadaan: **loading**, **error**, dan **data**, memakai `useState` + `try/catch/finally`.
- Supabase mengembalikan `{ data, error }`; pola `select/eq/insert/update` dipakai di seluruh proyekmu.
- Untuk mengambil ulang saat sesuatu berubah, masukkan variabel ke dependency array.

> Latihan: buat komponen yang mengambil daftar postingan dari `https://jsonplaceholder.typicode.com/posts`, menampilkan indikator loading, menangani error, lalu menampilkan judul tiap postingan.
