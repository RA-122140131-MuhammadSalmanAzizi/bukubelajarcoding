# Pengenalan C++

C++ adalah bahasa yang **cepat dan dekat dengan mesin**. Kamu mengatur banyak hal secara detail, termasuk penggunaan memori. Karena itu C++ dipakai untuk game engine, sistem operasi, aplikasi berperforma tinggi, dan kompetisi pemrograman.

## Ciri Khas C++

- **Sangat cepat** — dikompilasi langsung menjadi kode mesin.
- **Kontrol penuh** — kamu mengelola memori sendiri.
- **Statically typed** — tipe variabel harus ditentukan dan tidak berubah.
- Perlu **dikompilasi** dulu sebelum dijalankan.

## Program Pertama

```cpp
#include <iostream>

int main() {
    std::cout << "Halo, Dunia!" << std::endl;
    return 0;
}
```

Penjelasan tiap bagian:

- `#include <iostream>` — meminjam pustaka untuk input/output.
- `int main()` — fungsi utama; titik awal program dijalankan.
- `std::cout` — perintah menampilkan ke layar (mirip `print`).
- `<<` — operator untuk mengalirkan teks ke `cout`.
- `std::endl` — pindah baris baru.
- `return 0;` — menandakan program selesai tanpa error.

## Mengkompilasi & Menjalankan

Berbeda dari Python, C++ harus dikompilasi dulu menjadi program, baru dijalankan:

```bash
g++ program.cpp -o program
./program
```

`g++` adalah compiler yang populer. Perintah di atas mengubah `program.cpp` menjadi file program bernama `program`.

## Menyederhanakan std::

Agar tidak menulis `std::` berulang-ulang, banyak orang menambahkan baris ini:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Lebih ringkas!" << endl;
    return 0;
}
```

## Komentar

```cpp
// komentar satu baris

/* komentar
   banyak baris */
```

## Ringkasan

- C++ cepat, dekat dengan mesin, dan harus dikompilasi.
- Program dimulai dari fungsi `int main()`.
- `std::cout <<` menampilkan output; `#include` meminjam pustaka.
- Kompilasi dengan `g++ file.cpp -o program`, lalu jalankan.
