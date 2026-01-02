function checkPassword() {
    const password = document.getElementById('class-password').value;
    if (password === 'SAM2024') { // Remplacez par votre code
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function showSection(id) {
    // Cacher toutes les sections
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    // Afficher la section demandée
    document.getElementById('section-' + id).style.display = 'block';
    
    // Gérer l'état actif dans la sidebar
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    document.getElementById('menu-' + id).classList.add('active');

    // Changer le titre
    const titles = {
        'accueil': 'Tableau de Bord',
        'notes': 'Mes Notes & Bulletins',
        'devoirs': 'Cahier de Textes',
        'cours': 'Mes Cours',
        'planning': 'Emploi du Temps'
    };
    document.getElementById('section-title').innerText = titles[id];
}

function toggleFolder(id) {
    const folder = document.getElementById(id);
    folder.style.display = (folder.style.display === "none") ? "block" : "none";
}
