/* ============================================================
   GRIMOIRE DE CLOVER — Script principal
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initParticles();
  initReveal();
  initCounters();

  if (document.getElementById("news-grid")) initNews();
  if (document.getElementById("char-grid")) initCharacters();
  if (document.getElementById("realms-container")) initRealms();
});

/* ---------------- Navbar ---------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  });

  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
}

/* ---------------- Particules magiques ---------------- */
function initParticles() {
  const canvas = document.getElementById("magic-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const COLORS = ["#3fae6a", "#d4af37", "#5aa7e8", "#c86bd9", "#ff7a3c"];

  function spawn() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      r: Math.random() * 2.4 + 0.6,
      speed: Math.random() * 0.9 + 0.25,
      drift: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.55 + 0.15,
      color: COLORS[(Math.random() * COLORS.length) | 0],
      pulse: Math.random() * Math.PI * 2
    };
  }

  for (let i = 0; i < 70; i++) {
    const p = spawn();
    p.y = Math.random() * canvas.height;
    particles.push(p);
  }

  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.y -= p.speed;
      p.x += p.drift + Math.sin(p.pulse) * 0.3;
      p.pulse += 0.02;
      if (p.y < -20) particles[i] = spawn();

      ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse * 2));
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  })();
}

/* ---------------- Reveal au scroll ---------------- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ---------------- Compteurs animés ---------------- */
function initCounters() {
  const stats = document.querySelectorAll("[data-count]");
  if (!stats.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        let current = 0;
        const step = Math.max(1, Math.round(target / 30));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current;
        }, 40);
        observer.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  stats.forEach((s) => observer.observe(s));
}

/* ---------------- Actualités ---------------- */
function initNews() {
  const grid = document.getElementById("news-grid");
  const chips = document.querySelectorAll(".news-filters .chip");

  function render(filter) {
    const items = filter === "all" ? NEWS : NEWS.filter((n) => n.tag === filter);
    grid.innerHTML = items
      .map(
        (n, i) => `
        <article class="news-card reveal visible" style="transition-delay:${i * 60}ms">
          <div class="news-emoji">${n.emoji}</div>
          <span class="news-tag tag-${n.tag}">${n.tag}</span>
          <span class="news-date">${n.date}</span>
          <h3>${n.title}</h3>
          <p>${n.excerpt}</p>
        </article>`
      )
      .join("");
  }

  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      render(chip.dataset.filter);
    })
  );

  render("all");
}

/* ---------------- Personnages ---------------- */
function initCharacters() {
  const grid = document.getElementById("char-grid");
  const search = document.getElementById("char-search");
  const count = document.getElementById("result-count");
  const empty = document.getElementById("empty-state");
  const chips = document.querySelectorAll("#squad-filter .chip");
  let activeSquad = "all";

  function matches(c) {
    const okSquad = activeSquad === "all" || c.squad === activeSquad;
    const q = (search.value || "").trim().toLowerCase();
    const okSearch =
      !q ||
      [c.name, c.epithet, c.magic, c.squad, c.grimoire, c.country]
        .join(" ")
        .toLowerCase()
        .includes(q);
    return okSquad && okSearch;
  }

  function render() {
    const list = CHARACTERS.filter(matches);
    grid.innerHTML = list
      .map(
        (c, i) => `
        <article class="char-card reveal visible" style="transition-delay:${i * 50}ms" data-id="${c.id}" tabindex="0" role="button" aria-label="Fiche de ${c.name}">
          <div class="char-aura" style="--aura:${c.color}"></div>
          <div class="char-emoji" style="--aura:${c.color}">${c.emoji}</div>
          <h3>${c.name}</h3>
          <p class="char-epithet">${c.epithet}</p>
          <div class="char-meta">
            <span class="badge badge-squad">${c.squad}</span>
            <span class="badge badge-magic">${c.magic}</span>
          </div>
          <p class="char-cta">Ouvrir le grimoire →</p>
        </article>`
      )
      .join("");
    empty.hidden = list.length > 0;
    count.textContent = `${list.length} mage${list.length > 1 ? "s" : ""} trouvé${list.length > 1 ? "s" : ""}`;

    grid.querySelectorAll(".char-card").forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });
  }

  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeSquad = chip.dataset.squad;
      render();
    })
  );

  search.addEventListener("input", render);
  render();
}

