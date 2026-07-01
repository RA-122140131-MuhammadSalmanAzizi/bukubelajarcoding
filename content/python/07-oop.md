# OOP (Class & Object)

OOP (Object-Oriented Programming) adalah cara mengorganisir kode dengan "cetakan" (class) dan "hasil cetakan" (object). Penting untuk aplikasi berukuran besar.

## Analogi

- **class** = cetakan kue (rancangan).
- **object** = kue hasil cetakan (barang nyata).
- **atribut** = ciri kue (rasa, warna) — kata benda.
- **method** = aksi kue (dihias, dimakan) — kata kerja.

## Class dan Object Dasar

```python
class Mobil:
    def __init__(self, merek, warna):   # constructor
        self.merek = merek              # atribut
        self.warna = warna
        self.nyala = False

    def hidupkan(self):                 # method
        self.nyala = True
        print(f"{self.merek} menyala")

mobil1 = Mobil("Toyota", "merah")
mobil1.hidupkan()          # Toyota menyala
print(mobil1.warna)        # merah
```

- `__init__` otomatis dijalankan saat object dibuat, untuk menyiapkan atribut.
- `self` merujuk ke "object ini sendiri", dan wajib jadi parameter pertama tiap method.

## Inheritance (Pewarisan)

Class anak mewarisi semua dari class induk, sehingga tidak perlu menulis ulang.

```python
class Hewan:
    def __init__(self, nama):
        self.nama = nama
    def bernapas(self):
        print(f"{self.nama} bernapas")
    def suara(self):
        print("...")

class Anjing(Hewan):
    def suara(self):            # menimpa (override) method induk
        print("Guk guk!")

a = Anjing("Rex")
a.bernapas()      # Rex bernapas (warisan dari Hewan)
a.suara()         # Guk guk!     (versi Anjing)
```

Memanggil method induk dengan `super()`:

```python
class Manager(Hewan):
    def __init__(self, nama, tim):
        super().__init__(nama)    # jalankan __init__ induk dulu
        self.tim = tim
```

## Polymorphism

Object berbeda bisa dipanggil dengan cara sama, tetapi berperilaku sesuai jenisnya:

```python
for h in [Anjing("Rex"), Hewan("X")]:
    h.suara()      # tiap object bersuara sesuai class-nya
```

## Method Khusus (Dunder)

Method dengan nama diapit garis bawah ganda mengatur perilaku object terhadap operasi bawaan:

```python
class Uang:
    def __init__(self, jumlah):
        self.jumlah = jumlah
    def __str__(self):                # dipakai saat print(object)
        return f"Rp{self.jumlah:,}"
    def __add__(self, lain):          # dipakai saat object + object
        return Uang(self.jumlah + lain.jumlah)

a = Uang(10000)
b = Uang(5000)
print(a + b)      # Rp15,000
```

## Ringkasan

- `class` adalah cetakan; `object` adalah hasilnya.
- `__init__` menyiapkan atribut; `self` merujuk ke object itu sendiri.
- Inheritance memakai `class Anak(Induk)`; `super()` memanggil method induk.
- Method dunder seperti `__str__` dan `__add__` mengatur perilaku object.
