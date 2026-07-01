# Operator

Operator adalah simbol untuk mengolah nilai — menghitung, membandingkan, atau menggabungkan kondisi. Bab ini mengelompokkannya agar mudah diingat.

## Operator Aritmatika

```python
10 + 3    # 13    tambah
10 - 3    # 7     kurang
10 * 3    # 30    kali
10 / 3    # 3.333...   bagi (SELALU menghasilkan float)
10 // 3   # 3     bagi bulat (sisa dibuang)
10 % 3    # 1     modulo (mengambil SISA bagi)
10 ** 3   # 1000  pangkat
```

Dua yang sering membingungkan pemula:

- **`/` vs `//`** — `/` menghasilkan desimal (`10 / 4` = `2.5`), sedangkan `//` membuang bagian desimal (`10 // 4` = `2`).
- **`%` (modulo)** — mengambil sisa pembagian. `10 % 3` = `1` karena 10 dibagi 3 sisa 1.

> Tips: `angka % 2 == 0` adalah cara umum mengecek bilangan genap. Jika sisa baginya nol, berarti genap.

### Urutan Operasi

Sama seperti matematika: perkalian dan pembagian didahulukan sebelum penjumlahan. Gunakan tanda kurung untuk memperjelas atau mengubah urutan:

```python
2 + 3 * 4      # 14  (3*4 dulu, baru +2)
(2 + 3) * 4    # 20  (kurung dulu)
```

<!--page-->

## Operator Perbandingan

Menghasilkan `True` atau `False`. Sering dipakai di percabangan (`if`).

```python
5 == 5    # True   sama dengan (perhatikan DUA tanda sama dengan)
5 != 3    # True   tidak sama dengan
5 > 3     # True   lebih besar
5 < 3     # False  lebih kecil
5 >= 5    # True   lebih besar atau sama dengan
5 <= 4    # False  lebih kecil atau sama dengan
```

> Hati-hati: `=` untuk **mengisi** variabel, sedangkan `==` untuk **membandingkan**. Keduanya sangat sering tertukar dan menyebabkan bug.

Perbandingan juga bekerja pada teks (berdasar urutan alfabet):

```python
"apel" == "apel"    # True
"a" < "b"           # True
```

## Operator Logika

Menggabungkan beberapa kondisi:

```python
True and False   # False  (keduanya harus benar)
True or False    # True   (salah satu benar sudah cukup)
not True         # False  (membalik nilai)
```

Contoh nyata:

```python
umur = 20
punya_ktp = True

if umur >= 18 and punya_ktp:
    print("Boleh mendaftar")
```

Rantai perbandingan khas Python:

```python
nilai = 75
if 0 <= nilai <= 100:      # sama dengan: nilai >= 0 and nilai <= 100
    print("nilai valid")
```

<!--page-->

## Operator Assignment Gabungan

Menyingkat operasi terhadap variabel itu sendiri:

```python
x = 10
x += 5    # sama dengan x = x + 5  -> 15
x -= 3    # 12
x *= 2    # 24
x //= 5   # 4
x %= 3    # 1
```

Ini sering dipakai di dalam perulangan untuk menambah penghitung:

```python
total = 0
total += 10    # total jadi 10
total += 5     # total jadi 15
```

## Operator pada Teks

Beberapa operator bekerja berbeda pada string:

```python
"Halo " + "Dunia"    # 'Halo Dunia'  (+ menggabungkan teks)
"ab" * 3             # 'ababab'      (* mengulang teks)
```

> Hati-hati: `"2" + 2` akan error karena mencampur teks dan angka. Salah satunya harus diubah dulu: `int("2") + 2` atau `"2" + str(2)`.

## Ringkasan

- Aritmatika: `+ - * / // % **`. Ingat beda `/` (desimal) dan `//` (bulat), serta `%` (sisa).
- Perbandingan: `== != > < >= <=` menghasilkan boolean.
- Logika: `and`, `or`, `not` menggabungkan kondisi.
- Assignment gabungan (`+=`, `-=`, ...) menyingkat penulisan.
- Pada teks, `+` menggabungkan dan `*` mengulang.

> Latihan: buat program yang meminta dua angka, lalu menampilkan hasil penjumlahan, pengurangan, perkalian, pembagian, dan sisa baginya.
