/* ===========================
   portfolio.js
   =========================== */

   (function () {

    const projects = [
        {
            title: "Oda Player",
            category: "applications",
            type: "Android App",
            img: "components/img/odaplayer.png",
            desc: "Reproductor de música avanzado desarrollado en Android con gestión de playlists, favoritos, exportación M3U y UI moderna."
        },
        {
            title: "TV Remote Controller",
            category: "applications",
            type: "Android App",
            img: "components/img/tv.png",
            desc: "Control remoto inteligente para televisores, diseñado para una experiencia rápida, minimalista y funcional."
        },
        {
            title: "Recibos ERP",
            category: "web",
            type: "Web App",
            img: "components/img/recibos.png",
            desc: "Sistema ERP para gestión de recibos, clientes y ventas con backend integrado y autenticación segura."
        }
    ];

    /* ─── HTML del artículo (SIN el modal — va directo al body) ── */
    const html = `
    <article class="portfolio" data-page="portfolio">

        <header>
            <h2 class="h2 article-title">Proyectos</h2>
        </header>

        <section class="projects">

            <ul class="filter-list">
                <li class="filter-item"><button class="active" data-filter-btn>All</button></li>
                <li class="filter-item"><button data-filter-btn>Applications</button></li>
                <li class="filter-item"><button data-filter-btn>Web</button></li>
            </ul>

            <div class="filter-select-box">
                <button class="filter-select" data-select aria-haspopup="listbox" aria-expanded="false">
                    <div class="select-value" data-select-value>All</div>
                    <div class="select-icon">
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                </button>
                <ul class="select-list" role="listbox">
                    <li class="select-item" role="option"><button data-select-item>All</button></li>
                    <li class="select-item" role="option"><button data-select-item>Applications</button></li>
                    <li class="select-item" role="option"><button data-select-item>Web</button></li>
                </ul>
            </div>

            <ul class="project-list">
                ${projects.map((p, i) => `
                    <li class="project-item active" data-filter-item data-category="${p.category}">
                        <div class="project-card" data-index="${i}" role="button" tabindex="0"
                             aria-label="Ver detalles de ${p.title}">
                            <figure class="project-img">
                                <div class="project-item-icon-box" aria-hidden="true">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>
                                <img src="${p.img}" alt="${p.title}" loading="lazy">
                            </figure>
                            <div class="project-info">
                                <h3 class="project-title">${p.title}</h3>
                                <span class="project-category">${p.type}</span>
                            </div>
                        </div>
                    </li>
                `).join("")}
            </ul>
        </section>

    </article>`;

    /* ─── Modal inyectado directamente en <body> ──────────────
       Así escapa del stacking context de article/main y queda
       siempre por encima de la navbar y cualquier otro elemento.
    ─────────────────────────────────────────────────────────── */
    const modalHtml = `
        <div class="project-modal" id="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div class="modal-content">
                <button class="modal-close-btn" id="close-modal" aria-label="Cerrar">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                <div class="modal-img-wrap">
                    <img id="modal-img" alt="" />
                </div>
                <div class="modal-body">
                    <span class="modal-type-badge" id="modal-type"></span>
                    <h3 class="modal-title" id="modal-title"></h3>
                    <hr class="modal-separator">
                    <p class="modal-desc" id="modal-desc"></p>
                    <div class="modal-esc-hint">
                        <kbd>Esc</kbd> para cerrar &nbsp;·&nbsp; clic fuera para cerrar
                    </div>
                </div>
            </div>
        </div>`;

    document.getElementById('portfolio-root').innerHTML = html;

    // Modal en <body> — escapa del stacking context de article/main
    // para que no quede tapado por la navbar
    const _mw = document.createElement('div');
    _mw.innerHTML = modalHtml;
    document.body.appendChild(_mw.firstElementChild);

    /* ─── FILTROS ──────────────────────────────────────── */
    const select      = document.querySelector('[data-select]');
    const selectItems = document.querySelectorAll('[data-select-item]');
    const selectValue = document.querySelector('[data-select-value]');
    const filterBtns  = document.querySelectorAll('[data-filter-btn]');
    const filterItems = document.querySelectorAll('[data-filter-item]');

    const filterFunc = (value) => {
        const v = value.trim().toLowerCase();
        filterItems.forEach(item => {
            const match = v === 'all' || v === item.dataset.category;
            if (match) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    // Toggle dropdown
    select.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = select.classList.toggle('active');
        select.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', () => {
        if (select.classList.contains('active')) {
            select.classList.remove('active');
            select.setAttribute('aria-expanded', 'false');
        }
    });

    selectItems.forEach(item => {
        item.addEventListener('click', function () {
            const val = this.innerText.trim();
            selectValue.innerText = val;
            select.classList.remove('active');
            select.setAttribute('aria-expanded', 'false');
            filterFunc(val);
        });
    });

    let lastBtn = filterBtns[0];
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const val = this.innerText.trim();
            selectValue.innerText = val;
            filterFunc(val);
            lastBtn.classList.remove('active');
            this.classList.add('active');
            lastBtn = this;
        });
    });

    /* ─── MODAL ────────────────────────────────────────── */
    const modal      = document.getElementById('project-modal');
    const modalImg   = document.getElementById('modal-img');
    const modalType  = document.getElementById('modal-type');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc  = document.getElementById('modal-desc');
    const closeBtn   = document.getElementById('close-modal');

    // Guardar el elemento que tenía el foco antes de abrir
    let triggerEl = null;

    const openModal = (p, trigger) => {
        triggerEl = trigger || null;
        modalImg.src           = p.img;
        modalImg.alt           = p.title;
        modalType.textContent  = p.type;
        modalTitle.textContent = p.title;
        modalDesc.textContent  = p.desc;

        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';

        // Foco al botón de cerrar para accesibilidad
        requestAnimationFrame(() => closeBtn.focus());
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';

        // Devolver foco al elemento que lo tenía
        if (triggerEl) requestAnimationFrame(() => triggerEl.focus());
        triggerEl = null;
    };

    // Abrir al hacer clic en una tarjeta
    document.querySelectorAll('.project-card').forEach(card => {
        // Clic
        card.addEventListener('click', () => {
            openModal(projects[+card.dataset.index], card);
        });
        // Enter / Space (accesibilidad)
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(projects[+card.dataset.index], card);
            }
        });
    });

    // Cerrar con el botón ✕
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });

    // Cerrar al hacer clic en el overlay (fuera del modal-content)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });

    // Trampa de foco dentro del modal
    modal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || !modal.classList.contains('is-open')) return;

        const focusable = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
            if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
        }
    });

})();