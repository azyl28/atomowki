/* =========================================================
   players.js - karty zawodniczek + modal szczegolow.
   ========================================================= */
(function () {
  "use strict";
  const grid = document.getElementById("playersGrid");
  if (!grid) return;

  const D = window.ATOMOWKI_DATA || { players: [] };
  const BASE = document.body.dataset.base || "";
  let currentTeam = "senior";

  function render() {
    const list = (D.players || []).filter(function(p){ return p.team === currentTeam; });
    if (!list.length) {
      grid.innerHTML = '<p class="empty-note">Brak zawodniczek w tej kategorii. Uzupelnij dane w ATOMOWKI_DATA.players.</p>';
      return;
    }
    grid.innerHTML = list.map(function(p, i){
      return '<button class="player-card reveal" data-player-index="' + i + '" aria-label="Pokaz profil: ' + p.name + '">' +
        '<div class="player-photo">' +
          (p.photo ? '<img src="' + BASE + p.photo + '" alt="' + p.name + '" loading="lazy">' : "MIEJSCE NA ZDJECIE") +
          '<span class="player-number">' + p.number + '</span>' +
        '</div>' +
        '<div class="player-info"><h3>' + p.name + '</h3><span class="player-pos">' + p.position + '</span></div>' +
      '</button>';
    }).join("");

    grid.querySelectorAll(".reveal").forEach(function(el){ requestAnimationFrame(function(){ el.classList.add("visible"); }); });

    grid.querySelectorAll("[data-player-index]").forEach(function(btn){
      btn.addEventListener("click", function(){ openPlayer(list[Number(btn.dataset.playerIndex)]); });
    });
  }

  const modal = document.getElementById("playerModal");
  const body = document.getElementById("playerModalBody");
  let ctrl = null;
  if (modal && body) {
    const close = function(){ modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };
    modal.querySelectorAll("[data-close-modal]").forEach(function(el){ el.addEventListener("click", close); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") close(); });
    ctrl = { open: function(){ modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; } };
  }

  function openPlayer(p) {
    if (!p || !ctrl) return;
    body.innerHTML =
      '<div class="modal-photo">' + (p.photo ? '<img src="' + BASE + p.photo + '" alt="' + p.name + '">' : "MIEJSCE NA ZDJECIE ZAWODNICZKI") + '</div>' +
      '<h2 id="playerModalTitle">' + p.name + '</h2>' +
      '<p><strong>Numer:</strong> ' + p.number + ' &nbsp;\u00B7&nbsp; <strong>Pozycja:</strong> ' + p.position + '</p>' +
      '<p>' + (p.bio || "Opis do uzupelnienia.") + '</p>';
    ctrl.open();
  }

  document.querySelectorAll(".tab[data-team]").forEach(function(tab){
    tab.addEventListener("click", function(){
      document.querySelectorAll(".tab[data-team]").forEach(function(t){
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      currentTeam = tab.dataset.team;
      render();
    });
  });

  render();
})();