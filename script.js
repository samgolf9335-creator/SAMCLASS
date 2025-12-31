// --- GESTION DES SECTIONS ---
function showSection(sectionId) {
    // Cache toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Affiche la section demandée
    const targetSection = document.getElementById('section-' + sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Met à jour le titre
    const titles = {
        'accueil': 'Tableau de Bord',
        'devoirs': 'Cahier de Textes',
        'cours': 'Mes Cours',
        'planning': 'Emploi du Temps'
    };
    document.getElementById('section-title').innerText = titles[sectionId] || 'SAMCLASS';

    // Met à jour le menu actif
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    // Utilisation de event pour cibler l'élément cliqué
    if (event) event.currentTarget.classList.add('active');
}

// --- GESTION DU CAHIER DE TEXTES (DEVOIRS) ---
function addTask() {
    const taskInput = document.getElementById('task-input');
    const subjectSelect = document.getElementById('subject-select');
    const dateInput = document.getElementById('date-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value === '') {
        alert("Veuillez entrer un devoir !");
        return;
    }

    // Création de l'élément de devoir
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item'; // Assure-toi d'avoir ce style dans ton CSS
    taskDiv.style = "background: white; padding: 10px; margin-top: 10px; border-radius: 8px; border-left: 5px solid #3498db; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);";
    
    taskDiv.innerHTML = `
        <div>
            <strong>[${subjectSelect.value.toUpperCase()}]</strong> ${taskInput.value} 
            <br><small>Pour le : ${dateInput.value || 'Non précisé'}</small>
        </div>
        <button onclick="this.parentElement.remove()" style="background:#ff7675; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Supprimer</button>
    `;

    taskList.appendChild(taskDiv);

    // Réinitialisation des champs
    taskInput.value = '';
}

// --- GESTION DES DOSSIERS DE COURS ---
function toggleFolder(folderId) {
    const targetList = document.getElementById(folderId);
    const allLists = document.querySelectorAll('.document-list');

    if (!targetList) return;

    allLists.forEach(list => {
        if (list.id !== folderId) {
            list.style.display = 'none';
        }
    });

    if (targetList.style.display === 'none' || targetList.style.display === '') {
        targetList.style.display = 'block';
    } else {
        targetList.style.display = 'none';
    }
}
