# Variabel & Dasar Sintaks

## Deklarasi Variabel

Go punya dua cara utama mendeklarasikan variabel:

```go
var nama string = "Salman"    // lengkap dengan tipe
var umur = 22                 // tipe ditebak otomatis

nama := "Salman"              // bentuk singkat (paling sering dipakai)
umur := 22
```

> Tip: bentuk `:=` adalah cara paling umum di dalam fungsi. Go otomatis menentukan tipenya dari nilai yang diberikan.

## Tipe Data Dasar

| Tipe | Contoh |
|------|--------|
| `string` | `"halo"` |
| `int` | `42` |
| `float64` | `3.14` |
| `bool` | `true`, `false` |

Konstanta memakai kata kunci `const`:

```go
const PI = 3.14159
```

## Menampilkan Output

```go
package main

import "fmt"

func main() {
    nama := "Salman"
    umur := 22

    fmt.Println("Halo", nama)                 // Halo Salman
    fmt.Printf("Umur: %d tahun\n", umur)      // Umur: 22 tahun
}
```

`Printf` memakai penanda format: `%d` untuk angka, `%s` untuk teks, `%v` untuk nilai apa pun.

## Percabangan

```go
umur := 20

if umur >= 18 {
    fmt.Println("dewasa")
} else {
    fmt.Println("belum dewasa")
}
```

Perhatikan: syarat **tidak** ditulis dalam tanda kurung, tetapi blok tetap memakai `{ }`.

## Perulangan

Go hanya punya satu kata kunci perulangan: `for`. Tetapi bisa dipakai dalam beberapa bentuk:

```go
// bentuk klasik
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// bentuk mirip while
n := 5
for n > 0 {
    fmt.Println(n)
    n--
}
```

## Fungsi

Tipe parameter dan tipe kembalian ditulis, tetapi tipe kembalian diletakkan **setelah** parameter:

```go
func tambah(a int, b int) int {
    return a + b
}

func main() {
    fmt.Println(tambah(3, 5))    // 8
}
```

## Ringkasan

- Deklarasi dengan `var` atau bentuk singkat `:=` (paling umum).
- Tipe dasar: `string`, `int`, `float64`, `bool`.
- `if` tanpa kurung pada syarat; hanya ada satu kata kunci loop, yaitu `for`.
- Fungsi menuliskan tipe kembalian setelah daftar parameter.
