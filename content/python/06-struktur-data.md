# List, Dict, Tuple, Set

Empat cara Python menyimpan banyak data sekaligus. Memilih yang tepat membuat kode lebih rapi.

| Tipe | Simbol | Berurut | Bisa diubah | Duplikat |
|------|--------|---------|-------------|----------|
| list | `[]` | ya | ya | boleh |
| tuple | `()` | ya | tidak | boleh |
| dict | `{k:v}` | ya | ya | kunci unik |
| set | `{}` | tidak | ya | tidak |

## List

Kumpulan berurutan yang bisa diubah — struktur data paling sering dipakai.

```python
buah = ["apel", "mangga", "jeruk"]

buah[0]              # 'apel' (index mulai dari 0)
buah[-1]             # 'jeruk' (index negatif dari belakang)
buah[0:2]            # ['apel', 'mangga'] (slicing)

buah.append("pisang")   # tambah di akhir
buah.insert(1, "nanas") # sisip di posisi 1
buah.remove("jeruk")    # hapus berdasar nilai
buah.pop()              # hapus & ambil item terakhir
len(buah)               # jumlah item
"apel" in buah          # cek keanggotaan -> True/False
```

Mengurutkan:

```python
angka = [3, 1, 4, 1, 5]
angka.sort()               # mengubah list asli -> [1,1,3,4,5]
baru = sorted(angka)       # membuat list baru, asli tetap
```

## Tuple

Seperti list, tetapi **tidak bisa diubah** setelah dibuat. Cocok untuk data tetap.

```python
titik = (3, 5)
titik[0]        # 3 (boleh dibaca)
# titik[0] = 9  # Error: tuple tidak bisa diubah

x, y = titik    # unpacking: x=3, y=5
```

## Dict (Dictionary)

Menyimpan pasangan **kunci menuju nilai**. Ini juga bentuk data JSON.

```python
orang = {"nama": "Salman", "umur": 22}

orang["nama"]              # 'Salman'
orang["kota"] = "Bogor"   # menambah pasangan baru
orang.get("email", "N/A") # aman: beri default jika kunci tak ada

for kunci, nilai in orang.items():
    print(f"{kunci} = {nilai}")
```

> Tip: gunakan `.get("kunci")` daripada `orang["kunci"]` jika kunci mungkin tidak ada, agar tidak error.

## Set

Kumpulan **unik** dan tak berurut. Berguna untuk membuang duplikat.

```python
data = [1, 1, 2, 3, 3, 3]
unik = list(set(data))    # [1, 2, 3]

a = {1, 2, 3}
b = {2, 3, 4}
a | b    # {1,2,3,4} gabungan
a & b    # {2,3}     irisan
a - b    # {1}       selisih
```

## Ringkasan

- **list**: berurutan, bisa diubah — untuk daftar umum.
- **tuple**: berurutan, tetap — untuk data yang tak boleh berubah.
- **dict**: pasangan kunci-nilai — untuk data berlabel.
- **set**: unik, tak berurut — untuk membuang duplikat.
