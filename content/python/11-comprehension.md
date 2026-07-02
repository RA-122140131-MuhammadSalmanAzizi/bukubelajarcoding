# Comprehension & Generator

Cara ringkas dan efisien untuk mengolah kumpulan data — salah satu ciri khas Python yang membuat kodenya rapi.

## List Comprehension

Membuat list dalam satu baris, menggantikan loop yang panjang.

```python
# cara biasa
hasil = []
for x in range(5):
    hasil.append(x * 2)

# dengan comprehension (hasil sama)
hasil = [x * 2 for x in range(5)]    # [0, 2, 4, 6, 8]
```

Polanya: `[ekspresi for item in koleksi]`

<!--page-->

## Comprehension dengan Filter & Kondisi

Menyaring dengan `if` di belakang:

```python
genap = [x for x in range(10) if x % 2 == 0]     # [0, 2, 4, 6, 8]
panjang = [k for k in ["ab", "c", "def"] if len(k) > 1]   # ['ab', 'def']
```

Memilih nilai dengan `if/else` di depan:

```python
label = ["genap" if x % 2 == 0 else "ganjil" for x in range(4)]
# ['genap', 'ganjil', 'genap', 'ganjil']
```

Contoh nyata mengolah data:

```python
harga = [10000, 25000, 5000]
kena_pajak = [h * 1.1 for h in harga]            # menaikkan 10%
mahal = [h for h in harga if h > 8000]           # [10000, 25000]
```

> Tips: bila logikanya menjadi rumit, gunakan loop biasa agar tetap mudah dibaca. Comprehension yang terlalu panjang justru membingungkan.

<!--page-->

## Dict & Set Comprehension

Pola yang sama berlaku untuk dict dan set.

```python
# dict comprehension
kuadrat = {x: x**2 for x in range(4)}        # {0:0, 1:1, 2:4, 3:9}

harga = {"apel": 5000, "mangga": 8000}
naik = {k: v * 1.1 for k, v in harga.items()} # menaikkan tiap nilai

# set comprehension (hasil otomatis unik)
huruf = {c for c in "banana"}                # {'b', 'a', 'n'}
```

<!--page-->

## Generator: Hemat Memori

Generator expression mirip list comprehension tetapi memakai tanda kurung `( )`. Bedanya, ia **tidak** membuat seluruh list di memori sekaligus, melainkan menghasilkan nilai satu per satu — hemat memori untuk data besar.

```python
# list comprehension: semua dibuat di memori sekaligus
total = sum([x**2 for x in range(1000000)])

# generator: dihasilkan satu per satu (jauh lebih hemat)
total = sum(x**2 for x in range(1000000))    # tanpa kurung siku
```

### Generator Function (yield)

Fungsi yang menghasilkan nilai satu per satu dengan `yield`, bukan `return`.

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

Sangat berguna untuk membaca data besar tanpa memuat semuanya:

```python
def baca_baris(path):
    with open(path) as f:
        for baris in f:
            yield baris.strip()   # satu baris per satu
```

## Ringkasan

- List/dict/set comprehension membuat koleksi baru secara ringkas.
- Tambahkan `if` untuk menyaring, atau `if/else` di depan untuk memilih nilai.
- Generator expression `( )` menghemat memori untuk data besar.
- Generator function memakai `yield` untuk menghasilkan nilai bertahap.

> Latihan: dari list angka 1-20, buat (a) list kuadrat semua angka genap, dan (b) dict yang memetakan tiap angka ke label "genap"/"ganjil".
