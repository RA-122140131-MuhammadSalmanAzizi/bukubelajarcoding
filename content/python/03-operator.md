# Operator

Operator adalah simbol untuk mengolah nilai — menghitung, membandingkan, atau menggabungkan kondisi.

## Operator Aritmatika

```python
10 + 3    # 13   tambah
10 - 3    # 7    kurang
10 * 3    # 30   kali
10 / 3    # 3.333...  bagi (selalu menghasilkan float)
10 // 3   # 3    bagi bulat (sisa dibuang)
10 % 3    # 1    modulo (sisa bagi)
10 ** 3   # 1000 pangkat
```

> Tip: `angka % 2 == 0` adalah cara umum mengecek apakah sebuah bilangan genap. Jika sisa baginya nol, berarti genap.

## Operator Perbandingan

Hasilnya selalu `True` atau `False`.

```python
5 == 5    # True   sama dengan (perhatikan DUA tanda sama dengan)
5 != 3    # True   tidak sama dengan
5 > 3     # True   lebih besar
5 < 3     # False  lebih kecil
5 >= 5    # True   lebih besar atau sama
5 <= 4    # False  lebih kecil atau sama
```

> Hati-hati: `=` dipakai untuk mengisi variabel (assign), sedangkan `==` untuk membandingkan. Keduanya sering tertukar.

## Operator Logika

Menggabungkan beberapa kondisi:

```python
True and False   # False  (keduanya harus benar)
True or False    # True   (salah satu benar sudah cukup)
not True         # False  (kebalikan)
```

Contoh nyata:

```python
umur = 20
punya_ktp = True

if umur >= 18 and punya_ktp:
    print("Boleh mendaftar")
```

## Operator Assignment Gabungan

Menyingkat operasi terhadap variabel itu sendiri:

```python
x = 10
x += 5    # sama dengan x = x + 5  -> 15
x -= 3    # 12
x *= 2    # 24
x //= 5   # 4
```

## Prioritas Operator

Sama seperti matematika: perkalian dan pembagian didahulukan sebelum penjumlahan. Gunakan tanda kurung untuk memperjelas:

```python
2 + 3 * 4      # 14  (perkalian dulu)
(2 + 3) * 4    # 20  (kurung dulu)
```

## Ringkasan

- Aritmatika: `+ - * / // % **`.
- Perbandingan: `== != > < >= <=` menghasilkan boolean.
- Logika: `and`, `or`, `not` untuk menggabungkan kondisi.
- Assignment gabungan (`+=`, `-=`, ...) menyingkat penulisan.
