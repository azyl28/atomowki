/* =========================================================
   players.js - Karuzela (góra) + Siatka Team Roster (dół)
   ========================================================= */
(function () {
    "use strict";
    const D = window.ATOMOWKI_DATA || {};
    const players = Array.isArray(D.players) ? D.players : [];
    
    const carouselContainer = document.getElementById("meetPlayersContainer");
    const rosterContainer = document.getElementById("rosterGrid");
    
    if (!carouselContainer && !rosterContainer) return;

    const CATEGORIES = [
        { key: "senior", label: "SENIORZY" },
        { key: "u16",    label: "U16" },
        { key: "u13",    label: "U13" }
    ];

    let activeCat = "senior";
    let activeIndex = 0;
    let filteredPlayers = [];

    function esc(s) {
        if (s == null) return "";
        return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
    }
    
    function photoSrc(p, idx) {
        let src = p.photo || "";
        if (src && src.indexOf("http") !== 0 && src.indexOf("../") !== 0) {
            src = "../" + src;
        }
        if (!src && idx < 4) {
            src = "../assets/images/players/zawodniczka-" + (idx + 1) + ".jpg";
        }
        return src;
    }

    // --- 1. KARUZELA (PREMIUM) ---
    function buildPremiumCard(p, idx) {
        const src = photoSrc(p, idx);
        const num = p.number && p.number !== "\u2014" ? p.number : "";
        const pos = p.position && p.position !== "[pozycja]" ? p.position : "PLAYER";
        const name = p.name && p.name !== "[Imie i nazwisko]" && p.name !== "[Imię i nazwisko]" ? p.name : "MIEJSCE NA IMIE";

        const matches = p.stats && p.stats.matches ? p.stats.matches : 0;
        const points = p.stats && p.stats.points ? p.stats.points : 0;
        const tries = p.stats && p.stats.tries ? p.stats.tries : 0;

        return '<div class="mp-card" data-idx="' + idx + '">' +
            '<div class="mp-card-header"><span class="num">#' + esc(num) + '</span><span class="logo">★</span></div>' +
            (src ? '<img src="' + esc(src) + '" alt="' + esc(name) + '" class="mp-card-img">' : '<div style="height:75%;display:flex;align-items:center;justify-content:center;color:#555;">BRAK ZDJECIA</div>') +
            '<div class="mp-card-body">' +
                '<div class="mp-card-meta">OD 2019</div>' +
                '<h3 class="mp-card-name">' + esc(name) + '</h3>' +
                '<p class="mp-card-pos">' + esc(pos) + '</p>' +
            '</div>' +
            '<div class="mp-card-stats">' +
                '<div class="mp-stat"><span>MECZE</span><strong>' + matches + '</strong></div>' +
                '<div class="mp-stat"><span>PUNKTY</span><strong>' + points + '</strong></div>' +
                '<div class="mp-stat"><span>PRZYŁOŻENIA</span><strong>' + tries + '</strong></div>' +
            '</div>' +
        '</div>';
    }

    // --- 2. SIATKA (TEAM ROSTER) ---
    function buildRosterCard(p, idx) {
        const src = photoSrc(p, idx);
        const num = p.number && p.number !== "\u2014" ? p.number : "";
        const pos = p.position && p.position !== "[pozycja]" ? p.position : "PL";
        
        let nameStr = p.name && p.name !== "[Imie i nazwisko]" && p.name !== "[Imię i nazwisko]" ? p.name : "MIEJSCE NA IMIE";
        let parts = nameStr.split(" ");
        let firstName = parts[0] || "";
        let lastName = parts.slice(1).join(" ") || "";

        return '<div class="roster-card" data-idx="' + idx + '">' +
            '<div class="roster-number">' + esc(num) + '</div>' +
            '<div class="roster-pos">' + esc(pos) + '</div>' +
            (src ? '<img src="' + esc(src) + '" alt="' + esc(nameStr) + '">' : '<div style="height:100%;display:flex;align-items:center;justify-content:center;color:#444;">BRAK ZDJECIA</div>') +
            '<div class="roster-info">' +
                '<h3 class="roster-name">' +
                    '<span class="first">' + esc(firstName) + '</span>' +
                    '<span class="last">' + esc(lastName) + '</span>' +
                '</h3>' +
                '<div class="roster-stats"><span>180 CM</span> | <span>75 KG</span></div>' +
            '</div>' +
        '</div>';
    }

    // --- AKTUALIZACJA STANU KARUZELI ---
    function updateCarousel() {
        if (!carouselContainer) return;
        const cards = carouselContainer.querySelectorAll(".mp-card");
        cards.forEach(function(card, idx) {
            card.className = "mp-card";
            if (idx === activeIndex) card.classList.add("is-active");
            else if (idx === activeIndex - 1) card.classList.add("is-prev");
            else if (idx === activeIndex + 1) card.classList.add("is-next");
            else if (idx < activeIndex) card.classList.add("is-hidden-left");
            else card.classList.add("is-hidden-right");
        });
    }

    // --- RENDEROWANIE WSZYSTKIEGO ---
    function renderAll() {
        filteredPlayers = players.filter(function(p) { return (p.team || "senior") === activeCat; });
        activeIndex = 0;

        // 1. RENDER KARUZELI
        if (carouselContainer) {
            let html = '<div class="mp-carousel-wrapper">';
            html += '<button class="mp-nav-btn prev" id="mpPrev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>';
            html += '<div class="mp-carousel-track">';
            if (filteredPlayers.length === 0) {
                html += '<div style="color:#666;text-align:center;margin-top:200px;">Brak zawodniczek</div>';
            } else {
                html += filteredPlayers.map(function(p, i) { return buildPremiumCard(p, i); }).join("");
            }
            html += '</div>';
            html += '<button class="mp-nav-btn next" id="mpNext"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>';
            html += '</div>';

            carouselContainer.innerHTML = html;

            document.getElementById("mpPrev").addEventListener("click", function() {
                activeIndex = (activeIndex - 1 + filteredPlayers.length) % filteredPlayers.length;
                updateCarousel();
            });
            document.getElementById("mpNext").addEventListener("click", function() {
                activeIndex = (activeIndex + 1) % filteredPlayers.length;
                updateCarousel();
            });
            carouselContainer.querySelectorAll(".mp-card").forEach(function(card) {
                card.addEventListener("click", function() {
                    let idx = parseInt(card.getAttribute("data-idx"));
                    if (idx !== activeIndex) { activeIndex = idx; updateCarousel(); }
                });
            });
            updateCarousel();
        }

        // 2. RENDER SIATKI (ROSTER)
        if (rosterContainer) {
            if (filteredPlayers.length === 0) {
                rosterContainer.innerHTML = '<div style="color:#666;text-align:center;grid-column:1/-1;">Brak zawodniczek</div>';
            } else {
                rosterContainer.innerHTML = filteredPlayers.map(function(p, i) { return buildRosterCard(p, i); }).join("");
            }
        }
    }

    // --- ZAKLADKI ---
    function buildTabs() {
        let tabs = document.getElementById("playersTabs");
        if (!tabs) return;
        tabs.innerHTML = CATEGORIES.map(function (c) {
            return '<button type="button" class="players-v3-tab' + (c.key === activeCat ? ' active' : '') + '" data-cat="' + c.key + '">' + c.label + '</button>';
        }).join("");
        tabs.querySelectorAll(".players-v3-tab").forEach(function (b) {
            b.addEventListener("click", function () {
                if (b.dataset.cat === activeCat) return;
                activeCat = b.dataset.cat;
                tabs.querySelectorAll(".players-v3-tab").forEach(function (x) { x.classList.toggle("active", x.dataset.cat === activeCat); });
                renderAll();
            });
        });
    }

    // --- START ---
    buildTabs();
    renderAll();
})();