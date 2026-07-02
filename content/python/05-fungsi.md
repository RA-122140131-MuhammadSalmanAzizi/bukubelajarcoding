# Fungsi

Fungsi adalah blok kode bernama yang bisa dipanggil berulang kali. Prinsip utamanya: **jangan menulis kode yang sama dua kali** (dikenal sebagai DRY — Don't Repeat Yourself).

## Membuat & Memanggil Fungsi

```python
def sapa():
    print("Halo!")

sapa()      # memanggil -> Halo!
sapa()      # bisa dipanggil berulang
```

Dengan parameter (masukan) dan nilai kembalian (keluaran):

```python
def tambah(a, b):
    return a + b        # mengirim balik hasilnya

hasil = tambah(3, 5)    # hasil = 8
print(tambah(10, 20))   # 30
```

### return vs print

Ini perbedaan yang sering membingungkan pemula:

- **`return`** mengirim balik nilai agar bisa **dipakai lagi** (disimpan, dihitung, dsb).
- **`print`** hanya **menampilkan** ke layar; nilainya tidak bisa dipakai.

```python
def kuadrat(x):
    return x * x        # bisa: y = kuadrat(4) -> y = 16

def kuadrat_salah(x):
    print(x * x)        # y = kuadrat_salah(4) -> y menjadi None
```

Fungsi tanpa `return` otomatis mengembalikan `None`.

<!--page-->

## Jenis Argumen

### Argumen Posisi (urutan penting)

```python
def bagi(a, b):
    return a / b

bagi(10, 2)     # a=10, b=2 -> 5.0
```

### Argumen Keyword (sebut nama, urutan bebas)

```python
bagi(b=2, a=10)     # jelas dan aman dari salah urutan
```

### Nilai Default

Parameter bisa punya nilai bawaan yang dipakai bila tidak diisi:

```python
def sapa(nama, salam="Halo"):
    print(f"{salam}, {nama}!")

sapa("Salman")            # Halo, Salman!
sapa("Salman", "Hai")     # Hai, Salman!
```

> Hati-hati: jangan memakai list atau dict sebagai nilai default. Gunakan `None`, lalu buat di dalam fungsi:
>
> ```python
> def tambah(item, keranjang=None):
>     if keranjang is None:
>         keranjang = []
>     keranjang.append(item)
>     return keranjang
> ```

<!--page-->

## *args dan **kwargs

Untuk fungsi yang menerima jumlah argumen bebas.

`*args` mengumpulkan argumen posisi menjadi tuple:

```python
def jumlahkan(*angka):
    return sum(angka)

jumlahkan(1, 2, 3)        # 6
jumlahkan(1, 2, 3, 4, 5)  # 15
```

`**kwargs` mengumpulkan argumen bernama menjadi dict:

```python
def info(**data):
    for kunci, nilai in data.items():
        print(f"{kunci}: {nilai}")

info(nama="Salman", umur=22)
# nama: Salman
# umur: 22
```

## Docstring (Dokumentasi Fungsi)

```python
def hitung_luas(panjang, lebar):
    """Menghitung luas persegi panjang."""
    return panjang * lebar

help(hitung_luas)      # menampilkan docstring-nya
```

Docstring adalah teks penjelas di baris pertama fungsi. Kebiasaan baik untuk fungsi penting.

<!--page-->

## Scope (Jangkauan Variabel)

Variabel yang dibuat di dalam fungsi hanya "hidup" di dalam fungsi itu (disebut lokal):

```python
def fungsi():
    y = 5           # lokal, hanya ada di dalam sini
    print(y)

fungsi()            # 5
print(y)            # Error: y tidak dikenal di luar fungsi
```

Variabel di luar semua fungsi disebut global dan bisa dibaca dari dalam fungsi:

```python
pajak = 0.1

def hitung(harga):
    return harga + harga * pajak    # boleh membaca 'pajak'
```

> Tips: hindari mengubah variabel global dari dalam fungsi. Lebih baik kirim lewat parameter dan kembalikan lewat `return`.

## Lambda (Fungsi Satu Baris)

Fungsi mini tanpa nama, paling berguna sebagai argumen `key`:

```python
data = [{"nama": "Ani", "umur": 25}, {"nama": "Budi", "umur": 20}]
data.sort(key=lambda d: d["umur"])   # mengurutkan berdasar umur

kuadrat = lambda x: x * x
kuadrat(5)      # 25
```

## Ringkasan

- Fungsi dibuat dengan `def nama(parameter):` dan dipanggil `nama(...)`.
- `return` mengirim balik nilai; `print` hanya menampilkan.
- Parameter bisa punya default; `*args`/`**kwargs` menerima argumen bebas.
- Variabel di dalam fungsi bersifat lokal.
- `lambda` untuk fungsi singkat satu baris.

> Latihan: buat fungsi `nilai_huruf(angka)` yang mengembalikan "A" untuk >= 85, "B" untuk >= 70, "C" untuk >= 55, dan "D" untuk selainnya.
