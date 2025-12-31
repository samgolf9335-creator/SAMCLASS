// --- NAVIGATION ---
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');
    const target = document.getElementById('section-' + sectionId);
    if (target) target.style.display = 'block';

    const titles = {'accueil': 'Tableau de Bord', 'devoirs': 'Cahier de Textes', 'cours': 'Mes Cours', 'planning': 'Emploi du Temps'};
    document.getElementById('section-title').innerText = titles[sectionId] || 'SAMCLASS';

    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');
}

// --- CAHIER DE TEXTES ---
function addTask() {
    const input = document.getElementById('task-input');
    const subject = document.getElementById('subject-select');
    const date = document.getElementById('date-input');
    const list = document.getElementById('task-list');

    if (input.value.trim() === "") return;

    const item = document.createElement('div');
    item.style = "background:white; padding:15px; margin-top:10px; border-radius:8px; border-left:5px solid #3498db; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);";
    item.innerHTML = `<div><strong>[${subject.value.toUpperCase()}]</strong> ${input.value}<br><small>📅 Pour le : ${date.value || 'Non précisé'}</small></div>
                      <button onclick="this.parentElement.remove()" style="background:#ff7675; color:white; border:none; padding:8px 12px; border-radius:5px; cursor:pointer;">Supprimer</button>`;
    list.appendChild(item);
    input.value = "";
}

// --- DOSSIERS DE COURS ---
function toggleFolder(folderId) {
    const target = document.getElementById(folderId);
    const allLists = document.querySelectorAll('.document-list');

    allLists.forEach(list => {
        if (list.id !== folderId) list.style.display = 'none';
    });

    if (target) {
        target.style.display = (target.style.display === 'none' || target.style.display === '') ? 'block' : 'none';
    }
}
