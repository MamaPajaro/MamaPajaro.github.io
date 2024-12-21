// Obtener elementos
const botonCircular = document.getElementById('botonCircular');
const modal = document.getElementById('modalImagen');
const closeBtn = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
const movil = document.querySelector('.movil');
const recomendado = document.querySelector('.recomendado');
const edge = document.querySelector('#edge');

// Función para verificar si es una pantalla de al menos 1366x768
function esPCGrande() {
    return window.innerWidth >= 900 && window.innerHeight >= 530;
}

  // Mostrar el modal al hacer clic en el botón
  botonCircular.onclick = function() {
    if (esPCGrande()) {
        modal.style.display = 'flex'; // Mostrar el modal

        // Establecer display flex para los elementos del modal
        modalContent.style.display = 'flex';
        movil.style.display = 'flex';
        recomendado.style.display = 'flex';
        closeBtn.style.display = 'flex';
        edge.style.display = 'flex';

        // Usar un setTimeout para permitir que el display se aplique antes de la animación
        setTimeout(() => {
            modalContent.style.opacity = '1'; // Hacer visible el contenido
            modalContent.style.transform = 'scale(1)'; // Escalar a tamaño original
        }, 10);
    }
}

// Cerrar el modal al hacer clic en la 'x'
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

