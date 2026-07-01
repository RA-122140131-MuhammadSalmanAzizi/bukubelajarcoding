# Variabel & Tipe Data

Variabel adalah "kotak" bernama untuk menyimpan nilai agar bisa dipakai lagi nanti. Di Python, kamu tidak perlu menuliskan tipenya — Python menentukannya otomatis dari nilai yang diberikan.

## Membuat Variabel

```python
nama = "Salman"      # teks (string)
umur = 22            # bilangan bulat (int)
tinggi = 170.5       # bilangan desimal (float)
aktif = True         # boolean (benar/salah)
```

Tanda `=` di sini berarti **"isi kotak dengan"**, bukan "sama dengan" secara matematis. Baris `umur = 22` dibaca: "masukkan nilai 22 ke dalam kotak bernama umur".

Nilai variabel bisa diganti kapan saja:

```python
umur = 22
umur = 23       # sekarang isinya 23
umur = umur + 1 # ambil isi lama (23), tambah 1, simpan lagi -> 24
```

## Aturan & Gaya Penamaan

Aturan wajib:
- Hanya boleh huruf, angka, dan garis bawah `_`.
- Tidak boleh diawali angka (`2nama` salah).
- Tidak boleh mengandung spasi (`nama user` salah).
- Tidak boleh memakai kata kunci Python (seperti `if`, `for`, `class`).

Gaya yang disarankan (konvensi `snake_case`):

```python
# baik
jumlah_tugas = 5
nama_lengkap = "Salman Azizi"

# kurang baik
x = 5            # tidak deskriptif
namaLengkap = 5  # gaya camelCase, kurang umum di Python
```

> Tips: nama variabel yang baik menjelaskan isinya. Kode yang mudah dibaca dimulai dari penamaan yang jelas.

<!--page-->

## Tipe Data Dasar

| Tipe | Nama | Contoh |
|------|------|--------|
| `int` | bilangan bulat | `10`, `-5`, `0` |
| `float` | bilangan desimal | `3.14`, `-0.5` |
| `str` | teks | `"halo"`, `'a'` |
| `bool` | benar/salah | `True`, `False` |
| `None` | ketiadaan nilai | `None` |

Cek tipe suatu nilai dengan fungsi `type()`:

```python
print(type(22))       # <class 'int'>
print(type(3.14))     # <class 'float'>
print(type("halo"))   # <class 'str'>
print(type(True))     # <class 'bool'>
```

### Tentang int dan float

- `int` untuk bilangan bulat (tanpa koma).
- `float` untuk bilangan berkoma. Perhatikan, pemisah desimal memakai **titik**, bukan koma: `3.14`, bukan `3,14`.

### Tentang bool

`bool` hanya punya dua nilai: `True` dan `False` (huruf T dan F kapital). Tipe ini muncul dari hasil perbandingan:

```python
print(10 > 5)     # True
print(3 == 4)     # False
```

### Tentang None

`None` berarti "belum ada nilai" atau "kosong". Ini berbeda dari angka `0` maupun teks kosong `""`.

```python
hasil = None      # belum ada hasil
```

<!--page-->

## Konversi Tipe (Casting)

Kadang kita perlu mengubah nilai dari satu tipe ke tipe lain:

```python
int("22")      # "22" (teks) menjadi 22 (angka)
str(22)        # 22 menjadi "22"
float("3.14")  # "3.14" menjadi 3.14
int(3.99)      # 3 (bagian desimal dibuang, BUKAN dibulatkan)
```

> Hati-hati: `int("abc")` akan error, karena "abc" tidak bisa diubah menjadi angka.

### Jebakan Paling Umum: input() Selalu Teks

Perintah `input()` (yang membaca ketikan pengguna) **selalu** menghasilkan teks, walaupun pengguna mengetik angka. Kalau ingin dihitung, ubah dulu:

```python
umur = input("Umur: ")        # misalnya ketik 22 -> ini teks "22"
umur = umur + 1               # ERROR: tidak bisa menambah teks dengan angka

umur = int(input("Umur: "))   # cara benar: ubah ke angka dulu
umur = umur + 1               # sekarang aman
```

## Menampilkan Variabel dengan f-string

Cara paling nyaman menggabungkan teks dan variabel adalah **f-string**: awali tanda kutip dengan huruf `f`, lalu taruh variabel di dalam kurung kurawal `{ }`:

```python
nama = "Salman"
umur = 22
print(f"Namaku {nama}, umur {umur} tahun.")
# Namaku Salman, umur 22 tahun.
```

f-string juga bisa mengatur format angka:

```python
harga = 15000.5
print(f"{harga:.2f}")     # 15000.50  (dua angka desimal)
print(f"{harga:,.0f}")    # 15,000    (pemisah ribuan)
```

## Ringkasan

- Variabel dibuat dengan `nama = nilai`, tanpa menyebut tipe.
- Tipe dasar: `int`, `float`, `str`, `bool`, dan `None`.
- `type()` mengecek tipe; `int()`, `str()`, `float()` mengubah tipe.
- `input()` selalu menghasilkan teks — ubah ke angka bila perlu dihitung.
- f-string (`f"..."`) menggabungkan teks dan variabel dengan rapi.

> Latihan: minta nama dan tahun lahir pengguna dengan `input()`, lalu tampilkan "Halo NAMA, umurmu sekitar X tahun" (hitung dari tahun sekarang).
