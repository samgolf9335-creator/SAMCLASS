// --- FONCTION DE NAVIGATION ---
function showSection(sectionId) {
    // Cacher toutes les sections
    const sections = document.querySelectorAll('.content-section, .planning-container');
    sections.forEach(s => s.style.display = 'none');

    // Afficher la section sélectionnée
    if (sectionId === 'planning') {
        document.querySelector('.planning-container').style.display = 'block';
        document.getElementById('section-title').innerText = "Emploi du Temps";
    } else {
        const target = document.getElementById('section-' + sectionId);
        if (target) target.style.display = 'block';
        
        // Mise à jour du titre
        const titles = { 'accueil': 'Tableau de Bord', 'devoirs': 'Cahier de Textes', 'cours': 'Mes Cours' };
        document.getElementById('section-title').innerText = titles[sectionId] || "SAMCLASS";
    }

    // Gérer l'état actif dans la sidebar
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// --- GESTION DU CAHIER DE TEXTES ---
let tasks = JSON.parse(localStorage.getItem('samclass_tasks')) || [];

function addTask() {
    const text = document.getElementById('task-input').value;
    const subject = document.getElementById('subject-select').value;
    const date = document.getElementById('date-input').value;

    if (!text || !date) return alert("Veuillez remplir les champs !");

    const newTask = { id: Date.now(), text, subject, date };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    
    document.getElementById('task-input').value = ""; // Reset
}

function renderTasks() {
    const list = document.getElementById('task-list');
    list.innerHTML = '';
    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task-card';
        div.innerHTML = `
            <div>
                <strong>[${task.subject.toUpperCase()}]</strong> ${task.text} <br>
                <small>Pour le : ${task.date}</small>
            </div>
            <button onclick="deleteTask(${task.id})" style="background:none; border:none; color:red; cursor:pointer;">❌</button>
        `;
        list.appendChild(div);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('samclass_tasks', JSON.stringify(tasks));
}

// Charger les devoirs au lancement
renderTasks();
// --- FONCTION DE NAVIGATION ---
function showSection(sectionId) {
    // 1. Cacher toutes les sections
    const sections = document.querySelectorAll('.content-section, .planning-container');
    sections.forEach(s => s.style.display = 'none');

    // 2. Afficher la bonne section
    if (sectionId === 'planning') {
        document.querySelector('.planning-container').style.display = 'block';
        document.getElementById('section-title').innerText = "Emploi du Temps";
    } else {
        const target = document.getElementById('section-' + sectionId);
        if (target) target.style.display = 'block';
        
        const titles = { 'accueil': 'Tableau de Bord', 'devoirs': 'Cahier de Textes', 'cours': 'Mes Cours' };
        document.getElementById('section-title').innerText = titles[sectionId] || "SAMCLASS";
    }

    // 3. Mettre à jour le style du menu
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    // On trouve l'élément cliqué via l'événement
    event.currentTarget.classList.add('active');
}

// --- GESTION DU CAHIER DE TEXTES ---
let tasks = JSON.parse(localStorage.getItem('samclass_tasks')) || [];

function addTask() {
    const text = document.getElementById('task-input').value;
    const type = document.getElementById('subject-select').value;
    const date = document.getElementById('date-input').value;

    if (!text || !date) {
        alert("Veuillez remplir le texte et la date !");
        return;
    }

    const newTask = { id: Date.now(), text, type, date };
    tasks.push(newTask);
    saveAndRender();
    document.getElementById('task-input').value = ""; // Vider le champ
}

function saveAndRender() {
    localStorage.setItem('samclass_tasks', JSON.stringify(tasks));
    const list = document.getElementById('task-list');
    list.innerHTML = '';

    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task-card';
        div.innerHTML = `
            <div>
                <strong>[${task.type.toUpperCase()}]</strong> ${task.text}<br>
                <small>📅 Pour le : ${task.date}</small>
            </div>
            <button onclick="deleteTask(${task.id})" style="color:red; cursor:pointer; background:none; border:none; font-weight:bold;">Supprimer</button>
        `;
        list.appendChild(div);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveAndRender();
}

// Charger les devoirs au démarrage
saveAndRender();
// --- FONCTION DE NAVIGATION ---
function showSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Afficher la section demandée
    const target = document.getElementById('section-' + sectionId);
    if (target) {
        target.style.display = 'block';
    }

    // Mettre à jour le titre
    const titles = { 'accueil': 'Tableau de Bord', 'devoirs': 'Cahier de Textes', 'cours': 'Mes Cours', 'planning': 'Emploi du Temps' };
    document.getElementById('section-title').innerText = titles[sectionId] || "SAMCLASS";

    // Gérer l'état actif du menu
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// --- GESTION DES DEVOIRS ---
let tasks = JSON.parse(localStorage.getItem('samclass_tasks')) || [];

function addTask() {
    const text = document.getElementById('task-input').value;
    const type = document.getElementById('subject-select').value;
    const date = document.getElementById('date-input').value;

    if (!text || !date) return alert("Veuillez remplir tous les champs !");

    const newTask = { id: Date.now(), text, type, date };
    tasks.push(newTask);
    saveAndRender();
    document.getElementById('task-input').value = "";
}

function saveAndRender() {
    localStorage.setItem('samclass_tasks', JSON.stringify(tasks));
    const list = document.getElementById('task-list');
    list.innerHTML = '';
    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.innerHTML = `
            <div>
                <strong>[${task.type.toUpperCase()}]</strong> ${task.text} <br>
                <small>📅 Pour le : ${task.date}</small>
            </div>
            <button onclick="deleteTask(${task.id})" style="border:none; background:none; cursor:pointer; font-size:18px;">❌</button>
        `;
        list.appendChild(card);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveAndRender();
}

// Initialisation
window.onload = saveAndRender;
