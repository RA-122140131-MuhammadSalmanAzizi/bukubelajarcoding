# Pengenalan PHP

PHP adalah bahasa yang dirancang khusus untuk **web server**. Banyak situs besar berjalan di atasnya, termasuk WordPress dan framework populer seperti Laravel. PHP berjalan di server, menghasilkan HTML, lalu mengirimkannya ke browser.

## Ciri Khas PHP

- **Fokus web** — dibuat untuk membangun halaman dinamis.
- **Berjalan di server** — kode dijalankan sebelum halaman sampai ke pengguna.
- **Mudah dipadukan dengan HTML** — kode PHP bisa diselipkan di tengah HTML.

## Tag PHP

Kode PHP ditulis di antara tag `<?php` dan `?>`:

```php
<?php
    echo "Halo, Dunia!";
?>
```

`echo` adalah perintah untuk menampilkan output (mirip `print`).

## Menyisipkan PHP ke HTML

Inilah kekuatan utama PHP — mencampur logika dengan tampilan:

```php
<!DOCTYPE html>
<html>
  <body>
    <h1>Selamat datang</h1>
    <p>Hari ini tanggal: <?php echo date("d-m-Y"); ?></p>
  </body>
</html>
```

Bagian `<?php echo date("d-m-Y"); ?>` dijalankan di server, dan hasilnya (tanggal hari ini) yang dikirim ke browser.

## Menjalankan PHP

Jika PHP sudah terpasang, jalankan server bawaan dari terminal:

```bash
php -S localhost:8000
```

Lalu buka `http://localhost:8000` di browser. Untuk uji cepat tanpa server:

```bash
php nama_file.php
```

## Komentar

```php
<?php
// komentar satu baris
# ini juga komentar satu baris
/* komentar
   banyak baris */
?>
```

## Ringkasan

- PHP dibuat khusus untuk web dan berjalan di server.
- Kode ditulis di antara `<?php ... ?>`.
- `echo` menampilkan output; PHP bisa disisipkan langsung ke HTML.
- Jalankan dengan `php -S localhost:8000` untuk server lokal.
