# List, Dict, Tuple, Set

Empat cara Python menyimpan banyak data sekaligus. Memilih yang tepat membuat kode lebih rapi dan efisien.

| Tipe | Simbol | Berurut | Bisa diubah | Duplikat |
|------|--------|---------|-------------|----------|
| list | `[]` | ya | ya | boleh |
| tuple | `()` | ya | tidak | boleh |
| dict | `{k:v}` | ya | ya | kunci unik |
| set | `{}` | tidak | ya | tidak |

<!--page-->

## List

Kumpulan berurutan yang bisa diubah — struktur data yang paling sering dipakai.

```python
buah = ["apel", "mangga", "jeruk"]
angka = [1, 2, 3, 4, 5]
campur = [1, "dua", 3.0, True]   # boleh beda tipe
kosong = []
```

### Mengakses & Memotong

```python
buah[0]      # 'apel'  (index mulai dari 0)
buah[-1]     # 'jeruk' (index negatif dari belakang)
buah[0:2]    # ['apel', 'mangga']  (slicing)
buah[::-1]   # membalik urutan
```

### Mengubah Isi

```python
buah[0] = "melon"        # mengganti item
buah.append("pisang")    # menambah di akhir
buah.insert(1, "nanas")  # menyisipkan di posisi 1
buah.extend(["a", "b"])  # menggabung list lain
buah.remove("jeruk")     # menghapus berdasar nilai
buah.pop()               # menghapus & mengambil item terakhir
del buah[0]              # menghapus berdasar posisi
```

### Info & Urutan

```python
len(buah)            # jumlah item
"apel" in buah       # cek keanggotaan -> True/False
buah.count("apel")   # berapa kali muncul
buah.sort()          # mengurutkan (mengubah list asli)
baru = sorted(buah)  # membuat list baru yang terurut
```

> Jebakan penting: `b = a` **tidak** menyalin list, keduanya menunjuk list yang sama. Untuk menyalin sungguhan, gunakan `b = a.copy()`.

<!--page-->

## Tuple

Seperti list, tetapi **tidak bisa diubah** setelah dibuat. Cocok untuk data yang seharusnya tetap, seperti koordinat.

```python
titik = (3, 5)
warna = (255, 0, 0)
satu = (1,)          # tuple satu item WAJIB pakai koma
```

Kelebihannya: lebih aman (tak sengaja diubah) dan sedikit lebih cepat.

```python
titik[0]        # 3  (boleh dibaca)
titik[0] = 9    # Error: tuple tidak bisa diubah

x, y = titik    # unpacking: x=3, y=5
```

Fungsi sering mengembalikan tuple untuk memberi beberapa nilai sekaligus:

```python
def bagi(a, b):
    return a // b, a % b   # mengembalikan dua nilai

hasil, sisa = bagi(10, 3)  # hasil=3, sisa=1
```

<!--page-->

## Dict (Dictionary)

Menyimpan pasangan **kunci menuju nilai**. Ini juga bentuk data JSON, dan sangat sering dipakai.

```python
orang = {
    "nama": "Salman",
    "umur": 22,
    "hobi": ["ngoding", "ngopi"],
}
```

### Mengakses & Mengubah

```python
orang["nama"]              # 'Salman'
orang["umur"] = 23         # mengubah nilai
orang["kota"] = "Bogor"    # menambah pasangan baru
del orang["hobi"]          # menghapus

orang.get("email")             # None (aman, tidak error)
orang.get("email", "N/A")      # 'N/A' (nilai default kalau kunci tidak ada)
```

> Tips: gunakan `.get("kunci")` jika kunci mungkin tidak ada. `orang["email"]` langsung akan error (`KeyError`) bila kunci belum ada.

### Menelusuri Isi

```python
for kunci, nilai in orang.items():
    print(f"{kunci} = {nilai}")

orang.keys()      # semua kunci
orang.values()    # semua nilai
"nama" in orang   # cek keberadaan kunci
```

### Dict Bersarang

Bentuk data nyata sering berlapis:

```python
data = {
    "user1": {"nama": "Ani", "umur": 20},
    "user2": {"nama": "Budi", "umur": 25},
}
print(data["user1"]["nama"])   # 'Ani'
```

<!--page-->

## Set

Kumpulan **unik** dan tak berurut. Sangat berguna untuk membuang duplikat dan mengecek keanggotaan dengan cepat.

```python
angka = {1, 2, 3, 3, 2}   # otomatis menjadi {1, 2, 3}
kosong = set()            # set kosong (BUKAN {}, itu dict)
```

### Membuang Duplikat

```python
data = [1, 1, 2, 3, 3, 3]
unik = list(set(data))    # [1, 2, 3]
```

### Operasi Himpunan

```python
a = {1, 2, 3}
b = {2, 3, 4}

a | b    # {1,2,3,4}  gabungan (union)
a & b    # {2,3}      irisan (intersection)
a - b    # {1}        selisih
a ^ b    # {1,4}      yang berbeda saja

a.add(5)       # menambah
a.remove(1)    # menghapus
3 in a         # cek keanggotaan (sangat cepat)
```

## Ringkasan

- **list** `[]`: berurutan & bisa diubah — daftar umum sehari-hari.
- **tuple** `()`: berurutan & tetap — data yang tak boleh berubah.
- **dict** `{k:v}`: pasangan kunci-nilai — data berlabel (seperti JSON).
- **set** `{}`: unik & tak berurut — membuang duplikat, cek anggota cepat.

> Latihan: dari list nilai `[80, 75, 90, 75, 85, 90]`, tampilkan nilai tertinggi, terendah, rata-rata, dan daftar nilai unik (tanpa duplikat).
