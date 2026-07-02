# OOP Lanjutan

Setelah memahami class dan object dasar, berikut konsep OOP yang lebih dalam dan sering dipakai di kode nyata.

## Ringkasan Isi Bab

- Jenis method: instance, class, dan static.
- Encapsulation (menyembunyikan data internal).
- Property (getter & setter yang rapi).
- Composition (object di dalam object).
- Class variable vs instance variable.

<!--page-->

## Jenis Method

Selain method biasa yang memakai `self`, ada dua jenis method lain.

```python
class Tanggal:
    def __init__(self, hari, bulan, tahun):
        self.hari = hari
        self.bulan = bulan
        self.tahun = tahun

    # 1. Instance method: mengakses data object lewat self
    def tampilkan(self):
        print(f"{self.hari}-{self.bulan}-{self.tahun}")

    # 2. Class method: "pabrik" alternatif membuat object
    @classmethod
    def dari_string(cls, teks):
        h, b, t = teks.split("-")
        return cls(int(h), int(b), int(t))

    # 3. Static method: utilitas, tak butuh self/cls
    @staticmethod
    def apakah_kabisat(tahun):
        return tahun % 4 == 0

t = Tanggal.dari_string("01-07-2026")   # membuat object lewat class method
t.tampilkan()                            # 1-7-2026
Tanggal.apakah_kabisat(2024)             # True
```

| Jenis | Parameter pertama | Kegunaan |
|-------|-------------------|----------|
| instance method | `self` | mengakses data object |
| `@classmethod` | `cls` | pabrik alternatif / mengubah class |
| `@staticmethod` | tidak ada | fungsi utilitas yang terkait |

<!--page-->

## Encapsulation (Penyembunyian)

Konvensi penamaan untuk menandai seberapa "privat" sebuah atribut:

```python
class Akun:
    def __init__(self, saldo):
        self.pemilik = "publik"    # boleh diakses bebas
        self._saldo = saldo        # tanda: internal, jangan disentuh langsung
        self.__pin = 1234          # lebih ketat (disamarkan Python)

    def tarik(self, jumlah):       # akses terkontrol lewat method
        if jumlah <= self._saldo:
            self._saldo -= jumlah
        else:
            print("Saldo tidak cukup")
```

- `nama` — publik, bebas diakses.
- `_nama` — privat berdasar kesepakatan (bukan paksaan, hanya sopan santun).
- `__nama` — disamarkan Python agar sulit diakses tak sengaja.

Tujuannya: melindungi data agar hanya diubah lewat cara yang benar.

<!--page-->

## Property (Getter & Setter)

`@property` membuat method tampak seperti atribut biasa, sekaligus memungkinkan validasi saat nilai diubah.

```python
class Suhu:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):             # getter
        return self._celsius

    @celsius.setter
    def celsius(self, nilai):      # setter dengan validasi
        if nilai < -273.15:
            raise ValueError("di bawah nol mutlak")
        self._celsius = nilai

    @property
    def fahrenheit(self):          # atribut turunan (dihitung otomatis)
        return self._celsius * 9 / 5 + 32

s = Suhu(25)
print(s.celsius)        # 25    (tampak atribut, sebenarnya method)
print(s.fahrenheit)     # 77.0
s.celsius = 30          # lewat setter, otomatis divalidasi
```

<!--page-->

## Composition (Object di Dalam Object)

Selain pewarisan ("adalah"), object bisa menyimpan object lain ("punya").

```python
class Mesin:
    def nyala(self):
        print("brum")

class Mobil:
    def __init__(self):
        self.mesin = Mesin()      # Mobil PUNYA sebuah Mesin
    def jalan(self):
        self.mesin.nyala()

Mobil().jalan()    # brum
```

> Aturan praktis: utamakan composition ("punya") daripada inheritance ("adalah"). Composition lebih fleksibel dan tidak membuat hierarki class yang rumit.

## Class Variable vs Instance Variable

```python
class Pegawai:
    perusahaan = "TechCorp"    # class variable: dibagi SEMUA object
    jumlah = 0

    def __init__(self, nama):
        self.nama = nama       # instance variable: milik tiap object
        Pegawai.jumlah += 1

a = Pegawai("Ani")
b = Pegawai("Budi")
print(a.perusahaan)     # TechCorp (sama untuk semua)
print(Pegawai.jumlah)   # 2       (jumlah object yang dibuat)
```

## Ringkasan

- `@classmethod` (pabrik) dan `@staticmethod` (utilitas) melengkapi method biasa.
- Encapsulation ditandai `_` dan `__`; `@property` untuk getter/setter dengan validasi.
- Composition (object di dalam object) sering lebih baik daripada inheritance.
- Class variable dibagi semua object; instance variable milik tiap object.

> Latihan: buat class `RekeningBank` dengan `_saldo` privat, method `setor(jumlah)` dan `tarik(jumlah)` yang memvalidasi, serta property `saldo` yang hanya bisa dibaca.
