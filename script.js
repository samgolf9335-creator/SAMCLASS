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
