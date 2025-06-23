//PARA LA MODAL

// Espera a que el contenido del DOM se cargue completamente antes de ejecutar el script
//Document es tu html
document.addEventListener('DOMContentLoaded', function() {

  // Selección de elementos del DOM
  var cerrar = document.getElementById('cerrar'); // Obtiene el botón de cerrar (X)
  var modal = document.getElementById('miModal'); // Obtiene el modal por su ID

//Si tu cajita obtiene modalAbierto tendra ese valor(seria como que esto es como asignarle las consecuencias si le asignas un valor a tu cajita)
  if(localStorage.getItem("modalAbierto"))
    {
      modal.style.display = 'none';
    }

    
    //====== Evento para cerrar el modal al hacer clic en la 'X' ======
    cerrar.onclick = function() {
        modal.style.display = 'none'; // Oculta el modal cambiando su propiedad display si o si lo tiene que hacer el boton
        localStorage.setItem("modalAbierto", true);//Aqui tu cajita ahora si coloca modalAbierto con un valor dentro de ella de verdadero y pasa lo que vendrian siendo sus consecuensias que vimos en el if
  }
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
);

// Recorremos cada párrafo y lo registramos en el observer.
// Así, cada uno será monitoreado de forma independiente.
paragraphs.forEach(p => observer.observe(p));
// Cuando un párrafo entra o sale de la zona visible, IntersectionObserver ejecuta la función definida arriba.



