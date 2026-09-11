(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Sticky nav shadow + mobile menu
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav && menu) {
    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // IntersectionObserver reveals
  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // Animated counters for research stats
  const counters = document.querySelectorAll(".count");
  const animateCount = (el) => {
    const target = Number(el.getAttribute("data-target") || "0");
    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach(animateCount);
  }

  // Loop step highlight on scroll / hover pulse via rAF when in view
  const steps = Array.from(document.querySelectorAll(".loop__step"));
  if (steps.length && !reduceMotion && "IntersectionObserver" in window) {
    let activeIndex = 0;
    let timer = null;

    const setActive = (i) => {
      steps.forEach((s, idx) => s.classList.toggle("is-active", idx === i));
      activeIndex = i;
    };

    const loopIO = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible && !timer) {
          setActive(0);
          timer = window.setInterval(() => {
            setActive((activeIndex + 1) % steps.length);
          }, 1800);
        } else if (!visible && timer) {
          window.clearInterval(timer);
          timer = null;
          steps.forEach((s) => s.classList.remove("is-active"));
        }
      },
      { threshold: 0.25 }
    );
    const loopRoot = document.getElementById("decision-loop");
    if (loopRoot) loopIO.observe(loopRoot);

    steps.forEach((step, i) => {
      step.addEventListener("mouseenter", () => {
        if (timer) {
          window.clearInterval(timer);
          timer = null;
        }
        setActive(i);
      });
    });
  }

  // Audience tabs
  const tabButtons = document.querySelectorAll(".tabs__btn");
  const panels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-tab");
      tabButtons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach((panel) => {
        const match = panel.id === `panel-${id}`;
        panel.classList.toggle("is-active", match);
        if (match) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      });
    });

    btn.addEventListener("keydown", (e) => {
      const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
      if (!keys.includes(e.key)) return;
      e.preventDefault();
      const list = Array.from(tabButtons);
      const i = list.indexOf(btn);
      let next = i;
      if (e.key === "ArrowRight") next = (i + 1) % list.length;
      if (e.key === "ArrowLeft") next = (i - 1 + list.length) % list.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = list.length - 1;
      list[next].focus();
      list[next].click();
    });
  });

  // Subtle parallax on hero orbs via rAF
  if (!reduceMotion) {
    const orbs = document.querySelectorAll(".orb");
    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const render = () => {
      cx += (mx - cx) * 0.06;
      cy += (my - cy) * 0.06;
      orbs.forEach((orb, i) => {
        const depth = (i + 1) * 8;
        orb.style.translate = `${cx * depth * 0.02}px ${cy * depth * 0.02}px`;
      });
      raf = requestAnimationFrame(render);
    };

    window.addEventListener(
      "pointermove",
      (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      },
      { passive: true }
    );
    raf = requestAnimationFrame(render);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(render);
    });
  }
})();
