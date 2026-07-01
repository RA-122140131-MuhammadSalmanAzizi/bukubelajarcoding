# OOP Lanjutan

Setelah memahami class dan object dasar, berikut konsep OOP yang lebih dalam dan sering dipakai di kode nyata.

## classmethod dan staticmethod

Selain method biasa (yang memakai `self`), ada dua jenis method lain:

```python
class Tanggal:
    def __init__(self, hari, bulan, tahun):
        self.hari = hari
        self.bulan = bulan
        self.tahun = tahun

    @classmethod
    def dari_string(cls, teks):        # "pabrik" alternatif membuat object
        h, b, t = teks.split("-")
        return cls(int(h), int(b), int(t))

    @staticmethod
    def apakah_kabisat(tahun):         # utilitas, tak butuh self/cls
        return tahun % 4 == 0

t = Tanggal.dari_string("01-07-2026")
Tanggal.apakah_kabisat(2024)          # True
```

| Jenis | Parameter pertama | Kegunaan |
|-------|-------------------|----------|
| method biasa | `self` | mengakses data object |
| `@classmethod` | `cls` | pabrik alternatif / mengubah class |
| `@staticmethod` | tidak ada | fungsi utilitas terkait |

## Encapsulation (Penyembunyian)

Konvensi penamaan untuk menandai akses:

```python
class Akun:
    def __init__(self, saldo):
        self.pemilik = "publik"    # bebas diakses
        self._saldo = saldo        # tanda "internal, jangan disentuh langsung"
        self.__pin = 1234          # lebih ketat (disamarkan Python)
```

- `nama` — publik.
- `_nama` — privat berdasar kesepakatan (bukan paksaan).
- `__nama` — disamarkan agar sulit diakses tak sengaja.

## Property (getter & setter)

`@property` membuat method tampak seperti atribut, dan memungkinkan validasi:

```python
class Suhu:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, nilai):
        if nilai < -273.15:
            raise ValueError("di bawah nol mutlak")
        self._celsius = nilai

    @property
    def fahrenheit(self):
        return self._celsius * 9 / 5 + 32

s = Suhu(25)
print(s.fahrenheit)   # 77.0 (tampak atribut, sebenarnya dihitung)
s.celsius = 30        # lewat setter, otomatis tervalidasi
```

## Composition (Object di Dalam Object)

Selain pewarisan ("adalah"), object bisa menyimpan object lain ("punya"):

```python
class Mesin:
    def nyala(self):
        print("brum")

class Mobil:
    def __init__(self):
        self.mesin = Mesin()    # Mobil PUNYA Mesin
    def jalan(self):
        self.mesin.nyala()
```

> Aturan praktis: utamakan composition ("punya") daripada inheritance ("adalah") karena lebih fleksibel dan tidak membuat hierarki class yang rumit.

## Class Variable vs Instance Variable

```python
class Pegawai:
    perusahaan = "TechCorp"    # class variable: dibagi semua object
    jumlah = 0

    def __init__(self, nama):
        self.nama = nama       # instance variable: milik tiap object
        Pegawai.jumlah += 1

Pegawai("Ani")
Pegawai("Budi")
print(Pegawai.jumlah)          # 2
```

## Ringkasan

- `@classmethod` (pabrik) dan `@staticmethod` (utilitas) melengkapi method biasa.
- Encapsulation ditandai `_` dan `__`; `@property` untuk getter/setter dengan validasi.
- Composition (object di dalam object) sering lebih baik daripada inheritance.
- Class variable dibagi semua object; instance variable milik tiap object.
