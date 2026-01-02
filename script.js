window.onload = function() {
    // Initialisation du bouton retour en haut
    const backToTopBtn = document.getElementById('back-to-top');
    const mainContent = document.querySelector('.main-content');

    if (backToTopBtn && mainContent) {
        mainContent.onscroll = function() {
            if (mainContent.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        backToTopBtn.onclick = function() {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
};

// --- FONCTIONS DE NAVIGATION ---
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');

    const target = document.getElementById('section-' + sectionId);
    if (target) target.style.display = 'block';

    // Mise à jour visuelle du menu
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    const activeLi = document.getElementById('menu-' + sectionId);
    if (activeLi) activeLi.classList.add('active');
}

// --- FONCTION MOT DE PASSE ---
function checkPassword() {
    const pass = document.getElementById('class-password').value;
    const error = document.getElementById('login-error');
    const welcome = document.getElementById('welcome-message');
    const form = document.getElementById('login-form');

    if (pass === 'votre_code_ici') { // Changez le code ici
        form.style.display = 'none';
        welcome.style.display = 'block';
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
    }
}
