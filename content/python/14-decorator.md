# Decorator & Context Manager

Dua fitur yang tampak rumit tetapi sebenarnya sederhana. Keduanya sering muncul di framework populer.

## Decorator

Decorator adalah fungsi yang **membungkus** fungsi lain untuk menambah perilaku, tanpa mengubah isi fungsi aslinya.

Ingat: di Python, fungsi bisa dikirim sebagai argumen ke fungsi lain.

```python
def dekorator(fungsi):
    def pembungkus():
        print("sebelum")
        fungsi()
        print("sesudah")
    return pembungkus

@dekorator
def sapa():
    print("Halo!")

sapa()
# sebelum
# Halo!
# sesudah
```

Tanda `@dekorator` di atas fungsi adalah cara singkat dari `sapa = dekorator(sapa)`.

### Decorator untuk Fungsi Apa Pun

Agar bisa membungkus fungsi dengan argumen apa pun, gunakan `*args` dan `**kwargs`:

```python
import functools

def catat(fungsi):
    @functools.wraps(fungsi)
    def pembungkus(*args, **kwargs):
        print(f"Memanggil {fungsi.__name__}")
        hasil = fungsi(*args, **kwargs)
        return hasil
    return pembungkus

@catat
def tambah(a, b):
    return a + b

tambah(3, 5)     # Memanggil tambah -> 8
```

### Decorator Bawaan yang Berguna

```python
from functools import lru_cache

@lru_cache(maxsize=None)     # menyimpan hasil, tidak menghitung ulang
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)
```

## Context Manager (with)

`with` otomatis membuka dan menutup resource, bahkan bila terjadi error, sehingga kamu tidak pernah lupa menutup.

```python
# tanpa with (berisiko lupa menutup)
f = open("data.txt")
isi = f.read()
f.close()

# dengan with (otomatis tertutup)
with open("data.txt") as f:
    isi = f.read()
```

### Membuat Context Manager Sendiri

```python
from contextlib import contextmanager
import time

@contextmanager
def timer():
    mulai = time.time()
    yield                       # di sinilah blok with dijalankan
    print(f"Butuh {time.time() - mulai:.2f} detik")

with timer():
    total = sum(range(1000000))
```

## Ringkasan

- Decorator (`@nama`) membungkus fungsi untuk menambah perilaku (log, cache, timing).
- `functools.wraps` menjaga identitas fungsi asli; `lru_cache` untuk caching.
- Context manager (`with`) mengelola buka-tutup resource secara otomatis.
