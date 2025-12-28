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
