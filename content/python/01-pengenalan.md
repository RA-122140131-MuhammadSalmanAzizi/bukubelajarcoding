# Pengenalan Python

Python adalah bahasa pemrograman tingkat tinggi yang dirancang agar **mudah dibaca dan ditulis**. Sintaksnya bersih dan mendekati bahasa Inggris sehari-hari, sehingga cocok untuk pemula, tetapi juga cukup kuat untuk dipakai perusahaan-perusahaan besar dunia.

## Sedikit Latar Belakang

Python dibuat oleh **Guido van Rossum** dan pertama kali dirilis tahun 1991. Filosofinya menekankan **keterbacaan kode**: sebuah program sebaiknya mudah dipahami manusia, bukan hanya dimengerti mesin. Prinsip ini terangkum dalam "The Zen of Python" — coba jalankan `import this` di Python untuk melihatnya.

## Kenapa Banyak Orang Memilih Python?

- **Mudah dipelajari** — sedikit simbol rumit, banyak kata yang masuk akal.
- **Serbaguna** — satu bahasa untuk banyak bidang.
- **Ekosistem besar** — ratusan ribu pustaka siap pakai lewat `pip`.
- **Komunitas aktif** — dokumentasi melimpah dan mudah mencari solusi.
- **Permintaan kerja tinggi** — salah satu bahasa paling dicari di industri.

## Di Mana Python Dipakai?

| Bidang | Contoh penggunaan |
|--------|-------------------|
| Kecerdasan Buatan (AI) | machine learning, model bahasa, computer vision |
| Data Science | analisis data, visualisasi, statistik |
| Web Backend | server, API (Django, Flask, FastAPI) |
| Otomasi | script untuk mengotomatiskan tugas berulang |
| Ilmu & Riset | simulasi, perhitungan ilmiah |

> Catatan: Instagram, Spotify, Netflix, dan Dropbox adalah contoh layanan besar yang memakai Python di baliknya.

<!--page-->

## Menjalankan Python

Ada dua cara utama menjalankan kode Python.

### 1. File Script

Tulis kode dalam file berakhiran `.py`, lalu jalankan lewat terminal:

```bash
python nama_file.py
```

Ini cara paling umum untuk program yang sesungguhnya.

### 2. Mode Interaktif (REPL)

Ketik `python` di terminal untuk masuk mode interaktif, lalu ketik kode baris per baris. Cocok untuk uji coba cepat:

```python
>>> 2 + 3
5
>>> print("halo")
halo
```

REPL singkatan dari Read-Eval-Print Loop: Python **membaca** kodemu, **mengevaluasi**, lalu **mencetak** hasilnya.

## Program Pertama

Program klasik "Hello, World" di Python cukup satu baris:

```python
print("Halo, Dunia!")
```

Mari bedah bagian-bagiannya:

- `print` — nama perintah (fungsi) untuk menampilkan sesuatu ke layar.
- `( )` — tanda kurung, tempat kita meletakkan apa yang ingin ditampilkan.
- `"Halo, Dunia!"` — teks yang ditampilkan, diapit tanda kutip.

Jalankan, dan layar akan menampilkan:

```text
Halo, Dunia!
```

> Tips: coba ganti teks di dalam tanda kutip dengan namamu sendiri, lalu jalankan lagi.

<!--page-->

## Aturan Penulisan Dasar

### Komentar

Komentar adalah catatan untuk manusia yang **diabaikan** oleh Python. Diawali tanda pagar `#`:

```python
# Ini komentar, tidak dijalankan
print("Ini dijalankan")   # komentar juga boleh di akhir baris
```

Gunakan komentar untuk menjelaskan **mengapa** sesuatu ditulis, bukan sekadar mengulang apa yang sudah jelas dari kodenya.

### Indentasi Itu Penting

Berbeda dari kebanyakan bahasa, Python memakai **indentasi** (spasi menjorok di awal baris) untuk menandai blok kode. Ini bukan sekadar kerapian — salah indentasi menyebabkan error.

```python
if 5 > 3:
    print("benar")     # menjorok 4 spasi: bagian dari if
print("selesai")       # tidak menjorok: di luar if
```

Standarnya adalah **4 spasi** per tingkat. Kita bahas lebih dalam di bab percabangan.

### Peka Huruf Besar-Kecil (Case-Sensitive)

Python membedakan huruf besar dan kecil. `nama`, `Nama`, dan `NAMA` dianggap tiga hal berbeda.

```python
nama = "Salman"
print(Nama)     # Error: 'Nama' tidak dikenal (beda dengan 'nama')
```

## Kesalahan Umum Pemula

- Lupa tanda kutip pada teks: `print(Halo)` salah, seharusnya `print("Halo")`.
- Salah indentasi (campur tab dan spasi).
- Salah tulis nama perintah: `Print` atau `PRINT` tidak sama dengan `print`.

## Ringkasan

- Python dikenal karena mudah dibaca dan serbaguna, dipakai di AI, data, dan web.
- File Python berakhiran `.py` dan dijalankan dengan `python nama_file.py`.
- `print()` menampilkan teks; komentar diawali `#`.
- Python peka huruf besar-kecil dan memakai indentasi untuk menandai blok.

> Latihan: buat file `latihan.py` yang menampilkan tiga baris — nama, hobi, dan cita-citamu — menggunakan tiga perintah `print`.

Lanjut ke bab berikutnya untuk mengenal **variabel dan tipe data**.
