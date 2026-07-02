# Fungsi & Arrow Function

Fungsi adalah blok kode yang bisa dipanggil berulang. Di React, **komponen itu sendiri adalah fungsi**, jadi memahami fungsi dengan baik sangat penting.

## Cara Menulis Fungsi

Ada beberapa gaya. Ketiganya melakukan hal yang sama.

```javascript
// 1. Function declaration
function tambah(a, b) {
  return a + b;
}

// 2. Function expression (disimpan di variabel)
const tambah2 = function (a, b) {
  return a + b;
};

// 3. Arrow function (paling modern & sering dipakai)
const tambah3 = (a, b) => {
  return a + b;
};

tambah(3, 5);   // 8
```

<!--page-->

## Arrow Function Lebih Dalam

Arrow function bisa dipersingkat. Ini bentuk yang paling sering kamu lihat di React.

```javascript
// dengan body dan return
const kuadrat = (x) => {
  return x * x;
};

// jika hanya satu baris return, kurung kurawal & return boleh dihilangkan
const kuadrat2 = (x) => x * x;

// jika satu parameter, kurung parameter boleh dihilangkan
const kuadrat3 = x => x * x;

// tanpa parameter, tetap butuh kurung kosong
const salam = () => "Halo";
```

Mengembalikan object perlu tanda kurung agar tidak dikira blok:

```javascript
const buatUser = (nama) => ({ nama: nama, aktif: true });
```

> Dipakai di React: komponen umumnya ditulis sebagai arrow function, dan event handler hampir selalu arrow function: `onClick={() => hapus(id)}`.

<!--page-->

## Parameter Default & Rest

Nilai default bila argumen tidak diberikan:

```javascript
function sapa(nama, salam = "Halo") {
  return `${salam}, ${nama}!`;
}
sapa("Salman");          // "Halo, Salman!"
```

> Dari kodemu: `fetchProfile = useCallback(async (userId, retries = 2) => ...)` — `retries` punya default 2.

Rest parameter mengumpulkan sisa argumen menjadi array:

```javascript
function jumlahkan(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}
jumlahkan(1, 2, 3, 4);    // 10
```

<!--page-->

## Fungsi Sebagai Nilai (Callback)

Di JavaScript, fungsi bisa dikirim sebagai argumen ke fungsi lain. Ini disebut **callback**, dan menjadi dasar cara kerja React.

```javascript
const angka = [1, 2, 3];

angka.forEach((n) => console.log(n));      // menjalankan fungsi untuk tiap item
const dobel = angka.map((n) => n * 2);     // [2, 4, 6]
```

> Dipakai di React: `setSession`, `useEffect(() => {...})`, dan `onClick={() => ...}` semuanya mengirim fungsi sebagai callback. Menguasai callback = memahami inti React.

## Ringkasan

- Tiga gaya fungsi: declaration, expression, dan **arrow function** (paling modern).
- Arrow function bisa dipersingkat; komponen dan handler React memakainya.
- Parameter bisa punya nilai default; `...rest` menampung argumen bebas.
- Fungsi bisa dikirim sebagai **callback** — fondasi cara kerja React.

> Latihan: buat arrow function `formatRupiah(angka)` yang mengembalikan string seperti "Rp15.000" dari angka `15000`.
