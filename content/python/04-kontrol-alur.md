# Percabangan & Perulangan

Bagian ini membuat program bisa "mengambil keputusan" dan "mengulang" pekerjaan.

## Percabangan: if / elif / else

```python
umur = 20

if umur < 13:
    print("anak-anak")
elif umur < 18:
    print("remaja")
elif umur < 60:
    print("dewasa")
else:
    print("lansia")
```

> Penting: Python memakai **indentasi** (biasanya 4 spasi) untuk menandai blok kode di dalam `if`. Salah indentasi akan menyebabkan error.

### If versi singkat (ternary)

```python
status = "dewasa" if umur >= 18 else "belum dewasa"
```

### Rantai perbandingan

```python
if 0 <= nilai <= 100:
    print("nilai valid")
```

## Perulangan: for

Dipakai untuk mengulang sesuatu yang jumlahnya diketahui atau bisa di-loop.

```python
# mengulang isi list
for buah in ["apel", "mangga", "jeruk"]:
    print(buah)

# mengulang deret angka dengan range
for i in range(5):        # 0, 1, 2, 3, 4
    print(i)

range(2, 8)      # 2 sampai 7
range(0, 10, 2)  # 0, 2, 4, 6, 8 (loncat 2)
```

Mengulang sambil menomori dengan `enumerate`:

```python
for nomor, buah in enumerate(["apel", "mangga"], start=1):
    print(nomor, buah)
# 1 apel
# 2 mangga
```

## Perulangan: while

Mengulang **selama** syarat masih benar. Cocok saat tidak tahu pasti kapan berhenti.

```python
angka = 5
while angka > 0:
    print(angka)
    angka -= 1     # WAJIB mengubah syarat, agar loop berhenti
```

> Hati-hati: jika lupa mengubah nilai yang diuji, loop akan berjalan selamanya (infinite loop). Tekan Ctrl+C di terminal untuk menghentikannya paksa.

### Pola menu dengan while True dan break

```python
while True:
    perintah = input("Ketik q untuk keluar: ")
    if perintah == "q":
        break              # keluar paksa dari loop
    print(f"Kamu ketik: {perintah}")
```

## break dan continue

```python
for i in range(10):
    if i == 3:
        continue      # lewati sisa, lanjut putaran berikutnya
    if i == 6:
        break         # keluar total dari loop
    print(i)          # 0, 1, 2, 4, 5
```

| Kata | Efek |
|------|------|
| `break` | keluar total dari loop |
| `continue` | lompat ke putaran berikutnya |
| `pass` | tidak melakukan apa-apa (placeholder) |

## Ringkasan

- `if / elif / else` untuk percabangan; indentasi menentukan blok.
- `for` mengulang isi koleksi atau `range`; `enumerate` menambah nomor urut.
- `while` mengulang selama syarat benar; awas infinite loop.
- `break` keluar dari loop, `continue` lompat ke putaran berikutnya.
