# Percabangan & Perulangan

Berbeda dari Python yang memakai indentasi, C++ menandai blok kode dengan **kurung kurawal** `{ }`.

## Percabangan: if / else

```cpp
int umur = 20;

if (umur < 18) {
    cout << "belum dewasa" << endl;
} else if (umur < 60) {
    cout << "dewasa" << endl;
} else {
    cout << "lansia" << endl;
}
```

Perhatikan: syarat ditulis di dalam tanda kurung `( )`, dan blok di dalam `{ }`.

## switch

Alternatif rapi untuk banyak pilihan berdasar satu nilai:

```cpp
int hari = 3;

switch (hari) {
    case 1:
        cout << "Senin";
        break;              // wajib, agar tidak lanjut ke case berikutnya
    case 3:
        cout << "Rabu";
        break;
    default:
        cout << "Hari lain";
}
```

> Penting: jangan lupa `break` di tiap `case`. Tanpa itu, program akan "jatuh" mengeksekusi case-case berikutnya.

## Perulangan: for

```cpp
for (int i = 0; i < 5; i++) {
    cout << i << " ";       // 0 1 2 3 4
}
```

Tiga bagian dalam `for`:

1. `int i = 0` — inisialisasi (dijalankan sekali di awal).
2. `i < 5` — syarat (dicek tiap putaran).
3. `i++` — perubahan (dijalankan tiap akhir putaran).

## Perulangan: while

```cpp
int angka = 5;
while (angka > 0) {
    cout << angka << " ";
    angka--;                // kurangi, agar loop berhenti
}
```

## do-while

Seperti `while`, tetapi dijalankan **minimal sekali** karena syarat dicek di akhir:

```cpp
int n = 0;
do {
    cout << n << " ";
    n++;
} while (n < 3);
```

## break dan continue

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;   // lewati putaran ini
    if (i == 6) break;      // keluar dari loop
    cout << i << " ";       // 0 1 2 4 5
}
```

## Ringkasan

- Blok kode ditandai `{ }`, syarat ditulis dalam `( )`.
- `if / else if / else` untuk percabangan; `switch` untuk banyak pilihan (ingat `break`).
- `for`, `while`, dan `do-while` untuk perulangan.
- `break` keluar dari loop, `continue` lompat ke putaran berikutnya.
