# this & Class

Konsep `this` dan `class` lebih jarang muncul di React modern (yang memakai function component), tetapi tetap penting dipahami — terutama alasan kenapa arrow function lebih disukai.

## this

`this` merujuk pada "konteks" saat fungsi dipanggil. Nilainya bisa berubah tergantung cara pemanggilan, dan inilah sumber banyak kebingungan.

```javascript
const user = {
  nama: "Salman",
  sapa() {
    return `Halo, ${this.nama}`;   // this = object user
  },
};
user.sapa();   // "Halo, Salman"
```

### Kenapa Arrow Function Penting

Arrow function **tidak** punya `this` sendiri — ia memakai `this` dari tempat sekitarnya. Ini menghindari banyak bug.

```javascript
const obj = {
  nama: "Salman",
  tunda() {
    setTimeout(() => {
      console.log(this.nama);   // arrow: this tetap = obj -> "Salman"
    }, 100);
  },
};
```

Bila memakai `function` biasa di dalam `setTimeout`, `this` akan hilang. Inilah salah satu alasan React modern memakai arrow function di mana-mana.

<!--page-->

## Class

Class adalah cetakan untuk membuat object (mirip konsep OOP di Python).

```javascript
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }
  suara() {
    return "...";
  }
}

class Anjing extends Hewan {     // pewarisan
  suara() {
    return "Guk!";               // menimpa method induk
  }
}

const a = new Anjing("Rex");
a.nama;      // "Rex"
a.suara();   // "Guk!"
```

- `constructor` dijalankan saat object dibuat dengan `new`.
- `extends` untuk pewarisan; `super()` memanggil constructor induk.

<!--page-->

## Class di React (Sejarah Singkat)

Dulu, komponen React ditulis sebagai class:

```javascript
class Tombol extends React.Component {
  render() {
    return "Klik";
  }
}
```

Sekarang, React modern (termasuk proyekmu) memakai **function component** dengan hooks, yang jauh lebih ringkas:

```javascript
function Tombol() {
  return "Klik";
}
```

Jadi kamu **tidak wajib** menulis class React, tetapi mungkin menemukannya di kode atau tutorial lama. Cukup kenali bentuknya.

## Ringkasan

- `this` merujuk konteks pemanggilan dan bisa membingungkan; **arrow function** memakai `this` dari sekitarnya sehingga lebih aman.
- `class` adalah cetakan object dengan `constructor`, `extends`, dan `super`.
- React modern memakai function component + hooks, bukan class — tetapi mengenal class tetap berguna.

> Latihan: buat class `Mahasiswa` dengan `constructor(nama, nim)` dan method `perkenalan()` yang mengembalikan "Saya NAMA, NIM NIM".
