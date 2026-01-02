/* ==========================================================================
   1. GESTION DES SECTIONS (NAVIGATION)
   ========================================================================== */
function showSection(sectionId) {
    // 1. Cacher toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 2. Afficher la section demandée
    const activeSection = document.getElementById('section-' + sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // 3. Mettre à jour le titre du header
    const titleMap = {
        'accueil': 'Tableau de Bord',
        'devoirs': 'Cahier de Textes',
        'cours': 'Mes Cours de Français',
        'notes': 'Mes Résultats - 2025/2026',
        'planning': 'Emploi du Temps'
    };
    document.getElementById('section-title').innerText = titleMap[sectionId] || 'SAMCLASS';

    // 4. Mettre à jour le style de la sidebar
    const menuItems = document.querySelectorAll('.sidebar li');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Ajoute la classe active au menu correspondant
    const activeMenu = document.getElementById('menu-' + sectionId);
    if (activeMenu) activeMenu.classList.add('active');
}

/* ==========================================================================
   2. SYSTÈME DE MOT DE PASSE
   ========================================================================== */
function checkPassword() {
    const passwordInput = document.getElementById('class-password').value;
    const errorMsg = document.getElementById('login-error');
    const loginForm = document.getElementById('login-form');
    const welcomeMsg = document.getElementById('welcome-message');

    // Remplacez '1234' par le code de votre choix
    if (passwordInput === 'SAM2026') {
        loginForm.style.display = 'none';
        welcomeMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        // Optionnel : Sauvegarder la connexion pour la session
        sessionStorage.setItem('isLoggedIn', 'true');
    } else {
        errorMsg.style.display = 'block';
    }
}

/* ==========================================================================
   3. GESTION DU CAHIER DE TEXTES (DEVOIRS)
   ========================================================================== */
function addTask() {
    const taskText = document.getElementById('task-input').value;
    const subject = document.getElementById('subject-select').value;
    const date = document.getElementById('date-input').value;
    const taskList = document.getElementById('task-list');

    if (taskText === '' || date === '') {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Création de la carte de devoir
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    
    // Formatage de la date en français
    const dateObj = new Date(date);
    const dateFr = dateObj.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    taskCard.innerHTML = `
        <span class="subject-tag tag-${subject}">${subject.toUpperCase()}</span>
        <p class="task-date">📅 Pour le : ${dateFr}</p>
        <p class="task-text">${taskText}</p>
        <button onclick="this.parentElement.remove()" style="margin-top:10px; color:red; cursor:pointer; background:none; border:none; font-size:0.8rem;">❌ Supprimer</button>
    `;

    taskList.prepend(taskCard); // Ajoute le devoir en haut de la liste

    // Réinitialisation des champs
    document.getElementById('task-input').value = '';
}

/* ==========================================================================
   4. GESTION DES DOSSIERS DE COURS
   ========================================================================== */
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    const allFolders = document.querySelectorAll('.document-list');

    // Fermer les autres dossiers si on en ouvre un
    allFolders.forEach(f => {
        if (f.id !== folderId) f.style.display = 'none';
    });

    // Basculer l'affichage (Ouvert/Fermé)
    if (folder.style.display === 'none' || folder.style.display === '') {
        folder.style.display = 'block';
    } else {
        folder.style.display = 'none';
    }
}

/* ==========================================================================
   5. BOUTON RETOUR EN HAUT
   ========================================================================== */
const backToTopBtn = document.getElementById('back-to-top');
const mainContent = document.querySelector('.main-content');

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
