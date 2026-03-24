/* ===========================
   blog.js
   Blog con vista detallada
   =========================== */

   (function () {

    const posts = [
        {
            id: 1,
            // Red social / código / network — imagen de código dark con redes
            img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            imgDetail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=85',
            category: 'Programación',
            date: '2026-03-20',
            dateLabel: 'Mar 20, 2026',
            title: 'Cómo estoy creando mi propia red social',
            text: 'No es solo código, es estrategia. Aquí te explico cómo pasé de HTML básico a una arquitectura real.',
            content: `
                <p>Todo empezó con HTML plano... sí, básico, sin orgullo.</p>
                <p>Luego entendí algo clave: si no controlas el backend, no tienes producto.</p>
                <p>Estoy usando:</p>
                <ul>
                    <li>WebSockets para tiempo real</li>
                    <li>IA para moderación</li>
                    <li>Autenticación segura</li>
                </ul>
                <p>Esto no es un proyecto... es el inicio de algo serio.</p>
            `
        },
        {
            id: 2,
            // Android / música / código móvil
            img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80',
            imgDetail: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&q=85',
            category: 'Android',
            date: '2026-03-18',
            dateLabel: 'Mar 18, 2026',
            title: 'Errores reales que rompían mi app de música',
            text: 'ExoPlayer, threads y bugs silenciosos. Aquí está la verdad sin filtro.',
            content: `
                <p>Mi app fallaba en Android 10… y no sabía por qué.</p>
                <p>El problema real:</p>
                <ul>
                    <li>Acceso a ExoPlayer desde hilo incorrecto</li>
                    <li>DATA deprecated</li>
                    <li>Corrutinas mal manejadas</li>
                </ul>
                <p>Lección: Android no perdona errores de arquitectura.</p>
            `
        },
        {
            id: 3,
            // Mentalidad / camino propio / autodidacta
            img: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800&q=80',
            imgDetail: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&q=85',
            category: 'Mentalidad',
            date: '2026-03-15',
            dateLabel: 'Mar 15, 2026',
            title: 'No necesitas título para ser ingeniero',
            text: 'La verdad incómoda que nadie quiere decirte sobre estudiar programación.',
            content: `
                <p>La mayoría estudia para conseguir trabajo.</p>
                <p>Los que ganan dinero... crean cosas.</p>
                <p>No necesitas permiso de una universidad para construir software.</p>
                <p>Necesitas disciplina, lógica y dejar de procrastinar.</p>
            `
        }
    ];

    // ── LISTA DE POSTS ──
    const postsHTML = posts.map(p => `
        <li class="blog-post-item">
            <div class="blog-card" onclick="openPost(${p.id})">
                <figure class="blog-banner-box">
                    <img src="${p.img}" alt="${p.title}" loading="lazy">
                </figure>
                <div class="blog-content">
                    <div class="blog-meta">
                        <p class="blog-category">${p.category}</p>
                        <span class="dot"></span>
                        <time datetime="${p.date}">${p.dateLabel}</time>
                    </div>
                    <h3 class="h3 blog-item-title">${p.title}</h3>
                    <p class="blog-text">${p.text}</p>
                </div>
            </div>
        </li>
    `).join('');

    document.getElementById('blog-root').innerHTML = `
    <article class="blog" data-page="blog">
        <header>
            <h2 class="h2 article-title">Blog</h2>
        </header>

        <section class="blog-posts" id="blog-list">
            <ul class="blog-posts-list">
                ${postsHTML}
            </ul>
        </section>

        <section id="blog-detail" style="display:none;"></section>
    </article>`;

    // ── ABRIR POST ──
    window.openPost = function(id) {
        const post = posts.find(p => p.id === id);
        const detail = document.getElementById('blog-detail');
        const list   = document.getElementById('blog-list');

        list.style.display   = 'none';
        detail.style.display = 'block';

        detail.innerHTML = `
            <div class="detail-header">
                <button class="back-btn" onclick="closePost()">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    Volver al blog
                </button>
            </div>

            <div class="detail-hero">
                <img src="${post.imgDetail}" alt="${post.title}">
                <div class="detail-hero-meta">
                    <span class="blog-category">${post.category}</span>
                    <span class="detail-date">${post.dateLabel}</span>
                </div>
            </div>

            <div class="detail-body">
                <h2 class="detail-title">${post.title}</h2>
                <div class="blog-full-content">
                    ${post.content}
                </div>
            </div>
        `;

        window.scrollTo(0, 0);
    };

    // ── CERRAR POST ──
    window.closePost = function() {
        document.getElementById('blog-detail').style.display = 'none';
        document.getElementById('blog-list').style.display   = 'block';
        window.scrollTo(0, 0);
    };

})();