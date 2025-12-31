// ==========================================
// 1. GESTION DE LA NAVIGATION (MENU)
// ==========================================
function showSection(sectionId) {
    // On récupère toutes les sections qui ont la classe 'content-section'
    const sections = document.querySelectorAll('.content-section');
    
    // On les cache toutes une par une
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // On affiche uniquement celle qui a l'ID correspondant
    const activeSection = document.getElementById('section-' + sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // On met à jour le titre affiché en haut de la page
    const titles = {
        'accueil': 'Tableau de Bord',
        'devoirs': 'Cahier de Textes',
        'cours': 'Mes Cours',
        'planning': 'Emploi du Temps'
    };
    document.getElementById('section-title').innerText = titles[sectionId];

    // On change l'apparence du menu (bouton bleu pour la section active)
    document.querySelectorAll('.sidebar li').forEach(li => {
        li.classList.remove('active');
    });
    // 'event.currentTarget' désigne le bouton sur lequel on a cliqué
    if (event) {
        event.currentTarget.classList.add('active');
    }
}

// ==========================================
// 2. GESTION DU CAHIER DE TEXTES
// ==========================================

// On récupère les devoirs déjà enregistrés dans le navigateur, ou un tableau vide []
let tasks = JSON.parse(localStorage.getItem('samclass_tasks')) || [];

// Fonction pour ajouter un nouveau devoir
function addTask() {
    const text = document.getElementById('task-input').value;
    const subject = document.getElementById('subject-select').value;
    const date = document.getElementById('date-input').value;

    // Vérification : on ne veut pas de devoir vide
    if (text === "" || date === "") {
        alert("Oups ! Tu as oublié de remplir le texte ou la date.");
        return;
    }

    // Création de l'objet "devoir"
    const newTask = {
        id: Date.now(), // Un numéro unique basé sur l'heure
        text: text,
        subject: subject,
        date: date
    };

    // On l'ajoute à notre liste
    tasks.push(newTask);

    // On enregistre et on affiche
    saveAndRender();

    // On vide le champ de texte pour le prochain devoir
    document.getElementById('task-input').value = "";
}

// Fonction pour enregistrer dans le navigateur et rafraîchir l'affichage
function saveAndRender() {
    // Sauvegarde permanente dans le navigateur
    localStorage.setItem('samclass_tasks', JSON.stringify(tasks));

    const list = document.getElementById('task-list');
    list.innerHTML = ''; // On vide la liste actuelle avant de la reconstruire

    // On crée chaque carte de devoir
    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task-card'; // Utilise le style défini dans ton CSS
        
        div.innerHTML = `
            <div>
                <strong>${task.subject.toUpperCase()}</strong> : ${task.text} <br>
                <small>📅 Pour le : ${new Date(task.date).toLocaleDateString('fr-FR')}</small>
            </div>
            <button onclick="deleteTask(${task.id})" style="background:#ff4d4d; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Supprimer</button>
        `;
        list.appendChild(div);
    });
}

// Fonction pour supprimer un devoir
function deleteTask(id) {
    // On garde tous les devoirs sauf celui qui a l'ID qu'on veut supprimer
    tasks = tasks.filter(task => task.id !== id);
    saveAndRender();
}

// ==========================================
// 3. LANCEMENT AU DÉMARRAGE
// ==========================================
// On affiche les devoirs dès que la page est chargée
window.onload = saveAndRender;
// Afficher le bouton quand on descend de 300px
window.onscroll = function() {
    const btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Fonction pour remonter en haut doucement
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function toggleFolder(folderId) {
    // Liste de tous les dossiers de documents
    const allFolders = document.querySelectorAll('.document-list');
    
    // On cache tous les autres dossiers avant d'ouvrir le nouveau
    allFolders.forEach(folder => {
        if (folder.id !== folderId) {
            folder.style.display = 'none';
        }
    });

    // On affiche ou cache le dossier cliqué
    const target = document.getElementById(folderId);
    if (target.style.display === 'none') {
        target.style.display = 'block';
    } else {
        target.style.display = 'none';
    }
}
