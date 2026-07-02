# OOP Dasar (Class & Object)

OOP (Object-Oriented Programming / Pemrograman Berorientasi Objek) adalah cara mengorganisir kode dengan "cetakan" (class) dan "hasil cetakan" (object). Penting untuk aplikasi berukuran besar agar tetap rapi.

## Analogi

- **class** = cetakan kue (rancangan).
- **object** = kue hasil cetakan (barang nyata).
- **atribut** = ciri kue, misalnya rasa dan warna (kata benda).
- **method** = aksi kue, misalnya dihias (kata kerja).

Satu class bisa menghasilkan banyak object.

<!--page-->

## Membuat Class dan Object

```python
class Mobil:
    def __init__(self, merek, warna):   # constructor
        self.merek = merek              # atribut
        self.warna = warna
        self.nyala = False

    def hidupkan(self):                 # method
        self.nyala = True
        print(f"{self.merek} menyala")

# membuat object (instance) dari cetakan
mobil1 = Mobil("Toyota", "merah")
mobil2 = Mobil("Honda", "hitam")

mobil1.hidupkan()          # Toyota menyala
print(mobil1.warna)        # merah
print(mobil2.warna)        # hitam
```

### Memahami __init__ dan self

- **`__init__`** otomatis dijalankan saat object dibuat. Tugasnya menyiapkan atribut awal.
- **`self`** merujuk ke "object ini sendiri", dan **wajib** menjadi parameter pertama tiap method.

Saat kamu menulis `mobil1.hidupkan()`, Python otomatis mengirim `mobil1` sebagai `self`. Karena itu `self.merek` di dalam method berarti "merek milik object yang dipanggil".

<!--page-->

## Inheritance (Pewarisan)

Class anak mewarisi semua atribut dan method dari class induk, sehingga tidak perlu menulis ulang.

```python
class Hewan:
    def __init__(self, nama):
        self.nama = nama
    def bernapas(self):
        print(f"{self.nama} bernapas")
    def suara(self):
        print("...")

class Anjing(Hewan):           # Anjing mewarisi Hewan
    def suara(self):           # menimpa (override) method induk
        print("Guk guk!")

class Kucing(Hewan):
    def suara(self):
        print("Meong!")

a = Anjing("Rex")
a.bernapas()      # Rex bernapas  (warisan dari Hewan)
a.suara()         # Guk guk!      (versi Anjing)
```

Memanggil method induk dengan `super()`:

```python
class Karyawan:
    def __init__(self, nama, gaji):
        self.nama = nama
        self.gaji = gaji

class Manager(Karyawan):
    def __init__(self, nama, gaji, tim):
        super().__init__(nama, gaji)   # jalankan __init__ induk dulu
        self.tim = tim                 # lalu tambahan khusus Manager
```

<!--page-->

## Polymorphism

Object yang berbeda bisa dipanggil dengan cara yang sama, tetapi berperilaku sesuai jenisnya:

```python
hewan_hewan = [Anjing("Rex"), Kucing("Felix")]
for h in hewan_hewan:
    h.suara()      # tiap object bersuara sesuai class-nya
# Guk guk!
# Meong!
```

## Method Khusus (Dunder)

Method dengan nama diapit dua garis bawah mengatur perilaku object terhadap operasi bawaan Python:

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
print(a)          # Rp10,000   (memakai __str__)
print(a + b)      # Rp15,000   (memakai __add__)
```

| Dunder | Dipakai saat |
|--------|--------------|
| `__init__` | membuat object |
| `__str__` | `print(obj)` |
| `__eq__` | `obj1 == obj2` |
| `__len__` | `len(obj)` |
| `__add__` | `obj1 + obj2` |

## Ringkasan

- `class` adalah cetakan; `object` adalah hasilnya.
- `__init__` menyiapkan atribut; `self` merujuk ke object itu sendiri.
- Inheritance memakai `class Anak(Induk)`; `super()` memanggil method induk.
- Polymorphism: method sama, perilaku berbeda sesuai class.
- Dunder seperti `__str__` dan `__add__` mengatur perilaku object.

> Latihan: buat class `Lingkaran` dengan atribut `jari`, sebuah method `luas()` (3.14 x jari x jari), dan `__str__` yang menampilkan "Lingkaran(jari=...)".
