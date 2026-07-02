# Library Populer & pip

Kekuatan Python terletak pada ribuan **library** buatan komunitas — kumpulan kode siap pakai yang menghemat banyak waktu. Kamu memasangnya dengan `pip`, lalu tinggal `import`.

## Apa itu Library?

Library (pustaka) adalah kumpulan fungsi dan alat yang sudah dibuat orang lain untuk tugas tertentu, misalnya mengolah gambar, mengakses internet, atau melatih model AI. Alih-alih menulis semuanya dari nol, kamu memakai library.

Ada dua jenis:
- **Library standar** — bawaan Python, langsung bisa di-`import` (misal `math`, `json`, `random`).
- **Library pihak ketiga** — harus dipasang dulu dengan `pip` (misal `requests`, `pandas`).

<!--page-->

## pip: Memasang Library

`pip` adalah alat untuk memasang library dari repositori resmi Python (PyPI).

```bash
pip install requests          # memasang satu library
pip install pandas numpy      # memasang beberapa sekaligus
pip install "django>=4.0"     # memasang versi tertentu
pip install --upgrade requests # memperbarui ke versi terbaru
pip uninstall requests        # mencopot
pip list                      # melihat daftar yang terpasang
pip show pandas               # melihat detail sebuah library
```

> Tips: bila `pip` bermasalah di Windows, coba `python -m pip install nama_library`.

### requirements.txt

Untuk mencatat semua library sebuah proyek agar mudah dipasang ulang di komputer lain:

```bash
pip freeze > requirements.txt      # menyimpan daftar lengkap
pip install -r requirements.txt    # memasang semua dari daftar
```

### Virtual Environment

Agar library antar-proyek tidak bercampur dan bentrok versi, setiap proyek sebaiknya punya lingkungan terpisah:

```bash
python -m venv .venv           # membuat lingkungan
.venv\Scripts\activate         # mengaktifkan (Windows)
source .venv/bin/activate      # mengaktifkan (Mac/Linux)
pip install requests           # terpasang khusus di proyek ini
deactivate                     # keluar dari lingkungan
```

<!--page-->

## Library untuk Web & Internet

| Library | Kegunaan |
|---------|----------|
| `requests` | mengakses API dan halaman web (paling populer) |
| `httpx` | seperti requests, mendukung async |
| `beautifulsoup4` | mengambil data dari HTML (web scraping) |
| `flask` | membuat web/API sederhana dan ringan |
| `fastapi` | membuat API modern yang cepat |
| `django` | framework web lengkap untuk aplikasi besar |
| `selenium` | mengotomatiskan browser |

### Contoh: requests (mengambil data dari API)

```python
import requests

respons = requests.get("https://api.github.com/users/torvalds")
print(respons.status_code)     # 200 = berhasil
data = respons.json()          # ubah JSON menjadi dict
print(data["followers"])
```

### Contoh: FastAPI (membuat API)

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def beranda():
    return {"pesan": "Halo Dunia"}

# jalankan: uvicorn main:app --reload
```

### Contoh: BeautifulSoup (web scraping)

```python
import requests
from bs4 import BeautifulSoup

html = requests.get("https://example.com").text
sup = BeautifulSoup(html, "html.parser")
print(sup.title.text)          # ambil judul halaman
```

<!--page-->

## Library untuk Data & Angka

| Library | Kegunaan |
|---------|----------|
| `numpy` | komputasi angka & array berkecepatan tinggi |
| `pandas` | mengolah data tabel (seperti Excel) |
| `matplotlib` | membuat grafik & visualisasi |
| `seaborn` | grafik statistik yang lebih cantik |
| `openpyxl` | membaca/menulis file Excel (.xlsx) |
| `scipy` | perhitungan ilmiah lanjutan |

### Contoh: NumPy

```python
import numpy as np

