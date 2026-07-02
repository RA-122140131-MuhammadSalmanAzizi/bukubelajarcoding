# File & JSON

Menyimpan data secara permanen ke disk. Data di variabel akan hilang saat program ditutup; data yang ditulis ke file akan bertahan.

## Membuka File dengan with

Selalu gunakan `with` agar file otomatis tertutup, bahkan bila terjadi error.

```python
with open("data.txt", "r", encoding="utf-8") as f:
    isi = f.read()
# di sini file sudah otomatis tertutup
```

### Mode Buka File

| Mode | Arti |
|------|------|
| `"r"` | baca (read) — default |
| `"w"` | tulis (write) — menghapus isi lama! |
| `"a"` | tambah (append) — menulis di akhir, isi lama aman |

> Hati-hati: mode `"w"` menghapus seluruh isi lama. Untuk menambah tanpa menghapus, gunakan `"a"`. Selalu sertakan `encoding="utf-8"` agar aman untuk karakter non-ASCII.

<!--page-->

## Membaca & Menulis Teks

Membaca:

```python
with open("data.txt", encoding="utf-8") as f:
    semua = f.read()          # seluruh isi jadi satu string
    # atau baris per baris (hemat memori):
    for baris in f:
        print(baris.strip())  # strip() membuang \n di akhir
```

Menulis:

```python
with open("out.txt", "w", encoding="utf-8") as f:
    f.write("baris pertama\n")   # \n membuat baris baru
    f.write("baris kedua\n")

# menambah di akhir tanpa menghapus
with open("log.txt", "a", encoding="utf-8") as f:
    f.write("catatan baru\n")
```

<!--page-->

## JSON: Menyimpan Data Terstruktur

JSON adalah format standar untuk menyimpan data seperti dict dan list. Dipakai di mana-mana: API, konfigurasi, database.

```python
import json

data = {"nama": "Salman", "hobi": ["ngoding", "ngopi"], "umur": 22}

# menyimpan ke file JSON
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    # ensure_ascii=False -> karakter Indonesia tetap terbaca
    # indent=2 -> rapi dan mudah dibaca

# membaca dari file JSON
with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)
```

Mengubah antara string dan data Python (bukan file):

```python
teks = json.dumps(data)     # dict menjadi string JSON
data = json.loads(teks)     # string JSON menjadi dict
```

> Catatan: JSON hanya bisa menyimpan tipe dasar (dict, list, str, int, float, bool, None). Object buatan sendiri harus diubah dulu menjadi dict.

<!--page-->

## Mengelola Path dengan pathlib

Cara modern dan aman untuk bekerja dengan path file (lintas sistem operasi).

```python
from pathlib import Path

p = Path("data") / "hasil.json"    # menggabung path dengan /
p.exists()                          # apakah ada?
p.name                              # 'hasil.json'
p.suffix                            # '.json'
p.parent                            # Path('data')

# baca & tulis teks langsung
Path("catatan.txt").write_text("halo", encoding="utf-8")
isi = Path("catatan.txt").read_text(encoding="utf-8")

# membuat folder bila belum ada
Path("data").mkdir(exist_ok=True)
```

## Pola Aman Membaca File

```python
import json
from pathlib import Path

def muat_data(nama_file):
    path = Path(nama_file)
    if not path.exists():
        return {}                          # file belum ada
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}                          # file rusak / bukan JSON valid
```

## Ringkasan

- Gunakan `with open(...)` agar file otomatis tertutup.
- Mode `"r"` baca, `"w"` tulis (menghapus lama), `"a"` menambah.
- `json.dump`/`json.load` untuk menyimpan & membaca data terstruktur.
- `pathlib` memberi cara modern mengelola path file.

> Latihan: buat program catatan sederhana yang menyimpan daftar tugas ke `tugas.json`, lalu memuatnya kembali saat program dijalankan ulang.