/* ---------------- Modale fiche personnage ---------------- */
function openModal(id) {
  const c = CHARACTERS.find((x) => x.id === id);
  if (!c) return;
  const overlay = document.getElementById("char-modal");
  const body = document.getElementById("modal-body");

  body.innerHTML = `
    <div class="modal-hero" style="--aura:${c.color}">
      <div class="modal-emoji">${c.emoji}</div>
      <div>
        <h2>${c.name}</h2>
        <p class="modal-epithet">« ${c.epithet} »</p>
        <div class="char-meta">
          <span class="badge badge-squad">${c.squad}</span>
          <span class="badge badge-magic">${c.magic}</span>
          <span class="badge badge-rank">${c.rank}</span>
        </div>
      </div>
    </div>

    <div class="modal-grid">
      <div class="modal-info">
        <h4>📜 Identité</h4>
        <ul>
          <li><strong>Grimoire :</strong> ${c.grimoire}</li>
          <li><strong>Origine :</strong> ${c.origin}</li>
          <li><strong>Nation :</strong> ${c.country}</li>
          <li><strong>Anniversaire :</strong> ${c.birthday}</li>
          <li><strong>Âge :</strong> ${c.age}</li>
          <li><strong>Taille :</strong> ${c.height}</li>
        </ul>
      </div>
      <div class="modal-info">
        <h4>✨ Techniques emblématiques</h4>
        <ul class="tech-list">
          ${c.techniques.map((t) => `<li><strong>${t.name}</strong><span>${t.desc}</span></li>`).join("")}
        </ul>
      </div>
    </div>

    <div class="modal-bio">
      <h4>📖 Biographie</h4>
      <p>${c.bio}</p>
    </div>

    <div class="modal-facts">
      <h4>🍀 Le saviez-vous ?</h4>
      <ul>${c.facts.map((f) => `<li>${f}</li>`).join("")}</ul>
    </div>
  `;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  document.getElementById("modal-close").onclick = closeModal;
  overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
  };
  document.onkeydown = (e) => {
    if (e.key === "Escape") closeModal();
  };
}

function closeModal() {
  const overlay = document.getElementById("char-modal");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ---------------- Royaumes ---------------- */
function initRealms() {
  const nav = document.getElementById("realm-nav");
  const container = document.getElementById("realms-container");

  nav.innerHTML = REALMS.map(
    (r) => `<a href="#realm-${r.id}" class="realm-chip" style="--aura:${r.color}">${r.emoji} ${r.name}</a>`
  ).join("");

  container.innerHTML = REALMS.map(
    (r) => `
    <section class="realm" id="realm-${r.id}" style="--aura:${r.color}">
      <header class="realm-header reveal">
        <span class="realm-emoji">${r.emoji}</span>
        <div>
          <h2>${r.name}</h2>
          <p class="realm-tagline">${r.tagline}</p>
        </div>
      </header>

      <p class="realm-desc reveal">${r.description}</p>

      <div class="realm-stats reveal">
        ${r.stats.map((s) => `<div class="realm-stat"><span>${s.value}</span><small>${s.label}</small></div>`).join("")}
      </div>

      <div class="realm-columns">
        <div class="realm-col reveal">
          <h3>🗺️ Régions &amp; caractéristiques</h3>
          ${r.regions
            .map(
              (reg) => `
            <div class="region-block">
              <h4>${reg.name}</h4>
              <p>${reg.desc}</p>
              <ul>${reg.points.map((p) => `<li>${p}</li>`).join("")}</ul>
            </div>`
            )
            .join("")}
        </div>

        <div class="realm-col reveal">
          <h3>🏘️ Villes &amp; villages</h3>
          <ul class="village-list">
            ${r.villages.map((v) => `<li><strong>${v.name}</strong><span>${v.detail}</span></li>`).join("")}
          </ul>

          <h3>⚔️ Factions &amp; compagnies</h3>
          <ul class="village-list">
            ${r.squads.map((s) => `<li><strong>${s.name}</strong><span>${s.detail}</span></li>`).join("")}
          </ul>
        </div>
      </div>
    </section>`
  ).join("");

  document.querySelectorAll(".realm-chip").forEach((chip) =>
    chip.addEventListener("click", () => {
      document.querySelectorAll(".realm-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
    })
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll("#realms-container .reveal").forEach((el) => observer.observe(el));
}
