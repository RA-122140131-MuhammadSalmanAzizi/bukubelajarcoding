/* ============================================================
   Buku Belajar Coding — logika aplikasi (SPA)
   Navigasi, tema, routing hash, load materi, PWA.
   ============================================================ */

const ICONS = {
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
};

// Susun daftar pelajaran datar buat navigasi prev/next
const FLAT = [];
BOOK.forEach((lang) => {
  lang.pelajaran.forEach((p) => {
    FLAT.push({ langId: lang.id, langNama: lang.nama, lessonId: p.id, judul: p.judul });
  });
});

const el = (id) => document.getElementById(id);
const nav = el("nav");
const article = el("article");

/* ---------- Tema ---------- */
function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("bbc-theme", mode);
  el("themeBtn").innerHTML = mode === "dark" ? ICONS.sun : ICONS.moon;
}
function initTheme() {
  const saved = localStorage.getItem("bbc-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));
}
el("themeBtn").addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  setTheme(cur === "dark" ? "light" : "dark");
});

/* ---------- Sidebar mobile ---------- */
function openSidebar() { el("sidebar").classList.add("open"); el("overlay").hidden = false; }
function closeSidebar() { el("sidebar").classList.remove("open"); el("overlay").hidden = true; }
el("menuBtn").addEventListener("click", openSidebar);
el("overlay").addEventListener("click", closeSidebar);

/* ---------- Bangun navigasi ---------- */
function buildNav() {
  nav.innerHTML = "";
  BOOK.forEach((lang) => {
    const group = document.createElement("div");
    group.className = "nav-group";

    const btn = document.createElement("button");
    btn.className = "nav-lang";
    btn.innerHTML =
      `<span class="lang-badge" style="--c:${lang.color}">${lang.mark}</span>` +
      `<span>${lang.nama}</span>` +
      `<span class="chev">${ICONS.chevron}</span>`;

    const list = document.createElement("div");
    list.className = "nav-lessons";
    list.dataset.lang = lang.id;

    lang.pelajaran.forEach((p) => {
      const a = document.createElement("button");
      a.className = "nav-lesson";
      a.textContent = p.judul;
      a.dataset.lang = lang.id;
      a.dataset.lesson = p.id;
      a.addEventListener("click", () => { location.hash = `${lang.id}/${p.id}`; });
      list.appendChild(a);
    });

    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      list.classList.toggle("open");
    });

    group.appendChild(btn);
    group.appendChild(list);
    nav.appendChild(group);
  });
}

/* ---------- Beranda ---------- */
function renderHome() {
  document.title = "Buku Belajar Coding";
  let cards = "";
  BOOK.forEach((lang) => {
    cards +=
      `<button class="lang-card" style="--c:${lang.color}" data-lang="${lang.id}">` +
      `<span class="lang-badge" style="--c:${lang.color}">${lang.mark}</span>` +
      `<h3>${lang.nama}</h3><p>${lang.deskripsi}</p>` +
      `<span class="count">${lang.pelajaran.length} pelajaran</span></button>`;
  });
  article.innerHTML =
    `<section class="hero">` +
    `<div class="eyebrow">Belajar Pemrograman</div>` +
    `<h1>Satu buku, banyak bahasa.</h1>` +
    `<p>Materi pemrograman dalam Bahasa Indonesia yang ringkas dan langsung ke inti. ` +
    `Bisa dibaca di ponsel maupun desktop, dan tetap jalan tanpa internet.</p></section>` +
    `<div class="section-label">Pilih Bahasa</div>` +
    `<div class="lang-grid">${cards}</div>`;

  article.querySelectorAll(".lang-card").forEach((c) => {
    c.addEventListener("click", () => {
      const lang = c.dataset.lang;
      const first = BOOK.find((l) => l.id === lang).pelajaran[0];
      location.hash = `${lang}/${first.id}`;
    });
  });
  el("prevBtn").hidden = true;
  el("nextBtn").hidden = true;
  setActive(null);
  window.scrollTo(0, 0);
}

