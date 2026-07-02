# Decorator & Context Manager

Dua fitur yang tampak rumit tetapi sebenarnya sederhana. Keduanya sering muncul di framework populer seperti Flask, FastAPI, dan pytest.

## Ide Dasar Decorator

Decorator adalah fungsi yang **membungkus** fungsi lain untuk menambah perilaku, tanpa mengubah isi fungsi aslinya.

Ingat konsep dari bab fungsi: di Python, fungsi bisa dikirim sebagai argumen ke fungsi lain.

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

<!--page-->

## Decorator untuk Fungsi Apa Pun

Agar bisa membungkus fungsi dengan argumen apa pun, gunakan `*args` dan `**kwargs`.

```python
import functools

def catat(fungsi):
    @functools.wraps(fungsi)          # menjaga nama & docstring asli
    def pembungkus(*args, **kwargs):
        print(f"Memanggil {fungsi.__name__}")
        hasil = fungsi(*args, **kwargs)
        print(f"Selesai, hasil = {hasil}")
        return hasil
    return pembungkus

@catat
def tambah(a, b):
    return a + b

tambah(3, 5)
# Memanggil tambah
# Selesai, hasil = 8
```

### Decorator Bawaan yang Berguna

```python
from functools import lru_cache

@lru_cache(maxsize=None)     # menyimpan hasil, tidak menghitung ulang
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

fib(100)     # instan, padahal tanpa cache sangat lambat
```

Decorator lain yang sering ditemui: `@property`, `@classmethod`, `@staticmethod` (bab OOP), dan `@app.get("/")` (FastAPI/Flask).

<!--page-->

## Context Manager (with)

`with` otomatis membuka dan menutup sumber daya, bahkan bila terjadi error, sehingga kamu tidak pernah lupa menutupnya.

```python
# tanpa with (berisiko lupa menutup, apalagi bila error)
f = open("data.txt")
isi = f.read()
f.close()

# dengan with (otomatis tertutup)
with open("data.txt") as f:
    isi = f.read()
# di sini file sudah pasti tertutup
```

Pola ini dipakai bukan hanya untuk file, tetapi juga koneksi database, lock threading, dan lainnya.

<!--page-->

## Membuat Context Manager Sendiri

Cara paling ringkas memakai `contextlib`.

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
# Butuh 0.02 detik
```

Bagian sebelum `yield` berjalan saat masuk `with`; bagian sesudahnya berjalan saat keluar.

## Ringkasan

- Decorator (`@nama`) membungkus fungsi untuk menambah perilaku (log, cache, timing) tanpa mengubah fungsi aslinya.
- Gunakan `*args, **kwargs` dan `functools.wraps` agar decorator bekerja untuk fungsi apa pun.
- Context manager (`with`) mengelola buka-tutup sumber daya secara otomatis dan aman.

> Latihan: buat decorator `@ukur_waktu` yang mencetak berapa lama sebuah fungsi berjalan, lalu terapkan pada fungsi yang melakukan perulangan besar.
