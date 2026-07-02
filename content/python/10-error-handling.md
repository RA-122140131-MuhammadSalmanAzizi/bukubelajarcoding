# Error Handling

Membuat program **tahan banting** — tidak langsung mati saat terjadi masalah. Ini yang membedakan program latihan dengan aplikasi sungguhan.

## Membaca Pesan Error (Traceback)

Saat program error, Python menampilkan "traceback". Baca dari **bawah ke atas**:

```text
Traceback (most recent call last):
  File "app.py", line 28, in <module>
    umur = umur + 10
NameError: name 'umur' is not defined
```

- Baris **terbawah** = jenis dan pesan error (paling penting).
- Baris di atasnya = **lokasi** (file dan nomor baris).

Error bukan hukuman — ia petunjuk yang memberi tahu persis apa dan di mana masalahnya.

<!--page-->

## Jenis Error yang Sering Muncul

| Error | Penyebab |
|-------|----------|
| `SyntaxError` | salah menulis kode (kurang `:`, kurung, dll) |
| `NameError` | variabel belum dibuat atau salah ketik |
| `TypeError` | tipe salah, misal `"2" + 2` |
| `ValueError` | tipe benar tapi nilai salah, misal `int("abc")` |
| `IndexError` | index list di luar jangkauan |
| `KeyError` | kunci dict tidak ada |
| `ZeroDivisionError` | pembagian dengan nol |
| `FileNotFoundError` | file tidak ditemukan |

Menghafal jenis-jenis ini memudahkan menebak penyebab error dengan cepat.

<!--page-->

## try / except

Menangkap error agar program tetap berjalan.

```python
try:
    angka = int(input("Angka: "))
    hasil = 10 / angka
    print(hasil)
except ValueError:
    print("Itu bukan angka!")
except ZeroDivisionError:
    print("Tidak bisa membagi dengan nol!")
```

Analogi: `try` adalah lompatan, `except` adalah jaring pengaman. Kalau jatuh (error), jaring menangkap, program tidak mati.

Menangkap error apa pun sambil mengambil pesannya:

```python
try:
    proses()
except Exception as e:
    print(f"Terjadi error: {e}")
```

> Hati-hati: hindari `except:` kosong yang menangkap segalanya tanpa pandang bulu, karena bisa menyembunyikan bug. Tangkap jenis error yang spesifik lebih dulu.

<!--page-->

## else dan finally

```python
try:
    f = open("data.txt")
except FileNotFoundError:
    print("file tidak ada")
else:
    print("berhasil dibuka")   # jalan HANYA jika tidak ada error
    f.close()
finally:
    print("selalu dijalankan") # SELALU jalan, error atau tidak
```

| Blok | Kapan dijalankan |
|------|------------------|
| `try` | selalu dicoba |
| `except` | jika terjadi error |
| `else` | jika TIDAK terjadi error |
| `finally` | SELALU (cocok untuk bersih-bersih: menutup file/koneksi) |

### Pola "Minta Ulang Sampai Benar"

```python
def minta_angka(pesan):
    while True:
        try:
            return int(input(pesan))
        except ValueError:
            print("Harus angka, coba lagi.")
```

<!--page-->

## raise: Melempar Error Sendiri

Kadang kita perlu menolak input yang salah secara sengaja.

```python
def set_umur(umur):
    if umur < 0:
        raise ValueError("umur tidak boleh negatif")
    return umur

set_umur(-5)    # ValueError: umur tidak boleh negatif
```

## Custom Exception

Membuat jenis error khusus untuk aplikasimu agar lebih jelas.

```python
class SaldoTidakCukup(Exception):
    """Dilempar saat saldo kurang untuk transaksi."""
    pass

class Akun:
    def __init__(self, saldo):
        self.saldo = saldo
    def tarik(self, jumlah):
        if jumlah > self.saldo:
            raise SaldoTidakCukup(f"Saldo {self.saldo}, butuh {jumlah}")
        self.saldo -= jumlah

try:
    Akun(1000).tarik(5000)
except SaldoTidakCukup as e:
    print(f"Gagal: {e}")
```

## Ringkasan

- Baca traceback dari bawah ke atas untuk menemukan penyebab.
- `try/except` menangkap error agar program tetap berjalan.
- `finally` selalu dijalankan; cocok untuk membersihkan sumber daya.
- `raise` melempar error sendiri; custom exception membuat error yang jelas dan spesifik.

> Latihan: buat fungsi pembagian yang menangani `ZeroDivisionError` dan `ValueError`, lalu terus meminta input sampai pengguna memberi dua angka valid.
