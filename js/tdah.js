// Obtiene el botón con el ID 'hamburger-btn' y agrega un evento de escucha al hacer clic
document.getElementById('hamburger-btn').addEventListener('click', function() {

    // Obtiene el elemento del menú lateral con el ID 'side-menu'
    var padecimientos = document.getElementById('padecimientos');

    // Alterna la clase 'active' en el menú lateral
    // Si la clase 'active' está presente, se elimina; si no está, se agrega
    padecimientos.classList.add('active');
    padecimientos.classList.remove('disabled');
});

document.getElementById('cerrar').addEventListener('click', function() {
    // Obtiene el elemento del menú lateral con el ID 'side-menu'
    var padecimientos = document.getElementById('padecimientos');
    padecimientos.classList.add('disabled');
});