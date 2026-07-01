# Percabangan & Perulangan

Bagian ini membuat program bisa "mengambil keputusan" (percabangan) dan "mengulang pekerjaan" (perulangan). Ini inti dari hampir semua program.

## Percabangan: if

`if` menjalankan blok kode hanya jika sebuah kondisi benar:

```python
umur = 20

if umur >= 18:
    print("dewasa")
```

Perhatikan dua hal penting:
- Setelah kondisi ada tanda **titik dua** `:`.
- Baris di dalam `if` **menjorok** (indentasi 4 spasi). Indentasi inilah yang menandai "ini bagian dari if".

### if / elif / else

```python
umur = 20

if umur < 13:
    print("anak-anak")
elif umur < 18:            # else if: dicek kalau if di atas salah
    print("remaja")
elif umur < 60:
    print("dewasa")
else:                      # kalau semua di atas salah
    print("lansia")
```

Python mengecek dari atas ke bawah dan menjalankan **blok pertama** yang kondisinya benar, lalu berhenti.

### if versi singkat (ternary)

Untuk kasus sederhana, satu baris cukup:

```python
status = "dewasa" if umur >= 18 else "belum dewasa"
```

<!--page-->

## Perulangan: for

`for` dipakai untuk mengulang sesuatu yang bisa di-loop (list, teks, `range`).

```python
# mengulang isi list
for buah in ["apel", "mangga", "jeruk"]:
    print(buah)

# mengulang deret angka dengan range
for i in range(5):        # 0, 1, 2, 3, 4
    print(i)
```

Variasi `range`:

```python
range(5)          # 0,1,2,3,4
range(2, 8)       # 2,3,4,5,6,7  (mulai 2 sampai sebelum 8)
range(0, 10, 2)   # 0,2,4,6,8    (loncat 2)
range(5, 0, -1)   # 5,4,3,2,1    (mundur)
```

Mengulang sambil mendapat nomor urut dengan `enumerate`:

```python
for nomor, buah in enumerate(["apel", "mangga"], start=1):
    print(nomor, buah)
# 1 apel
# 2 mangga
```

<!--page-->

## Perulangan: while

`while` mengulang **selama** kondisi masih benar. Cocok saat kita tidak tahu pasti berapa kali harus mengulang.

```python
angka = 5
while angka > 0:
    print(angka)
    angka -= 1     # WAJIB mengubah nilai, agar loop berhenti
```

> Hati-hati: jika lupa mengubah nilai yang diuji (misalnya lupa `angka -= 1`), kondisi tidak pernah menjadi salah, dan loop berjalan **selamanya** (infinite loop). Tekan Ctrl+C di terminal untuk menghentikannya paksa.

### Pola Menu: while True + break

```python
while True:
    perintah = input("Ketik q untuk keluar: ")
    if perintah == "q":
        break              # keluar paksa dari loop
    print(f"Kamu mengetik: {perintah}")
```

`while True` mengulang tanpa henti, sampai bertemu `break` yang memaksa keluar. Pola ini dipakai untuk menu interaktif.

<!--page-->

## break, continue, dan pass

```python
for i in range(10):
    if i == 3:
        continue      # lewati sisa baris, lanjut ke putaran berikutnya
    if i == 6:
        break         # keluar total dari loop
    print(i)          # 0, 1, 2, 4, 5
```

| Kata | Efek |
|------|------|
| `break` | keluar total dari loop |
| `continue` | lompat ke putaran berikutnya |
| `pass` | tidak melakukan apa-apa (pengisi tempat) |

## Perulangan Bersarang (Nested Loop)

Loop di dalam loop, misalnya untuk membuat tabel:

```python
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}x{j}={i*j}", end="  ")
    print()   # pindah baris setelah tiap i
```

## Kesalahan Umum

- Lupa tanda titik dua `:` setelah `if`, `for`, atau `while`.
- Salah indentasi sehingga baris tidak masuk ke blok yang benar.
- Lupa mengubah nilai di `while`, menyebabkan infinite loop.

## Ringkasan

- `if / elif / else` untuk percabangan; indentasi menandai blok.
- `for` mengulang isi koleksi atau `range`; `enumerate` menambah nomor urut.
- `while` mengulang selama kondisi benar; awas infinite loop.
- `break` keluar dari loop, `continue` lompat ke putaran berikutnya.

> Latihan: buat program yang menampilkan angka 1 sampai 20, tetapi untuk kelipatan 3 tampilkan kata "Fizz" alih-alih angkanya.
