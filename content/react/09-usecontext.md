# useContext (State Global)

Saat aplikasi bertambah besar, sering ada data yang dibutuhkan banyak komponen di berbagai tingkat: siapa pengguna yang login, tema terang/gelap, isi keranjang. Mengoper data itu lewat props ke setiap tingkat menjadi melelahkan. **Context** memecahkan masalah ini. Di proyekmu, `AuthContext`, `ThemeContext`, dan `NotificationContext` semuanya memakai teknik ini.

## Masalah: Prop Drilling

Bayangkan data `user` dibutuhkan komponen yang berada jauh di dalam. Tanpa context, kamu harus mengoper `user` melewati setiap komponen di antaranya, meski mereka tidak memakainya.

```text
App (punya user)
 └─ Layout (oper user)
     └─ Navbar (oper user)
         └─ MenuProfil (akhirnya pakai user)
```

Mengoper props berlapis-lapis seperti ini disebut "prop drilling" dan membuat kode berantakan. Context memungkinkan komponen mana pun mengambil data langsung, tanpa melewati perantara.

<!--page-->

## Tiga Langkah Memakai Context

### 1. Membuat Context

```jsx
import { createContext } from "react";

const AuthContext = createContext();
```

### 2. Menyediakan Nilai dengan Provider

Bungkus bagian aplikasi yang butuh data dengan Provider, lalu berikan nilainya.

```jsx
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
```

Semua komponen di dalam `children` kini bisa mengakses `{ user, setUser }`.

### 3. Mengambil Nilai dengan useContext

```jsx
import { useContext } from "react";

function MenuProfil() {
  const { user } = useContext(AuthContext);
  return <p>Halo, {user?.nama}</p>;
}
```

Tidak peduli sedalam apa `MenuProfil` berada, ia bisa langsung mengambil `user`.

<!--page-->

## Pola Custom Hook untuk Context

Daripada mengimpor `useContext` dan `AuthContext` di mana-mana, proyek profesional membungkusnya dalam satu custom hook. Ini persis pola di `AuthContext.jsx` milikmu.

```jsx
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
```

Sekarang komponen cukup memanggil:

```jsx
const { user, isAdmin, logout } = useAuth();
```

Lebih bersih, dan `throw new Error` memberi pesan jelas bila hook dipakai di luar Provider (mencegah bug membingungkan).

<!--page-->

## Memasang Provider di Akar Aplikasi

Agar seluruh aplikasi bisa mengakses context, Provider dipasang di dekat akar, biasanya di `App.jsx` atau `main.jsx`.

```jsx
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          {/* seluruh halaman aplikasi */}
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
```

Provider bisa ditumpuk seperti ini, masing-masing menyediakan datanya sendiri ke seluruh aplikasi.

## Kapan Memakai Context?

- **Cocok**: data global yang jarang berubah atau dibutuhkan banyak tempat (autentikasi, tema, bahasa).
- **Kurang cocok**: data yang sangat sering berubah dan hanya dipakai di satu bagian — cukup `useState` biasa. Untuk state global kompleks, ada juga library seperti Zustand atau Redux.

## Ringkasan

- **Context** menghindari prop drilling: komponen mana pun bisa mengambil data global langsung.
- Tiga langkah: `createContext`, bungkus dengan `<Context.Provider value={...}>`, ambil dengan `useContext`.
- Pola profesional: bungkus dalam **custom hook** (`useAuth`) dengan pengecekan error.
- Provider dipasang di akar aplikasi; boleh ditumpuk.

> Latihan: buat `ThemeContext` yang menyimpan mode "terang"/"gelap" dan fungsi untuk menggantinya, lalu buat komponen tombol yang mengambil dan mengubah tema itu lewat `useContext`.
