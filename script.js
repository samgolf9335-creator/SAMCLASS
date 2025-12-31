let isAuthenticated = false; 

function checkPassword() {
    const mdp = document.getElementById('class-password').value;
    const correctMdp = "SAM2024"; 

    if (mdp === correctMdp) {
        isAuthenticated = true;
        
        // 1. On cache le formulaire de login
        document.getElementById('login-form').style.display = 'none';
        
        // 2. On montre le message de bienvenue avec les rappels (futur simple, quartier)
        document.getElementById('welcome-message').style.display = 'block';
        
        // 3. On s'assure que la section accueil elle-même est visible
        document.getElementById('section-accueil').style.display = 'block';
        
        alert("Connexion réussie ! Vous pouvez maintenant naviguer dans le menu.");
    } else {
        alert("Mot de passe incorrect.");
    }
}

function showSection(sectionId) {
    // Bloquer la navigation si non connecté
    if (!isAuthenticated && sectionId !== 'accueil') {
        alert("Veuillez d'abord entrer le mot de passe sur l'accueil.");
        return;
    }

    // Masquer absolument toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => {
        s.style.display = 'none';
    });

    // Afficher la section demandée
    const target = document.getElementById('section-' + sectionId);
    if (target) {
        target.style.display = 'block';
    }

    // Gérer l'apparence du menu latéral
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Fonction pour les dossiers de cours (Lecture, Langue, Évaluations)
function toggleFolder(folderId) {
    const target = document.getElementById(folderId);
    if (target) {
        const isHidden = (target.style.display === 'none' || target.style.display === '');
        target.style.display = isHidden ? 'block' : 'none';
    }
}
