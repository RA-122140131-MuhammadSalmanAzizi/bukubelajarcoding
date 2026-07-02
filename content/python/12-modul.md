# Modul & Package

Modul adalah cara memakai kode dari file lain — baik dari pustaka bawaan Python maupun buatan sendiri. Ini membuat kode terorganisir dan bisa dipakai ulang.

## import

```python
import math                 # meminjam seluruh modul
math.sqrt(16)               # 4.0

import math as m            # memberi nama pendek (alias)
m.pi

from math import sqrt, pi   # meminjam bagian tertentu saja
sqrt(16)
```

> Hindari `from math import *` (meminjam semuanya). Itu membuat sulit melacak dari mana sebuah fungsi berasal.

<!--page-->

## Modul Bawaan yang Berguna

Python menyertakan banyak modul siap pakai tanpa perlu memasang apa pun.

```python
import random
random.randint(1, 6)          # angka acak 1-6
random.choice(["a", "b"])     # memilih satu acak

import datetime
datetime.date.today()         # tanggal hari ini

import os
os.listdir(".")               # daftar isi folder saat ini
```

| Modul | Kegunaan |
|-------|----------|
| `math` | operasi matematika |
| `random` | angka & pilihan acak |
| `datetime` | tanggal & waktu |
| `os` | berinteraksi dengan sistem/folder |
| `json` | membaca/menulis data JSON |
| `re` | mencari pola dalam teks (regex) |
| `collections` | struktur data tambahan (Counter, dll) |
| `pathlib` | mengelola path file secara modern |

<!--page-->

## Modul Buatan Sendiri

Setiap file `.py` bisa dijadikan modul dan diimpor dari file lain.

```python
# file: utils.py
def sapa(nama):
    return f"Halo {nama}"

PAJAK = 0.1
```

```python
# file: main.py
import utils
print(utils.sapa("Salman"))

from utils import sapa, PAJAK
print(sapa("Budi"))
```

Ini memungkinkan kamu memecah program besar menjadi beberapa file yang rapi.

<!--page-->

## Blok if __name__ == "__main__"

Kode yang hanya dijalankan bila file dijalankan langsung, bukan saat diimpor.

```python
def tambah(a, b):
    return a + b

if __name__ == "__main__":
    # bagian ini hanya jalan bila: python file.py
    # TIDAK jalan bila file ini diimpor oleh file lain
    print(tambah(2, 3))
```

Ini kebiasaan penting agar fungsi bisa dipakai ulang dari file lain tanpa efek samping menjalankan seluruh program.

## Package

Package adalah folder berisi banyak modul. Kehadiran file `__init__.py` menandai folder sebagai package.

```text
proyek/
├── main.py
└── models/
    ├── __init__.py
    └── user.py
```

```python
from models.user import User
```

## Ringkasan

- `import modul` untuk memakai kode lain; bisa dengan alias atau impor sebagian.
- Python punya banyak modul bawaan (`math`, `random`, `os`, `json`, dll).
- Setiap file `.py` bisa jadi modul; folder berisi modul adalah package.
- `if __name__ == "__main__"` memisahkan kode "dijalankan langsung" dari kode yang bisa diimpor.

> Latihan: buat file `kalkulator.py` berisi fungsi `tambah`, `kurang`, `kali`, `bagi`, lalu impor dan pakai fungsi-fungsi itu dari file `main.py`.
