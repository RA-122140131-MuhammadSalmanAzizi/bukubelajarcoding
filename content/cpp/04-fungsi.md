# Fungsi

Fungsi di C++ harus menyebutkan **tipe nilai kembalian** dan **tipe tiap parameter**.

## Membuat Fungsi

```cpp
int tambah(int a, int b) {
    return a + b;
}

int main() {
    cout << tambah(3, 5);   // 8
    return 0;
}
```

Bagian-bagiannya:

- `int` (paling depan) — tipe nilai yang dikembalikan.
- `tambah` — nama fungsi.
- `(int a, int b)` — parameter beserta tipenya.
- `return a + b;` — nilai yang dikirim balik.

## Fungsi Tanpa Nilai Kembalian (void)

Jika fungsi tidak mengembalikan apa pun, tipenya `void`:

```cpp
void sapa(string nama) {
    cout << "Halo, " << nama << endl;
}

sapa("Salman");    // Halo, Salman
```

## Deklarasi Sebelum Pemakaian

C++ perlu "mengenal" fungsi sebelum dipanggil. Jika fungsi ditulis setelah `main`, deklarasikan dulu bentuknya (prototype) di atas:

```cpp
int tambah(int a, int b);   // prototype (deklarasi)

int main() {
    cout << tambah(2, 3);
    return 0;
}

int tambah(int a, int b) {  // definisi lengkap
    return a + b;
}
```

## Parameter Default

```cpp
int pangkat(int basis, int eksponen = 2) {
    int hasil = 1;
    for (int i = 0; i < eksponen; i++) hasil *= basis;
    return hasil;
}

pangkat(5);      // 25 (eksponen memakai default 2)
pangkat(5, 3);   // 125
```

## Function Overloading

C++ memperbolehkan beberapa fungsi bernama sama, asal parameternya berbeda:

```cpp
int luas(int sisi) {
    return sisi * sisi;
}
int luas(int panjang, int lebar) {
    return panjang * lebar;
}

luas(4);       // 16 (memakai versi satu parameter)
luas(3, 5);    // 15 (memakai versi dua parameter)
```

## Ringkasan

- Fungsi menyebutkan tipe kembalian dan tipe tiap parameter.
- Gunakan `void` jika tidak mengembalikan nilai.
- Deklarasikan prototype jika fungsi dipakai sebelum didefinisikan.
- Overloading memperbolehkan nama fungsi sama dengan parameter berbeda.
