document.getElementById('sugerenciasForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene el envío automático del formulario

    const nombre = document.getElementById('nombre').value;
    const area = document.getElementById('area').value;
    const tipo = document.getElementById('tipo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (mensaje === '') {
        document.getElementById('resultado').innerText = 'Por favor, completa el campo de descripción.';
        return;
    }

    // Aquí podrías enviar los datos a un servidor en el futuro

    document.getElementById('resultado').innerText = `Gracias por tu ${tipo}, será revisada por el equipo de SST.`;
    document.getElementById('sugerenciasForm').reset(); // Limpiar el formulario
});
