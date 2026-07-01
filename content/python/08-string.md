# String (Teks)

String adalah tipe data untuk teks, dan salah satu yang paling sering diolah. Python menyediakan banyak method bawaan untuk memprosesnya.

## Membuat String

```python
a = "pakai kutip dua"
b = 'pakai kutip satu'
c = """teks
banyak baris"""
path = r"C:\folder\file"   # r di depan: backslash dibaca apa adanya
```

## Mengakses & Memotong (Slicing)

```python
teks = "Python"
#       012345

teks[0]      # 'P'  huruf pertama
teks[-1]     # 'n'  huruf terakhir
teks[0:3]    # 'Pyt' index 0 sampai sebelum 3
teks[2:]     # 'thon' dari index 2 sampai akhir
teks[::-1]   # 'nohtyP' dibalik
len(teks)    # 6
```

> Catatan: string bersifat immutable (tidak bisa diubah per huruf). `teks[0] = "J"` akan error. Kamu harus membuat string baru.

## Method Penting

Ubah huruf besar/kecil:

```python
"halo".upper()        # 'HALO'
"HALO".lower()        # 'halo'
"halo dunia".title()  # 'Halo Dunia'
```

Bersihkan spasi:

```python
"  halo  ".strip()    # 'halo' (buang spasi kiri-kanan)
"xxhaloxx".strip("x") # 'halo' (buang karakter tertentu)
```

Cari & ganti:

```python
"halo dunia".replace("dunia", "python")   # 'halo python'
"halo".find("l")        # 2 (posisi, -1 jika tidak ada)
"halo".count("l")       # 1
"file.py".endswith(".py")   # True
"halo".startswith("ha")     # True
```

Cek isi (menghasilkan True/False):

```python
"123".isdigit()    # True  semua angka?
"abc".isalpha()    # True  semua huruf?
"abc123".isalnum() # True  huruf/angka?
```

## Memisah & Menggabung

Dua method yang sangat sering dipakai untuk mengolah teks:

```python
"a,b,c".split(",")          # ['a', 'b', 'c']  memisah jadi list
"halo dunia".split()        # ['halo', 'dunia'] (default: pisah spasi)

"-".join(["a", "b", "c"])   # 'a-b-c'  menggabung list jadi string
```

## Cek Keanggotaan

```python
"lo" in "halo"        # True  ada substring?
"z" not in "halo"     # True
```

## Format Angka dalam String

```python
harga = 15000.5
f"{harga:.2f}"       # '15000.50'  dua desimal
f"{harga:,.0f}"      # '15,000'    pemisah ribuan
f"{'hi':>10}"        # rata kanan lebar 10
```

## Ringkasan

- String immutable; slicing (`teks[a:b]`) untuk mengambil bagian.
- Method umum: `upper`, `lower`, `strip`, `replace`, `find`, `startswith`, `endswith`.
- `split` memecah string jadi list; `join` menggabung list jadi string.
- f-string mengatur format angka di dalam teks.