a = np.array([1, 2, 3, 4])
print(a * 2)          # [2 4 6 8]  operasi ke semua elemen sekaligus
print(a.mean())       # 2.5  rata-rata
print(a.sum())        # 10
```

### Contoh: pandas

```python
import pandas as pd

df = pd.read_csv("data.csv")   # membaca file CSV
print(df.head())               # 5 baris pertama
print(df["umur"].mean())       # rata-rata satu kolom
dewasa = df[df["umur"] >= 18]  # menyaring baris
```

### Contoh: matplotlib

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [4, 5, 6])
plt.title("Contoh Grafik")
plt.xlabel("X"); plt.ylabel("Y")
plt.savefig("grafik.png")      # menyimpan gambar
```

<!--page-->

## Library untuk AI & Machine Learning

| Library | Kegunaan |
|---------|----------|
| `scikit-learn` | machine learning klasik (mudah dipelajari) |
| `tensorflow` | deep learning / jaringan saraf |
| `pytorch` | deep learning (populer di riset) |
| `transformers` | model AI siap pakai (Hugging Face) |
| `openai` | mengakses model GPT |
| `anthropic` | mengakses model Claude |
| `langchain` | membangun aplikasi berbasis LLM |

### Contoh: scikit-learn (machine learning pertama)

```python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_latih, y_latih)        # melatih model
prediksi = model.predict(X_uji)    # membuat prediksi
```

### Contoh: memanggil model AI

```python
from openai import OpenAI

client = OpenAI(api_key="...")
respons = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Jelaskan apa itu Python"}],
)
print(respons.choices[0].message.content)
```

> Catatan: pola memanggil AI mirip dengan memakai `requests` — kirim pesan, terima jawaban. Menguasai `requests` memudahkan memahami library AI.

<!--page-->

## Library Utilitas yang Sering Dipakai

| Library | Kegunaan |
|---------|----------|
| `pillow` (PIL) | mengolah gambar (ubah ukuran, filter) |
| `python-dotenv` | membaca konfigurasi rahasia dari file `.env` |
| `rich` | menampilkan teks berwarna & tabel di terminal |
| `tqdm` | menampilkan progress bar |
| `pydantic` | memvalidasi struktur data |
| `sqlalchemy` | mengakses database SQL lewat Python |
| `pytest` | menulis dan menjalankan pengujian (test) |
| `schedule` | menjalankan tugas terjadwal |

### Contoh: tqdm (progress bar)

```python
from tqdm import tqdm
import time

for i in tqdm(range(100)):
    time.sleep(0.01)       # bar kemajuan muncul otomatis
```

### Contoh: pillow (mengubah ukuran gambar)

```python
from PIL import Image

gambar = Image.open("foto.jpg")
kecil = gambar.resize((200, 200))
kecil.save("foto_kecil.jpg")
```

### Contoh: python-dotenv (menyimpan kunci rahasia)

```python
# file .env berisi:  API_KEY=rahasia123
from dotenv import load_dotenv
import os

load_dotenv()
kunci = os.getenv("API_KEY")   # membaca tanpa menaruh rahasia di kode
```

## Cara Menemukan Library

- Cari di **pypi.org** (repositori resmi) atau ketik "python library untuk X" di mesin pencari.
- Perhatikan jumlah bintang di GitHub dan tanggal update terakhir untuk menilai kualitasnya.

## Ringkasan

- Library menghemat waktu; dipasang dengan `pip install`.
- Gunakan `requirements.txt` dan virtual environment agar proyek rapi.
- Web: `requests`, `fastapi`, `beautifulsoup4`. Data: `numpy`, `pandas`, `matplotlib`.
- AI: `scikit-learn`, `pytorch`, `transformers`, `openai`, `anthropic`.
- Utilitas: `pillow`, `pydantic`, `tqdm`, `pytest`, dan banyak lagi.

> Latihan: pasang `requests`, lalu buat program yang mengambil dan menampilkan sebuah kutipan acak dari API publik (misalnya `https://api.quotable.io/random`).
