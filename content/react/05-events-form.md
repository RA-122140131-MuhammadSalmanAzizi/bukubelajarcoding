# Event & Form

Aplikasi menjadi hidup ketika bisa menanggapi aksi pengguna: klik, ketik, kirim form. Bab ini membahas cara React menangani event dan cara membangun form yang benar — keterampilan yang dipakai di hampir setiap halaman proyekmu (login, upload kursus, review, dsb).

## Menangani Event

Di React, event ditulis langsung sebagai atribut pada elemen, memakai camelCase, dan diberi sebuah **fungsi** (bukan string).

```jsx
function Tombol() {
  function handleClick() {
    alert("Tombol ditekan!");
  }

  return <button onClick={handleClick}>Klik saya</button>;
}
```

Perhatikan: kita menulis `onClick={handleClick}` (mengoper fungsinya), **bukan** `onClick={handleClick()}` (yang justru langsung menjalankannya saat render). Kesalahan ini sangat umum bagi pemula.

Bila handler butuh argumen, bungkus dengan arrow function:

```jsx
<button onClick={() => hapus(item.id)}>Hapus</button>
```

Arrow function `() => hapus(item.id)` baru dijalankan saat tombol benar-benar diklik, sambil "mengingat" `item.id` lewat closure.

Event umum di React: `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onMouseEnter`, `onFocus`, `onBlur`.

<!--page-->

## Object Event

Setiap handler menerima object `event` yang berisi informasi tentang kejadian tersebut.

```jsx
function Input() {
  function handleChange(e) {
    console.log(e.target.value);   // isi terbaru input
  }

  return <input onChange={handleChange} />;
}
```

- `e.target` adalah elemen yang memicu event.
- `e.target.value` adalah nilainya (untuk input, select, textarea).
- `e.preventDefault()` mencegah perilaku bawaan, misalnya form yang me-refresh halaman.

<!--page-->

## Form Terkontrol (Controlled Component)

Cara React mengelola form adalah dengan menghubungkan setiap input ke sebuah state. React menjadi "sumber kebenaran tunggal" untuk isi form. Ini disebut controlled component.

```jsx
import { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
}
```

Pola tiap input: `value` mengambil dari state, dan `onChange` memperbaruinya. Setiap ketikan → `setState` → React menggambar ulang dengan nilai baru. Dengan begini, kamu selalu punya akses ke isi form yang terbaru di variabel state.

<!--page-->

## Menangani Submit

Saat form dikirim, cegah perilaku bawaan (reload halaman) dengan `e.preventDefault()`, lalu proses datanya.

```jsx
function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();               // cegah reload halaman
    console.log("Login:", email, password);
    // di proyek nyata: panggil supabase.auth.signInWithPassword(...)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Masuk</button>
    </form>
  );
}
```

`onSubmit` diletakkan pada `<form>`, bukan pada tombol. Tombol dengan `type="submit"` akan memicu submit form.

<!--page-->

## Banyak Input dengan Satu State Object

Bila form punya banyak field, menaruh semuanya dalam satu object state lalu memakai satu handler bisa lebih ringkas.

```jsx
function FormProfil() {
  const [form, setForm] = useState({ nama: "", email: "", kota: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });   // perbarui field sesuai name
  }

  return (
    <form>
      <input name="nama" value={form.nama} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="kota" value={form.kota} onChange={handleChange} />
    </form>
  );
}
```

Perhatikan `[name]: value` — ini "computed property name": nama field diambil dari atribut `name` input. Dengan spread `{ ...form, [name]: value }`, hanya field yang diubah yang diperbarui, sisanya tetap.

## Ringkasan

- Event ditulis sebagai atribut fungsi: `onClick={handleClick}` (bukan `handleClick()`).
- Gunakan arrow function untuk mengoper argumen: `onClick={() => hapus(id)}`.
- **Form terkontrol**: tiap input punya `value` dari state dan `onChange` yang memperbaruinya.
- Tangani submit di `<form onSubmit>` dengan `e.preventDefault()`.
- Banyak field bisa dikelola satu object state + satu handler memakai `[name]: value`.

> Latihan: buat form pendaftaran dengan field nama, email, dan password dalam satu object state. Saat submit, tampilkan isinya di console dan cegah reload halaman.
