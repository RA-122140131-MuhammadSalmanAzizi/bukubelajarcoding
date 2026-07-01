# Library Populer & pip

Kekuatan Python ada pada ribuan library buatan komunitas. Kamu memasangnya dengan `pip` lalu tinggal `import`.

## pip — Pemasang Library

`pip` memasang library dari internet (repositori PyPI).

```bash
pip install requests          # memasang
pip install pandas numpy      # beberapa sekaligus
pip install --upgrade requests # memperbarui
pip uninstall requests        # mencopot
pip list                      # daftar yang terpasang
```

> Tip: bila `pip` bermasalah di Windows, coba `python -m pip install requests`.

## requirements.txt

Mencatat semua library proyek agar bisa dipasang ulang di komputer lain:

```bash
pip freeze > requirements.txt      # menyimpan daftar
pip install -r requirements.txt    # memasang semua dari daftar
```

## Virtual Environment

Agar library antar-proyek tidak bercampur, setiap proyek sebaiknya punya lingkungan Python terpisah.

```bash
python -m venv .venv           # membuat
.venv\Scripts\activate         # mengaktifkan (Windows)
pip install requests           # terpasang terisolasi di sini
deactivate                     # menonaktifkan
```

## Library yang Sering Dipakai

| Library | Kegunaan |
|---------|----------|
| `requests` | mengakses API / internet |
| `numpy` | komputasi angka & array cepat |
| `pandas` | mengolah data tabel |
| `matplotlib` | membuat grafik & visualisasi |
| `pydantic` | validasi data terstruktur |
| `fastapi` | membangun API / web server |
| `pillow` | mengolah gambar |
| `beautifulsoup4` | mengambil data dari halaman web |

## Contoh: Mengakses API dengan requests

```python
import requests

respons = requests.get("https://api.github.com/users/torvalds")
print(respons.status_code)     # 200 = berhasil
data = respons.json()          # mengubah respons JSON menjadi dict
print(data["followers"])
```

## Contoh: Mengolah Data dengan pandas

```python
import pandas as pd

df = pd.read_csv("data.csv")
df.head()                      # 5 baris pertama
df[df["umur"] > 20]            # menyaring baris
df["gaji"].mean()              # rata-rata satu kolom
```

## Ringkasan

- `pip install` memasang library; `requirements.txt` mencatat daftarnya.
- Virtual environment menjaga library antar-proyek tetap terpisah.
- Library populer: `requests`, `numpy`, `pandas`, `fastapi`, dan banyak lagi.
