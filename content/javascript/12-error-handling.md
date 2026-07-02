# Error Handling (try/catch)

Program yang baik tidak langsung mati saat ada masalah. JavaScript menangani error dengan `try/catch`, yang sangat penting untuk operasi yang bisa gagal seperti pengambilan data dan parsing JSON.

## try / catch

```javascript
try {
  // kode yang mungkin error
  const data = JSON.parse(teks);
  console.log(data);
} catch (error) {
  // dijalankan bila terjadi error
  console.log("Gagal:", error.message);
}
```

Bila kode di `try` error, program tidak berhenti — ia melompat ke `catch`. `error.message` berisi keterangan masalahnya.

> Dipakai di React (dari kodemu): `try { return JSON.parse(raw); } catch { return null; }` — bila draft di localStorage rusak, kembalikan `null` alih-alih membuat aplikasi crash.

<!--page-->

## finally

Blok `finally` selalu dijalankan, baik error maupun tidak. Cocok untuk membereskan sesuatu.

```javascript
async function muat() {
  setLoading(true);
  try {
    const data = await ambilData();
    setData(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);      // selalu jalan: matikan indikator loading
  }
}
```

> Pola di atas sangat umum di React: nyalakan loading, coba ambil data, tangani error, lalu apa pun hasilnya matikan loading di `finally`.

<!--page-->

## Melempar Error Sendiri (throw)

Kamu bisa sengaja memunculkan error dengan `throw`:

```javascript
function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak boleh membagi dengan nol");
  }
  return a / b;
}

try {
  bagi(10, 0);
} catch (e) {
  console.log(e.message);   // "Tidak boleh membagi dengan nol"
}
```

> Dari kodemu: `throw new Error('useAuth must be used within an AuthProvider')` — memberi pesan jelas bila hook dipakai di tempat yang salah.

## Jenis Error Umum

| Error | Penyebab |
|-------|----------|
| `TypeError` | memakai nilai dengan cara salah (misal memanggil yang bukan fungsi) |
| `ReferenceError` | memakai variabel yang belum didefinisikan |
| `SyntaxError` | kesalahan penulisan kode |

## Ringkasan

- `try/catch` menangkap error agar program tetap berjalan.
- `finally` selalu dijalankan; cocok untuk mematikan loading atau membereskan sumber daya.
- `throw new Error("pesan")` memunculkan error sendiri dengan pesan jelas.
- Pola `try/catch/finally` dipakai luas di React saat mengambil data.

> Latihan: buat fungsi `parseAman(teks)` yang mencoba `JSON.parse` dan mengembalikan object hasilnya, atau `null` bila teksnya bukan JSON valid.
