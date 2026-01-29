// ==========================================
// 1. VARIABLES GLOBALES
// ==========================================
let isAuthenticated = false; 

// ==========================================
// 2. INITIALISATION AU CHARGEMENT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Montrer l'accueil par défaut
    showSection('accueil');

    // Gestion du bouton retour en haut
    const backToTopBtn = document.getElementById('back-to-top');
    const mainContent = document.querySelector('.main-content');

    if (backToTopBtn && mainContent) {
        mainContent.addEventListener('scroll', function() {
            if (mainContent.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });
        backToTopBtn.addEventListener('click', function() {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// ==========================================
// 3. SYSTÈME DE CONNEXION
// ==========================================
function checkPassword() {
    const passwordInput = document.getElementById('class-password');
    const errorMsg = document.getElementById('login-error');
    const loginForm = document.getElementById('login-form');
    const welcomeMsg = document.getElementById('welcome-message');

    // Le mot de passe choisi
    if (passwordInput.value === 'SAM2026') {
        isAuthenticated = true; 
        
        loginForm.style.display = 'none'; 
        welcomeMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        
        alert("✅ Code correct ! Contenu débloqué.");
    } else {
        errorMsg.style.display = 'block';
        passwordInput.value = ""; // Efface le mauvais code
    }
}

// ==========================================
// 4. NAVIGATION SÉCURISÉE
// ==========================================
function showSection(sectionId) {
    // Si l'élève n'est pas connecté et essaie d'aller ailleurs qu'à l'accueil
    if (!isAuthenticated && sectionId !== 'accueil') {
        alert("🔒 Accès refusé. Entrez le mot de passe sur la page d'accueil.");
        return; 
    }

    // Cacher toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');

    // Afficher la section demandée
    const targetSection = document.getElementById('section-' + sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Mise à jour visuelle du menu (sidebar)
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    const activeMenu = document.getElementById('menu-' + sectionId);
    if (activeMenu) {
        activeMenu.classList.add('active');
    }
}

// ==========================================
// 5. GESTION DES BULLETINS (CORRIGÉ)
// ==========================================
function rechercherBulletin() {
    const input = document.getElementById('massar-input');
    const code = input.value.trim().toUpperCase();
    
    if (code === "") {
        alert("Veuillez entrer votre code Massar");
        return;
    }

    // Utilisation correcte des backticks pour injecter la variable ${code}
    const urlDirecte = `Bulletins1/${code}.pdf`;

    // On tente d'ouvrir le PDF
    window.open(urlDirecte, '_blank');

    // On vide le champ
    input.value = "";
}

// ==========================================
// 6. GESTION DES DOSSIERS
// ==========================================
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    if (folder) {
        const isHidden = (folder.style.display === 'none' || folder.style.display === '');
        document.querySelectorAll('.document-list').forEach(d => d.style.display = 'none');
        folder.style.display = isHidden ? 'block' : 'none';
    }
}
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.sidebar li');

// Ouvrir/Fermer le menu au clic sur le bouton
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Fermer le menu automatiquement quand on clique sur un lien (rubrique)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});

// Fermer le menu si on clique sur le contenu principal
document.querySelector('.main-content').addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('open');
    }
});
