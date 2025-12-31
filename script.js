let isAuthenticated = false; 

// --- CONNEXION ---
function checkPassword() {
    const mdp = document.getElementById('class-password').value;
    const correctMdp = "SAM2024"; 

    if (mdp === correctMdp) {
        isAuthenticated = true;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

// --- NAVIGATION ---
function showSection(sectionId) {
    if (!isAuthenticated && sectionId !== 'accueil') {
        alert("Veuillez vous connecter sur la page d'accueil d'abord.");
        return;
    }

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');
    
    const target = document.getElementById('section-' + sectionId);
    if (target) target.style.display = 'block';

    const titles = {'accueil': 'Tableau de Bord', 'devoirs': 'Cahier de Textes', 'cours': 'Mes Cours', 'planning': 'Emploi du Temps'};
    document.getElementById('section-title').innerText = titles[sectionId] || 'SAMCLASS';

    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

// --- DOSSIERS & DEVOIRS ---
function toggleFolder(folderId) {
    const target = document.getElementById(folderId);
    document.querySelectorAll('.document-list').forEach(list => {
        if (list.id !== folderId) list.style.display = 'none';
    });
    if (target) target.style.display = (target.style.display === 'none' || target.style.display === '') ? 'block' : 'none';
}

function addTask() {
    const input = document.getElementById('task-input');
    const subject = document.getElementById('subject-select');
    const list = document.getElementById('task-list');
    if (input.value.trim() === "") return;
    const item = document.createElement('div');
    item.className = "task-item";
    item.innerHTML = `<strong>[${subject.value.toUpperCase()}]</strong> ${input.value} <button onclick="this.parentElement.remove()">X</button>`;
    list.appendChild(item);
    input.value = "";
}
