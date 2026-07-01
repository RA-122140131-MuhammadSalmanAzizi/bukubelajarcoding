# Variabel & Dasar Sintaks

## Variabel

Ciri khas PHP: setiap variabel diawali tanda dolar `$`.

```php
<?php
$nama = "Salman";
$umur = 22;
$tinggi = 170.5;
$aktif = true;
?>
```

Tipe tidak perlu disebutkan — PHP menentukannya otomatis, mirip Python.

## Menampilkan Variabel

```php
<?php
$nama = "Salman";
echo "Halo, " . $nama;          // titik (.) menggabungkan teks
echo "Halo, $nama";             // variabel bisa langsung di dalam string kutip ganda
?>
```

> Catatan: gunakan kutip ganda `"..."` agar variabel di dalamnya dibaca. Kutip tunggal `'...'` menampilkan teks apa adanya, termasuk `$nama` sebagai teks biasa.

## Tipe Data Dasar

| Tipe | Contoh |
|------|--------|
| string | `"halo"` |
| integer | `42` |
| float | `3.14` |
| boolean | `true`, `false` |
| array | `[1, 2, 3]` |
| null | `null` |

## Array

```php
<?php
// array biasa
$buah = ["apel", "mangga", "jeruk"];
echo $buah[0];          // apel

// array asosiatif (kunci menuju nilai, mirip dict)
$orang = ["nama" => "Salman", "umur" => 22];
echo $orang["nama"];    // Salman
?>
```

## Percabangan & Perulangan

```php
<?php
$umur = 20;

if ($umur >= 18) {
    echo "dewasa";
} else {
    echo "belum dewasa";
}

// perulangan for
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

// perulangan foreach untuk array
foreach ($buah as $b) {
    echo $b;
}
?>
```

## Fungsi

```php
<?php
function tambah($a, $b) {
    return $a + $b;
}

echo tambah(3, 5);      // 8
?>
```

## Ringkasan

- Variabel diawali `$` dan tipenya ditentukan otomatis.
- Gabung teks dengan titik `.`, atau selipkan variabel di dalam kutip ganda.
- Array biasa dan array asosiatif (mirip dict) untuk menyimpan banyak data.
- Sintaks `if`, `for`, `foreach`, dan `function` mirip bahasa lain, hanya dengan `$` dan `{ }`.
