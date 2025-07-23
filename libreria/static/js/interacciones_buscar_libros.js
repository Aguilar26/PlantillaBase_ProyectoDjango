document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    const campoBusqueda = document.querySelector('#query');

    if (campoBusqueda) {
        campoBusqueda.focus();  
    }

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            if (!campoBusqueda.value.trim()) {
                event.preventDefault();
                campoBusqueda.style.border = '2px solid red';

                // Si ya existe una advertencia, no duplicarla
                if (!document.querySelector('.advertencia')) {
                    const advertencia = document.createElement('p');
                    advertencia.textContent = '⚠️ Por favor, ingresa un término de búsqueda.';
                    advertencia.classList.add('advertencia');
                    advertencia.style.color = 'red';
                    advertencia.style.fontWeight = 'bold';
                    formulario.appendChild(advertencia);
                }
            } else {
                campoBusqueda.style.border = '';
                const advertencia = document.querySelector('.advertencia');
                if (advertencia) {
                    advertencia.remove();  
                }
            }
        });
    }
});
