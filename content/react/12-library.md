# Library Ekosistem React

React sendiri hanya mengurus tampilan. Untuk membangun aplikasi lengkap, kamu memakai banyak library dari ekosistemnya. Bab ini merangkum library-library populer beserta contohnya, dikelompokkan menurut fungsi. Beberapa di antaranya sudah kamu pakai di proyek ITERACOURSE.

## Cara Memasang Library React

```bash
npm install nama-library
```

Lalu impor di komponen. Ingat: library front-end untuk React biasanya diimpor sebagai komponen atau hook.

<!--page-->

## Navigasi & Data

### react-router-dom — navigasi antar halaman

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

Sudah dibahas di bab sebelumnya. Standar untuk aplikasi multi-halaman.

### @supabase/supabase-js — database & autentikasi

```jsx
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(URL, KUNCI);

// membaca data
const { data } = await supabase.from("courses").select("*");
// autentikasi
await supabase.auth.signInWithPassword({ email, password });
```

Backend siap pakai (database, login, storage) tanpa membangun server sendiri. Dipakai di proyekmu.

### axios — alternatif fetch untuk HTTP

```jsx
import axios from "axios";

const res = await axios.get("https://api.example.com/data");
console.log(res.data);            // otomatis parse JSON

await axios.post("/api/user", { nama: "Salman" });
```

Lebih ringkas dari `fetch` (otomatis mengurai JSON, penanganan error lebih mudah).

### @tanstack/react-query — mengelola data server

```jsx
import { useQuery } from "@tanstack/react-query";

function DaftarKursus() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["kursus"],
    queryFn: () => fetch("/api/kursus").then((r) => r.json()),
  });

  if (isLoading) return <p>Memuat...</p>;
  return data.map((k) => <div key={k.id}>{k.nama}</div>);
}
```

Mengurus loading, error, caching, dan pengambilan ulang data secara otomatis — menggantikan banyak kode `useEffect` manual.

<!--page-->

## Tampilan, Ikon & Grafik

### lucide-react — ikon

```jsx
import { Search, User, Trash2 } from "lucide-react";

<button><Trash2 size={18} /> Hapus</button>
<Search className="ikon" />
```

Ribuan ikon rapi sebagai komponen. Dipakai di proyekmu. Alternatif: `react-icons` (menggabungkan banyak set ikon).

### recharts — grafik & chart

```jsx
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

<LineChart width={400} height={200} data={data}>
  <XAxis dataKey="bulan" />
  <YAxis />
  <Tooltip />
  <Line dataKey="pendapatan" stroke="#087ea4" />
</LineChart>
```

Membuat grafik garis, batang, dan pie dari data. Dipakai di dashboard proyekmu.

### framer-motion — animasi

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Muncul dengan animasi
</motion.div>
```

Animasi halus dan transisi hanya dengan menambah properti.

<!--page-->

## Form & Validasi

### react-hook-form — mengelola form kompleks

```jsx
import { useForm } from "react-hook-form";

function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      {errors.email && <span>Email wajib diisi</span>}
      <button type="submit">Masuk</button>
    </form>
  );
}
```

Menyederhanakan form besar: validasi, penanganan error, dan performa tanpa banyak `useState`.

### zod / yup — skema validasi

```jsx
import { z } from "zod";

const skema = z.object({
  email: z.string().email(),
  umur: z.number().min(17),
});
skema.parse({ email: "a@b.com", umur: 20 });   // valid
```

Mendefinisikan aturan data dan memvalidasinya, sering dipadukan dengan react-hook-form.

<!--page-->

## State Global & Utilitas

### zustand — state global yang ringan

```jsx
import { create } from "zustand";

const useStore = create((set) => ({
  jumlah: 0,
  tambah: () => set((s) => ({ jumlah: s.jumlah + 1 })),
}));

function Tombol() {
  const { jumlah, tambah } = useStore();
  return <button onClick={tambah}>{jumlah}</button>;
}
```

Alternatif Context/Redux yang jauh lebih sederhana untuk state global.

### clsx — menggabung className kondisional

```jsx
import clsx from "clsx";

<div className={clsx("kartu", { aktif: isAktif, nonaktif: !isAktif })} />
```

Menyusun kelas CSS berdasar kondisi dengan rapi.

### date-fns — mengolah tanggal

```jsx
import { format, formatDistanceToNow } from "date-fns";

format(new Date(), "dd/MM/yyyy");           // "01/07/2026"
formatDistanceToNow(tanggal);               // "3 hari yang lalu"
```

### react-hot-toast — notifikasi pop-up

```jsx
import toast from "react-hot-toast";

toast.success("Berhasil disimpan!");
toast.error("Gagal memuat data");
```

Notifikasi ringkas dan cantik hanya dengan satu baris.

<!--page-->

## Dokumen & File

### jspdf & html2canvas — membuat PDF

```jsx
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

async function unduhPDF(elemen) {
  const canvas = await html2canvas(elemen);
  const pdf = new jsPDF();
  pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
  pdf.save("sertifikat.pdf");
}
```

Mengubah tampilan menjadi gambar lalu PDF. Dipakai untuk fitur sertifikat di proyekmu.

### pdfjs-dist — menampilkan/membaca PDF

Menampilkan isi file PDF di dalam aplikasi. Dipakai untuk pratinjau materi.

## Tips Memilih Library

- Pasang hanya yang benar-benar dibutuhkan — tiap library menambah ukuran aplikasi.
- Perhatikan jumlah bintang GitHub, tanggal update terakhir, dan dokumentasinya.
- Untuk kebutuhan sederhana, kadang cukup dengan React sendiri tanpa library tambahan.

## Ringkasan

- Ekosistem React sangat luas; library dikelompokkan menurut fungsi.
- Navigasi/data: `react-router-dom`, `supabase`, `axios`, `react-query`.
- Tampilan: `lucide-react`, `recharts`, `framer-motion`.
- Form: `react-hook-form`, `zod`. State/utilitas: `zustand`, `clsx`, `date-fns`, `react-hot-toast`.
- Dokumen: `jspdf`, `html2canvas`, `pdfjs-dist` (semuanya kamu pakai di proyek).

> Latihan: pasang `lucide-react` di proyek latihanmu, lalu tampilkan tiga ikon berbeda di sebuah komponen. Coba juga `react-hot-toast` untuk menampilkan notifikasi saat tombol ditekan.
