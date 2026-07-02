# React Router

React sendiri hanya menampilkan komponen; ia tidak tahu soal "halaman" atau URL. Untuk membuat aplikasi dengan banyak halaman (beranda, login, dashboard, detail kursus) yang berpindah tanpa me-reload, kamu memakai library **React Router**. Proyekmu memakai `react-router-dom` versi 7 untuk seluruh navigasinya.

## Memasang & Menyiapkan

```bash
npm install react-router-dom
```

Bungkus aplikasi dengan `BrowserRouter`, lalu definisikan rute dengan `Routes` dan `Route`.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kursus" element={<DaftarKursus />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Tiap `Route` memetakan sebuah URL (`path`) ke komponen (`element`) yang ditampilkan.

<!--page-->

## Berpindah Halaman dengan Link

Jangan memakai `<a href>` biasa (itu me-reload seluruh halaman). Gunakan `Link` agar perpindahan terjadi instan tanpa reload.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Beranda</Link>
      <Link to="/kursus">Kursus</Link>
      <Link to="/login">Masuk</Link>
    </nav>
  );
}
```

`NavLink` mirip `Link` tetapi bisa menandai tautan yang sedang aktif (berguna untuk menu):

```jsx
import { NavLink } from "react-router-dom";
<NavLink to="/kursus" className={({ isActive }) => isActive ? "aktif" : ""}>Kursus</NavLink>
```

<!--page-->

## Rute Dinamis & useParams

Untuk halaman detail (misalnya detail satu kursus), URL memuat bagian yang berubah, ditandai dengan titik dua.

```jsx
<Route path="/kursus/:id" element={<DetailKursus />} />
```

Di dalam komponen, ambil nilai `:id` dengan `useParams`:

```jsx
import { useParams } from "react-router-dom";

function DetailKursus() {
  const { id } = useParams();       // ambil id dari URL

  useEffect(() => {
    ambilKursus(id);                // pakai id untuk mengambil data
  }, [id]);

  return <h1>Kursus {id}</h1>;
}
```

## Berpindah Lewat Kode dengan useNavigate

Kadang kamu perlu berpindah halaman dari dalam fungsi (misalnya setelah login berhasil).

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  async function handleLogin() {
    await masuk();
    navigate("/dashboard");         // pindah setelah berhasil
  }
}
```

<!--page-->

## Protected Route (Rute Terlindungi)

Halaman tertentu hanya boleh diakses pengguna yang login atau punya peran tertentu. Proyekmu memakai komponen `ProtectedRoute` untuk ini. Konsepnya: cek kondisi, bila tidak memenuhi, alihkan ke halaman lain.

```jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;   // alihkan bila belum login
  }
  return children;
}
```

Memakainya membungkus halaman yang dilindungi:

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## Ringkasan

- **React Router** memberi aplikasi banyak halaman tanpa reload.
- `BrowserRouter` + `Routes` + `Route` mendefinisikan pemetaan URL ke komponen.
- Berpindah dengan **`Link`**/`NavLink` (bukan `<a>`), atau lewat kode dengan **`useNavigate`**.
- **`useParams`** membaca bagian dinamis URL (`:id`).
- **Protected route** melindungi halaman berdasar status login/peran memakai `Navigate`.

> Latihan: buat dua rute (`/` dan `/tentang`) dengan dua komponen sederhana, sebuah navbar berisi `Link` ke keduanya, dan tombol yang memakai `useNavigate` untuk kembali ke beranda.
