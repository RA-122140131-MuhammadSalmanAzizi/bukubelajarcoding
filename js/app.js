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

/* Badge bahasa: pakai logo asli jika ada, kalau tidak pakai monogram */
function badgeHTML(lang) {
  return lang.logo
    ? `<img class="lang-logo" src="${lang.logo}" alt="${lang.nama}" />`
    : `<span class="lang-badge" style="--c:${lang.color}">${lang.mark}</span>`;
}

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
el("menuBtn").addEventListener("click", () => {
  if (el("sidebar").classList.contains("open")) closeSidebar();
  else openSidebar();
});
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
      badgeHTML(lang) +
      `<span>${lang.nama}</span><span class="chev">${ICONS.chevron}</span>`;

    const list = document.createElement("div");
    list.className = "nav-lessons";
    list.dataset.lang = lang.id;

    lang.pelajaran.forEach((p) => {
      const row = document.createElement("div");
      row.className = "nav-lesson-row";

      const a = document.createElement("button");
      a.className = "nav-lesson";
      a.textContent = p.judul;
      a.dataset.lang = lang.id;
      a.dataset.lesson = p.id;
      a.addEventListener("click", () => { location.hash = `${lang.id}/${p.id}`; });

      const tog = document.createElement("button");
      tog.className = "nav-lesson-toggle";
      tog.setAttribute("aria-label", "Lihat daftar halaman");
      tog.innerHTML = ICONS.chevron;

      const pagesCont = document.createElement("div");
      pagesCont.className = "nav-pages";
      pagesCont.dataset.lang = lang.id;
      pagesCont.dataset.lesson = p.id;

      tog.addEventListener("click", async (e) => {
        e.stopPropagation();
        const open = pagesCont.classList.toggle("open");
        tog.classList.toggle("open", open);
        if (open) { await getPages(lang.id, p.id); fillPages(pagesCont, lang.id, p.id); }
      });

      row.appendChild(a);
      row.appendChild(tog);
      list.appendChild(row);
      list.appendChild(pagesCont);
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
      `${badgeHTML(l)}${l.nama}</button>`
  ).join("");

  const totalPelajaran = BOOK.reduce((s, l) => s + l.pelajaran.length, 0);

  const heroArt =
    `<svg viewBox="0 0 460 400" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustrasi belajar coding">` +
    `<rect x="34" y="52" width="392" height="290" rx="46" fill="var(--accent-soft)"/>` +
    // chip kode melayang
    `<g transform="translate(322 66)"><rect width="74" height="56" rx="15" fill="var(--surface)" stroke="var(--border)" stroke-width="2"/>` +
    `<path d="M28 21 L19 28 L28 35 M46 21 L55 28 L46 35 M39 17 L35 39" stroke="var(--accent)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></g>` +
    // titik-titik dekor
    `<circle cx="80" cy="104" r="6" fill="var(--accent)" opacity="0.45"/>` +
    `<circle cx="372" cy="292" r="9" fill="var(--accent)" opacity="0.3"/>` +
    `<circle cx="66" cy="300" r="5" fill="var(--accent)" opacity="0.35"/>` +
    // cangkir kopi
    `<g transform="translate(300 250)"><rect x="0" y="14" width="54" height="48" rx="11" fill="var(--surface)" stroke="var(--accent)" stroke-width="3.2"/>` +
    `<path d="M54 24 h9 a11 11 0 0 1 0 22 h-9" fill="none" stroke="var(--accent)" stroke-width="3.2"/>` +
    `<path d="M16 4 c0 -7 8 -7 8 -14 M32 4 c0 -7 8 -7 8 -14" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" opacity="0.45"/></g>` +
    // buku terbuka
    `<g transform="translate(96 150)">` +
    `<path d="M8 104 L120 76 L232 104 L232 126 L120 98 L8 126 Z" fill="var(--accent)"/>` +
    `<path d="M120 78 L226 104 L226 44 C190 32 150 36 120 50 Z" fill="var(--surface)" stroke="var(--border)" stroke-width="2"/>` +
    `<path d="M120 78 L14 104 L14 44 C50 32 90 36 120 50 Z" fill="var(--surface)" stroke="var(--border)" stroke-width="2"/>` +
    `<g stroke="var(--accent)" stroke-width="3.2" stroke-linecap="round" opacity="0.4">` +
    `<line x1="30" y1="60" x2="104" y2="52"/><line x1="30" y1="74" x2="104" y2="66"/><line x1="30" y1="88" x2="86" y2="82"/>` +
    `<line x1="136" y1="52" x2="210" y2="60"/><line x1="136" y1="66" x2="210" y2="74"/><line x1="136" y1="82" x2="192" y2="88"/></g>` +
    `<path d="M158 34 L176 38 L176 88 L167 79 L158 88 Z" fill="var(--accent)"/></g>` +
    `</svg>`;

  article.innerHTML =
    `<section class="landing-hero">` +
    `<div class="hero-text">` +
    `<h1>Buku Belajar Coding</h1>` +
    `<p class="tagline">Kuasai Python, JavaScript, C++, dan lainnya lewat materi ringkas berbahasa Indonesia. <span class="free">Akses gratis</span>, bisa dibuka offline, kapan saja.</p>` +
    `<div class="landing-cta"><button class="btn-primary lg" id="startBtn">Mulai Belajar</button>` +
    `<button class="btn-ghost lg" id="browseBtn">Lihat Materi</button></div>` +
    `<div class="hero-stats">` +
    `<div class="hero-stat"><div class="num">${BOOK.length}</div><div class="lbl">Bahasa</div></div>` +
    `<div class="hero-stat"><div class="num">${totalPelajaran}</div><div class="lbl">Pelajaran</div></div>` +
    `<div class="hero-stat"><div class="num">24/7</div><div class="lbl">Akses Kapan Saja</div></div></div>` +
    `</div>` +
    `<div class="hero-art"><img id="heroImg" src="aset/hero.png" alt="Ilustrasi belajar coding" /></div>` +
    `</section>` +
    `<div class="section-label">Kenapa Buku Ini</div>` +
    `<div class="feature-row">${fitur}</div>` +
    `<div class="section-label">Pilih Bahasa &amp; Roadmap</div>` +
    `<div class="roadmap-wrap"><div class="lang-tabs">${tabs}</div><div id="roadmapArea"></div></div>` +
    `<div class="closing-cta"><h2>Siap mulai perjalananmu?</h2>` +
    `<p>Pilih bahasa favoritmu dan mulai dari pelajaran pertama. Tanpa biaya, tanpa perlu daftar.</p>` +
    `<button class="btn-primary lg" id="startBtn2">Mulai Belajar Sekarang</button></div>`;

  // Jika gambar hero gagal dimuat, tampilkan ilustrasi SVG bawaan sebagai cadangan
  const heroImg = document.getElementById("heroImg");
  if (heroImg) heroImg.addEventListener("error", () => {
    const art = article.querySelector(".hero-art");
    if (art) art.innerHTML = heroArt;
  });

  article.querySelectorAll(".lang-tab").forEach((t) =>
    t.addEventListener("click", () => renderRoadmap(t.dataset.lang))
  );
  const goStart = () => { location.hash = "python/01-pengenalan"; };
  el("startBtn").addEventListener("click", goStart);
  el("startBtn2").addEventListener("click", goStart);
  el("browseBtn").addEventListener("click", () => {
    article.querySelector(".roadmap-wrap").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  renderRoadmap("python");
  el("prevBtn").hidden = true;
  el("nextBtn").hidden = true;
  if (el("pageInd")) el("pageInd").hidden = true;
  setActive(null);
  window.scrollTo(0, 0);
}

/* ---------- Muat pelajaran (dengan paging per-bab) ---------- */
const pageCache = {};

// Pisah materi jadi halaman berdasar penanda <!--page-->
function splitPages(md) {
  return md.split(/^\s*<!--\s*page\s*-->\s*$/m).map((s) => s.trim()).filter(Boolean);
}

// Ambil (dan cache) daftar halaman sebuah bab
async function getPages(langId, lessonId) {
  const key = `${langId}/${lessonId}`;
  if (pageCache[key]) return pageCache[key];
  try {
    const res = await fetch(`content/${langId}/${lessonId}.md`);
    if (!res.ok) throw new Error(res.status);
    pageCache[key] = splitPages(await res.text());
  } catch (e) {
    pageCache[key] = [];
  }
  return pageCache[key];
}

async function loadLesson(langId, lessonId, page) {
  const lang = BOOK.find((l) => l.id === langId);
  const lesson = lang && lang.pelajaran.find((p) => p.id === lessonId);
  if (!lesson) { renderHome(); return; }

  document.body.dataset.view = "app";
  if (!pageCache[`${langId}/${lessonId}`]) {
    article.innerHTML = `<p style="color:var(--text-muted)">Memuat…</p>`;
  }
  const pages = await getPages(langId, lessonId);
  const total = pages.length || 1;
  const cur = Math.min(Math.max(parseInt(page) || 1, 1), total);

  if (pages.length) {
    const meta = total > 1 ? `${lang.nama} &middot; Halaman ${cur} dari ${total}` : lang.nama;
    const judul = lesson.judul.replace(/^\d+\.\s*/, "");
    const pageMd = pages[cur - 1].replace(/^#\s+.*\n?/, ""); // buang H1 (diganti judul tetap di atas)
    article.innerHTML =
      `<div class="lesson-head">` +
        `<div class="lesson-head-top">` +
          `<div class="lesson-meta">${meta}</div>` +
          `<div class="page-nav-top">` +
            `<a class="page-link" id="prevBtnTop">Sebelumnya</a>` +
            `<a class="page-link" id="nextBtnTop">Selanjutnya</a>` +
          `</div>` +
        `</div>` +
        `<h1 class="lesson-title">${judul}</h1>` +
      `</div>` +
      `<div class="lesson-body">${MD.render(pageMd)}</div>`;
  } else {
    article.innerHTML = `<h1>Materi belum tersedia</h1><p>Pelajaran ini sedang disiapkan. Silakan pilih pelajaran lain dari menu.</p>`;
  }
  document.title = `${lesson.judul} — Buku Belajar Coding`;

  setActive(`${langId}/${lessonId}`);
  buildPager(langId, lessonId, cur, total);

  // Buka grup bahasa + daftar halaman bab aktif di sidebar
  const listAktif = nav.querySelector(`.nav-lessons[data-lang="${langId}"]`);
  if (listAktif) {
    listAktif.classList.add("open");
    listAktif.previousElementSibling.classList.add("open");
  }
  const cont = nav.querySelector(`.nav-pages[data-lang="${langId}"][data-lesson="${lessonId}"]`);
  if (cont) {
    cont.classList.add("open");
    const tog = cont.previousElementSibling.querySelector(".nav-lesson-toggle");
    if (tog) tog.classList.add("open");
    fillPages(cont, langId, lessonId);
  }
  markActivePage();

  closeSidebar();
  window.scrollTo(0, 0);
}

// Ambil judul subbab pertama (H2) sebuah halaman untuk label di sidebar
function pageTitle(md, i) {
  const h2 = md.match(/^##\s+(.+?)\s*$/m);
  if (h2) return h2[1].trim();
  const h1 = md.match(/^#\s+(.+?)\s*$/m);
  if (h1) return h1[1].trim();
  return `Halaman ${i}`;
}

// Isi daftar halaman sebuah bab di sidebar (dari cache)
function fillPages(cont, langId, lessonId) {
  markActivePage();
  if (cont.dataset.filled) return;
  const pages = pageCache[`${langId}/${lessonId}`] || [];
  const n = pages.length || 1;
  cont.innerHTML = "";
  for (let i = 1; i <= n; i++) {
    const label = pages.length ? pageTitle(pages[i - 1], i) : `Halaman ${i}`;
    const b = document.createElement("button");
    b.className = "nav-page";
    b.textContent = label;
    b.title = label; // tooltip lengkap saat hover
    b.dataset.hash = i === 1 ? `${langId}/${lessonId}` : `${langId}/${lessonId}/${i}`;
    b.addEventListener("click", () => { location.hash = b.dataset.hash; });
    cont.appendChild(b);
  }
  cont.dataset.filled = "1";
  markActivePage();
}

// Tandai halaman aktif di sidebar
function markActivePage() {
  const [a, b, p] = location.hash.replace(/^#/, "").split("/");
  const norm = a && b ? (p && p !== "1" ? `${a}/${b}/${p}` : `${a}/${b}`) : "";
  document.querySelectorAll(".nav-page").forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.hash === norm));
}

function setActive(key) {
  nav.querySelectorAll(".nav-lesson").forEach((a) => {
    a.classList.toggle("active", `${a.dataset.lang}/${a.dataset.lesson}` === key);
  });
}

function buildPager(langId, lessonId, cur, total) {
  const idx = FLAT.findIndex((f) => f.langId === langId && f.lessonId === lessonId);

  // Sebelumnya: halaman sebelumnya di bab ini, atau bab sebelumnya
  let prevHash = null;
  if (cur > 1) prevHash = `${langId}/${lessonId}/${cur - 1}`;
  else if (FLAT[idx - 1]) prevHash = `${FLAT[idx - 1].langId}/${FLAT[idx - 1].lessonId}`;
  // Selanjutnya: halaman berikutnya di bab ini, atau bab berikutnya
  let nextHash = null;
  if (cur < total) nextHash = `${langId}/${lessonId}/${cur + 1}`;
  else if (FLAT[idx + 1]) nextHash = `${FLAT[idx + 1].langId}/${FLAT[idx + 1].lessonId}`;

  // Terapkan ke pager atas ("Top") dan bawah ("")
  const apply = (sfx) => {
    const P = el("prevBtn" + sfx), N = el("nextBtn" + sfx), I = el("pageInd" + sfx);
    if (P) { P.hidden = !prevHash; if (prevHash) P.onclick = () => { location.hash = prevHash; }; }
    if (N) { N.hidden = !nextHash; if (nextHash) N.onclick = () => { location.hash = nextHash; }; }
    if (I) { I.textContent = total > 1 ? `${cur} / ${total}` : ""; I.hidden = total <= 1; }
  };
  apply("");
  apply("Top");
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
      const show = cocok || !q;
      const row = a.closest(".nav-lesson-row");
      if (row) row.style.display = show ? "" : "none";
      const pg = row && row.nextElementSibling;
      if (pg && pg.classList.contains("nav-pages")) pg.style.display = show ? "" : "none";
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
  const [langId, lessonId, pageStr] = hash.split("/");
  if (langId && lessonId) loadLesson(langId, lessonId, pageStr);
  else renderHome();
}
window.addEventListener("hashchange", route);
el("brandHome").addEventListener("click", (e) => { e.preventDefault(); location.hash = ""; renderHome(); });

/* ---------- PWA ---------- */
const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  if (isStandalone()) return;          // sudah dibuka sebagai PWA
  deferredPrompt = e;
  el("installBtn").hidden = false;
});
window.addEventListener("appinstalled", () => {   // sembunyikan setelah dipasang
  deferredPrompt = null;
  el("installBtn").hidden = true;
});

// iOS Safari tak punya prompt otomatis: tampilkan tombol untuk instruksi manual
function initInstall() {
  if (!isStandalone() && isIOS()) el("installBtn").hidden = false;
}

el("installBtn").addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    el("installBtn").hidden = true;
    return;
  }
  if (isIOS()) {
    alert(
      "Cara memasang di iPhone/iPad:\n\n" +
      "1. Tekan tombol Bagikan (kotak dengan panah ke atas) di bawah Safari.\n" +
      "2. Gulir dan pilih \"Tambahkan ke Layar Utama\".\n" +
      "3. Tekan \"Tambah\"."
    );
    return;
  }
  // Desktop/Android tanpa prompt = sudah terpasang atau belum memenuhi syarat
  alert(
    "Aplikasi kemungkinan sudah terpasang. Cek ikon aplikasinya di menu/desktop.\n\n" +
    "Di Chrome desktop, opsi install ada di ikon di ujung kanan bilah alamat (gambar monitor dengan panah ke bawah)."
  );
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
initInstall();
