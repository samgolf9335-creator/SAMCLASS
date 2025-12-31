// --- 1. NAVIGATION ENTRE LES SECTIONS ---
function showSection(sectionId) {
    // On cache toutes les sections (Accueil, Devoirs, Cours...)
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');

    // On affiche la section sélectionnée
    const target = document.getElementById('section-' + sectionId);
    if (target) target.style.display = 'block';

    // On change le titre du Header
    const titles = {
        'accueil': 'Tableau de Bord',
        'devoirs': 'Cahier de Textes',
        'cours': 'Mes Cours',
        'planning': 'Emploi du Temps'
    };
    document.getElementById('section-title').innerText = titles[sectionId] || 'SAMCLASS';

    // On met à jour l'apparence du menu à gauche
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// --- 2. GESTION DU CAHIER DE TEXTES ---
function addTask() {
    const input = document.getElementById('task-input');
    const subject = document.getElementById('subject-select');
    const date = document.getElementById('date-input');
    const list = document.getElementById('task-list');

    if (input.value.trim() === "") {
        alert("Veuillez saisir un devoir.");
        return;
    }

    const item = document.createElement('div');
    item.style = "background:white; padding:15px; margin-top:10px; border-radius:8px; border-left:5px solid #3498db; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);";
    
    item.innerHTML = `
        <div>
            <strong>[${subject.value.toUpperCase()}]</strong> ${input.value}
            <br><small style="color:#666">📅 Pour le : ${date.value || 'Non précisé'}</small>
        </div>
        <button onclick="this.parentElement.remove()" style="background:#ff7675; color:white; border:none; padding:8px 12px; border-radius:5px; cursor:pointer;">Supprimer</button>
    `;

    list.appendChild(item);
    input.value = ""; // On vide le champ après l'ajout
}

// --- 3. OUVERTURE DES DOSSIERS (Correction de ton erreur) ---
function toggleFolder(folderId) {
    const allLists = document.querySelectorAll('.document-list');
    const target = document.getElementById(folderId);

    if (!target) {
        console.error("Erreur : La liste avec l'ID " + folderId + " est introuvable.");
        return;
    }

    // On ferme tous les autres dossiers ouverts
    allLists.forEach(list => {
        if (list.id !== folderId) {
            list.style.display = 'none';
        }
    });

    // On affiche ou cache le dossier cliqué
    if (target.style.display === 'none' || target.style.display === '') {
        target.style.display = 'block';
    } else {
        target.style.display = 'none';
    }
}
