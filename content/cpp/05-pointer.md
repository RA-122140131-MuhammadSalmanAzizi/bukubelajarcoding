# Pointer & Referensi

Ini konsep yang paling khas dari C++ dan membedakannya dari Python/JavaScript. Pointer memberi kamu kendali langsung atas alamat memori. Awalnya membingungkan, tetapi konsepnya sederhana.

## Konsep Alamat Memori

Setiap variabel disimpan di suatu lokasi di memori, dan lokasi itu punya "alamat". Operator `&` mengambil alamat sebuah variabel:

```cpp
int umur = 22;
cout << &umur;    // menampilkan alamat memori, misal 0x7ffee3
```

## Pointer

Pointer adalah variabel yang **menyimpan alamat** variabel lain. Dideklarasikan dengan tanda `*`:

```cpp
int umur = 22;
int* ptr = &umur;    // ptr menyimpan alamat umur

cout << ptr;         // alamatnya
cout << *ptr;        // 22  (isi di alamat itu — disebut "dereference")
```

- `&umur` — "alamat dari umur".
- `int* ptr` — "ptr adalah pointer ke sebuah int".
- `*ptr` — "nilai yang ditunjuk oleh ptr".

## Mengubah Nilai Lewat Pointer

Karena pointer tahu alamatnya, ia bisa mengubah nilai aslinya:

```cpp
int umur = 22;
int* ptr = &umur;

*ptr = 30;           // ubah nilai di alamat itu
cout << umur;        // 30 (umur ikut berubah)
```

## Referensi

Referensi adalah "nama panggilan lain" untuk variabel yang sama. Lebih sederhana dari pointer, ditandai `&` saat deklarasi:

```cpp
int umur = 22;
int& alias = umur;   // alias merujuk ke variabel yang sama

alias = 30;
cout << umur;        // 30
```

## Kegunaan: Mengubah Argumen Fungsi

Secara default, fungsi C++ menerima **salinan** nilai, sehingga perubahan di dalam tidak memengaruhi aslinya. Dengan referensi, fungsi bisa mengubah variabel asli:

```cpp
void tambahSatu(int& n) {   // menerima referensi
    n = n + 1;
}

int main() {
    int x = 5;
    tambahSatu(x);
    cout << x;        // 6 (x asli berubah)
    return 0;
}
```

Tanpa `&`, `x` akan tetap `5` karena fungsi hanya menerima salinannya.

## Ringkasan

- `&variabel` mengambil alamat memori sebuah variabel.
- Pointer (`int* ptr`) menyimpan alamat; `*ptr` membaca isinya.
- Referensi (`int& alias`) adalah nama lain untuk variabel yang sama.
- Referensi pada parameter fungsi memungkinkan mengubah variabel asli.
