/* ==========================================================
   VENOL ATOMOWKI LODZ
   PREMIUM TEAM INTERACTION
   ========================================================== */

(function () {
    "use strict";

    const D = window.ATOMOWKI_DATA || {};
    const players = Array.isArray(D.players) ? D.players : [];

    const carouselContainer =
        document.getElementById("meetPlayersContainer");

    const rosterContainer =
        document.getElementById("rosterGrid");

    if (!carouselContainer && !rosterContainer) {
        return;
    }

    const CATEGORIES = [
        { key: "senior", label: "SENIORKI" },
        { key: "u16", label: "U16" },
        { key: "u13", label: "U13" }
    ];

    let activeCat = "senior";
    let activeIndex = 0;
    let filteredPlayers = [];

    function esc(value) {
        if (value == null) return "";

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function photoSrc(player, index) {
        let src = player.photo || "";

        /* poprawka: usunieto dodawanie ../ */

        /* poprawka: usunieto fallback */

        return src;
    }

    function playerName(player) {
        if (
            !player.name ||
            player.name === "[Imie i nazwisko]" ||
            player.name === "[Imię i nazwisko]"
        ) {
            return "ZAWODNICZKA DO UZUPEŁNIENIA";
        }

        return player.name;
    }

    function playerPosition(player) {
        if (
            !player.position ||
            player.position === "[pozycja]"
        ) {
            return "ZAWODNICZKA";
        }

        return player.position;
    }

    function playerStats(player) {
        const stats = player.stats || {};

        return {
            matches: Number(stats.matches || 0),
            points: Number(stats.points || 0),
            tries: Number(stats.tries || 0)
        };
    }

    function buildPremiumCard(player, index) {
        const src = photoSrc(player, index);
        const stats = playerStats(player);

        const number =
            player.number &&
            player.number !== "—"
                ? player.number
                : "";

        const name = playerName(player);
        const position = playerPosition(player);

        let image = "";

        if (src) {
            image =
                '<img src="' +
                esc(src) +
                '" alt="' +
                esc(name) +
                '" class="mp-card-img">';
        } else {
            image =
                '<div class="mp-card-img" style="' +
                'display:grid;' +
                'place-items:center;' +
                'background:linear-gradient(135deg,#18191e,#0d0d0f);' +
                'color:rgba(255,255,255,.25);' +
                'font-size:.65rem;' +
                'font-weight:800;' +
                'letter-spacing:.15em;' +
                'text-align:center;' +
                'padding:2rem;' +
                '">' +
                'ZDJĘCIE DO UZUPEŁNIENIA' +
                "</div>";
        }

        return (
            '<div class="mp-card" data-idx="' +
            index +
            '" tabindex="0" role="button" aria-label="Profil zawodniczki ' +
            esc(name) +
            '">' +

                '<div class="mp-card-header">' +

                    '<span class="num">' +
                    (number ? "#" + esc(number) : "—") +
                    "</span>" +

                    '<span class="logo">★</span>' +

                "</div>" +

                image +

                '<div class="mp-card-body">' +

                    '<div class="mp-card-meta">' +
                    "VENOL ATOMÓWKI ŁÓDŹ" +
                    "</div>" +

                    '<h3 class="mp-card-name">' +
                    esc(name) +
                    "</h3>" +

                    '<p class="mp-card-pos">' +
                    esc(position) +
                    "</p>" +

                "</div>" +

                '<div class="mp-card-stats">' +

                    '<div class="mp-stat">' +
                        "<span>MECZE</span>" +
                        "<strong>" +
                        stats.matches +
                        "</strong>" +
                    "</div>" +

                    '<div class="mp-stat">' +
                        "<span>PUNKTY</span>" +
                        "<strong>" +
                        stats.points +
                        "</strong>" +
                    "</div>" +

                    '<div class="mp-stat">' +
                        "<span>PRZYŁOŻENIA</span>" +
                        "<strong>" +
                        stats.tries +
                        "</strong>" +
                    "</div>" +

                "</div>" +

            "</div>"
        );
    }

    function buildRosterCard(player, index) {
        const src = photoSrc(player, index);
        const name = playerName(player);
        const position = playerPosition(player);

        const number =
            player.number &&
            player.number !== "—"
                ? player.number
                : "";

        let image = "";

        if (src) {
            image =
                '<img src="' +
                esc(src) +
                '" alt="' +
                esc(name) +
                '">';
        } else {
            image =
                '<div style="' +
                'height:100%;' +
                'display:grid;' +
                'place-items:center;' +
                'color:#444;' +
                'font-size:.65rem;' +
                'font-weight:800;' +
                'letter-spacing:.12em;' +
                'text-align:center;' +
                'padding:1rem;' +
                '">' +
                "ZDJĘCIE DO UZUPEŁNIENIA" +
                "</div>";
        }

        const parts = name.split(" ");
        const firstName = parts.shift() || "";
        const lastName = parts.join(" ");

        return (
            '<div class="roster-card" ' +
            'data-idx="' +
            index +
            '" ' +
            'tabindex="0" ' +
            'role="button" ' +
            'aria-label="Profil zawodniczki ' +
            esc(name) +
            '">' +

                '<div class="roster-number">' +
                esc(number) +
                "</div>" +

                '<div class="roster-pos">' +
                esc(position) +
                "</div>" +

                image +

                '<div class="roster-info">' +

                    '<h3 class="roster-name">' +
                        '<span class="first">' +
                        esc(firstName) +
                        "</span>" +
                        '<span class="last">' +
                        esc(lastName) +
                        "</span>" +
                    "</h3>" +

                    '<div class="roster-stats">' +
                    "<span>PROFIL</span>" +
                    "</div>" +

                "</div>" +

            "</div>"
        );
    }

    function renderModal() {
        if (document.getElementById("atomPlayerModal")) {
            return;
        }

        const modal = document.createElement("div");

        modal.id = "atomPlayerModal";
        modal.className = "atom-player-modal";
        modal.setAttribute("aria-hidden", "true");

        modal.innerHTML = `
            <div class="atom-player-profile"
                 role="dialog"
                 aria-modal="true"
                 aria-labelledby="atomProfileName">

                <button
                    type="button"
                    class="atom-profile-close"
                    id="atomProfileClose"
                    aria-label="Zamknij profil">
                    ×
                </button>

                <div class="atom-profile-photo">
                    <div
                        id="atomProfilePhoto"
                        class="atom-profile-photo-image">
                    </div>

                    <div
                        id="atomProfileNumber"
                        class="atom-profile-number">
                    </div>

                    <div
                        id="atomProfilePhotoLabel"
                        class="atom-profile-photo-label">
                    </div>
                </div>

                <div class="atom-profile-content">

                    <div
                        id="atomProfileKicker"
                        class="atom-profile-kicker">
                    </div>

                    <h2
                        id="atomProfileName"
                        class="atom-profile-name">
                    </h2>

                    <div
                        id="atomProfilePosition"
                        class="atom-profile-position">
                    </div>

                    <p
                        id="atomProfileBio"
                        class="atom-profile-bio">
                    </p>

                    <div
                        id="atomProfileData"
                        class="atom-profile-data">
                    </div>

                    <div
                        id="atomProfileAchievementsSection">
                    </div>

                    <div class="atom-profile-footer">
                        VENOL ATOMÓWKI ŁÓDŹ · RUGBY · ŁÓDŹ
                    </div>

                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeButton =
            document.getElementById("atomProfileClose");

        closeButton.addEventListener("click", closeModal);

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    function openProfile(player) {
        renderModal();

        const modal =
            document.getElementById("atomPlayerModal");

        const photo =
            document.getElementById("atomProfilePhoto");

        const number =
            document.getElementById("atomProfileNumber");

        const kicker =
            document.getElementById("atomProfileKicker");

        const name =
            document.getElementById("atomProfileName");

        const position =
            document.getElementById("atomProfilePosition");

        const bio =
            document.getElementById("atomProfileBio");

        const data =
            document.getElementById("atomProfileData");

        const achievementsSection =
            document.getElementById(
                "atomProfileAchievementsSection"
            );

        const nameValue = playerName(player);
        const positionValue = playerPosition(player);
        const stats = playerStats(player);

        const category =
            CATEGORIES.find(
                function (categoryItem) {
                    return categoryItem.key === player.team;
                }
            );

        kicker.textContent =
            category
                ? category.label + " · VENOL ATOMÓWKI"
                : "VENOL ATOMÓWKI ŁÓDŹ";

        name.textContent = nameValue;

        position.textContent =
            positionValue +
            (
                player.number &&
                player.number !== "—"
                    ? " · NUMER " + player.number
                    : ""
            );

        bio.textContent =
            player.bio &&
            !player.bio.includes("Miejsce na")
                ? player.bio
                : "Profil zawodniczki zostanie uzupełniony przez klub.";

        number.textContent =
            player.number &&
            player.number !== "—"
                ? "#" + player.number
                : "—";

        photo.innerHTML = "";

        const src = player.photo
            ? (
                player.photo.startsWith("../")
                    ? player.photo
                    : "../" + player.photo
            )
            : "";

        if (src) {
            const img = document.createElement("img");

            img.src = src;
            img.alt = nameValue;

            img.onerror = function () {
                photo.innerHTML =
                    '<div style="' +
                    'height:100%;' +
                    'min-height:600px;' +
                    'display:grid;' +
                    'place-items:center;' +
                    'padding:2rem;' +
                    'color:rgba(255,255,255,.25);' +
                    'font-weight:800;' +
                    'letter-spacing:.14em;' +
                    'text-align:center;' +
                    '">' +
                    "ZDJĘCIE DO UZUPEŁNIENIA" +
                    "</div>";
            };

            photo.appendChild(img);
        } else {
            photo.innerHTML =
                '<div style="' +
                'height:100%;' +
                'min-height:600px;' +
                'display:grid;' +
                'place-items:center;' +
                'padding:2rem;' +
                'color:rgba(255,255,255,.25);' +
                'font-weight:800;' +
                'letter-spacing:.14em;' +
                'text-align:center;' +
                '">' +
                "ZDJĘCIE DO UZUPEŁNIENIA" +
                "</div>";
        }

        const teamLabel =
            category
                ? category.label
                : "DRUŻYNA";

        document.getElementById(
            "atomProfilePhotoLabel"
        ).textContent = teamLabel;

        data.innerHTML = `
            <div class="atom-profile-data-item">
                <span>NUMER</span>
                <strong>${
                    player.number &&
                    player.number !== "—"
                        ? esc(player.number)
                        : "—"
                }</strong>
            </div>

            <div class="atom-profile-data-item">
                <span>POZYCJA</span>
                <strong>${esc(positionValue)}</strong>
            </div>

            <div class="atom-profile-data-item">
                <span>MECZE</span>
                <strong>${stats.matches}</strong>
            </div>

            <div class="atom-profile-data-item">
                <span>PUNKTY</span>
                <strong>${stats.points}</strong>
            </div>

            <div class="atom-profile-data-item">
                <span>PRZYŁOŻENIA</span>
                <strong>${stats.tries}</strong>
            </div>

            <div class="atom-profile-data-item">
                <span>STATUS</span>
                <strong>AKTYWNA</strong>
            </div>
        `;

        const achievements =
            Array.isArray(player.achievements)
                ? player.achievements.filter(Boolean)
                : [];

        if (achievements.length) {
            achievementsSection.innerHTML =
                '<div class="atom-profile-section-title">' +
                "OSIĄGNIĘCIA" +
                "</div>" +

                '<div class="atom-profile-achievements">' +

                achievements.map(function (achievement) {
                    return (
                        '<span class="atom-profile-achievement">' +
                        esc(achievement) +
                        "</span>"
                    );
                }).join("") +

                "</div>";
        } else {
            achievementsSection.innerHTML =
                '<div class="atom-profile-section-title">' +
                "PROFIL ZAWODNICZKI" +
                "</div>" +

                '<div class="atom-profile-achievements">' +

                '<span class="atom-profile-achievement">' +
                "Miejsce na osiągnięcie / wyróżnienie" +
                "</span>" +

                "</div>";
        }

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        const modal =
            document.getElementById("atomPlayerModal");

        if (!modal) return;

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }

    function updateCarousel() {
        if (!carouselContainer) return;

        const cards =
            carouselContainer.querySelectorAll(
                ".mp-card"
            );

        cards.forEach(function (card, index) {
            card.className = "mp-card";

            if (index === activeIndex) {
                card.classList.add("is-active");
            } else if (
                index === activeIndex - 1
            ) {
                card.classList.add("is-prev");
            } else if (
                index === activeIndex + 1
            ) {
                card.classList.add("is-next");
            } else if (
                index < activeIndex
            ) {
                card.classList.add(
                    "is-hidden-left"
                );
            } else {
                card.classList.add(
                    "is-hidden-right"
                );
            }
        });
    }

    function changeIndex(direction) {
        if (!filteredPlayers.length) return;

        activeIndex =
            (
                activeIndex +
                direction +
                filteredPlayers.length
            ) %
            filteredPlayers.length;

        updateCarousel();
    }

    function openActiveProfile() {
        if (!filteredPlayers.length) return;

        openProfile(
            filteredPlayers[activeIndex]
        );
    }

    function setupDrag(track) {
        if (!track || track.dataset.atomDragBound === "1") return;

        track.dataset.atomDragBound = "1";

        let dragging = false;
        let pointerId = null;
        let startX = 0;
        let lastX = 0;
        let moved = false;
        let suppressClickUntil = 0;

        function finish(event, cancelled) {
            if (!dragging) return;
            if (event && event.pointerId !== pointerId) return;

            const distance = lastX - startX;
            const wasMoved = moved;

            dragging = false;
            pointerId = null;
            track.classList.remove("is-dragging");

            if (cancelled) return;

            if (wasMoved) {
                suppressClickUntil = Date.now() + 500;
            }

            if (Math.abs(distance) >= 30) {
                changeIndex(distance < 0 ? 1 : -1);
            }
        }

        track.addEventListener("pointerdown", function (event) {
            const card = event.target.closest(".mp-card");

            if (!card || !track.contains(card)) return;
            if (event.pointerType === "mouse" && event.button !== 0) return;

            dragging = true;
            pointerId = event.pointerId;
            startX = event.clientX;
            lastX = event.clientX;
            moved = false;

            track.classList.add("is-dragging");

            try {
                track.setPointerCapture(event.pointerId);
            } catch (_) {}
        }, true);

        track.addEventListener("pointermove", function (event) {
            if (!dragging || event.pointerId !== pointerId) return;

            lastX = event.clientX;

            if (Math.abs(lastX - startX) > 8) {
                moved = true;

                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }, true);

        track.addEventListener("pointerup", function (event) {
            finish(event, false);
        }, true);

        track.addEventListener("pointercancel", function (event) {
            finish(event, true);
        }, true);

        track.addEventListener("lostpointercapture", function (event) {
            finish(event, true);
        }, true);

        track.addEventListener("click", function (event) {
            if (Date.now() < suppressClickUntil) {
                event.preventDefault();
                event.stopImmediatePropagation();
                return;
            }

            const card = event.target.closest(".mp-card");
            if (!card || !track.contains(card)) return;

            const index = Number(card.dataset.idx);

            if (!Number.isInteger(index) || !filteredPlayers[index]) return;

            activeIndex = index;
            updateCarousel();
            openProfile(filteredPlayers[index]);
        }, true);
    }

    function renderCarousel() {
        if (!carouselContainer) return;

        let html =
            '<div class="mp-carousel-wrapper">' +

                '<button ' +
                'type="button" ' +
                'class="mp-nav-btn prev" ' +
                'id="mpPrev" ' +
                'aria-label="Poprzednia zawodniczka">' +
                    '<svg viewBox="0 0 24 24" ' +
                    'fill="none" ' +
                    'stroke="currentColor" ' +
                    'stroke-width="2">' +
                        '<path d="M15 18l-6-6 6-6"/>' +
                    '</svg>' +
                '</button>' +

                '<div class="mp-carousel-track" ' +
                'id="mpCarouselTrack">';

        if (!filteredPlayers.length) {
            html +=
                '<div style="' +
                'color:#666;' +
                'text-align:center;' +
                'padding:5rem;' +
                '">' +
                "Brak zawodniczek" +
                "</div>";
        } else {
            html += filteredPlayers
                .map(function (player, index) {
                    return buildPremiumCard(
                        player,
                        index
                    );
                })
                .join("");
        }

        html +=
                "</div>" +

                '<button ' +
                'type="button" ' +
                'class="mp-nav-btn next" ' +
                'id="mpNext" ' +
                'aria-label="Następna zawodniczka">' +
                    '<svg viewBox="0 0 24 24" ' +
                    'fill="none" ' +
                    'stroke="currentColor" ' +
                    'stroke-width="2">' +
                        '<path d="M9 18l6-6-6-6"/>' +
                    '</svg>' +
                '</button>' +

            "</div>";

        carouselContainer.innerHTML = html;

        const prev =
            document.getElementById(
                "mpPrev"
            );

        const next =
            document.getElementById(
                "mpNext"
            );

        const track =
            document.getElementById(
                "mpCarouselTrack"
            );

        prev.addEventListener(
            "click",
            function () {
                changeIndex(-1);
            }
        );

        next.addEventListener(
            "click",
            function () {
                changeIndex(1);
            }
        );

        setupDrag(track);

        track
            .querySelectorAll(".mp-card")
            .forEach(function (card) {
                card.addEventListener(
                    "keydown",
                    function (event) {
                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {
                            event.preventDefault();

                            const index =
                                Number(
                                    card.dataset.idx
                                );

                            /*
                             * Kliknięcie dowolnej karty:
                             * - ustawia ją jako aktywną,
                             * - natychmiast otwiera jej profil.
                             * Nie wymagamy drugiego kliknięcia.
                             */
                            activeIndex = index;
                            updateCarousel();

                            if (filteredPlayers[index]) {
                                openProfile(filteredPlayers[index]);
                            }
                        }
                    }
                );
            });

        updateCarousel();
    }

    function renderRoster() {
        if (!rosterContainer) return;

        if (!filteredPlayers.length) {
            rosterContainer.innerHTML =
                '<div style="' +
                'color:#666;' +
                'text-align:center;' +
                'grid-column:1/-1;' +
                '">' +
                "Brak zawodniczek" +
                "</div>";

            return;
        }

        rosterContainer.innerHTML =
            filteredPlayers
                .map(function (player, index) {
                    return buildRosterCard(
                        player,
                        index
                    );
                })
                .join("");

        rosterContainer
            .querySelectorAll(".roster-card")
            .forEach(function (card) {

                function activate() {
                    const index =
                        Number(
                            card.dataset.idx
                        );

                    if (
                        filteredPlayers[index]
                    ) {
                        openProfile(
                            filteredPlayers[index]
                        );
                    }
                }

                card.addEventListener(
                    "click",
                    activate
                );

                card.addEventListener(
                    "keydown",
                    function (event) {
                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {
                            event.preventDefault();
                            activate();
                        }
                    }
                );
            });
    }

    function renderAll() {
        filteredPlayers =
            players.filter(function (player) {
                return (
                    player.team ||
                    "senior"
                ) === activeCat;
            });

        activeIndex = 0;

        renderCarousel();
        renderRoster();
    }

    function buildTabs() {
        const tabs =
            document.getElementById(
                "playersTabs"
            );

        if (!tabs) return;

        tabs.innerHTML =
            CATEGORIES.map(function (category) {

                return (
                    '<button ' +
                    'type="button" ' +
                    'class="players-v3-tab' +
                    (
                        category.key === activeCat
                            ? " active"
                            : ""
                    ) +
                    '" ' +
                    'data-cat="' +
                    esc(category.key) +
                    '">' +
                    esc(category.label) +
                    "</button>"
                );

            }).join("");

        tabs
            .querySelectorAll(
                ".players-v3-tab"
            )
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        if (
                            button.dataset.cat ===
                            activeCat
                        ) {
                            return;
                        }

                        activeCat =
                            button.dataset.cat;

                        tabs
                            .querySelectorAll(
                                ".players-v3-tab"
                            )
                            .forEach(function (item) {
                                item.classList.toggle(
                                    "active",
                                    item.dataset.cat ===
                                    activeCat
                                );
                            });

                        renderAll();
                    }
                );

            });
    }

    document.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key === "Escape"
            ) {
                closeModal();
            }
        }
    );

    buildTabs();
    renderAll();

})();



