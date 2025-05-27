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


// Función para cambiar el tamaño de la fuente

function changeFontSize(delta) {
    // Selecciona el elemento que contiene el texto
    const textElement = document.getElementById("text-content");

    // Obtiene el tamaño de fuente actual del elemento
    const style = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
    
    // Convierte el tamaño de fuente obtenido a número (elimina 'px')
    const currentSize = parseFloat(style);

    // Aplica el nuevo tamaño de fuente sumando el incremento (delta)
    textElement.style.fontSize = (currentSize + delta) + 'px';
}



// Seleccionamos todos los elementos <p> dentro del contenedor #content
const paragraphs = document.querySelectorAll('#content p');
// 'paragraphs' será un NodeList con todos los párrafos del contenido.

// Creamos un nuevo IntersectionObserver, que nos permite detectar
// si un elemento (en este caso cada párrafo) entra o sale del viewport (zona visible de la pantalla).
const observer = new IntersectionObserver(
  (entries) => {
    // 'entries' es un array de objetos, cada uno corresponde a un elemento observado
    entries.forEach(entry => {
      // entry.isIntersecting es true si el elemento es visible (aunque sea parcial)
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Si el párrafo está (al menos un poco) visible en el viewport,
        // se le añade la clase 'visible', que normalmente activa el fade-in en CSS.
      } else {
        entry.target.classList.remove('visible');
        // Si el párrafo deja de ser visible, se elimina la clase 'visible'
        // Esto activa el fade-out en CSS.
      }
    });
  }, 
  {
    threshold: 0.1 // Opcional: determina el porcentaje visible necesario para activar el efecto.
    // threshold: 0.1 significa que cuando al menos el 10% del párrafo es visible, se activa la detección.
    // Puedes ajustar este valor para hacer el efecto más o menos sensible.
  }
);

// Recorremos cada párrafo y lo registramos en el observer.
// Así, cada uno será monitoreado de forma independiente.
paragraphs.forEach(p => observer.observe(p));
// Cuando un párrafo entra o sale de la zona visible, IntersectionObserver ejecuta la función definida arriba.


