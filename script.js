function showSection(sectionName) {
    const title = document.getElementById('section-title');
    const content = document.getElementById('content-area');

    if (sectionName === 'accueil') {
        title.innerText = "Tableau de Bord";
        content.innerHTML = `<div class="welcome-card"><h2>Bonjour ! 👋</h2><p>Bienvenue sur votre espace SAMCLASS.</p></div>`;
    } 
    else if (sectionName === 'devoirs') {
        title.innerText = "Cahier de Textes";
        content.innerHTML = `<p>Ici, nous allons intégrer votre ancien projet de devoirs.</p>`;
    }
    // Ajoutez les autres sections ici...
}
function showSection(sectionId) {
    // 1. Cacher toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');

    // 2. Afficher la section demandée
    document.getElementById('section-' + sectionId).style.display = 'block';

    // 3. Mettre à jour le titre
    const titles = {
        'accueil': 'Tableau de Bord',
        'devoirs': 'Cahier de Textes',
        'cours': 'Mes Cours',
        'planning': 'Emploi du Temps'
    };
    document.getElementById('section-title').innerText = titles[sectionId];

    // 4. Gérer le style "actif" dans le menu
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    event.currentTarget.classList.add('active');
}
