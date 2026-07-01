/* ============================================================
   Buku Belajar Coding — logika aplikasi (SPA)
   Landing (tanpa sidebar) + tampilan belajar (dengan sidebar).
   ============================================================ */

const DEV_EMAIL = "salman06az@gmail.com";

const ICONS = {
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
};

const FEATURES = [
  { t: "Responsif", d: "Nyaman dibaca di ponsel maupun desktop.", i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="2" y="2" rx="2"/><path d="M14 2v20"/><path d="M18 8h4v10a2 2 0 0 1-2 2h-2"/></svg>' },
  { t: "Bisa Offline", d: "Terpasang seperti aplikasi & jalan tanpa internet.", i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>' },
  { t: "Tema Terang & Gelap", d: "Pilih tampilan yang paling nyaman di matamu.", i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v18"/></svg>' },
  { t: "Pencarian Cepat", d: "Temukan pelajaran langsung dari sidebar.", i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>' },
];

const FLAT = [];
BOOK.forEach((lang) => {
  lang.pelajaran.forEach((p) => {
    FLAT.push({ langId: lang.id, langNama: lang.nama, lessonId: p.id, judul: p.judul });
  });
});

const el = (id) => document.getElementById(id);
const nav = el("nav");
const article = el("article");

/* ---------- Logo topbar: fallback ke ikon jika gambar tak ada ---------- */
const brandLogo = el("brandLogo");
if (brandLogo) {
  brandLogo.addEventListener("error", () => {
    const m = el("brandMark");
    m.classList.add("fallback");
    m.innerHTML = ICONS.code;
  });
}

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

/* ---------- Bangun navigasi sidebar ---------- */
function buildNav() {
  nav.innerHTML = "";
  BOOK.forEach((lang) => {
    const group = document.createElement("div");
    group.className = "nav-group";

    const btn = document.createElement("button");
    btn.className = "nav-lang";
    btn.innerHTML =
      `<span class="lang-badge" style="--c:${lang.color}">${lang.mark}</span>` +
      `<span>${lang.nama}</span><span class="chev">${ICONS.chevron}</span>`;

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

/* ---------- Roadmap berkelok ---------- */
function roadmapHTML(lang) {
  const n = lang.pelajaran.length;
  let h = `<div class="path">`;
  lang.pelajaran.forEach((p, i) => {
    const side = i % 2 === 0 ? "left" : "right";
    const judul = p.judul.replace(/^\d+\.\s*/, "");
    h +=
      `<div class="pstep ${side}">` +
      `<button class="pnode" style="--c:${lang.color}" data-lang="${lang.id}" data-lesson="${p.id}">` +
      `<span class="pnum">${i + 1}</span><span class="ptitle">${judul}</span></button></div>`;
    if (i < n - 1) {
      const d = i % 2 === 0 ? "M29 2 C29 34 71 14 71 46" : "M71 2 C71 34 29 14 29 46";
      h +=
        `<div class="pconn"><svg viewBox="0 0 100 48" preserveAspectRatio="none">` +
        `<path d="${d}" fill="none" stroke="${lang.color}" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1 8"/></svg></div>`;
    }
  });
  return h + `</div>`;
}

function renderRoadmap(langId) {
  const lang = BOOK.find((l) => l.id === langId);
  document.querySelectorAll(".lang-tab").forEach((t) => t.classList.toggle("active", t.dataset.lang === langId));

  const area = el("roadmapArea");
  area.innerHTML =
    `<div class="roadmap-info"><h3>${lang.nama}</h3><p>${lang.deskripsi}</p>` +
    `<div class="start-lang"><button class="btn-primary" data-start="${langId}">Mulai ${lang.nama}</button></div></div>` +
    roadmapHTML(lang);

  area.querySelectorAll(".pnode").forEach((b) =>
    b.addEventListener("click", () => { location.hash = `${b.dataset.lang}/${b.dataset.lesson}`; })
  );
  area.querySelector("[data-start]").addEventListener("click", () => {
    location.hash = `${langId}/${lang.pelajaran[0].id}`;
  });
}

/* ---------- Landing / Beranda ---------- */
function renderHome() {
  document.title = "Buku Belajar Coding";
  document.body.dataset.view = "landing";

  const fitur = FEATURES.map(
    (f) => `<div class="feature-item"><span class="f-icon">${f.i}</span><h4>${f.t}</h4><p>${f.d}</p></div>`
  ).join("");

  const tabs = BOOK.map(
    (l) =>
      `<button class="lang-tab" style="--c:${l.color}" data-lang="${l.id}">` +
      `<span class="lang-badge" style="--c:${l.color}">${l.mark}</span>${l.nama}</button>`
  ).join("");

  article.innerHTML =
    `<section class="landing-hero">` +
    `<div class="landing-logo"><img src="aset/logo.png" alt="Logo Buku Belajar Coding" /></div>` +
    `<h1>Buku Belajar Coding</h1>` +
    `<p class="tagline">Belajar Python, JavaScript, C++, dan lainnya dalam Bahasa Indonesia — ringkas, langsung ke inti, dari nol.</p>` +
    `<div class="landing-cta"><button class="btn-primary lg" id="startBtn">Mulai Belajar</button></div>` +
    `</section>` +
    `<div class="section-label">Kenapa Buku Ini</div>` +
    `<div class="feature-row">${fitur}</div>` +
    `<div class="section-label">Pilih Bahasa &amp; Roadmap</div>` +
    `<div class="roadmap-wrap"><div class="lang-tabs">${tabs}</div><div id="roadmapArea"></div></div>`;

  const llogo = article.querySelector(".landing-logo img");
  if (llogo) llogo.addEventListener("error", () => {
    const c = article.querySelector(".landing-logo");
    c.style.background = "var(--accent)"; c.style.color = "#fff";
    c.innerHTML = ICONS.code.replace('width="20"', "");
  });

  article.querySelectorAll(".lang-tab").forEach((t) =>
    t.addEventListener("click", () => renderRoadmap(t.dataset.lang))
  );
  el("startBtn").addEventListener("click", () => { location.hash = "python/01-pengenalan"; });

  renderRoadmap("python");
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

  document.body.dataset.view = "app";
  article.innerHTML = `<p style="color:var(--text-muted)">Memuat…</p>`;
  try {
    const res = await fetch(`content/${langId}/${lessonId}.md`);
    if (!res.ok) throw new Error(res.status);
    const md = await res.text();
    article.innerHTML = `<div class="lesson-meta">${lang.nama}</div>` + MD.render(md);
    document.title = `${lesson.judul} — Buku Belajar Coding`;
  } catch (e) {
    article.innerHTML = `<h1>Materi belum tersedia</h1><p>Pelajaran ini sedang disiapkan. Silakan pilih pelajaran lain dari menu.</p>`;
  }

  setActive(`${langId}/${lessonId}`);
  buildPager(langId, lessonId);
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
  el("prevBtn").hidden = !prev;
  el("nextBtn").hidden = !next;
  if (prev) el("prevBtn").onclick = () => { location.hash = `${prev.langId}/${prev.lessonId}`; };
  if (next) el("nextBtn").onclick = () => { location.hash = `${next.langId}/${next.lessonId}`; };
}

/* ---------- Tombol salin kode ---------- */
article.addEventListener("click", (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const code = btn.closest(".code-block").querySelector("code").innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.classList.add("done");
    btn.innerHTML = `${ICONS.check}<span>Tersalin</span>`;
    setTimeout(() => {
      btn.classList.remove("done");
      btn.innerHTML = `${ICONS.copy}<span>Salin</span>`;
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

/* ---------- Modal Kirim Masukan ---------- */
const modal = el("feedbackModal");
function openModal() { modal.hidden = false; setTimeout(() => el("fbPesan").focus(), 50); }
function closeModal() { modal.hidden = true; }
el("feedbackBtn").addEventListener("click", () => { closeSidebar(); openModal(); });
el("feedbackClose").addEventListener("click", closeModal);
el("feedbackCancel").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

el("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = el("fbNama").value.trim() || "Anonim";
  const pesan = el("fbPesan").value.trim();
  if (!pesan) return;
  const subjek = encodeURIComponent("Masukan — Buku Belajar Coding");
  const isi = encodeURIComponent(`Dari: ${nama}\n\n${pesan}`);
  window.location.href = `mailto:${DEV_EMAIL}?subject=${subjek}&body=${isi}`;
  el("feedbackForm").reset();
  closeModal();
});

/* ---------- Routing ---------- */
function route() {
  const hash = location.hash.replace(/^#/, "");
  if (!hash) { renderHome(); return; }
  const [langId, lessonId] = hash.split("/");
  if (langId && lessonId) loadLesson(langId, lessonId);
  else renderHome();
}
window.addEventListener("hashchange", route);
el("brandHome").addEventListener("click", (e) => { e.preventDefault(); location.hash = ""; renderHome(); });

/* ---------- PWA ---------- */
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

/* ---------- Mulai ---------- */
initTheme();
buildNav();
route();
