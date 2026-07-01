# File & JSON

Menyimpan data secara permanen ke disk. Data di variabel hilang saat program ditutup; data di file bertahan.

## Membuka File dengan with

Selalu gunakan `with` agar file otomatis tertutup:

```python
with open("data.txt", "r", encoding="utf-8") as f:
    isi = f.read()
# file otomatis tertutup di sini
```

### Mode Buka File

| Mode | Arti |
|------|------|
| `"r"` | baca (default) |
| `"w"` | tulis (menghapus isi lama!) |
| `"a"` | tambah di akhir (isi lama aman) |

> Hati-hati: mode `"w"` menghapus seluruh isi lama. Untuk menambah tanpa menghapus, gunakan `"a"`. Selalu sertakan `encoding="utf-8"` agar aman untuk karakter non-ASCII.

## Membaca File

```python
with open("data.txt", encoding="utf-8") as f:
    semua = f.read()          # seluruh isi jadi satu string
    # atau baca baris per baris (hemat memori):
    for baris in f:
        print(baris.strip())
```

## Menulis File

```python
with open("out.txt", "w", encoding="utf-8") as f:
    f.write("baris pertama\n")
    f.write("baris kedua\n")

# menambah di akhir tanpa menghapus
with open("log.txt", "a", encoding="utf-8") as f:
    f.write("catatan baru\n")
```

## JSON

Format standar untuk menyimpan data terstruktur (dict dan list). Dipakai di mana-mana: API, konfigurasi, database.

```python
import json

data = {"nama": "Salman", "hobi": ["ngoding", "ngopi"], "umur": 22}

# menyimpan ke file JSON
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

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
        return {}                          # file rusak / bukan JSON
```

## Ringkasan

- Gunakan `with open(...)` agar file otomatis tertutup.
- Mode `"r"` baca, `"w"` tulis (hapus lama), `"a"` tambah.
- `json.dump`/`json.load` untuk menyimpan & membaca data terstruktur.
- Selalu sertakan `encoding="utf-8"`.
