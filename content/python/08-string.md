# String (Teks)

String adalah tipe data untuk teks, dan salah satu yang paling sering diolah dalam pemrograman. Python menyediakan banyak alat bawaan untuk memprosesnya.

## Membuat String

```python
a = "pakai kutip dua"
b = 'pakai kutip satu'      # sama saja
c = """teks
banyak baris"""            # tiga kutip untuk teks multi-baris
```

Kalau di dalam teks ada tanda kutip, gunakan jenis kutip yang berbeda, atau tanda garis miring terbalik:

```python
"dia bilang \"halo\""      # dengan escape
'dia bilang "halo"'        # dengan kutip berbeda
```

Karakter khusus (escape):

```python
"\n"   # baris baru (enter)
"\t"   # tab
"\\"   # backslash literal
```

Untuk path atau pola yang banyak backslash, pakai raw string dengan huruf `r`:

```python
path = r"C:\folder\file"   # backslash dibaca apa adanya
```

## Panjang String

```python
len("Python")     # 6
len("")           # 0 (string kosong)
```

<!--page-->

## Mengakses & Memotong (Indexing & Slicing)

Setiap karakter punya nomor posisi (index), dimulai dari **0**.

```python
teks = "Python"
#       012345      (index dari depan)
#      -6-5-4-3-2-1 (index dari belakang)

teks[0]      # 'P'   karakter pertama
teks[-1]     # 'n'   karakter terakhir
```

Slicing mengambil sebagian teks dengan `[awal:akhir]` (akhir tidak ikut):

```python
teks[0:3]    # 'Pyt'  index 0 sampai sebelum 3
teks[2:]     # 'thon' dari index 2 sampai akhir
teks[:3]     # 'Pyt'  dari awal sampai sebelum 3
teks[::-1]   # 'nohtyP' membalik teks
teks[::2]    # 'Pto'  ambil tiap 2 langkah
```

> Catatan: string bersifat **immutable** (tidak bisa diubah per karakter). `teks[0] = "J"` akan error. Untuk mengubah, buat string baru, misalnya dengan `.replace()`.

<!--page-->

## Method String yang Sering Dipakai

### Mengubah huruf besar/kecil

```python
"halo".upper()        # 'HALO'
"HALO".lower()        # 'halo'
"halo dunia".title()  # 'Halo Dunia'  (tiap kata kapital)
"halo".capitalize()   # 'Halo'        (huruf pertama saja)
```

### Membersihkan spasi

```python
"  halo  ".strip()    # 'halo'   buang spasi kiri-kanan
"  halo  ".lstrip()   # 'halo  ' kiri saja
"  halo  ".rstrip()   # '  halo' kanan saja
"xxhaloxx".strip("x") # 'halo'   buang karakter tertentu
```

### Mencari & mengganti

```python
"halo dunia".replace("dunia", "python")   # 'halo python'
"halo".find("l")        # 2   posisi (atau -1 kalau tidak ada)
"halo".count("l")       # 1   berapa kali muncul
"file.py".endswith(".py")   # True
"halo".startswith("ha")     # True
```

### Mengecek isi (menghasilkan True/False)

```python
"123".isdigit()    # True  semua angka?
"abc".isalpha()    # True  semua huruf?
"abc123".isalnum() # True  huruf atau angka?
"   ".isspace()    # True  semua spasi?
```

<!--page-->

## Memisah & Menggabung

Dua method yang sangat sering dipakai untuk mengolah teks, dan saling berkebalikan.

`split()` memecah string menjadi list:

```python
"a,b,c".split(",")          # ['a', 'b', 'c']
"halo dunia".split()        # ['halo', 'dunia']  (default: pisah spasi)
"baris1\nbaris2".splitlines()  # ['baris1', 'baris2']
```

`join()` menggabungkan list menjadi string:

```python
"-".join(["a", "b", "c"])       # 'a-b-c'
" ".join(["halo", "dunia"])     # 'halo dunia'
```

## Mengecek Keanggotaan

```python
"lo" in "halo"        # True   apakah "lo" ada di dalamnya?
"z" not in "halo"     # True
```

## Contoh Gabungan

```python
kalimat = "  Belajar Python Itu Seru  "

bersih = kalimat.strip().lower()          # 'belajar python itu seru'
kata = bersih.split()                     # ['belajar','python','itu','seru']
jumlah = len(kata)                        # 4
rapi = " ".join(k.capitalize() for k in kata)  # 'Belajar Python Itu Seru'

print(f"Jumlah kata: {jumlah}")
print(f"Rapi: {rapi}")
```

## Ringkasan

- String immutable; ambil bagian dengan indexing `teks[i]` dan slicing `teks[a:b]`.
- Method umum: `upper`, `lower`, `strip`, `replace`, `find`, `startswith`, `endswith`, `isdigit`.
- `split()` memecah string jadi list; `join()` menggabung list jadi string.
- Gunakan `in` untuk mengecek keberadaan substring.

> Latihan: minta pengguna memasukkan kalimat, lalu tampilkan jumlah katanya dan versi HURUF BESAR semuanya.
