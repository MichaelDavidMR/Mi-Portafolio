/* ===========================
   about.js
   About real, no plantilla genérica
   =========================== */

   (function () {
    const html = `
    <article class="about active" data-page="about">

        <header>
            <h2 class="h2 article-title">Sobre mí</h2>
        </header>

        <section class="about-text">
            <p>
                Soy desarrollador Full-Stack de República Dominicana enfocado en backend y desarrollo de aplicaciones.
                Me gusta resolver problemas reales con soluciones simples, eficientes y que no se rompan a los dos días.
            </p>

            <p>
                No hago código para que “se vea bonito y ya”. Me enfoco en que funcione bien, sea escalable y fácil de mantener.
                Desde la lógica del servidor hasta la interfaz, todo tiene que tener sentido. Si algo falla, lo arreglo, no lo escondo.
            </p>
        </section>

        <section class="service">
            <h3 class="h3 service-title">Lo que hago</h3>

            <ul class="service-list">

                <li class="service-item">
                    <div class="service-icon-box">
                        <img src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png" width="40">
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Backend</h4>
                        <p class="service-item-text">
                            APIs, lógica de negocio, autenticación y sistemas sólidos que no colapsan cuando crecen.
                        </p>
                    </div>
                </li>

                <li class="service-item">
                    <div class="service-icon-box">
                        <img src="https://i.postimg.cc/xjLdzYxZ/icon-app.png" width="40">
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Aplicaciones</h4>
                        <p class="service-item-text">
                            Apps funcionales conectadas a servicios reales. Nada de proyectos de mentira.
                        </p>
                    </div>
                </li>

                <li class="service-item">
                    <div class="service-icon-box">
                        <img src="https://i.postimg.cc/4389jZkP/icon-design.png" width="40">
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Integraciones</h4>
                        <p class="service-item-text">
                            Conecto APIs, sistemas externos y automatizo procesos para que no pierdas tiempo haciendo lo mismo.
                        </p>
                    </div>
                </li>

                <li class="service-item">
                    <div class="service-icon-box">
                        <img src="https://i.postimg.cc/0NL8zHpx/icon-photo.png" width="40">
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Optimización</h4>
                        <p class="service-item-text">
                            Limpieza de código, mejora de rendimiento y arreglo de bugs que otros dejaron tirados.
                        </p>
                    </div>
                </li>

            </ul>
        </section>

        <section class="testimonials">
            <h3 class="h3 testimonials-title">Opiniones</h3>

            <ul class="testimonials-list has-scrollbar">

                <li class="testimonials-item">
                    <div class="content-card" data-testimonials-item>
                        <figure class="testimonials-avatar-box">
                            <img src="https://i.postimg.cc/zGDHfn3G/avatar-1.png" alt="Cliente" data-testimonials-avatar width="60">
                        </figure>
                        <h4 class="h4 testimonials-item-title" data-testimonials-title>Cliente</h4>
                        <div class="testimonials-text" data-testimonials-text>
                            <p>
                                Le das un problema y no se pone a inventar. Va directo al punto y lo resuelve.
                                El sistema quedó estable y sin errores raros.
                            </p>
                        </div>
                    </div>
                </li>

                <li class="testimonials-item">
                    <div class="content-card" data-testimonials-item>
                        <figure class="testimonials-avatar-box">
                            <img src="https://i.postimg.cc/zGDHfn3G/avatar-1.png" alt="Colaborador" data-testimonials-avatar width="60">
                        </figure>
                        <h4 class="h4 testimonials-item-title" data-testimonials-title>Colaborador</h4>
                        <div class="testimonials-text" data-testimonials-text>
                            <p>
                                Sabe lo que hace. Cuando algo falla, lo encuentra rápido.
                                Se nota que domina más la lógica que el diseño, pero eso es lo importante.
                            </p>
                        </div>
                    </div>
                </li>

            </ul>
        </section>

        <!-- MODAL -->
        <div class="modal-container" data-modal-container>
            <div class="overlay" data-overlay></div>

            <section class="testimonials-modal">
                <button class="modal-close-btn" data-modal-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="modal-img-wrapper">
                    <figure class="modal-avatar-box">
                        <img src="" width="80" data-modal-img>
                    </figure>
                </div>

                <div class="modal-content">
                    <h4 class="h3 modal-title" data-modal-title></h4>
                    <div class="modal-text" data-modal-text></div>
                </div>
            </section>
        </div>

    </article>
    `;

    document.getElementById('about-root').innerHTML = html;

    // ── MODAL ──
    const items = document.querySelectorAll('[data-testimonials-item]');
    const modal = document.querySelector('[data-modal-container]');
    const close = document.querySelector('[data-modal-close-btn]');
    const overlay = document.querySelector('[data-overlay]');
    const img = document.querySelector('[data-modal-img]');
    const title = document.querySelector('[data-modal-title]');
    const text = document.querySelector('[data-modal-text]');

    const toggle = () => modal.classList.toggle('active');

    items.forEach(item => {
        item.addEventListener('click', () => {
            img.src = item.querySelector('[data-testimonials-avatar]').src;
            title.innerHTML = item.querySelector('[data-testimonials-title]').innerHTML;
            text.innerHTML = item.querySelector('[data-testimonials-text]').innerHTML;
            toggle();
        });
    });

    close.addEventListener('click', toggle);
    overlay.addEventListener('click', toggle);

})();