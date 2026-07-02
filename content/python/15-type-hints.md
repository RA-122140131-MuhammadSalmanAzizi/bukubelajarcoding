# Type Hints & Dataclass

Membuat kode lebih jelas, aman, dan membuat autocomplete editor lebih pintar. Umum dipakai di kode profesional modern, dan menjadi fondasi library seperti Pydantic dan FastAPI.

## Type Hints Dasar

Type hints adalah petunjuk tipe. Python **tidak memaksanya** (hanya dokumentasi dan bantuan editor), tetapi sangat berguna.

```python
nama: str = "Salman"
umur: int = 22
tinggi: float = 170.5

def tambah(a: int, b: int) -> int:      # -> menandai tipe kembalian
    return a + b

def sapa(nama: str) -> None:            # None: tidak mengembalikan nilai
    print(f"Halo {nama}")
```

Karena tidak dipaksa, kode ini tetap jalan meski tipenya salah — hint hanya petunjuk. Untuk benar-benar mengecek, gunakan alat seperti `mypy` atau `basedpyright`.

<!--page-->

## Tipe Koleksi & Kasus Khusus

Tipe untuk list, dict, dan tuple:

```python
angka: list[int] = [1, 2, 3]
data: dict[str, int] = {"a": 1}
titik: tuple[int, int] = (3, 5)
```

Kasus khusus dari modul `typing`:

```python
from typing import Optional

def cari(id: int) -> Optional[str]:     # mengembalikan str ATAU None
    ...

def proses(x: int | str) -> None:       # bisa int atau str (Python 3.10+)
    ...
```

| Hint | Arti |
|------|------|
| `Optional[X]` atau `X \| None` | X atau None |
| `A \| B` | A atau B |
| `list[X]`, `dict[K, V]` | koleksi bertipe |

<!--page-->

## Dataclass

`@dataclass` membuat class penyimpan data tanpa menulis `__init__`, `__repr__`, dan `__eq__` secara manual. Sangat menghemat kode.

```python
from dataclasses import dataclass

@dataclass
class Produk:
    nama: str
    harga: float
    stok: int = 0             # nilai default

p = Produk("Kopi", 15000, 10)
print(p)                      # Produk(nama='Kopi', harga=15000, stok=10)
print(p == Produk("Kopi", 15000, 10))   # True
```

Bandingkan dengan class biasa yang harus menulis semuanya sendiri:

```python
class Produk:
    def __init__(self, nama, harga, stok=0):
        self.nama = nama
        self.harga = harga
        self.stok = stok
    # ...ditambah __repr__ dan __eq__ manual
```

Dataclass tetap bisa menambahkan method:

```python
@dataclass
class Lingkaran:
    jari: float
    def luas(self) -> float:
        return 3.14 * self.jari ** 2
```

<!--page-->

## Enum: Pilihan Tetap

`Enum` mendefinisikan sekumpulan nilai konstan yang jelas dan aman dari salah ketik.

```python
from enum import Enum

class Status(Enum):
    AKTIF = "aktif"
    NONAKTIF = "nonaktif"
    DIBLOKIR = "diblokir"

s = Status.AKTIF
print(s.value)      # 'aktif'
print(s.name)       # 'AKTIF'

def set_status(status: Status):
    if status == Status.AKTIF:
        print("pengguna aktif")
```

Manfaatnya: menghindari "magic string" yang rawan salah ketik, dan pilihan yang tersedia menjadi jelas.

## Ringkasan

- Type hints (`x: int`, `-> str`) memperjelas kode dan membantu editor menangkap bug.
- `Optional`, `|`, `list[X]`, `dict[K, V]` untuk kasus yang lebih spesifik.
- `@dataclass` membuat class data secara otomatis, menghemat banyak kode.
- `Enum` mendefinisikan sekumpulan pilihan tetap yang aman.

> Latihan: buat `@dataclass` bernama `Mahasiswa` dengan atribut `nama`, `nim`, dan `ipk` (default 0.0), lalu tambahkan method `lulus()` yang mengembalikan True jika ipk >= 2.0.
