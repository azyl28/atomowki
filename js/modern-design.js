/*
==========================================================
VENOL ATOMOWKI LODZ
MODERN DESIGN ENHANCEMENTS
==========================================================
*/

(function () {
    "use strict";

    function ready(fn) {
        if (document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    ready(function () {

        document.body.classList.add("atom-modern-design");

        /* ==================================================
           SCROLL PROGRESS
           ================================================== */

        var progress = document.createElement("div");
        progress.className = "atom-scroll-progress";
        progress.setAttribute("aria-hidden", "true");
        document.body.appendChild(progress);

        function updateProgress() {
            var doc = document.documentElement;
            var scrollTop = window.scrollY || window.pageYOffset || 0;
            var max = doc.scrollHeight - window.innerHeight;

            var percentage = max > 0
                ? (scrollTop / max) * 100
                : 0;

            progress.style.width = percentage + "%";
        }

        window.addEventListener("scroll", updateProgress, {
            passive: true
        });

        updateProgress();

        /* ==================================================
           HEADER SCROLL EFFECT
           ================================================== */

        var header = document.getElementById("siteHeader");

        function updateHeader() {
            if (!header) return;

            if ((window.scrollY || 0) > 30) {
                header.classList.add("atom-header-scrolled");
            } else {
                header.classList.remove("atom-header-scrolled");
            }
        }

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

        updateHeader();

        /* ==================================================
           HERO DECORATION
           ================================================== */

        var hero = document.querySelector(".hero");

        if (hero) {

            if (!hero.querySelector(".atom-hero-glow")) {
                var glow = document.createElement("div");
                glow.className = "atom-hero-glow";
                glow.setAttribute("aria-hidden", "true");
                hero.appendChild(glow);
            }

            if (!hero.querySelector(".atom-hero-line")) {
                var line = document.createElement("div");
                line.className = "atom-hero-line";
                line.setAttribute("aria-hidden", "true");
                hero.appendChild(line);
            }
        }

        /* ==================================================
           HERO PARALLAX
           ================================================== */

        var heroMedia = document.querySelector(".hero-media");

        function heroParallax() {

            if (!heroMedia) return;

            if (window.matchMedia("(max-width: 860px)").matches) {
                heroMedia.style.transform = "";
                return;
            }

            var y = window.scrollY || 0;

            if (y < window.innerHeight * 1.2) {
                heroMedia.style.transform =
                    "translate3d(0," + (y * 0.055) + "px,0)";
            }
        }

        window.addEventListener("scroll", heroParallax, {
            passive: true
        });

        heroParallax();

        /* ==================================================
           MODERN REVEAL
           ================================================== */

        var revealElements = document.querySelectorAll(
            ".section, .section-head, .section-kicker, " +
            ".section-title, .news-card, .success-card, " +
            ".training-card, .coach-card, .national-card, " +
            ".match-card, .roster-card, .cta-box, " +
            ".timeline-fancy-item, .timeline li, " +
            ".gallery-item, .player-card, .player-v3-card"
        );

        var reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!reduceMotion && "IntersectionObserver" in window) {

            var observer = new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "atom-modern-reveal"
                            );

                            requestAnimationFrame(function () {
                                entry.target.classList.add(
                                    "atom-visible"
                                );
                            });

                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -45px 0px"
                }
            );

            revealElements.forEach(function (element) {

                if (
                    element.classList.contains("hero") ||
                    element.classList.contains("hero-media")
                ) {
                    return;
                }

                observer.observe(element);
            });
        } else {

            revealElements.forEach(function (element) {
                element.classList.add("atom-modern-reveal");
                element.classList.add("atom-visible");
            });
        }

        /* ==================================================
           BACK TO TOP
           ================================================== */

        var backTop = document.createElement("button");

        backTop.type = "button";
        backTop.className = "atom-back-top";
        backTop.setAttribute(
            "aria-label",
            "Powrót na górę strony"
        );
        backTop.innerHTML = "↑";

        document.body.appendChild(backTop);

        function updateBackTop() {

            if ((window.scrollY || 0) > 550) {
                backTop.classList.add("show");
            } else {
                backTop.classList.remove("show");
            }
        }

        window.addEventListener("scroll", updateBackTop, {
            passive: true
        });

        backTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: reduceMotion ? "auto" : "smooth"
            });

        });

        updateBackTop();

        /* ==================================================
           FLOATING SIDE LABEL
           ================================================== */

        if (
            window.innerWidth > 1080 &&
            !document.querySelector(".atom-side-label")
        ) {

            var sideLabel = document.createElement("div");

            sideLabel.className = "atom-side-label";
            sideLabel.textContent =
                "VENOL ATOMÓWKI ŁÓDŹ · RUGBY · 2009";

            sideLabel.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.appendChild(sideLabel);
        }

        /* ==================================================
           BUTTON ARROW MICRO INTERACTION
           ================================================== */

        var buttons = document.querySelectorAll(
            ".btn, .btn-hero, .btn-nav-cta"
        );

        buttons.forEach(function (button) {

            button.addEventListener("mouseenter", function () {

                var arrow = button.querySelector(".arrow");

                if (arrow) {
                    arrow.style.transform = "translateX(4px)";
                    arrow.style.transition =
                        "transform .2s ease";
                }
            });

            button.addEventListener("mouseleave", function () {

                var arrow = button.querySelector(".arrow");

                if (arrow) {
                    arrow.style.transform = "";
                }
            });
        });

        /* ==================================================
           ACTIVE SECTION TRACKING
           ================================================== */

        var sections = document.querySelectorAll(
            "main section[id]"
        );

        var navLinks = document.querySelectorAll(
            ".primary-nav a[href*='#']"
        );

        if (
            sections.length &&
            navLinks.length &&
            "IntersectionObserver" in window
        ) {

            var sectionObserver =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(function (entry) {

                            if (!entry.isIntersecting) {
                                return;
                            }

                            var id = entry.target.id;

                            navLinks.forEach(function (link) {

                                var href =
                                    link.getAttribute("href") || "";

                                if (
                                    href.endsWith("#" + id)
                                ) {
                                    link.classList.add(
                                        "atom-section-active"
                                    );
                                } else {
                                    link.classList.remove(
                                        "atom-section-active"
                                    );
                                }
                            });
                        });
                    },
                    {
                        threshold: 0.35
                    }
                );

            sections.forEach(function (section) {
                sectionObserver.observe(section);
            });
        }

        /* ==================================================
           IMAGE LAZY LOADING
           ================================================== */

        document.querySelectorAll("img").forEach(function (img) {

            if (
                !img.hasAttribute("loading") &&
                !img.classList.contains("hero-photo")
            ) {
                img.setAttribute("loading", "lazy");
            }
        });

        /* ==================================================
           KEYBOARD ESC
           ================================================== */

        document.addEventListener("keydown", function (event) {

            if (event.key !== "Escape") {
                return;
            }

            var lightboxClose =
                document.querySelector(
                    ".lightbox-close"
                );

            if (lightboxClose) {
                lightboxClose.click();
            }
        });

        /* ==================================================
           PAGE READY
           ================================================== */

        document.documentElement.classList.add(
            "atom-modern-ready"
        );
    });

})();
