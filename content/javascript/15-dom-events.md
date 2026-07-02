# DOM & Events

DOM (Document Object Model) adalah representasi halaman HTML sebagai object yang bisa diubah JavaScript. Di React kamu jarang menyentuh DOM langsung (React yang mengurusnya), tetapi memahami dasar ini penting, dan konsep **event** dipakai langsung di React.

## Memilih & Mengubah Elemen (JavaScript Murni)

```javascript
const judul = document.querySelector("#judul");   // pilih elemen (CSS selector)
judul.textContent = "Judul Baru";                  // ubah teks
judul.classList.add("aktif");                      // tambah class CSS
judul.style.color = "teal";                        // ubah gaya
```

> Catatan: di React, kamu **tidak** mengubah DOM seperti ini. Kamu mengubah **state**, dan React yang memperbarui tampilan. Cara langsung ini hanya dipakai di JavaScript murni atau kasus khusus (misalnya lewat `useRef`).

<!--page-->

## Events (Kejadian)

Event adalah kejadian seperti klik, ketik, atau submit. Di JavaScript murni:

```javascript
const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", () => {
  console.log("diklik!");
});
```

Event umum: `click`, `input`, `change`, `submit`, `keydown`, `mouseover`.

## Event di React

Di React, event ditulis langsung sebagai atribut pada elemen, memakai camelCase dan sebuah fungsi:

```javascript
// <button onClick={() => hapus(id)}>Hapus</button>
// <input onChange={(e) => setNama(e.target.value)} />
// <form onSubmit={handleSubmit}>...</form>
```

Bandingkan: konsepnya sama dengan `addEventListener`, tetapi ditulis lebih ringkas dan "menyatu" dengan komponen.

<!--page-->

## Object Event

Fungsi handler menerima object `event` yang berisi informasi kejadian:

```javascript
input.addEventListener("input", (e) => {
  console.log(e.target.value);   // isi terbaru input
});
```

`e.target` adalah elemen yang memicu event; `e.target.value` adalah nilainya.

> Dipakai di React: `onChange={(e) => setNama(e.target.value)}` — pola paling umum untuk form; nilai input disimpan ke state setiap kali pengguna mengetik.

`e.preventDefault()` mencegah perilaku bawaan (misalnya form yang me-refresh halaman):

```javascript
function handleSubmit(e) {
  e.preventDefault();   // cegah reload halaman
  // proses data form...
}
```

## Ringkasan

- DOM adalah halaman sebagai object; di React, biarkan React yang mengurus DOM lewat state.
- Event (klik, ketik, submit) ditangani dengan `addEventListener` (JS murni) atau atribut `onClick`/`onChange` (React).
- Object event memberi info; `e.target.value` untuk nilai input, `e.preventDefault()` mencegah aksi bawaan.

> Latihan (JS murni): buat sebuah tombol dan sebuah paragraf; tiap kali tombol diklik, angka di paragraf bertambah 1.
