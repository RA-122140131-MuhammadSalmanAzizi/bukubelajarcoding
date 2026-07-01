# Error Handling

Membuat program **tahan banting** — tidak langsung mati saat terjadi masalah.

## Membaca Pesan Error (Traceback)

Baca dari **bawah ke atas**:

```text
Traceback (most recent call last):
  File "app.py", line 28, in <module>
    umur = umur + 10
NameError: name 'umur' is not defined
```

- Baris terbawah = jenis dan pesan error (paling penting).
- Baris di atasnya = lokasi (file dan nomor baris).

## Jenis Error yang Sering Muncul

| Error | Penyebab |
|-------|----------|
| `SyntaxError` | salah tulis kode |
| `NameError` | variabel belum dibuat / salah ketik |
| `TypeError` | tipe salah, misal `"2" + 2` |
| `ValueError` | tipe benar tapi nilai salah, misal `int("abc")` |
| `IndexError` | index list di luar jangkauan |
| `KeyError` | kunci dict tidak ada |
| `ZeroDivisionError` | pembagian dengan nol |
| `FileNotFoundError` | file tidak ditemukan |

## try / except

```python
try:
    angka = int(input("Angka: "))
    hasil = 10 / angka
    print(hasil)
except ValueError:
    print("Itu bukan angka!")
except ZeroDivisionError:
    print("Tidak bisa membagi nol!")
```

Analogi: `try` adalah lompatan, `except` adalah jaring pengaman. Kalau jatuh (error), jaring menangkap, program tidak mati.

Menangkap error apa pun sambil mengambil pesannya:

```python
try:
    proses()
except Exception as e:
    print(f"Terjadi error: {e}")
```

> Hati-hati: jangan asal menangkap semua error dengan `except:` kosong, karena bisa menyembunyikan bug. Tangkap yang spesifik lebih dulu.

## else dan finally

```python
try:
    f = open("data.txt")
except FileNotFoundError:
    print("file tidak ada")
else:
    print("berhasil dibuka")   # jalan jika TIDAK ada error
    f.close()
finally:
    print("selalu dijalankan") # selalu jalan, error atau tidak
```

## Pola "Minta Ulang Sampai Benar"

```python
def minta_angka(pesan):
    while True:
        try:
            return int(input(pesan))
        except ValueError:
            print("Harus angka, coba lagi.")
```

## raise (Melempar Error Sendiri)

Menolak input yang salah secara sengaja:

```python
def set_umur(umur):
    if umur < 0:
        raise ValueError("umur tidak boleh negatif")
    return umur
```

## Custom Exception

Membuat jenis error khusus agar lebih jelas:

```python
class SaldoTidakCukup(Exception):
    pass

def tarik(saldo, jumlah):
    if jumlah > saldo:
        raise SaldoTidakCukup("saldo tidak mencukupi")
```

## Ringkasan

- Baca traceback dari bawah ke atas untuk menemukan penyebab.
- `try/except` menangkap error agar program tetap berjalan.
- `finally` selalu dijalankan (cocok untuk bersih-bersih).
- `raise` melempar error sendiri; custom exception membuat error yang jelas.
