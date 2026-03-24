/* ===========================
   contact.js
   =========================== */

   (function () {
    const html = `
    <article class="contact" data-page="contact">
        <header>
            <h2 class="h2 article-title">Contacto</h2>
        </header>

        <section class="mapbox" data-mapbox>
            <figure>
                <iframe
                    src="https://www.google.com/maps?q=Republica+Dominicana&output=embed"
                    width="100%" height="300" loading="lazy">
                </iframe>
            </figure>
        </section>

        <section class="contact-form">
            <h3 class="h3 form-title">Envíame un mensaje</h3>

            <form action="https://formsubmit.co/maicoldavidmirsantana@gmail.com" method="POST" class="form" data-form>

                <div class="input-wrapper">
                    <input type="text" name="fullname" class="form-input" placeholder="Nombre completo" required data-form-input>
                    <input type="email" name="email" class="form-input" placeholder="Correo electrónico" required data-form-input>
                </div>

                <textarea name="message" class="form-input" placeholder="Tu mensaje..." required data-form-input></textarea>

                <!-- Anti bots -->
                <input type="text" name="_honey" style="display:none">
                <input type="hidden" name="_captcha" value="false">

                <!-- Redirección -->
                <input type="hidden" name="_next" value="./gracias/gracias.html">

                <button class="form-btn" type="submit" disabled data-form-btn>
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>Enviar mensaje</span>
                </button>
            </form>
        </section>
    </article>`;

    document.getElementById('contact-root').innerHTML = html;

    const form = document.querySelector('[data-form]');
    const inputs = document.querySelectorAll('[data-form-input]');
    const btn = document.querySelector('[data-form-btn]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (form.checkValidity()) {
                btn.removeAttribute('disabled');
            } else {
                btn.setAttribute('disabled', '');
            }
        });
    });
})();