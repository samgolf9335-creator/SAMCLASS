let isAuthenticated = false; 

// --- 1. CONNEXION ---
function checkPassword() {
    const mdp = document.getElementById('class-password').value;
    const correctMdp = "SAM2024"; 

    if (mdp === correctMdp) {
        isAuthenticated = true;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
        document.getElementById('section-accueil').style.display = 'block';
        alert("Connexion réussie ! Vous pouvez maintenant naviguer dans le menu.");
    } else {
        alert("Mot de passe incorrect.");
    }
}

// --- 2. NAVIGATION ---
function showSection(sectionId) {
    if (!isAuthenticated && sectionId !== 'accueil') {
        alert("Veuillez d'abord entrer le mot de passe sur l'accueil.");
        return;
    }

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => { s.style.display = 'none'; });

    const target = document.getElementById('section-' + sectionId);
    if (target) { target.style.display = 'block'; }

    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// --- 3. DOSSIERS DE COURS ---
function toggleFolder(folderId) {
    const target = document.getElementById(folderId);
    if (target) {
        const isHidden = (target.style.display === 'none' || target.style.display === '');
        target.style.display = isHidden ? 'block' : 'none';
    }
}

// --- 4. AJOUT DES DEVOIRS (La fonction manquante) ---
function addTask() {
    const input = document.getElementById('task-input');
    const subject = document.getElementById('subject-select');
    const dateInput = document.getElementById('date-input');
    const list = document.getElementById('task-list');

    if (input.value.trim() === "") return;

    // 1. Création de la carte de devoir pour l'onglet "Cahier de Textes"
    const item = document.createElement('div');
    item.style = "background:white; padding:15px; margin-top:10px; border-radius:8px; border-left:5px solid #3498db; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 4px rgba(0,0,0,0.1); color:#333;";
    
    item.innerHTML = `
        <div>
            <strong style="color:#3498db;">[${subject.value.toUpperCase()}]</strong> ${input.value}
            <br><small style="color:#777;">📅 Pour le : ${dateInput.value || 'Non précisé'}</small>
        </div>
        <button onclick="this.parentElement.remove()" style="background:#ff7675; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer; font-weight:bold;">❌</button>
    `;
    
    list.appendChild(item);

    // 2. MISE À JOUR AUTOMATIQUE DE L'ACCUEIL (Votre demande)
    const latestNews = document.getElementById('latest-news');
    if (latestNews) {
        latestNews.innerHTML = `
            <p style="margin:0;"><strong>📝 Dernier devoir ajouté :</strong></p>
            <p style="margin:5px 0 0 0; color:#2980b9;">${subject.value.toUpperCase()} : ${input.value} (prévu pour le ${dateInput.value || 'bientôt'})</p>
        `;
    }

    // 3. Réinitialisation du champ de saisie
    input.value = ""; 
}
