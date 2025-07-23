document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.querySelector('#query');
    const formulario = document.querySelector('form');

    if (buscador) {
        buscador.focus(); 
    }

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            if (!buscador.value.trim()) {
                event.preventDefault();
                alert('Por favor ingresa un término de búsqueda.');
            }
        });
    }
});
