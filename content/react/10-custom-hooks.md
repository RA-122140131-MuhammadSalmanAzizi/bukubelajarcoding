# Custom Hooks

Ketika beberapa komponen membutuhkan logika yang sama — mengambil data, mengelola form, membaca localStorage — kamu bisa mengekstrak logika itu ke dalam **custom hook** agar bisa dipakai ulang. Proyekmu sudah punya contoh nyata: `useCourseDraft` dan `useAuth`.

## Apa itu Custom Hook?

Custom hook adalah **fungsi JavaScript biasa** yang namanya diawali `use` dan boleh memanggil hook lain (seperti `useState`, `useEffect`). Ia membungkus logika agar bisa dibagikan ke banyak komponen tanpa menyalin kode.

Aturan penting (Rules of Hooks):
- Nama hook **wajib** diawali `use` (React memakainya untuk mengenali hook).
- Hook hanya boleh dipanggil di level teratas komponen atau custom hook — **bukan** di dalam `if`, loop, atau fungsi bersarang.

<!--page-->

## Membuat Custom Hook Sederhana

Contoh: hook untuk mengelola nilai boolean yang bisa di-toggle (buka/tutup, tampil/sembunyi).

```jsx
import { useState } from "react";

function useToggle(awal = false) {
  const [nilai, setNilai] = useState(awal);
  const toggle = () => setNilai((v) => !v);
  return [nilai, toggle];
}
```

Memakainya di komponen mana pun:

```jsx
function Modal() {
  const [terbuka, toggleModal] = useToggle(false);

  return (
    <div>
      <button onClick={toggleModal}>Buka/Tutup</button>
      {terbuka && <div className="modal">Isi modal</div>}
    </div>
  );
}
```

Logika toggle kini bisa dipakai di banyak tempat hanya dengan `useToggle()`.

<!--page-->

## Contoh Nyata: Hook localStorage

Ini mirip dengan `useCourseDraft` di proyekmu, yang menyimpan draf form ke localStorage.

```jsx
import { useState } from "react";

function useLocalStorage(kunci, nilaiAwal) {
  const [nilai, setNilai] = useState(() => {
    try {
      const raw = localStorage.getItem(kunci);
      return raw ? JSON.parse(raw) : nilaiAwal;
    } catch {
      return nilaiAwal;
    }
  });

  const simpan = (baru) => {
    setNilai(baru);
    localStorage.setItem(kunci, JSON.stringify(baru));
  };

  return [nilai, simpan];
}
```

Memakainya:

```jsx
const [tema, setTema] = useLocalStorage("tema", "terang");
```

Sekarang nilai `tema` otomatis tersimpan di localStorage dan dipulihkan saat halaman dibuka lagi — semua logikanya tersembunyi rapi di dalam hook.

<!--page-->

## Kenapa Custom Hook Penting

- **Menghindari pengulangan**: logika ditulis sekali, dipakai di banyak komponen.
- **Memisahkan urusan**: komponen fokus pada tampilan, hook fokus pada logika.
- **Mudah diuji dan dirawat**: memperbaiki logika cukup di satu tempat.

Ini adalah salah satu ciri kode React yang matang. Saat penguji sidang melihat kamu memakai custom hook seperti `useCourseDraft`, itu menunjukkan pemahaman yang baik tentang cara menyusun aplikasi React.

## Ringkasan

- Custom hook adalah fungsi berawalan `use` yang membungkus logika agar bisa dipakai ulang.
- Patuhi Rules of Hooks: diawali `use`, dipanggil hanya di level teratas.
- Contoh umum: `useToggle`, `useLocalStorage`, `useFetch` — dan di proyekmu, `useCourseDraft` & `useAuth`.
- Custom hook memisahkan logika dari tampilan, membuat kode lebih bersih dan profesional.

> Latihan: buat custom hook `useCounter(awal)` yang mengembalikan `{ jumlah, tambah, kurang, reset }`, lalu pakai di sebuah komponen tombol.
