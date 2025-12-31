// Fonction pour changer de section (Accueil, Devoirs, Cours, etc.)
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

    // Met à jour le titre de la page
    const titles = {
        'accueil': 'Tableau de Bord',
        'devoirs': 'Cahier de Textes',
        'cours': 'Mes Cours',
        'planning': 'Emploi du Temps'
    };
    document.getElementById('section-title').innerText = titles[sectionId] || 'SAMCLASS';

    // Met à jour le style actif dans la sidebar
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// Nouvelle fonction pour ouvrir/fermer les dossiers dans "Mes Cours"
function toggleFolder(folderId) {
    const targetList = document.getElementById(folderId);
    const allLists = document.querySelectorAll('.document-list');

    if (!targetList) {
        console.error("Le dossier " + folderId + " n'existe pas dans le HTML.");
        return;
    }

    // Fermer les autres listes ouvertes
    allLists.forEach(list => {
        if (list.id !== folderId) {
            list.style.display = 'none';
        }
    });

    // Basculer l'affichage (Toggle)
    if (targetList.style.display === 'none' || targetList.style.display === '') {
        targetList.style.display = 'block';
    } else {
        targetList.style.display = 'none';
    }
}
