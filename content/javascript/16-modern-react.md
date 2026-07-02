# JavaScript Modern untuk React

Bab penutup ini merangkum fitur JavaScript yang paling sering dipakai di React, lalu menunjukkan bagaimana semuanya bekerja bersama dalam satu komponen nyata. Anggap ini "peta" penghubung antara materi JS dan kode React-mu.

## Ceklist Fitur JS yang Dipakai React

| Fitur JS | Peran di React |
|----------|----------------|
| Arrow function | menulis komponen & event handler |
| `const` / `let` | mendeklarasikan variabel, state, komponen |
| Template literal | menyusun teks & className dinamis |
| Destructuring | mengambil props & hasil `useState` |
| Spread `...` | memperbarui state secara immutable |
| Array `.map()` | menampilkan daftar komponen |
| Array `.filter()` | menyaring data sebelum ditampilkan |
| Ternary `? :` | render kondisional di JSX |
| Short-circuit `&&` | render bila kondisi terpenuhi |
| Optional chaining `?.` | akses data aman saat masih dimuat |
| `async/await` | mengambil data dari server |
| ES Modules | menghubungkan antar file/komponen |
| Closure | dasar kerja `useState` & handler |

<!--page-->

## Membaca Sebuah Komponen React

Berikut komponen sederhana yang memakai banyak konsep sekaligus. Perhatikan komentarnya.

```jsx
import { useState } from "react";          // ES Module (bab 10)

// Komponen = arrow function; { judul, items } = destructuring props (bab 9)
const DaftarKursus = ({ judul, items }) => {
  // useState mengembalikan array -> di-destructure (bab 9)
  const [cari, setCari] = useState("");

  // filter lalu map (bab 7) -- menyaring & menampilkan
  const hasil = items
    .filter((k) => k.nama.toLowerCase().includes(cari.toLowerCase()))
    .map((k) => <li key={k.id}>{k.nama}</li>);

  return (
    <div>
      <h2>{judul}</h2>                              {/* template-like JSX */}
      <input
        value={cari}
        onChange={(e) => setCari(e.target.value)}  // event handler (bab 15)
      />
      {hasil.length > 0 ? <ul>{hasil}</ul> : <p>Tidak ada</p>}  {/* ternary (bab 3) */}
    </div>
  );
};

export default DaftarKursus;                 // default export (bab 10)
```

<!--page-->

## Membedah Baris per Baris

- `import { useState } from "react"` — **named import** dari modul React.
- `({ judul, items }) =>` — **arrow function** dengan **destructuring** props.
- `const [cari, setCari] = useState("")` — **destructuring array** dari hasil `useState`.
- `.filter(...).map(...)` — **method chaining** untuk menyaring lalu mengubah data jadi elemen.
- `key={k.id}` — wajib saat `map` agar React efisien.
- `onChange={(e) => setCari(e.target.value)}` — **event handler** arrow function yang membaca `e.target.value`.
- `{kondisi ? A : B}` — **ternary** untuk render kondisional.
- `export default` — agar komponen bisa diimpor di file lain.

## Pola Update State yang Immutable

Ingat, jangan mengubah state lama langsung. Selalu buat yang baru dengan spread:

```javascript
// menambah item ke array state
setItems([...items, itemBaru]);

// memperbarui satu field object state
setUser({ ...user, aktif: true });

// menghapus item
setItems(items.filter((i) => i.id !== idHapus));
```

<!--page-->

## Langkah Berikutnya Menuju React

Setelah menguasai seluruh bab JavaScript ini, kamu sudah siap memahami React karena fondasinya sama. Konsep React yang tinggal dipelajari:

1. **JSX** — menulis tampilan mirip HTML di dalam JavaScript.
2. **Komponen & Props** — memecah UI jadi fungsi yang menerima data.
3. **useState** — menyimpan data yang berubah (pakai closure & destructuring).
4. **useEffect** — menjalankan efek samping seperti mengambil data (pakai async/await).
5. **useContext** — berbagi data antar komponen (seperti `AuthContext` di proyekmu).
6. **Custom hooks** — memisahkan logika agar bisa dipakai ulang (seperti `useCourseDraft`).

Semua itu dibangun di atas JavaScript yang baru kamu pelajari.

## Ringkasan

- React sepenuhnya berdiri di atas JavaScript modern (ES6+).
- Fitur inti: arrow function, destructuring, spread, `map`/`filter`, ternary, optional chaining, async/await, dan modules.
- Selalu perbarui state secara **immutable** dengan spread dan `filter`/`map`.
- Dengan fondasi ini, mempelajari JSX, props, dan hooks React akan terasa jauh lebih mudah.

> Latihan penutup: buka salah satu file komponen di proyek React-mu, lalu tandai setiap fitur JS yang kamu kenali (arrow function, destructuring, map, dll). Ini melatihmu "membaca" React sebagai JavaScript.
