(function () {
  const collections = [
    {
      id: "speak",
      label: "Speak Well",
      short: "Speak Well",
      tag: "Communication",
      icon: "S",
      tone: "tone-speak",
      featured: false,
      blurb: "Curriculum, a 30-day plan, curated resources, and the original speaking library.",
      outcome: "Speak with presence",
      src: "Speak-Well/index.html"
    },
    {
      id: "money",
      label: "Money Atlas",
      short: "Money Atlas",
      tag: "Economics",
      icon: "M",
      tone: "tone-money",
      featured: true,
      blurb: "Start with metal and fiat, then the encyclopedia of firms, markets, the state, and a household ledger.",
      outcome: "See the money system",
      src: "money-atlas/dist/index.html",
      requireBuilt: true,
      missingTitle: "Money Atlas is unavailable",
      missingBody: "This collection could not be opened. Return home and try another one."
    },
    {
      id: "bdp",
      label: "Business Decision Principles",
      short: "Decision Principles",
      tag: "Advisory",
      icon: "B",
      tone: "tone-bdp",
      featured: false,
      blurb: "Decision quality under uncertainty for founders, angels, VCs, and boards — presented like a consulting brief.",
      outcome: "Decide with discipline",
      src: "Business-Decision-Principles/Business-Decision-Principles-Website/index.html",
      next: "marketing"
    },
    {
      id: "marketing",
      label: "Marketing Signal",
      short: "Marketing Signal",
      tag: "Marketing",
      icon: "📡",
      tone: "tone-signal",
      featured: true,
      blurb: "A free marketing curriculum — strategy, brands, pricing, channels, and communications — with original lessons and quizzes.",
      outcome: "Build marketing judgment",
      src: "Marketing-Signal/dist/index.html",
      requireBuilt: true,
      missingTitle: "Marketing Signal is unavailable",
      missingBody: "This collection could not be opened. Return home and try another one."
    },
    {
      id: "fit",
      label: "Fit Meaning",
      short: "Fit Meaning",
      tag: "Science",
      icon: "F",
      tone: "tone-fit",
      featured: false,
      blurb: "A clear, modern course on natural selection and what “fitness” actually means — without the slogan.",
      outcome: "Understand evolution cleanly",
      src: "Fit-Meaning/index.html"
    }
  ];

  const floors = [
    {
      id: "speak",
      title: "Speak",
      kicker: "Hold a room",
      blurb: "Learn the craft, then use the library.",
      ids: ["speak"]
    },
    {
      id: "money",
      title: "Money",
      kicker: "See the system",
      blurb: "Short history of metal and fiat, then the full atlas.",
      ids: ["money"]
    },
    {
      id: "decide",
      title: "Decide",
      kicker: "Judgment under uncertainty",
      blurb: "Process first. Then marketing as a decision system.",
      ids: ["bdp", "marketing"]
    },
    {
      id: "understand",
      title: "Understand",
      kicker: "A clean scientific idea",
      blurb: "One short course on what fitness actually means.",
      ids: ["fit"]
    }
  ];

  const SECTION_HASHES = new Set(["collections", "method", "for-whom"]);

  const shell = document.getElementById("shell");
  const homeView = document.getElementById("home-view");
  const moduleView = document.getElementById("module-view");
  const frame = document.getElementById("module-frame");
  const missing = document.getElementById("module-missing");
  const missingTitle = document.getElementById("missing-title");
  const missingBody = document.getElementById("missing-body");
  const moduleTitle = document.getElementById("module-title");
  const nextFloor = document.getElementById("next-floor");
  const shopGrid = document.getElementById("shop-grid");
  const footerLinks = document.getElementById("footer-links");
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const primaryNav = document.getElementById("primary-nav");
  const siteFooter = document.getElementById("site-footer");

  function findCollection(id) {
    return collections.find((c) => c.id === id);
  }

  function hrefFor(path) {
    return encodeURI(path);
  }

  function closeMenu() {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  async function pathExists(path) {
    try {
      const res = await fetch(hrefFor(path), { method: "GET", cache: "no-cache" });
      return res.ok;
    } catch (_) {
      return false;
    }
  }

  function cardHtml(c) {
    return `<button type="button" class="product-card ${c.tone} ${c.featured ? "featured" : ""}" data-go="${c.id}" aria-label="Open ${c.label}">
          <div class="product-media">
            <span class="tag">${c.tag}</span>
            <span class="icon" aria-hidden="true">${c.icon}</span>
          </div>
          <div class="product-body">
            <h3>${c.label}</h3>
            <p>${c.blurb}</p>
            <div class="product-meta">
              <span class="price-like">${c.outcome}</span>
              <span class="cta-link">Enter →</span>
            </div>
          </div>
        </button>`;
  }

  function renderCards() {
    shopGrid.innerHTML = floors
      .map((floor) => {
        const cards = floor.ids.map((id) => findCollection(id)).filter(Boolean);
        return `<section class="floor" aria-labelledby="floor-${floor.id}">
          <div class="floor-head">
            <p class="eyebrow">${floor.kicker}</p>
            <h3 id="floor-${floor.id}">${floor.title}</h3>
            <p>${floor.blurb}</p>
          </div>
          <div class="shop-grid">${cards.map(cardHtml).join("")}</div>
        </section>`;
      })
      .join("");

    footerLinks.innerHTML = floors
      .map((floor) => {
        const items = floor.ids
          .map((id) => findCollection(id))
          .filter(Boolean)
          .map((c) => `<li><button type="button" data-go="${c.id}">${c.short}</button></li>`)
          .join("");
        return `<li class="footer-floor"><span>${floor.title}</span><ul>${items}</ul></li>`;
      })
      .join("");
  }

  function setNextFloor(mod) {
    if (!nextFloor) return;
    const nxt = mod && mod.next ? findCollection(mod.next) : null;
    if (!nxt) {
      nextFloor.hidden = true;
      nextFloor.removeAttribute("data-go");
      return;
    }
    nextFloor.hidden = false;
    nextFloor.setAttribute("data-go", nxt.id);
    nextFloor.textContent = "Next: " + nxt.short + " →";
  }

  function showHome() {
    homeView.hidden = false;
    moduleView.hidden = true;
    moduleView.classList.remove("is-open");
    frame.classList.add("is-hidden");
    frame.src = "about:blank";
    frame.title = "Collection content";
    missing.hidden = true;
    missing.classList.remove("is-open");
    shell.classList.add("shell--home");
    shell.classList.remove("shell--module");
    siteFooter.hidden = false;
    moduleTitle.textContent = "Collection";
    setNextFloor(null);
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openModuleStage(mod) {
    homeView.hidden = true;
    moduleView.hidden = false;
    moduleView.classList.add("is-open");
    moduleTitle.textContent = mod.label;
    setNextFloor(mod);
    shell.classList.add("shell--module");
    shell.classList.remove("shell--home");
    siteFooter.hidden = true;
    closeMenu();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function showMissing(mod) {
    openModuleStage(mod);
    frame.classList.add("is-hidden");
    frame.src = "about:blank";
    missing.hidden = false;
    missing.classList.add("is-open");
    missingTitle.textContent = mod.missingTitle || "This collection could not be opened";
    missingBody.textContent = mod.missingBody || "This collection could not be opened. Return home and try another one.";
  }

  async function showModule(id) {
    const mod = findCollection(id);
    if (!mod) return;

    if (mod.requireBuilt) {
      const ok = await pathExists(mod.src);
      if (!ok) {
        showMissing(mod);
        return;
      }
    }

    openModuleStage(mod);
    missing.hidden = true;
    missing.classList.remove("is-open");
    frame.classList.remove("is-hidden");
    frame.title = mod.label;
    frame.src = "about:blank";
    requestAnimationFrame(function () {
      frame.src = hrefFor(mod.src);
    });
  }

  function clearCollectionHash() {
    const hash = (location.hash || "").replace(/^#/, "");
    if (!hash || SECTION_HASHES.has(hash)) return;
    history.pushState("", document.title, location.pathname + location.search);
  }

  function handleGo(id) {
    if (!id || id === "home") {
      clearCollectionHash();
      showHome();
      return;
    }
    if (location.hash !== "#" + id) {
      location.hash = id;
    } else {
      showModule(id);
    }
  }

  function collectionFromHash() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw || SECTION_HASHES.has(raw)) return null;
    const id = raw.split("/")[0];
    return findCollection(id) ? id : null;
  }

  function applyHash() {
    const id = collectionFromHash();
    if (id) {
      showModule(id);
      return;
    }
    const section = (location.hash || "").replace(/^#/, "");
    showHome();
    if (SECTION_HASHES.has(section)) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView();
    }
  }

  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-go]");
    if (!target) return;
    e.preventDefault();
    handleGo(target.getAttribute("data-go"));
  });

  primaryNav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  menuToggle.addEventListener("click", () => {
    const open = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (primaryNav.classList.contains("open")) {
      closeMenu();
      menuToggle.focus();
      return;
    }
    if (shell.classList.contains("shell--module")) {
      handleGo("home");
    }
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  window.addEventListener("hashchange", applyHash);

  renderCards();
  applyHash();
})();
