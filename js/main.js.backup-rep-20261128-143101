/* =========================================================
   main.js - wspolna logika wszystkich podstron.
   ========================================================= */
(function () {
  "use strict";
  const D = window.ATOMOWKI_DATA || {};
  const BASE = document.body.dataset.base || "";

  const PAGES = [
    { href:"index.html", label:"Strona glowna", key:"home" },
    { href:"pages/o-klubie.html", label:"O klubie", key:"o-klubie" },
    { href:"pages/historia.html", label:"Historia", key:"historia" },
    { href:"pages/druzyna.html", label:"Druzyna", key:"druzyna" },
    { href:"pages/reprezentacja.html", label:"Reprezentacja", key:"reprezentacja" },
    { href:"pages/akademia.html", label:"Akademia", key:"akademia" },
    { href:"pages/rozgrywki.html", label:"Rozgrywki", key:"rozgrywki" },
    { href:"pages/sukcesy.html", label:"Sukcesy", key:"sukcesy" },
    { href:"pages/aktualnosci.html", label:"Aktualnosci", key:"aktualnosci" },
    { href:"pages/galeria.html", label:"Galeria", key:"galeria" },
    { href:"pages/kontakt.html", label:"Kontakt", key:"kontakt" }
  ];

  function linkHref(href) {
    if (BASE === "../") {
      return href.indexOf("index.html") === 0 ? "../index.html" : "../" + href;
    }
    return href;
  }

      function injectHeader() {
    const mount = document.getElementById("header-mount");
    if (!mount) return;
    const active = document.body.dataset.page;
    const items = PAGES.map(function(p){
      let icon = p.key === 'home' ? '<svg class="home-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="margin-right:6px; vertical-align:middle;"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>' : '';
      return '<li><a href="' + linkHref(p.href) + '"' + (p.key === active ? ' class="active"' : '') + '>' + icon + p.label + '</a></li>';
    }).join("");
    mount.outerHTML =
      '<header class="site-header" id="siteHeader">' +
        '<div class="container-fluid header-inner">' +
          '<a href="' + linkHref("index.html") + '" class="brand" aria-label="Atomowki Lodz - strona glowna">' +
            '<span class="brand-mark" aria-hidden="true">' +
              '<svg viewBox="0 0 64 64" width="44" height="44"><circle cx="32" cy="32" r="30" fill="#e10600"/><path d="M32 10 L38 28 L56 28 L42 40 L48 58 L32 46 L16 58 L22 40 L8 28 L26 28 Z" fill="#0b0b0d"/></svg>' +
            '</span>' +
            '<span class="brand-text"><span class="venol">VENOL</span><strong>ATOMÓWKI</strong><span class="lodz">ŁÓDŹ</span></span>' +
          '</a>' +
          '<button class="nav-toggle" id="navToggle" aria-label="Otworz menu" aria-expanded="false" aria-controls="primaryNav"><span></span><span></span><span></span></button>' +
          '<nav class="primary-nav" id="primaryNav" aria-label="Menu glowne"><ul>' + items + '</ul>' +
            '<div class="nav-actions">' +
              '<a href="' + linkHref("pages/kontakt.html") + '#dolacz" class="btn-nav-cta">DOŁĄCZ <span class="arrow">&raquo;</span></a>' +
              
            '</div>' +
          '</nav>' +
        '</div>' +
      '</header>';
  }

  function injectFooter() {
    const mount = document.getElementById("footer-mount");
    if (!mount) return;
    mount.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container footer-grid">' +
          '<div class="footer-brand">' +
            '<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 64" width="36" height="36"><circle cx="32" cy="32" r="30" fill="#e10600"/><path d="M32 10 L38 28 L56 28 L42 40 L48 58 L32 46 L16 58 L22 40 L8 28 L26 28 Z" fill="#0b0b0d"/></svg></span>' +
            '<p><strong>VENOL ATOMOWKI LODZ</strong><br />Kobieca druzyna rugby. Sila. Pasja. Druzyna.</p>' +
          '</div>' +
          '<div><h4>Menu</h4><ul class="footer-links">' +
            '<li><a href="' + linkHref("pages/o-klubie.html") + '">O klubie</a></li>' +
            '<li><a href="' + linkHref("pages/druzyna.html") + '">Druzyna</a></li>' +
            '<li><a href="' + linkHref("pages/akademia.html") + '">Akademia</a></li>' +
            '<li><a href="' + linkHref("pages/rozgrywki.html") + '">Rozgrywki</a></li>' +
            '<li><a href="' + linkHref("pages/sukcesy.html") + '">Sukcesy</a></li>' +
          '</ul></div>' +
          '<div><h4>Kontakt</h4><ul class="footer-links">' +
            '<li><a href="' + linkHref("pages/kontakt.html") + '">Formularz kontaktowy</a></li>' +
            '<li><a href="mailto:kontakt@atomowki-lodz.pl">kontakt@atomowki-lodz.pl</a></li>' +
            '<li><a href="#">Facebook</a></li>' +
            '<li><a href="#">Strona BBRC Lodz</a></li>' +
          '</ul></div>' +
          '<div><h4>Informacje</h4><ul class="footer-links">' +
            '<li><a href="' + linkHref("pages/kontakt.html") + '#polityka">Polityka prywatnosci</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="container footer-bottom">' +
          '<p>\u00A9 <span id="year"></span> Venol Atomowki Lodz. Wszelkie prawa zastrzezone.</p>' +
          '<p>Dane kontaktowe wymagaja potwierdzenia przed publikacja.</p>' +
        '</div>' +
      '</footer>';
  }

  injectHeader();
  injectFooter();

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function(){
      const open = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    primaryNav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = function(){ header.classList.toggle("scrolled", window.scrollY > 30); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("visible"); });
  }

  const btt = document.getElementById("backToTop");
  if (btt) {
    window.addEventListener("scroll", function(){ btt.classList.toggle("show", window.scrollY > 500); }, { passive: true });
    btt.addEventListener("click", function(){ window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  function bindModal(modal) {
    if (!modal) return null;
    const close = function(){ modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };
    modal.querySelectorAll("[data-close-modal]").forEach(function(el){ el.addEventListener("click", close); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") close(); });
    return { open: function(){ modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }, close: close };
  }

    function newsCard(n) {
    var imgSrc = n.image ? n.image : '';
    return '<article class="news-card reveal">' +
      '<div class="news-thumb"><img src="' + BASE + imgSrc + '" alt="' + n.title + '" loading="lazy"></div>' +
      '<div class="news-body">' +
        '<div class="news-meta"><span class="news-cat">' + n.category + '</span><time>' + n.date + '</time></div>' +
        '<h3>' + n.title + '</h3>' +
        '<p>' + n.excerpt + '</p>' +
        '<button class="btn btn-ghost" data-news-id="' + n.id + '">Czytaj wiecej \u2192</button>' +
      '</div>' +
    '</article>';
  }

  function initNewsGrid() {
    const grid = document.getElementById("newsGrid") || document.getElementById("homeNewsGrid");
    if (!grid) return;
    let currentCat = "all";
    const render = function(){
      const list = (D.news || []).filter(function(n){ return currentCat === "all" || n.category === currentCat; });
      grid.innerHTML = list.length ? list.map(newsCard).join("") : '<p class="empty-note">Brak wpisow w tej kategorii.</p>';
      grid.querySelectorAll(".reveal").forEach(function(el){ requestAnimationFrame(function(){ el.classList.add("visible"); }); });
    };
    render();

    const filters = document.getElementById("newsFilters");
    if (filters) {
      filters.addEventListener("click", function(e){
        const btn = e.target.closest(".filter");
        if (!btn) return;
        filters.querySelectorAll(".filter").forEach(function(b){ b.classList.remove("active"); });
        btn.classList.add("active");
        currentCat = btn.dataset.cat;
        render();
      });
    }

    const modal = document.getElementById("newsModal");
    const modalBody = document.getElementById("newsModalBody");
    if (modal && modalBody) {
      const ctrl = bindModal(modal);
      grid.addEventListener("click", function(e){
        const btn = e.target.closest("[data-news-id]");
        if (!btn) return;
        const item = (D.news || []).find(function(n){ return String(n.id) === btn.dataset.newsId; });
        if (!item) return;
        modalBody.innerHTML =
          '<div class="modal-photo">' + (item.image ? '<img src="' + BASE + item.image + '" alt="' + item.title + '">' : "MIEJSCE NA ZDJECIE") + '</div>' +
          '<h2 id="newsModalTitle">' + item.title + '</h2>' +
          '<div class="news-meta"><span class="news-cat">' + item.category + '</span><time>' + item.date + '</time></div>' +
          '<p>' + (item.body || item.excerpt) + '</p>';
        ctrl.open();
      });
    }
  }

  function initSuccess() {
    const grid = document.getElementById("successGrid");
    if (!grid) return;
    grid.innerHTML = (D.successes || []).map(function(s){
      return '<article class="success-card reveal">' +
        '<div class="success-photo">' + (s.image ? '<img src="' + BASE + s.image + '" alt="' + s.title + '" loading="lazy">' : "MIEJSCE NA ZDJECIE") + '</div>' +
        '<div class="success-body">' +
          '<div class="success-meta"><span class="cat">' + s.category + '</span><time>' + s.date + '</time></div>' +
          '<h3>' + s.title + '</h3>' +
          '<p>' + s.description + '</p>' +
        '</div>' +
      '</article>';
    }).join("");
    grid.querySelectorAll(".reveal").forEach(function(el){ requestAnimationFrame(function(){ el.classList.add("visible"); }); });
  }

  function matchCard(m, isResult) {
    return '<article class="match-card">' +
      '<div class="match-teams"><span>' + m.home + '</span><span class="match-vs">' + (isResult ? "" : "VS") + '</span><span>' + m.away + '</span></div>' +
      (isResult ? '<div class="match-score">' + m.scoreHome + ' : ' + m.scoreAway + '</div>' : '') +
      '<div class="match-info">' +
        '<span><strong>Data:</strong> ' + (m.date || "\u2014") + '</span>' +
        '<span><strong>Turniej:</strong> ' + (m.tournament || "\u2014") + '</span>' +
        '<span><strong>Miejsce:</strong> ' + (m.venue || "\u2014") + '</span>' +
      '</div>' +
    '</article>';
  }

  function initMatches() {
    const up = document.getElementById("upcomingMatches");
    const res = document.getElementById("recentResults");
    const table = document.getElementById("leagueTable");
    if (up) {
      const list = (D.matches && D.matches.upcoming) || [];
      up.innerHTML = list.length ? list.map(function(m){ return matchCard(m, false); }).join("") : '<p class="empty-note">Brak zaplanowanych meczow. Terminy edytujesz w ATOMOWKI_DATA.matches.upcoming.</p>';
    }
    if (res) {
      const list = (D.matches && D.matches.results) || [];
      res.innerHTML = list.length ? list.map(function(m){ return matchCard(m, true); }).join("") : '<p class="empty-note">Brak wynikow. Wyniki edytujesz w ATOMOWKI_DATA.matches.results.</p>';
    }
    if (table) {
      const tbody = table.querySelector("tbody");
      const list = D.league || [];
      tbody.innerHTML = list.length ? list.map(function(r, i){
        return '<tr><td>' + (i + 1) + '</td><td>' + r.team + '</td><td>' + (r.played != null ? r.played : "\u2014") + '</td><td>' + (r.wins != null ? r.wins : "\u2014") + '</td><td>' + (r.losses != null ? r.losses : "\u2014") + '</td><td>' + (r.points != null ? r.points : "\u2014") + '</td></tr>';
      }).join("") : '<tr><td colspan="6">Tabela do uzupelnienia w ATOMOWKI_DATA.league.</td></tr>';
    }
  }

  function initAcademy() {
    const tl = document.getElementById("trainingList");
    if (tl) {
      const list = (D.academy && D.academy.training) || [];
      tl.innerHTML = list.map(function(t){ return '<div class="training-card"><h3>' + t.group + '</h3><p><strong>Kiedy:</strong> ' + t.when + '<br><strong>Gdzie:</strong> ' + t.where + '</p></div>'; }).join("");
    }
    const faq = document.getElementById("faqList");
    if (faq) {
      const list = (D.academy && D.academy.faq) || [];
      faq.innerHTML = list.map(function(f, i){
        return '<div class="faq-item"><button class="faq-q" aria-expanded="false" aria-controls="faq-a-' + i + '">' + f.q + '</button><div class="faq-a" id="faq-a-' + i + '"><p>' + f.a + '</p></div></div>';
      }).join("");
      faq.querySelectorAll(".faq-q").forEach(function(btn){
        btn.addEventListener("click", function(){
          const item = btn.parentElement;
          const answer = item.querySelector(".faq-a");
          const isOpen = item.classList.toggle("open");
          btn.setAttribute("aria-expanded", String(isOpen));
          answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0";
        });
      });
    }
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const note = document.getElementById("formNote");
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const required = ["name", "email", "topic", "message", "rodo"];
      let ok = true;
      required.forEach(function(n){
        const el = form.elements[n];
        if (!el) return;
        const valid = el.type === "checkbox" ? el.checked : String(el.value).trim() !== "";
        if (!valid) { ok = false; el.style.borderColor = "#ff6b63"; }
        else el.style.borderColor = "";
      });
      if (!ok) {
        note.textContent = "Uzupelnij wszystkie wymagane pola (w tym zgode).";
        note.className = "form-note err";
        return;
      }
      note.textContent = "Formularz jest przygotowany, ale nie wysyla wiadomosci bez backendu. Skonfiguruj usluge (np. Formspree) lub napisz na kontakt@atomowki-lodz.pl.";
      note.className = "form-note ok";
      form.reset();
    });
  }

  initNewsGrid();
  initSuccess();
  initMatches();
  initAcademy();
  initContactForm();
  initHistory();
  initCoaches();
  initNationalTeam();
  initSeason();
  initSponsors();


  /* ============================================================
     MODUL C — renderowanie nowych sekcji (historia, reprezentacja,
     trenerzy, sezon, sponsorzy)
     ============================================================ */

  function initHistory() {
    const el = document.getElementById('historyTimeline');
    if (!el) return;
    const list = (D.history || []);
    el.innerHTML = list.map(function(h){
      return '<div class="timeline-fancy-item reveal">' +
        '<div class="tf-content"><h3>' + h.title + '</h3><p>' + h.text + '</p></div>' +
        '<div class="tf-dot"><span>' + h.year + '</span></div>' +
        '<div class="tf-photo">' + (h.image ? '<img src="' + BASE + h.image + '" alt="' + h.title + '" loading="lazy">' : 'ZDJECIE') + '</div>' +
      '</div>';
    }).join('');
    el.querySelectorAll('.reveal').forEach(function(n){ requestAnimationFrame(function(){ n.classList.add('visible'); }); });
  }

  function initCoaches() {
    const el = document.getElementById('coachesGrid');
    if (!el) return;
    const list = (D.coaches || []);
    el.innerHTML = list.map(function(c){
      return '<article class="coach-card reveal">' +
        '<div class="coach-photo">' + (c.image ? '<img src="' + BASE + c.image + '" alt="' + c.name + '" loading="lazy">' : 'ZDJECIE') + '</div>' +
        '<div class="coach-body">' +
          '<h3>' + c.name + '</h3>' +
          '<span class="coach-role">' + c.role + '</span>' +
          '<p class="coach-note">' + c.note + '</p>' +
        '</div>' +
      '</article>';
    }).join('');
    el.querySelectorAll('.reveal').forEach(function(n){ requestAnimationFrame(function(){ n.classList.add('visible'); }); });
  }

  function initNationalTeam() {
    // pełna lista — pages/reprezentacja.html
    const full = document.getElementById('nationalGrid');
    // skrót — index.html (pierwsze 3)
    const mini = document.getElementById('nationalMini');
    const nt = D.nationalTeam || { players: [] };
    const players = nt.players || [];

        function cardHtml(p) {
      var imgSrc = p.image ? p.image : '';
      return '<article class="national-card reveal">' +
        '<div class="nat-photo"><img src="' + BASE + imgSrc + '" alt="' + p.name + '" loading="lazy"></div>' +
        '<span class="nat-badge">' + p.category + '</span>' +
        '<div class="nat-body">' +
          '<h3>' + p.name + '</h3>' +
          '<span class="nat-year">Powolanie ' + p.year + '</span>' +
          '<p class="nat-note">' + p.note + '</p>' +
        '</div>' +
      '</article>';
    }

    if (full) {
      full.innerHTML = players.map(cardHtml).join('');
      full.querySelectorAll('.reveal').forEach(function(n){ requestAnimationFrame(function(){ n.classList.add('visible'); }); });
    }
    if (mini) {
      mini.innerHTML = players.slice(0, 3).map(cardHtml).join('');
      mini.querySelectorAll('.reveal').forEach(function(n){ requestAnimationFrame(function(){ n.classList.add('visible'); }); });
    }
  }

  function initSeason() {
    const el = document.getElementById('seasonGrid');
    if (!el) return;
    const list = (D.season2026 || []);
    el.innerHTML = list.map(function(s){
      const matches = (s.matches || []).map(function(m){
        const isWin = parseInt(m.scoreHome, 10) > parseInt(m.scoreAway, 10);
        const cls = isWin ? 'win' : 'loss';
        return '<div class="season-match">' +
          '<span>' + m.home + ' vs ' + m.away + '</span>' +
          '<span class="score ' + cls + '">' + m.scoreHome + ' : ' + m.scoreAway + '</span>' +
        '</div>';
      }).join('');
      return '<article class="season-card reveal">' +
        '<h3>' + s.name + '</h3>' +
        '<div class="season-meta"><span>' + s.date + '</span><span>' + s.league + '</span><span class="place">' + s.place + '</span></div>' +
        matches +
      '</article>';
    }).join('');
    el.querySelectorAll('.reveal').forEach(function(n){ requestAnimationFrame(function(){ n.classList.add('visible'); }); });
  }

  function initSponsors() {
    const el = document.getElementById('sponsorGrid');
    if (!el) return;
    const list = (D.sponsors || []);
    el.innerHTML = list.map(function(s){
      const isOk = s.status === 'potwierdzony';
      const cls = isOk ? 'ok' : 'pending';
      const label = isOk ? 'Potwierdzony' : 'Do weryfikacji';
      const inner = '<span class="sp-name">' + s.name + '</span>' +
                    '<span class="sp-role">' + s.role + '</span>' +
                    '<span class="sp-status ' + cls + '">' + label + '</span>';
      return s.url
        ? '<a class="sponsor-pro" href="' + s.url + '" target="_blank" rel="noopener">' + inner + '</a>'
        : '<div class="sponsor-pro">' + inner + '</div>';
    }).join('');
  }
  window.ATOMOWKI_UI = { bindModal: bindModal, BASE: BASE };

  

  


  

  // Uruchamiamy
  initHeroSlider();


  // ============================================================
  // SLIDER HERO - LOGIKA STRZAŁEK I KROPEK
  // ============================================================
  function initHeroSlider() {
    const imgs = document.querySelectorAll('.hero-media .slider-img');
    if (!imgs.length) return;

    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    let current = 0;

    // Generujemy kropki
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      imgs.forEach(function(_, i) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', function() { goToSlide(i); });
        dotsContainer.appendChild(dot);
      });
    }

    function goToSlide(index) {
      if (index < 0) index = imgs.length - 1;
      if (index >= imgs.length) index = 0;
      imgs[current].classList.remove('active');
      current = index;
      imgs[current].classList.add('active');
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.dot').forEach(function(d, i) {
          d.classList.toggle('active', i === current);
        });
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', function() { goToSlide(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function() { goToSlide(current + 1); });

    // Automatyczne przewijanie
    setInterval(function() {
      goToSlide(current + 1);
    }, 5000);
  }

  // Uruchamiamy slider
  initHeroSlider();

})();

