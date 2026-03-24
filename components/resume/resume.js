/* ===========================
   resume.js
   Versión adaptada a Maestro Oda
   =========================== */

   (function () {
    const html = `
    <article class="resume" data-page="resume">
        <header>
            <h2 class="h2 article-title">Resumen</h2>
        </header>

        <!-- EDUCACIÓN -->
        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box"><ion-icon name="book-outline"></ion-icon></div>
                <h3 class="h3">Educación</h3>
            </div>

            <ol class="timeline-list">
                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">Formación autodidacta en programación</h4>
                    <span>Actualidad</span>
                    <p class="timeline-text">
                        Aprendizaje independiente enfocado en desarrollo web y software. 
                        Dominio de JavaScript, bases en Python, Java, HTML, CSS y SQL.
                        Experiencia práctica creando proyectos reales y resolviendo problemas.
                    </p>
                </li>

                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">Cursos de JavaScript y React</h4>
                    <span>En progreso</span>
                    <p class="timeline-text">
                        Formación enfocada en desarrollo moderno con React, manejo de estado, 
                        componentes reutilizables y buenas prácticas en frontend.
                    </p>
                </li>

                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">Aprendizaje en sistemas y ciberseguridad</h4>
                    <span>Base técnica</span>
                    <p class="timeline-text">
                        Uso de herramientas como Kali Linux, comprensión de sistemas operativos, 
                        terminal, redes y fundamentos de seguridad informática.
                    </p>
                </li>
            </ol>
        </section>

        <!-- EXPERIENCIA -->
        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box"><ion-icon name="code-outline"></ion-icon></div>
                <h3 class="h3">Experiencia</h3>
            </div>

            <ol class="timeline-list">
                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">Desarrollador de Oda Player</h4>
                    <span>Actualidad</span>
                    <p class="timeline-text">
                        Desarrollo de aplicación Android para reproducción de música utilizando Kotlin y ExoPlayer.
                        Implementación de control en segundo plano, notificaciones y manejo de estados del reproductor.
                    </p>
                </li>

                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">Desarrollo de red social</h4>
                    <span>Proyecto personal</span>
                    <p class="timeline-text">
                        Creación de una red social desde cero incluyendo frontend, backend, autenticación,
                        uso de WebSockets y diseño de arquitectura escalable.
                    </p>
                </li>

                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">Proyectos web y backend</h4>
                    <span>Freelance / Personal</span>
                    <p class="timeline-text">
                        Desarrollo de APIs con Node.js, integración con bases de datos (SQL/Supabase),
                        autenticación con JWT y despliegues básicos.
                    </p>
                </li>
            </ol>
        </section>

        <!-- SKILLS -->
        <section class="skill">
            <h3 class="h3 skills-title">Habilidades</h3>

            <ul class="skills-list content-card">

                <li class="skills-item">
                    <div class="title-wrapper">
                        <h5 class="h5">JavaScript / React</h5>
                        <data value="85">85%</data>
                    </div>
                    <div class="skills-progress-bg">
                        <div class="skills-progress-fill" style="width: 85%;"></div>
                    </div>
                </li>

                <li class="skills-item">
                    <div class="title-wrapper">
                        <h5 class="h5">Backend (Node.js / APIs)</h5>
                        <data value="80">80%</data>
                    </div>
                    <div class="skills-progress-bg">
                        <div class="skills-progress-fill" style="width: 80%;"></div>
                    </div>
                </li>

                <li class="skills-item">
                    <div class="title-wrapper">
                        <h5 class="h5">Android (Kotlin / ExoPlayer)</h5>
                        <data value="75">75%</data>
                    </div>
                    <div class="skills-progress-bg">
                        <div class="skills-progress-fill" style="width: 75%;"></div>
                    </div>
                </li>

                <li class="skills-item">
                    <div class="title-wrapper">
                        <h5 class="h5">Bases de datos (SQL / Supabase)</h5>
                        <data value="70">70%</data>
                    </div>
                    <div class="skills-progress-bg">
                        <div class="skills-progress-fill" style="width: 70%;"></div>
                    </div>
                </li>

                <li class="skills-item">
                    <div class="title-wrapper">
                        <h5 class="h5">Linux / Kali</h5>
                        <data value="65">65%</data>
                    </div>
                    <div class="skills-progress-bg">
                        <div class="skills-progress-fill" style="width: 65%;"></div>
                    </div>
                </li>

            </ul>
        </section>
    </article>
    `;

    document.getElementById('resume-root').innerHTML = html;
})();