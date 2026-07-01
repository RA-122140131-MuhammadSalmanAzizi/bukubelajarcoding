# Fungsi

Fungsi adalah blok kode bernama yang bisa dipanggil berulang kali. Prinsipnya: **jangan menulis kode yang sama dua kali**.

## Membuat & Memanggil Fungsi

```python
def sapa():
    print("Halo!")

sapa()      # memanggil -> Halo!
```

Dengan parameter dan nilai kembalian:

```python
def tambah(a, b):
    return a + b        # mengirim balik hasilnya

hasil = tambah(3, 5)    # 8
```

> Penting: bedakan `return` dan `print`.
> - `return` mengirim balik nilai agar bisa dipakai lagi.
> - `print` hanya menampilkan ke layar; nilainya tidak bisa dipakai.

## Nilai Default

Parameter bisa punya nilai bawaan yang dipakai jika tidak diisi:

```python
def sapa(nama, salam="Halo"):
    print(f"{salam}, {nama}!")

sapa("Salman")            # Halo, Salman!
sapa("Salman", "Hai")     # Hai, Salman!
```

## Argumen Posisi dan Keyword

```python
def bagi(a, b):
    return a / b

bagi(10, 2)          # berdasar urutan: a=10, b=2
bagi(b=2, a=10)      # berdasar nama: lebih jelas
```

## *args dan **kwargs

Untuk fungsi yang menerima jumlah argumen bebas:

```python
def jumlahkan(*angka):        # semua argumen jadi tuple
    return sum(angka)

jumlahkan(1, 2, 3)        # 6
jumlahkan(1, 2, 3, 4, 5)  # 15

def info(**data):             # semua argumen bernama jadi dict
    for kunci, nilai in data.items():
        print(f"{kunci}: {nilai}")

info(nama="Salman", umur=22)
```

## Docstring (Dokumentasi Fungsi)

```python
def hitung_luas(panjang, lebar):
    """Menghitung luas persegi panjang."""
    return panjang * lebar
```

Docstring adalah teks di baris pertama fungsi yang menjelaskan tujuannya. Bisa dilihat lewat `help(hitung_luas)`.

## Scope (Jangkauan Variabel)

Variabel yang dibuat di dalam fungsi hanya "hidup" di dalam fungsi itu:

```python
def fungsi():
    y = 5       # lokal, hanya ada di dalam sini
    print(y)

fungsi()
print(y)        # Error: y tidak dikenal di luar
```

## Lambda (Fungsi Satu Baris)

Fungsi mini tanpa nama, berguna sebagai argumen `key`:

```python
data = [{"nama": "Ani", "umur": 25}, {"nama": "Budi", "umur": 20}]
data.sort(key=lambda d: d["umur"])   # urutkan berdasar umur
```

## Ringkasan

- Fungsi dibuat dengan `def nama(parameter):` dan dipanggil dengan `nama(...)`.
- `return` mengirim balik nilai; `print` hanya menampilkan.
- Parameter bisa punya nilai default; `*args`/`**kwargs` menerima argumen bebas.
- Variabel di dalam fungsi bersifat lokal.
