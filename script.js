// 1. VARIABLES GLOBALES
let isAuthenticated = false; // Bloqué par défaut

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation : Montrer l'accueil par défaut
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

// 2. FONCTION DE CONNEXION (Unique et corrigée)
function checkPassword() {
    const passwordInput = document.getElementById('class-password');
    const errorMsg = document.getElementById('login-error');
    const loginForm = document.getElementById('login-form');
    const welcomeMsg = document.getElementById('welcome-message');

    // Le mot de passe choisi
    if (passwordInput.value === 'SAM2026') {
        isAuthenticated = true; // ON DÉBLOQUE L'ACCÈS
        
        loginForm.style.display = 'none'; 
        welcomeMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        
        alert("✅ Code correct ! Contenu débloqué.");
    } else {
        errorMsg.style.display = 'block';
        passwordInput.value = ""; // Efface le mauvais code
    }
}

// 3. NAVIGATION SÉCURISÉE
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

    // Mise à jour du menu
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    const activeMenu = document.getElementById('menu-' + sectionId);
    if (activeMenu) {
        activeMenu.classList.add('active');
    }
}

// 4. GESTION DES DOSSIERS
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    if (folder) {
        const isHidden = (folder.style.display === 'none' || folder.style.display === '');
        document.querySelectorAll('.document-list').forEach(d => d.style.display = 'none');
        folder.style.display = isHidden ? 'block' : 'none';
    }
}
function rechercherBulletin() {
    const input = document.getElementById('massar-input');
    const code = input.value.trim().toUpperCase();
    
    if (code === "") {
        alert("Veuillez entrer votre code Massar");
        return;
    }

    // Votre ID de dossier extrait de votre lien
    const idDossier = "150ShkQJgqueDV2-p6DBREokv6n3-4fdi"; 

    // Nouvelle syntaxe de recherche Google Drive "Infaillible"
    // Cette commande cherche un fichier qui a le CODE dans son titre ET qui est dans votre dossier
    const requete = encodeURIComponent(`name contains '${code}' and '${idDossier}' in parents`);
    
    const urlRecherche = `https://drive.google.com/drive/u/0/search?q=${requete}`;

    // Ouverture de la recherche
    window.open(urlRecherche, '_blank');

    // Nettoyage du champ
    input.value = "";
}
// Dans script.js
const idDossier = "150ShkQJgqueDV2-p6DBREokv6n3-4fdi";
const urlRecherche = `https://drive.google.com/drive/u/0/search?q=parent:${idDossier}%20title:${code}`;
