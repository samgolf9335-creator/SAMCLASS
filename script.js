let isAuthenticated = false; 

// 1. CHARGEMENT AUTOMATIQUE
window.onload = function() {
    console.log("Chargement des devoirs...");
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const list = document.getElementById('task-list');
    
    if (list) {
        savedTasks.forEach(task => {
            renderTask(task.text, task.subject, task.date);
        });
    }
};

// 2. CONNEXION
function checkPassword() {
    const mdp = document.getElementById('class-password').value;
    if (mdp === "SAM2024") {
        isAuthenticated = true;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
        document.getElementById('section-accueil').style.display = 'block';
    } else {
        alert("Mot de passe incorrect.");
    }
}

// 3. NAVIGATION
function showSection(sectionId) {
    if (!isAuthenticated && sectionId !== 'accueil') {
        alert("Veuillez entrer le mot de passe sur l'accueil.");
        return;
    }
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');
    const target = document.getElementById('section-' + sectionId);
    if (target) target.style.display = 'block';
}

// 4. AJOUTER ET SAUVEGARDER
function addTask() {
    const input = document.getElementById('task-input');
    const subject = document.getElementById('subject-select');
    const dateInput = document.getElementById('date-input');

    if (input.value.trim() === "") return;

    // Affichage immédiat
    renderTask(input.value, subject.value, dateInput.value);

    // Sauvegarde
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push({ text: input.value, subject: subject.value, date: dateInput.value });
    localStorage.setItem('tasks', JSON.stringify(savedTasks));

    // Mise à jour de l'accueil
    const news = document.getElementById('latest-news');
    if (news) {
        news.innerHTML = `<p><strong>📝 Dernier devoir :</strong> ${input.value}</p>`;
    }

    input.value = ""; 
}

function renderTask(text, subject, date) {
    const list = document.getElementById('task-list');
    const item = document.createElement('div');
    item.style = "background:white; padding:15px; margin-top:10px; border-radius:8px; border-left:5px solid #3498db; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);";
    
    item.innerHTML = `
        <div>
            <strong style="color:#3498db;">[${subject.toUpperCase()}]</strong> ${text}
            <br><small style="color:#777;">📅 Pour le : ${date || 'Non précisé'}</small>
        </div>
        <button onclick="deleteTask(this, '${text}')" style="background:#ff7675; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">❌</button>
    `;
    list.appendChild(item);
}

function deleteTask(element, text) {
    element.parentElement.remove();
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks = savedTasks.filter(t => t.text !== text);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

function toggleFolder(folderId) {
    const target = document.getElementById(folderId);
    if (target) {
        target.style.display = (target.style.display === 'none' || target.style.display === '') ? 'block' : 'none';
    }
}
