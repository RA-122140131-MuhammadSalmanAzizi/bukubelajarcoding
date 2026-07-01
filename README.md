# Buku Belajar Coding

Web aplikasi (PWA) untuk belajar pemrograman dalam Bahasa Indonesia. Ringkas, responsif di ponsel maupun desktop, dan tetap dapat dibuka tanpa koneksi internet.

Bahasa yang tersedia: **Python, JavaScript, C++, PHP, dan Go**.

## Fitur

- **Responsif** — tata letak menyesuaikan layar ponsel dan desktop.
- **PWA** — dapat dipasang seperti aplikasi dan berfungsi offline (service worker).
- **Tema terang & gelap** — pilihan tersimpan otomatis.
- **Pencarian pelajaran** langsung dari sidebar.
- **Tombol salin** pada setiap blok kode.
- **Tanpa dependency** — HTML, CSS, dan JavaScript murni. Tidak butuh proses build.

## Teknologi

- HTML, CSS (custom properties untuk tema), JavaScript (vanilla).
- Materi ditulis dalam berkas Markdown dan dirender oleh renderer ringan buatan sendiri.
- Ikon garis dari set Lucide (inline SVG).

## Struktur Proyek

```
bukubelajarcoding/
├── index.html            Kerangka aplikasi
├── manifest.json         Konfigurasi PWA
├── sw.js                 Service worker (offline)
├── css/style.css         Gaya & tema
├── js/
│   ├── app.js            Navigasi, tema, routing, PWA
│   ├── markdown.js       Renderer Markdown
│   └── content-index.js  Daftar isi buku
├── content/              Materi (.md) per bahasa
│   ├── python/  javascript/  cpp/  php/  go/
└── icons/                Ikon aplikasi
```

## Menjalankan Secara Lokal

Karena materi dimuat lewat `fetch`, aplikasi perlu dijalankan melalui server (bukan dibuka langsung sebagai berkas). Cara termudah:

- **VS Code** — pasang ekstensi Live Server, klik kanan `index.html`, pilih "Open with Live Server".
- **Python** — jalankan dari folder proyek:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Menambah Pelajaran Baru

1. Buat berkas Markdown baru di `content/<bahasa>/<id>.md`.
2. Daftarkan pada `js/content-index.js` di bagian `pelajaran` bahasa terkait.

## Penulis

Muhammad Salman Azizi
