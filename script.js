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

function checkPassword() {
    // Récupération des éléments
    const passwordInput = document.getElementById('class-password');
    const errorMsg = document.getElementById('login-error');
    const loginForm = document.getElementById('login-form');
    const welcomeMsg = document.getElementById('welcome-message');

    // Vérification (Exemple avec le code 'SAM2026')
    if (passwordInput.value === 'SAM2026') {
        // SUCCÈS : On cache le formulaire et on montre le message de bienvenue
        loginForm.style.display = 'none'; 
        welcomeMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        
        // Optionnel : Enregistrer l'accès pour cette session
        sessionStorage.setItem('accessGranted', 'true');
    } else {
        // ÉCHEC : On montre l'erreur
        errorMsg.style.display = 'block';
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
