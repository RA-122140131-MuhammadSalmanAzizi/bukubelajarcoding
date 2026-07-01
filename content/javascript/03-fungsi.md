# Fungsi

Fungsi di JavaScript bisa ditulis dengan beberapa gaya. Ketiganya melakukan hal yang sama, tetapi punya kegunaan masing-masing.

## Function Declaration

Bentuk klasik dengan kata kunci `function`:

```javascript
function tambah(a, b) {
  return a + b;
}

console.log(tambah(3, 5));   // 8
```

## Function Expression

Fungsi disimpan ke dalam variabel:

```javascript
const tambah = function (a, b) {
  return a + b;
};
```

## Arrow Function

Bentuk modern yang ringkas, paling sering dipakai sekarang:

```javascript
const tambah = (a, b) => {
  return a + b;
};

// jika hanya satu baris return, bisa dipersingkat:
const tambah = (a, b) => a + b;

// jika satu parameter, kurung boleh dihilangkan:
const kuadrat = x => x * x;
```

## Parameter Default

```javascript
function sapa(nama, salam = "Halo") {
  console.log(`${salam}, ${nama}!`);
}

sapa("Salman");          // Halo, Salman!
sapa("Salman", "Hai");   // Hai, Salman!
```

## Rest Parameter

Menerima jumlah argumen bebas menjadi sebuah array:

```javascript
function jumlahkan(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}

jumlahkan(1, 2, 3);       // 6
jumlahkan(1, 2, 3, 4);    // 10
```

## Fungsi Sebagai Nilai (Callback)

Di JavaScript, fungsi bisa dikirim sebagai argumen ke fungsi lain. Ini disebut callback dan sangat umum:

```javascript
const angka = [1, 2, 3, 4];

const dobel = angka.map(x => x * 2);       // [2, 4, 6, 8]
const genap = angka.filter(x => x % 2 === 0); // [2, 4]

angka.forEach(x => console.log(x));
```

## Ringkasan

- Tiga gaya: function declaration, function expression, dan arrow function.
- Arrow function (`=>`) adalah bentuk ringkas yang paling modern.
- Parameter bisa punya nilai default; `...rest` menampung argumen bebas.
- Fungsi bisa dikirim sebagai callback ke `map`, `filter`, `forEach`.
