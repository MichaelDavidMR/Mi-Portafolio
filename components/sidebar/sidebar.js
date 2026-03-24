/* ===========================
   sidebar.js
   =========================== */

(function () {
    const html = `
    <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
            <figure class="avatar-box">
                <img src="https://i.postimg.cc/JzBWVhW4/my-avatar.png" alt="avatar" width="80">
            </figure>

            <div class="info-content">
                <h1 class="name" title="Michael David">Michael David</h1>
                <p class="title">Full-Stack Dev</p>
            </div>

            <button class="info-more-btn" data-sidebar-btn>
                <span>Show Contacts</span>
                <ion-icon name="chevron-down"></ion-icon>
            </button>
        </div>

        <div class="sidebar-info-more">
            <div class="separator"></div>

            <ul class="contacts-list">
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Email</p>
                        <a href="mailto:maicoldavidmirsantana@gmail.com" class="contact-link">maicoldavidmirsantana@gmail.com</a>
                    </div>
                </li>

                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Phone</p>
                        <a href="tel:+18494322537" class="contact-link">+1 (849) 432-2537</a>
                    </div>
                </li>

                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Experience</p>
                        <span>2+ years coding</span>
                    </div>
                </li>

                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Location</p>
                        <address>La Romana, Republica Dominicana</address>
                    </div>
                </li>
            </ul>

            <div class="separator"></div>

<ul class="social-list">
    <li class="social-item" style="--clr:#25d366">
        <a href="https://wa.me/18494322537" target="_blank" class="social-link">
            <i class="fab fa-whatsapp"></i>
        </a>
    </li>

    <li class="social-item" style="--clr:#e8e8e8">
        <a href="https://x.com/masadelante" target="_blank" class="social-link">
            <i class="fab fa-x-twitter"></i>
        </a>
    </li>

    <li class="social-item" style="--clr:#ff5733">
        <a href="https://reddit.com/u/Sea-Camp-2519" target="_blank" class="social-link">
            <i class="fab fa-reddit-alien"></i>
        </a>
    </li>

    <li class="social-item" style="--clr:#0a66c2">
        <a href="https://www.linkedin.com/in/michael-david-mir-santana-aa9097391" target="_blank" class="social-link">
            <i class="fab fa-linkedin-in"></i>
        </a>
    </li>

    <li class="social-item" style="--clr:#c32aa3">
        <a href="https://instagram.com/___michael_david___" target="_blank" class="social-link">
            <i class="fab fa-instagram"></i>
        </a>
    </li>

    <li class="social-item" style="--clr:#e8e8e8">
        <a href="https://github.com/MichaelDavidMR" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
        </a>
    </li>

    
</ul>
        </div>
    </aside>`;

    document.getElementById('sidebar-root').innerHTML = html;

    // Toggle sidebar on mobile
    const sidebar = document.querySelector('[data-sidebar]');
    const sidebarBtn = document.querySelector('[data-sidebar-btn]');
    sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));

})();
