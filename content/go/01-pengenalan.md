# Pengenalan Go

Go (sering disebut Golang) adalah bahasa modern buatan Google. Filosofinya: **sederhana, cepat, dan mudah dikelola**. Go sangat populer untuk membangun server, layanan cloud, dan alat command line. Banyak infrastruktur besar (seperti Docker dan Kubernetes) ditulis dengan Go.

## Ciri Khas Go

- **Sederhana** — sedikit fitur, sengaja dibuat ringkas dan konsisten.
- **Cepat** — dikompilasi menjadi program mandiri yang efisien.
- **Bawaan concurrency** — mudah menjalankan banyak tugas sekaligus (goroutine).
- **Statically typed** — tipe ditentukan, tetapi terasa ringan dipakai.

## Program Pertama

```go
package main

import "fmt"

func main() {
    fmt.Println("Halo, Dunia!")
}
```

Penjelasan:

- `package main` — setiap program Go dimulai dari package `main`.
- `import "fmt"` — meminjam paket `fmt` untuk format & cetak.
- `func main()` — fungsi utama, titik awal program.
- `fmt.Println(...)` — menampilkan teks lalu pindah baris.

## Menjalankan Go

```bash
go run program.go
```

Perintah `go run` langsung mengkompilasi dan menjalankan. Untuk menghasilkan file program:

```bash
go build program.go
./program
```

## Komentar

```go
// komentar satu baris

/* komentar
   banyak baris */
```

## Format Otomatis

Go punya alat resmi `gofmt` untuk merapikan kode secara standar. Semua programmer Go menulis dengan format yang sama, jadi tidak ada perdebatan gaya:

```bash
gofmt -w program.go
```

## Ringkasan

- Go dibuat Google dengan filosofi sederhana, cepat, dan mudah dikelola.
- Program dimulai dari `package main` dan `func main()`.
- `fmt.Println()` menampilkan output.
- Jalankan dengan `go run`, dan rapikan dengan `gofmt`.
