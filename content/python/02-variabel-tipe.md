# Variabel & Tipe Data

Variabel adalah "kotak" bernama untuk menyimpan nilai. Di Python, kamu tidak perlu menuliskan tipenya — Python menebaknya otomatis.

```python
nama = "Salman"      # teks (string)
umur = 22            # bilangan bulat (int)
tinggi = 170.5       # bilangan desimal (float)
aktif = True         # boolean (benar/salah)
```

## Aturan Penamaan

- Gunakan huruf kecil dengan garis bawah: `jumlah_tugas`, `nama_user` (gaya `snake_case`).
- Nama harus deskriptif. Hindari `x`, `data1`, atau singkatan yang membingungkan.
- Tidak boleh diawali angka dan tidak boleh mengandung spasi.

## Tipe Data Dasar

| Tipe | Nama | Contoh |
|------|------|--------|
| `int` | bilangan bulat | `10`, `-5`, `0` |
| `float` | bilangan desimal | `3.14`, `-0.5` |
| `str` | teks | `"halo"`, `'a'` |
| `bool` | benar/salah | `True`, `False` |
| `None` | ketiadaan nilai | `None` |

Cek tipe suatu nilai dengan `type()`:

```python
print(type(22))       # <class 'int'>
print(type("halo"))   # <class 'str'>
print(type(True))     # <class 'bool'>
```

## Konversi Tipe

Ubah nilai dari satu tipe ke tipe lain:

```python
int("22")      # "22" menjadi 22
str(22)        # 22 menjadi "22"
float("3.14")  # "3.14" menjadi 3.14
int(3.99)      # 3 (dipotong, bukan dibulatkan)
```

> Hati-hati: perintah `input()` selalu menghasilkan teks. Jika ingin menghitung, ubah dulu ke angka:
>
> ```python
> umur = int(input("Umur: "))
> ```

## Menampilkan Variabel dengan f-string

Cara paling nyaman menggabungkan teks dan variabel adalah f-string — awali tanda kutip dengan huruf `f`, lalu taruh variabel di dalam kurung kurawal:

```python
nama = "Salman"
umur = 22
print(f"Namaku {nama}, umur {umur} tahun.")
# Namaku Salman, umur 22 tahun.
```

f-string juga bisa mengatur format angka:

```python
harga = 15000.5
print(f"{harga:.2f}")     # 15000.50 (dua angka desimal)
print(f"{harga:,.0f}")    # 15,000   (pemisah ribuan)
```

## Ringkasan

- Variabel dibuat dengan `nama = nilai`, tanpa perlu menyebut tipe.
- Tipe dasar: `int`, `float`, `str`, `bool`, `None`.
- `type()` untuk cek tipe, `int()`/`str()`/`float()` untuk konversi.
- f-string (`f"..."`) untuk menggabungkan teks dan variabel dengan rapi.
