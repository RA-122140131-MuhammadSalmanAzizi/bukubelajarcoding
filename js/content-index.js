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
    deskripsi: "Bahasa serbaguna & mudah dibaca. Favorit untuk AI, data science, dan web backend.",
    pelajaran: [
      { id: "01-pengenalan", judul: "1. Pengenalan Python" },
      { id: "02-variabel-tipe", judul: "2. Variabel & Tipe Data" },
      { id: "03-operator", judul: "3. Operator" },
      { id: "04-kontrol-alur", judul: "4. Percabangan & Perulangan" },
      { id: "05-fungsi", judul: "5. Fungsi" },
      { id: "06-struktur-data", judul: "6. List, Dict, Tuple, Set" },
      { id: "07-oop", judul: "7. OOP (Class & Object)" },
    ],
  },
  {
    id: "javascript",
    nama: "JavaScript",
    mark: "JS",
    color: "#c99a06",
    deskripsi: "Bahasa web. Jalan di browser dan server (Node.js). Wajib untuk front-end.",
    pelajaran: [
      { id: "01-pengenalan", judul: "1. Pengenalan JavaScript" },
      { id: "02-variabel-tipe", judul: "2. Variabel & Tipe Data" },
      { id: "03-fungsi", judul: "3. Fungsi" },
      { id: "04-array-object", judul: "4. Array & Object" },
      { id: "05-dom", judul: "5. Manipulasi DOM" },
    ],
  },
  {
    id: "cpp",
    nama: "C++",
    mark: "C++",
    color: "#8a4fa3",
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
    deskripsi: "Bahasa modern dari Google. Cepat, sederhana, andal untuk server & cloud.",
    pelajaran: [
      { id: "01-pengenalan", judul: "1. Pengenalan Go" },
      { id: "02-dasar", judul: "2. Variabel & Dasar Sintaks" },
    ],
  },
];
