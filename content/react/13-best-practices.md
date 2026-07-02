# Best Practices & Struktur Proyek

Bab penutup ini merangkum kebiasaan menulis React yang baik dan cara menyusun proyek. Menerapkan ini membuat kodemu mudah dibaca, dirawat, dan menunjukkan kematangan — hal yang dinilai penguji saat sidang.

## Struktur Folder yang Rapi

Aplikasi React yang besar mengorganisir kode berdasar peran, mirip proyekmu:

```text
src/
├── components/     # komponen yang dipakai ulang (Navbar, Footer, KartuKursus)
├── pages/          # komponen tingkat halaman (per rute)
├── contexts/       # Context global (Auth, Theme, Notification)
├── hooks/          # custom hooks (useCourseDraft)
├── lib/            # koneksi & utilitas (supabase, storage)
├── services/       # fungsi akses data (authService)
├── assets/         # gambar & aset statis
├── App.jsx         # pengatur rute utama
└── main.jsx        # titik masuk
```

Prinsipnya: kelompokkan berkas menurut apa fungsinya, dan jaga setiap file tetap fokus pada satu tanggung jawab.

<!--page-->

## Memecah Komponen

Aturan praktis: bila sebuah komponen menjadi terlalu panjang atau melakukan terlalu banyak hal, pecah menjadi komponen-komponen lebih kecil.

- Satu komponen sebaiknya punya **satu tanggung jawab** yang jelas.
- Bagian yang dipakai berulang (kartu, tombol, modal) jadikan komponen tersendiri.
- Halaman besar tersusun dari banyak komponen kecil yang bisa dipakai ulang.

```jsx
// Daripada satu komponen raksasa:
function HalamanKursus() { /* 500 baris... */ }

// Pecah menjadi bagian-bagian yang jelas:
function HalamanKursus() {
  return (
    <div>
      <FilterKursus />
      <DaftarKursus />
      <Pagination />
    </div>
  );
}
```

Penamaan komponen memakai **PascalCase** (`KartuKursus`), dan tiap komponen utama berada di file sendiri.

<!--page-->

## Aturan Hooks (Rules of Hooks)

Ini aturan wajib yang bila dilanggar menyebabkan bug sulit dilacak. ESLint di proyekmu memperingatkannya.

1. **Panggil hooks hanya di level teratas** — jangan di dalam `if`, loop, atau fungsi bersarang.

```jsx
// SALAH
if (login) {
  const [data, setData] = useState();
}

// BENAR
const [data, setData] = useState();
if (login) { ... }
```

2. **Panggil hooks hanya dari komponen React atau custom hook**, bukan dari fungsi JavaScript biasa.

3. **Sertakan semua dependency** di `useEffect`/`useCallback`. Bila sebuah nilai dipakai di dalam efek, masukkan ke dependency array.

<!--page-->

## Menjaga State Tetap Immutable

Selalu buat data baru saat memperbarui state; jangan mengubah yang lama.

```jsx
// SALAH
items.push(baru);
setItems(items);
user.aktif = true;

// BENAR
setItems([...items, baru]);
setUser({ ...user, aktif: true });
setItems(items.filter((i) => i.id !== id));
```

## Memisahkan Logika dari Tampilan

- Logika pengambilan data dan pemrosesan sebaiknya dipisah (ke custom hook atau file `services`).
- Komponen fokus pada **menampilkan**, bukan menghitung hal rumit di dalam JSX.
- Gunakan `contexts` untuk data global, `hooks` untuk logika yang dipakai ulang — persis struktur proyekmu.

<!--page-->

## Kebiasaan Baik Lainnya

- **Penamaan yang jelas**: `daftarKursus` lebih baik daripada `data`; `handleSubmit` lebih baik daripada `fn`.
- **Key yang benar** pada `.map()`: pakai id unik, bukan index.
- **Tangani loading & error** di setiap pengambilan data (jangan asumsikan selalu berhasil).
- **Jangan menaruh rahasia di kode**: kunci API disimpan di file `.env`, bukan ditulis langsung.
- **Manfaatkan ESLint**: perbaiki peringatannya, jangan diabaikan.
- **Commit kecil & sering** dengan pesan jelas saat memakai git.

## Persiapan Menjelaskan Proyek (untuk Sidang)

Saat mempresentasikan proyek React-mu, kamu akan lebih percaya diri bila bisa menjelaskan:

- **Alur data**: dari mana data datang (Supabase) → disimpan di state/context → ditampilkan lewat komponen.
- **Kenapa memakai Context**: untuk berbagi data autentikasi ke seluruh aplikasi tanpa prop drilling.
- **Kenapa memakai custom hook**: untuk memakai ulang logika (seperti `useCourseDraft`).
- **Cara rute dilindungi**: `ProtectedRoute` mengecek status login sebelum menampilkan halaman.
- **Cara komponen disusun**: halaman besar dipecah jadi komponen kecil yang bisa dipakai ulang.

## Ringkasan

- Susun folder berdasar peran (`components`, `pages`, `contexts`, `hooks`, `lib`, `services`).
- Pecah komponen besar; satu komponen satu tanggung jawab; nama PascalCase.
- Patuhi Rules of Hooks dan jaga state tetap immutable.
- Pisahkan logika dari tampilan; simpan rahasia di `.env`; manfaatkan ESLint.
- Untuk sidang, latih menjelaskan alur data, Context, custom hook, dan struktur komponen proyekmu.

> Selamat! Kamu telah menyelesaikan seluruh modul React. Langkah terbaik berikutnya adalah membuka proyek ITERACOURSE-mu dan mencoba mengenali setiap konsep yang telah dipelajari di dalam kode nyatanya.
