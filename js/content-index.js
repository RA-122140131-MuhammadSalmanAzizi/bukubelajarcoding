/* ============================================================
   Daftar isi buku. Tinggal tambah entri di sini kalau bikin
   pelajaran baru — file .md-nya taruh di content/<lang>/.
   "mark" = monogram badge (pengganti emoji), "color" = aksennya.
   ============================================================ */

const BOOK = [
  {
    id: "python",
    nama: "Python",
    mark: "Py",
    color: "#3776ab",
    logo: "aset/logos/python.svg",
    deskripsi: "Bahasa serbaguna & mudah dibaca. Favorit untuk AI, data science, dan web backend.",
    pelajaran: [
      { id: "01-pengenalan", judul: "1. Pengenalan Python" },
      { id: "02-variabel-tipe", judul: "2. Variabel & Tipe Data" },
      { id: "03-operator", judul: "3. Operator" },
      { id: "08-string", judul: "4. String (Teks)" },
      { id: "04-kontrol-alur", judul: "5. Percabangan & Perulangan" },
      { id: "06-struktur-data", judul: "6. List, Dict, Tuple, Set" },
      { id: "05-fungsi", judul: "7. Fungsi" },
      { id: "07-oop", judul: "8. OOP Dasar" },
      { id: "09-oop-lanjutan", judul: "9. OOP Lanjutan" },
      { id: "10-error-handling", judul: "10. Error Handling" },
      { id: "11-comprehension", judul: "11. Comprehension & Generator" },
      { id: "12-modul", judul: "12. Modul & Package" },
      { id: "13-file-io", judul: "13. File & JSON" },
      { id: "14-decorator", judul: "14. Decorator & Context Manager" },
      { id: "15-type-hints", judul: "15. Type Hints & Dataclass" },
      { id: "16-library", judul: "16. Library Populer & pip" },
      { id: "17-best-practices", judul: "17. Best Practices" },
    ],
  },
  {
    id: "javascript",
    nama: "JavaScript",
    mark: "JS",
    color: "#c99a06",
    logo: "aset/logos/javascript.svg",
    deskripsi: "Bahasa web & fondasi React. Materi difokuskan ke JavaScript modern (ES6+) yang dipakai membangun aplikasi React.",
    pelajaran: [
      { id: "01-pengenalan", judul: "1. Pengenalan JavaScript" },
      { id: "02-variabel-tipe", judul: "2. Variabel & Tipe Data" },
      { id: "03-operator", judul: "3. Operator" },
      { id: "04-string", judul: "4. String & Template Literal" },
      { id: "05-kontrol-alur", judul: "5. Percabangan & Perulangan" },
      { id: "06-fungsi", judul: "6. Fungsi & Arrow Function" },
      { id: "07-array", judul: "7. Array & Method Penting" },
      { id: "08-object", judul: "8. Object" },
    ],
  },
  {
    id: "cpp",
    nama: "C++",
    mark: "C++",
    color: "#8a4fa3",
    logo: "aset/logos/cpp.svg",
    deskripsi: "Bahasa cepat & dekat dengan mesin. Untuk game, sistem, dan kompetisi programming.",
    pelajaran: [
      { id: "01-pengenalan", judul: "1. Pengenalan C++" },
      { id: "02-variabel-tipe", judul: "2. Variabel & Tipe Data" },
      { id: "03-kontrol-alur", judul: "3. Percabangan & Perulangan" },
      { id: "04-fungsi", judul: "4. Fungsi" },
      { id: "05-pointer", judul: "5. Pointer & Referensi" },
    ],
  },
  {
    id: "php",
    nama: "PHP",
    mark: "php",
    color: "#6a7bb0",
    logo: "aset/logos/php.svg",
    deskripsi: "Bahasa web server klasik. Menggerakkan banyak situs (WordPress, Laravel).",
    pelajaran: [
      { id: "01-pengenalan", judul: "1. Pengenalan PHP" },
      { id: "02-dasar", judul: "2. Variabel & Dasar Sintaks" },
    ],
  },
  {
    id: "go",
    nama: "Go",
    mark: "Go",
    color: "#2a9fb8",
    logo: "aset/logos/go.svg",
    deskripsi: "Bahasa modern dari Google. Cepat, sederhana, andal untuk server & cloud.",
    pelajaran: [
      { id: "01-pengenalan", judul: "1. Pengenalan Go" },
      { id: "02-dasar", judul: "2. Variabel & Dasar Sintaks" },
    ],
  },
];
