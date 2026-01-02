function checkPassword() {
    const pass = document.getElementById('class-password').value;
    if (pass === '1234') { // Remplacez par votre code réel
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function showSection(id) {
    // Masquer toutes les sections
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    // Afficher la bonne
    document.getElementById('section-' + id).style.display = 'block';
    // Mettre à jour le menu actif
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    document.getElementById('menu-' + id).classList.add('active');
    // Titre
    const titles = {'accueil': 'Tableau de Bord', 'notes': 'Mes Notes', 'devoirs': 'Cahier de Textes', 'cours': 'Mes Cours', 'planning': 'Emploi du Temps'};
    document.getElementById('section-title').innerText = titles[id];
}
