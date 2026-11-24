/* =========================================================
   gallery.js - siatka galerii + lightbox.
   ========================================================= */
(function () {
  "use strict";
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const D = window.ATOMOWKI_DATA || { gallery: [] };
  const BASE = document.body.dataset.base || "";
  let currentCat = "all";
  let visibleItems = [];
  let currentIndex = 0;

  function render() {
    visibleItems = (D.gallery || []).filter(function(g){ return currentCat === "all" || g.category === currentCat; });
    grid.innerHTML = visibleItems.map(function(g, i){
      return '<button class="gallery-item" data-gallery-index="' + i + '" aria-label="' + g.caption + '">' +
        (g.src ? '<img src="' + BASE + g.src + '" alt="' + g.caption + '" loading="lazy">' : "MIEJSCE NA ZDJECIE") +
        '<span class="gallery-cat">' + g.category + '</span>' +
      '</button>';
    }).join("");
    grid.querySelectorAll("[data-gallery-index]").forEach(function(btn){
      btn.addEventListener("click", function(){ openLightbox(Number(btn.dataset.galleryIndex)); });
    });
  }

  const filters = document.getElementById("galleryFilters");
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

  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImage");
  const lbCap = document.getElementById("lightboxCaption");
  if (!lb || !lbImg) return;

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function updateLightbox() {
    const item = visibleItems[currentIndex];
    if (!item) return;
    lbImg.innerHTML = item.src
      ? '<img src="' + BASE + item.src + '" alt="' + item.caption + '">'
      : '<span>MIEJSCE NA ZDJECIE</span>';
    lbCap.textContent = item.caption + ' (' + (currentIndex + 1) + '/' + visibleItems.length + ')';
  }
  function next() { currentIndex = (currentIndex + 1) % visibleItems.length; updateLightbox(); }
  function prev() { currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length; updateLightbox(); }

  lb.querySelector("[data-close-lightbox]").addEventListener("click", closeLightbox);
  lb.querySelector("[data-lightbox-next]").addEventListener("click", next);
  lb.querySelector("[data-lightbox-prev]").addEventListener("click", prev);
  document.addEventListener("keydown", function(e){
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  render();
})();