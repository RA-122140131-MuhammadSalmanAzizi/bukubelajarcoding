# Type Hints & Dataclass

Membuat kode lebih jelas, aman, dan membuat autocomplete editor lebih pintar. Umum dipakai di kode profesional modern.

## Type Hints Dasar

Petunjuk tipe. Python tidak memaksanya (hanya dokumentasi dan bantuan editor), tetapi sangat berguna.

```python
nama: str = "Salman"
umur: int = 22
tinggi: float = 170.5

def tambah(a: int, b: int) -> int:      # -> tipe kembalian
    return a + b

def sapa(nama: str) -> None:            # None: tidak mengembalikan nilai
    print(f"Halo {nama}")
```

## Tipe Koleksi

```python
angka: list[int] = [1, 2, 3]
data: dict[str, int] = {"a": 1}
titik: tuple[int, int] = (3, 5)
```

## Kasus Khusus dari typing

```python
from typing import Optional

def cari(id: int) -> Optional[str]:     # mengembalikan str atau None
    ...

def proses(x: int | str) -> None:       # bisa int atau str
    ...
```

| Hint | Arti |
|------|------|
| `Optional[X]` atau `X \| None` | X atau None |
| `A \| B` | A atau B |
| `list[X]`, `dict[K, V]` | koleksi bertipe |

## Dataclass

Membuat class penyimpan data tanpa menulis `__init__`, `__repr__`, dan `__eq__` secara manual. Sangat hemat.

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
```

Dataclass tetap bisa menambahkan method:

```python
@dataclass
class Lingkaran:
    jari: float
    def luas(self) -> float:
        return 3.14 * self.jari ** 2
```

## Enum (Pilihan Tetap)

Sekumpulan nilai konstan yang jelas dan aman dari salah ketik:

```python
from enum import Enum

class Status(Enum):
    AKTIF = "aktif"
    NONAKTIF = "nonaktif"

s = Status.AKTIF
print(s.value)      # 'aktif'
```

## Ringkasan

- Type hints (`x: int`, `-> str`) memperjelas kode dan membantu editor.
- `@dataclass` membuat class data secara otomatis, menghemat banyak kode.
- `Enum` mendefinisikan sekumpulan pilihan tetap yang aman.
