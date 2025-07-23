document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            const campos = formulario.querySelectorAll('input, select, textarea');
            let error = false;

            campos.forEach(campo => {
                if (
                    campo.type !== 'hidden' && 
                    campo.type !== 'submit' && 
                    campo.value.trim() === ''
                ) {
                    campo.style.border = '2px solid red';
                    error = true;
                } else {
                    campo.style.border = '';
                }
            });

            if (error) {
                event.preventDefault();
                alert('⚠️ Por favor, completá todos los campos antes de guardar el libro.');
            } else {
                alert('✅ Libro registrado con éxito.');
            }
        });
    }
});
