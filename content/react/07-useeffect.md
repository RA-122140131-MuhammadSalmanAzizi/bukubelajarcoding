# useEffect & Lifecycle

`useState` menangani data yang berubah. Tetapi ada tugas lain yang perlu dilakukan komponen: mengambil data dari server, memasang timer, membaca localStorage, atau berlangganan event. Tugas-tugas ini disebut **efek samping** (side effects), dan dikelola dengan hook `useEffect`.

## Apa itu Efek Samping?

Efek samping adalah apa pun yang "menjangkau ke luar" komponen: memanggil API, mengubah judul halaman, mengatur timer, menyimpan ke localStorage. Hal-hal ini tidak boleh dilakukan langsung saat render karena bisa menyebabkan perilaku tak terduga. `useEffect` menyediakan tempat yang aman untuk itu.

## Bentuk Dasar useEffect

```jsx
import { useEffect } from "react";

function Komponen() {
  useEffect(() => {
    console.log("Komponen tampil / diperbarui");
  });

  return <div>...</div>;
}
```

`useEffect` menerima sebuah fungsi yang dijalankan **setelah** komponen dirender ke layar.

<!--page-->

## Dependency Array: Mengontrol Kapan Efek Berjalan

Argumen kedua `useEffect` adalah **dependency array** yang menentukan kapan efek dijalankan. Ini bagian terpenting.

### Jalan Sekali (saat komponen pertama muncul)

Array kosong `[]` berarti efek hanya berjalan sekali, saat komponen pertama kali tampil. Ini paling sering dipakai untuk mengambil data awal.

```jsx
useEffect(() => {
  ambilDataAwal();
}, []);   // array kosong = sekali saja
```

### Jalan Saat Nilai Tertentu Berubah

Bila array berisi variabel, efek berjalan setiap kali variabel itu berubah.

```jsx
useEffect(() => {
  ambilData(userId);
}, [userId]);   // jalan ulang setiap userId berubah
```

### Jalan Tiap Render

Tanpa array kedua, efek berjalan setiap kali komponen dirender. Ini jarang diinginkan dan sering menjadi sumber bug.

```jsx
useEffect(() => { ... });   // tiap render (hati-hati)
```

<!--page-->

## Cleanup: Membersihkan Efek

Beberapa efek perlu dibersihkan saat komponen hilang atau efek dijalankan ulang — misalnya menghentikan timer atau berhenti berlangganan event. Kembalikan sebuah fungsi dari `useEffect` untuk membersihkan.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("tik");
  }, 1000);

  return () => clearInterval(timer);   // cleanup: dijalankan saat komponen hilang
}, []);
```

> Di proyekmu, langganan perubahan autentikasi Supabase (`onAuthStateChange`) dipasang di `useEffect` dan dibersihkan di fungsi cleanup-nya agar tidak terjadi kebocoran memori.

<!--page-->

## Kesalahan Umum: Infinite Loop

Kesalahan klasik: memperbarui state di dalam `useEffect` tanpa dependency array yang benar, sehingga membuat loop tak berujung.

```jsx
// SALAH: memicu render terus-menerus
useEffect(() => {
  setJumlah(jumlah + 1);   // mengubah state -> render ulang -> efek jalan lagi -> ...
});

// BENAR: batasi dengan dependency array
useEffect(() => {
  setJumlah(1);
}, []);   // sekali saja
```

Aturan praktis: masukkan semua nilai dari luar yang dipakai di dalam efek ke dependency array. ESLint (yang ada di proyekmu) biasanya memperingatkan bila ada dependency yang terlewat.

## Contoh Nyata: Mengubah Judul Halaman

```jsx
useEffect(() => {
  document.title = `Pesan (${jumlahPesan})`;
}, [jumlahPesan]);   // perbarui judul setiap jumlah pesan berubah
```

## Ringkasan

- `useEffect` menjalankan **efek samping** (ambil data, timer, langganan) setelah render.
- **Dependency array** mengontrol kapan efek berjalan: `[]` sekali, `[x]` saat `x` berubah, tanpa array setiap render.
- Kembalikan fungsi **cleanup** untuk membersihkan timer/langganan.
- Hati-hati infinite loop: jangan memperbarui state tanpa dependency array yang tepat.

> Latihan: buat komponen jam yang menampilkan waktu saat ini dan memperbaruinya tiap detik memakai `setInterval` di dalam `useEffect`, dengan cleanup `clearInterval`.
