(function () {
  const modules = [
    {
      id: "fit",
      label: "Survival of the Fittest & Fit-Meaning",
      blurb: "Natural selection, fitness, and common misconceptions — polished course site with source pack kept beside it.",
      src: "Fit-Meaning/index.html"
    },
    {
      id: "speak",
      label: "Speak Well",
      blurb: "Public speaking curriculum, plan, resources, and blog.",
      src: "Speak-Well/index.html"
    },
    {
      id: "psr",
      label: "Public Speaking Resources",
      blurb: "Curated guides, 30-day plan, and resource index — original files unchanged.",
      src: "Public-Speaking-Resources/index.html"
    },
    {
      id: "money",
      label: "Money Atlas",
      blurb: "Interactive money map. Uses built dist when present.",
      src: "money-atlas/dist/index.html",
      fallback: "money-atlas/index.html"
    },
    {
      id: "gold",
      label: "Gold and Silver",
      blurb: "Metals, fiat, and monetary history learning site.",
      src: "Gold and silver/gold-silver-learn/index.html"
    },
    {
      id: "bdp",
      label: "Business Decision Principles",
      blurb: "Decision quality under uncertainty across investor and founder roles.",
      src: "Business-Decision-Principles/Business-Decision-Principles-Website/index.html"
    }
  ];

  const homePanel = document.getElementById("home-panel");
  const frame = document.getElementById("module-frame");
  const label = document.getElementById("current-label");
  const openExternal = document.getElementById("open-external");
  const sidebar = document.getElementById("sidebar");
  const cardGrid = document.getElementById("card-grid");
  const buttons = Array.from(document.querySelectorAll(".menu-item"));

  function resolveSrc(mod) {
    return mod.src;
  }

  function setActive(moduleId) {
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.module === moduleId);
    });
  }

  function showHome() {
    homePanel.hidden = false;
    frame.hidden = true;
    frame.removeAttribute("src");
    label.textContent = "Home";
    openExternal.hidden = true;
    setActive("home");
    sidebar.classList.remove("open");
  }

  async function pathExists(path) {
    try {
      const res = await fetch(path, { method: "HEAD" });
      return res.ok;
    } catch (_) {
      return false;
    }
  }

  async function showModule(mod) {
    let src = resolveSrc(mod);
    if (mod.fallback) {
      const ok = await pathExists(src);
      if (!ok) src = mod.fallback;
    }
    homePanel.hidden = true;
    frame.hidden = false;
    frame.src = src;
    label.textContent = mod.label;
    openExternal.href = src;
    openExternal.hidden = false;
    setActive(mod.id);
    sidebar.classList.remove("open");
  }

  function findModule(id) {
    return modules.find((m) => m.id === id);
  }

  cardGrid.innerHTML = modules
    .map(
      (m) => `<button type="button" class="card" data-module="${m.id}">
        <h3>${m.label}</h3>
        <p>${m.blurb}</p>
      </button>`
    )
    .join("");

  document.getElementById("nav-toggle").addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.module;
      if (id === "home") {
        showHome();
        return;
      }
      const mod = findModule(id);
      if (mod) showModule(mod);
    });
  });

  cardGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const mod = findModule(card.dataset.module);
    if (mod) showModule(mod);
  });

  showHome();
})();
