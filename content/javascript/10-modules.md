# ES Modules (import / export)

Aplikasi React terdiri dari banyak file kecil yang saling terhubung lewat **import** dan **export**. Setiap komponen, hook, dan utilitas berada di file terpisah, lalu digabung dengan modul.

## export dan import

Sebuah file bisa mengekspor nilai agar dipakai file lain.

```javascript
// file: utils.js
export function sapa(nama) {
  return `Halo ${nama}`;
}

export const PAJAK = 0.1;
```

```javascript
// file: main.js
import { sapa, PAJAK } from "./utils.js";

console.log(sapa("Salman"));   // "Halo Salman"
```

Perhatikan kurung kurawal `{ }` — ini disebut **named export** (ekspor bernama). Kamu mengimpor persis sesuai nama yang diekspor.

> Dipakai di React (dari kodemu): `import { useState, useEffect } from 'react'` dan `export const AuthProvider = ...`.

<!--page-->

## Default Export

Setiap file boleh punya **satu** default export. Saat mengimpor, tidak pakai kurung kurawal dan namanya bebas.

```javascript
// file: Tombol.jsx
export default function Tombol() {
  return "Klik saya";
}
```

```javascript
// file lain
import Tombol from "./Tombol.jsx";     // tanpa { }, nama bebas
```

Sebuah file bisa menggabung keduanya:

```javascript
export default function Utama() { ... }   // default
export const versi = "1.0";               // named
```

```javascript
import Utama, { versi } from "./file.js";
```

<!--page-->

## Import Sekaligus & Alias

```javascript
// mengimpor semua sebagai satu object
import * as authService from "./authService.js";
authService.getProfile(id);

// memberi nama lain (alias)
import { sapa as salam } from "./utils.js";
```

> Dari kodemu: `import * as authService from '../services/authService'` — semua fungsi dari authService dikumpulkan ke dalam `authService`.

## Kenapa Ini Penting di React?

- Tiap komponen (`Navbar.jsx`, `Footer.jsx`) diekspor lalu diimpor di tempat pemakaiannya.
- Custom hook (`useCourseDraft.js`) diekspor dan dipakai di banyak halaman.
- Context (`AuthContext.jsx`) mengekspor provider dan hook `useAuth`.

Tanpa modul, mustahil menyusun aplikasi sebesar proyekmu secara rapi.

## Ringkasan

- **Named export**: `export const x` → `import { x }` (nama harus cocok, pakai `{ }`).
- **Default export**: `export default` → `import Apa` (satu per file, nama bebas, tanpa `{ }`).
- `import * as nama` mengimpor semuanya; `as` memberi alias.
- Modul adalah cara React memecah aplikasi menjadi banyak file yang terhubung.

> Latihan: buat file `matematika.js` yang meng-export `tambah` dan `kurang` (named) serta satu fungsi utama (default), lalu impor ketiganya di file lain.
