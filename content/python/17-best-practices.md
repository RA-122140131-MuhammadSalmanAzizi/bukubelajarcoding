# Best Practices

Yang membedakan kode "asal jalan" dengan kode "bagus dan mudah dikelola". Ini yang dilihat oleh perekrut dan rekan tim.

## Penamaan (PEP 8)

| Jenis | Gaya | Contoh |
|-------|------|--------|
| variabel & fungsi | `snake_case` | `jumlah_tugas`, `hitung_total()` |
| konstanta | `UPPER_CASE` | `MAX_RETRY`, `PI` |
| class | `PascalCase` | `DaftarTugas`, `UserAccount` |

Nama harus deskriptif:

```python
# kurang baik
d = {}
def calc(x): ...

# baik
harga_produk = {}
def hitung_pajak(harga): ...
```

## Format Kode (PEP 8)

- Indentasi 4 spasi (jangan campur tab dan spasi).
- Spasi setelah koma dan di sekitar operator: `x = 1 + 2`.
- Impor diletakkan di atas file.

> Tip: gunakan alat seperti Ruff atau Black untuk merapikan kode otomatis, sehingga kamu tidak perlu memikirkan format secara manual.

## Prinsip DRY (Don't Repeat Yourself)

Bila menulis kode yang sama dua kali, jadikan fungsi.

```python
# berulang
print(f"Nama: {u1['nama']}, Umur: {u1['umur']}")
print(f"Nama: {u2['nama']}, Umur: {u2['umur']}")

# satu fungsi
def tampilkan(u):
    print(f"Nama: {u['nama']}, Umur: {u['umur']}")
```

## Guard Clause daripada Nesting Dalam

Tangani kasus salah lebih dulu lalu keluar, agar kode utama tetap rata kiri.

```python
# nesting dalam (sulit dibaca)
def proses(user):
    if user:
        if user.aktif:
            if user.saldo > 0:
                lakukan()

# guard clause (lebih bersih)
def proses(user):
    if not user:
        return
    if not user.aktif:
        return
    if user.saldo <= 0:
        return
    lakukan()
```

## Hindari "Magic Number"

Beri nama pada nilai penting agar jelas maksudnya.

```python
# kurang jelas
harga = total * 0.11

# jelas
TARIF_PPN = 0.11
harga = total * TARIF_PPN
```

## Komentar yang Baik

Jelaskan **mengapa**, bukan **apa** (kodenya sudah menjelaskan "apa").

```python
harga *= 1.1   # menambahkan PPN 10%
```

## Prinsip Umum

- **KISS** (Keep It Simple): solusi sederhana lebih baik daripada rumit.
- **YAGNI** (You Aren't Gonna Need It): jangan buat fitur yang belum dibutuhkan.
- Kode lebih sering dibaca daripada ditulis, jadi utamakan kejelasan.
- Baca pesan error sampai selesai; jawabannya hampir selalu ada di sana.

## Ringkasan

- Ikuti konvensi penamaan PEP 8 dan rapikan format dengan alat otomatis.
- Terapkan DRY, guard clause, dan hindari magic number.
- Utamakan kesederhanaan dan kejelasan di atas kepintaran yang rumit.
