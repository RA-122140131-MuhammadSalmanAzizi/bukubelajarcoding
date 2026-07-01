# Variabel & Tipe Data

Di C++, setiap variabel **harus dideklarasikan dengan tipenya**, dan tipe itu tidak bisa berubah. Ini berbeda dari Python atau JavaScript.

## Deklarasi Variabel

```cpp
int umur = 22;            // bilangan bulat
double tinggi = 170.5;    // bilangan desimal
char nilai = 'A';         // satu karakter
bool aktif = true;        // boolean
std::string nama = "Salman";  // teks (butuh #include <string>)
```

## Tipe Data Dasar

| Tipe | Kegunaan | Contoh |
|------|----------|--------|
| `int` | bilangan bulat | `42`, `-7` |
| `double` | desimal presisi tinggi | `3.14` |
| `float` | desimal presisi biasa | `3.14f` |
| `char` | satu karakter | `'A'` |
| `bool` | benar/salah | `true`, `false` |
| `std::string` | teks | `"halo"` |

## Konstanta

Nilai yang tidak boleh diubah ditandai dengan `const`:

```cpp
const double PI = 3.14159;
// PI = 3;   // Error: tidak bisa mengubah konstanta
```

## Input dan Output

`cout` untuk menampilkan, `cin` untuk membaca input dari pengguna:

```cpp
#include <iostream>
using namespace std;

int main() {
    int umur;
    cout << "Masukkan umur: ";
    cin >> umur;                       // membaca input ke variabel
    cout << "Tahun depan " << umur + 1 << endl;
    return 0;
}
```

Perhatikan arah operatornya: `cout <<` (keluar ke layar) dan `cin >>` (masuk ke variabel).

## Operator

Sama seperti kebanyakan bahasa:

```cpp
int a = 10, b = 3;
a + b;    // 13
a - b;    // 7
a * b;    // 30
a / b;    // 3  (pembagian int membuang sisa!)
a % b;    // 1  (sisa bagi)
```

> Hati-hati: pembagian antara dua `int` menghasilkan `int`. `10 / 3` menghasilkan `3`, bukan `3.33`. Agar hasilnya desimal, salah satu harus bertipe `double`: `10.0 / 3`.

## Ringkasan

- Setiap variabel wajib dideklarasikan dengan tipe: `int`, `double`, `char`, `bool`, `string`.
- Tipe tidak bisa berubah setelah dideklarasikan.
- `cout <<` untuk output, `cin >>` untuk input.
- Pembagian dua `int` membuang bagian desimal.
