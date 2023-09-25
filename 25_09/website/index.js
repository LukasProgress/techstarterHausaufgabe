
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Fehler beim Laden des Navigationsmenüs:', error);
        });
});
