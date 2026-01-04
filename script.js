// On enveloppe tout dans un écouteur d'événement pour attendre le chargement complet du HTML
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. GESTION DU BOUTON RETOUR EN HAUT
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

    // 2. INITIALISATION DE L'AFFICHAGE (Montrer l'accueil par défaut)
    showSection('accueil');
});

// --- FONCTION DE NAVIGATION ---
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');

    const targetSection = document.getElementById('section-' + sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Mise à jour visuelle du menu latéral
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    const activeMenu = document.getElementById('menu-' + sectionId);
    if (activeMenu) {
        activeMenu.classList.add('active');
    }
}
      
        // Optionnel : Enregistrer l'accès pour cette session
        sessionStorage.setItem('accessGranted', 'true');
    } else {
        // ÉCHEC : On montre l'erreur
        errorMsg.style.display = 'block';
    }
}
// Variable globale pour suivre la connexion
let isAuthenticated = false;

function checkPassword() {
    const passwordInput = document.getElementById('class-password');
    const welcomeMsg = document.getElementById('welcome-message');
    const loginForm = document.getElementById('login-form');
    const errorMsg = document.getElementById('login-error');

    if (passwordInput.value === 'SAM2026') {
        isAuthenticated = true; // Débloque l'accès
        loginForm.style.display = 'none'; 
        welcomeMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        alert("Accès autorisé ! Bienvenue sur SAMCLASS.");
    } else {
        errorMsg.style.display = 'block';
        isAuthenticated = false;
    }
}

function showSection(sectionId) {
    // SÉCURITÉ : Si l'élève n'est pas connecté et veut voir autre chose que l'accueil
    if (!isAuthenticated && sectionId !== 'accueil') {
        alert("🔒 Veuillez d'abord entrer le code secret sur la page d'accueil.");
        return; // Arrête la fonction ici
    }

    // Sinon, on affiche la section normalement
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');

    const targetSection = document.getElementById('section-' + sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Mise à jour visuelle du menu
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    const activeMenu = document.getElementById('menu-' + sectionId);
    if (activeMenu) {
        activeMenu.classList.add('active');
    }
}
// --- GESTION DES DOSSIERS DE COURS ---
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    if (folder) {
        const isHidden = (folder.style.display === 'none' || folder.style.display === '');
        // Ferme tous les autres dossiers d'abord
        document.querySelectorAll('.document-list').forEach(d => d.style.display = 'none');
        // Ouvre ou ferme le dossier cliqué
        folder.style.display = isHidden ? 'block' : 'none';
    }
}
