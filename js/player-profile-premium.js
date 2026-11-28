(function () {
    "use strict";

    /*
     * PREMIUM PLAYER PROFILE
     *
     * Nie zastępuje istniejącego players.js.
     * Korzysta z istniejącego:
     * - openProfile(player)
     * - closeModal()
     * - atomPlayerModal
     *
     * Jeżeli modal już istnieje, poprawiamy jego zachowanie
     * i wygląd bez tworzenia drugiego systemu.
     */

    function enhancePlayerModal() {

        const modal = document.getElementById("atomPlayerModal");

        if (!modal) {
            return;
        }

        /*
         * ESC
         */
        if (!modal.dataset.premiumEscBound) {

            document.addEventListener("keydown", function (event) {

                if (
                    event.key === "Escape" &&
                    modal.classList.contains("is-open")
                ) {
                    const closeButton =
                        document.getElementById("atomProfileClose");

                    if (closeButton) {
                        closeButton.click();
                    }
                }

            });

            modal.dataset.premiumEscBound = "true";
        }

        /*
         * Zatrzymanie scrollowania tła
         * jest już realizowane przez istniejący kod.
         */

        /*
         * Kliknięcie tła zamyka profil.
         * Nie zamykamy po kliknięciu wewnętrzną kartę.
         */
        if (!modal.dataset.premiumBackdropBound) {

            modal.addEventListener("click", function (event) {

                if (event.target === modal) {

                    const closeButton =
                        document.getElementById("atomProfileClose");

                    if (closeButton) {
                        closeButton.click();
                    }
                }

            });

            modal.dataset.premiumBackdropBound = "true";
        }

        /*
         * Dodajemy klasę premium do istniejącej karty.
         */
        const profileCard =
            modal.querySelector(".atom-profile-card");

        if (profileCard) {
            profileCard.classList.add("atom-profile-card-premium");
        }

    }

    /*
     * Modal jest tworzony dynamicznie przez istniejący players.js,
     * dlatego obserwujemy DOM.
     */
    function startObserver() {

        enhancePlayerModal();

        if (!("MutationObserver" in window)) {
            return;
        }

        const observer =
            new MutationObserver(function () {
                enhancePlayerModal();
            });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            startObserver
        );

    } else {

        startObserver();

    }

})();