/* ---------- Muat pelajaran ---------- */
async function loadLesson(langId, lessonId) {
  const lang = BOOK.find((l) => l.id === langId);
  const lesson = lang && lang.pelajaran.find((p) => p.id === lessonId);
  if (!lesson) { renderHome(); return; }

  article.innerHTML = `<p style="color:var(--text-muted)">Memuat…</p>`;
  try {
    const res = await fetch(`content/${langId}/${lessonId}.md`);
    if (!res.ok) throw new Error(res.status);
    const md = await res.text();
    article.innerHTML =
      `<div class="lesson-meta">${lang.nama}</div>` + MD.render(md);
    document.title = `${lesson.judul} — Buku Belajar Coding`;
  } catch (e) {
    article.innerHTML =
      `<h1>Materi belum tersedia</h1>` +
      `<p>Pelajaran ini sedang disiapkan. Silakan pilih pelajaran lain dari menu.</p>`;
  }

  setActive(`${langId}/${lessonId}`);
  buildPager(langId, lessonId);
  // buka grup bahasa yang aktif
  const listAktif = nav.querySelector(`.nav-lessons[data-lang="${langId}"]`);
  if (listAktif && !listAktif.classList.contains("open")) {
    listAktif.classList.add("open");
    listAktif.previousElementSibling.classList.add("open");
  }
  closeSidebar();
  window.scrollTo(0, 0);
}

function setActive(key) {
  nav.querySelectorAll(".nav-lesson").forEach((a) => {
    a.classList.toggle("active", `${a.dataset.lang}/${a.dataset.lesson}` === key);
  });
}

function buildPager(langId, lessonId) {
  const idx = FLAT.findIndex((f) => f.langId === langId && f.lessonId === lessonId);
  const prev = FLAT[idx - 1];
  const next = FLAT[idx + 1];
  const prevBtn = el("prevBtn");
  const nextBtn = el("nextBtn");

  prevBtn.hidden = !prev;
  nextBtn.hidden = !next;
  if (prev) prevBtn.onclick = () => { location.hash = `${prev.langId}/${prev.lessonId}`; };
  if (next) nextBtn.onclick = () => { location.hash = `${next.langId}/${next.lessonId}`; };
}

/* ---------- Tombol salin kode (event delegation) ---------- */
article.addEventListener("click", (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const code = btn.closest(".code-block").querySelector("code").innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.classList.add("done");
    btn.innerHTML = `${ICONS.check}<span>Tersalin</span>`;
    setTimeout(() => {
      btn.classList.remove("done");
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span>Salin</span>';
    }, 1600);
  });
});

/* ---------- Pencarian ---------- */
el("searchInput").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();
  BOOK.forEach((lang) => {
    const list = nav.querySelector(`.nav-lessons[data-lang="${lang.id}"]`);
    const langBtn = list.previousElementSibling;
    let adaCocok = false;
    list.querySelectorAll(".nav-lesson").forEach((a) => {
      const cocok = a.textContent.toLowerCase().includes(q) || lang.nama.toLowerCase().includes(q);
      a.style.display = cocok || !q ? "" : "none";
      if (cocok) adaCocok = true;
    });
    if (q) {
      list.classList.toggle("open", adaCocok);
      langBtn.classList.toggle("open", adaCocok);
      langBtn.style.display = adaCocok ? "" : "none";
    } else {
      langBtn.style.display = "";
    }
  });
});

/* ---------- Routing (hash) ---------- */
function route() {
  const hash = location.hash.replace(/^#/, "");
  if (!hash) { renderHome(); return; }
  const [langId, lessonId] = hash.split("/");
  if (langId && lessonId) loadLesson(langId, lessonId);
  else renderHome();
}
window.addEventListener("hashchange", route);
el("brandHome").addEventListener("click", (e) => { e.preventDefault(); location.hash = ""; renderHome(); });

/* ---------- PWA: install prompt ---------- */
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  el("installBtn").hidden = false;
});
el("installBtn").addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  el("installBtn").hidden = true;
});

/* ---------- Service worker ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

/* ---------- Mulai ---------- */
initTheme();
buildNav();
route();
