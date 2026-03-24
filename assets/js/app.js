/* ===========================
   app.js
   Global app logic — page navigation
   Runs after all components are injected into the DOM
   =========================== */

'use strict';

(function () {

    // ── Page Navigation ──
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const pages    = document.querySelectorAll('[data-page]');

    navLinks.forEach((link, i) => {
        link.addEventListener('click', function () {
            const target = this.innerHTML.toLowerCase();

            pages.forEach(page => {
                if (page.dataset.page === target) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            window.scrollTo(0, 0);
        });
    });

})();
