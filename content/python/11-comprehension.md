# Comprehension & Generator

Cara ringkas dan efisien untuk mengolah kumpulan data — ciri khas Python.

## List Comprehension

Membuat list dalam satu baris, menggantikan loop panjang.

```python
# cara biasa
hasil = []
for x in range(5):
    hasil.append(x * 2)

# dengan comprehension (hasil sama)
hasil = [x * 2 for x in range(5)]    # [0, 2, 4, 6, 8]
```

Pola: `[ekspresi for item in koleksi]`

Dengan filter:

```python
genap = [x for x in range(10) if x % 2 == 0]   # [0,2,4,6,8]
```

Dengan if/else di depan:

```python
label = ["genap" if x % 2 == 0 else "ganjil" for x in range(4)]
# ['genap', 'ganjil', 'genap', 'ganjil']
```

## Dict & Set Comprehension

```python
kuadrat = {x: x**2 for x in range(4)}    # {0:0, 1:1, 2:4, 3:9}
huruf = {c for c in "banana"}            # {'b', 'a', 'n'} (unik)
```

## Generator Expression

Mirip list comprehension tapi memakai `( )`. Bedanya, ia tidak membuat list di memori sekaligus, melainkan menghasilkan nilai satu per satu (hemat memori untuk data besar).

```python
# list comprehension: semua dibuat di memori
total = sum([x**2 for x in range(1000000)])

# generator: dihasilkan satu per satu (lebih hemat)
total = sum(x**2 for x in range(1000000))   # tanpa kurung siku
```

## Generator Function (yield)

Fungsi yang menghasilkan nilai satu per satu dengan `yield`, bukan `return`:

```python
def hitung_mundur(n):
    while n > 0:
        yield n        # beri satu nilai, lalu jeda di sini
        n -= 1

for angka in hitung_mundur(3):
    print(angka)       # 3, 2, 1
```

Perbedaan `yield` dan `return`:

- `return` mengakhiri fungsi dan memberi satu nilai.
- `yield` memberi satu nilai lalu menjeda, dan melanjutkan saat diminta lagi.

Berguna untuk membaca data besar tanpa memuat semuanya ke memori:

```python
def baca_baris(path):
    with open(path) as f:
        for baris in f:
            yield baris.strip()   # satu baris per satu
```

## Ringkasan

- List/dict/set comprehension membuat koleksi baru secara ringkas.
- Generator expression (`( )`) menghemat memori untuk data besar.
- Generator function memakai `yield` untuk menghasilkan nilai bertahap.
