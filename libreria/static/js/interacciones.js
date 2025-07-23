document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            const campos = formulario.querySelectorAll('input, select');
            let camposVacios = [];

            campos.forEach(campo => {
                if (campo.value.trim() === '' && campo.type !== 'hidden') {
                    camposVacios.push(campo.name);
                    campo.style.border = '2px solid red';
                } else {
                    campo.style.border = '';
                }
            });

            if (camposVacios.length > 0) {
                event.preventDefault();
                alert('Por favor, completa todos los campos antes de enviar.');
            } else {
                alert('✅ Libro registrado correctamente');
            }
        });
    }
});
