function checkPassword() {
    const password = document.getElementById('class-password').value;
    if (password === '1234') { 
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById('section-' + id).style.display = 'block';
    
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    document.getElementById('menu-' + id).classList.add('active');
    
    const titles = {'accueil': 'Tableau de Bord', 'notes': 'Mes Notes', 'devoirs': 'Cahier de Textes', 'cours': 'Mes Cours', 'planning': 'Emploi du Temps'};
    document.getElementById('section-title').innerText = titles[id];
}
