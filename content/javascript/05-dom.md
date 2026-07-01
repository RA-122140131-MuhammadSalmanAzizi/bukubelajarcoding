# Manipulasi DOM

DOM (Document Object Model) adalah representasi halaman HTML sebagai object yang bisa diubah oleh JavaScript. Inilah yang membuat halaman web menjadi interaktif.

## Memilih Elemen

```javascript
document.getElementById("judul");          // berdasar id
document.querySelector(".kelas");          // elemen pertama yang cocok (CSS selector)
document.querySelectorAll("p");            // semua elemen yang cocok
```

## Mengubah Isi & Gaya

```javascript
const judul = document.querySelector("#judul");

judul.textContent = "Judul Baru";          // ubah teks
judul.innerHTML = "<b>Tebal</b>";          // ubah dengan HTML
judul.style.color = "teal";                // ubah gaya
judul.classList.add("aktif");              // tambah class CSS
judul.classList.toggle("gelap");           // nyala/mati class
```

## Menangani Event

Event adalah kejadian seperti klik, ketik, atau submit. Kita "mendengarkan" event dengan `addEventListener`:

```javascript
const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", () => {
  console.log("Tombol diklik!");
});
```

Event yang umum: `click`, `input`, `submit`, `keydown`, `mouseover`.

## Contoh: Penghitung Sederhana

```html
<button id="tombol">Klik saya</button>
<p id="hasil">0</p>

<script>
  let jumlah = 0;
  const tombol = document.querySelector("#tombol");
  const hasil = document.querySelector("#hasil");

  tombol.addEventListener("click", () => {
    jumlah += 1;
    hasil.textContent = jumlah;
  });
</script>
```

Setiap kali tombol diklik, angka bertambah dan teks di halaman diperbarui.

## Membuat & Menambah Elemen

```javascript
const item = document.createElement("li");
item.textContent = "Item baru";
document.querySelector("ul").appendChild(item);
```

## Ringkasan

- DOM adalah halaman HTML dalam bentuk object yang bisa diubah JavaScript.
- Pilih elemen dengan `querySelector` / `getElementById`.
- Ubah dengan `textContent`, `style`, dan `classList`.
- Tanggapi interaksi pengguna dengan `addEventListener`.
