(function() {

    const campoNombre = document.getElementById('nombre');
    const campoApellido = document.getElementById('apellido');
    const botonGuardar = document.querySelector('#botonGuardar');
    const botonReset = document.querySelector('#botonReset');
    const panelDatosGuardados = document.querySelector('#datosGuardados');

    botonGuardar.addEventListener('click', function(event) {
        event.preventDefault();
        panelDatosGuardados.innerHTML = campoNombre.value + ' ' + campoApellido.value;
    });

    botonReset.addEventListener('click', function(event) {
        event.preventDefault();
        campoNombre.value = '';
        campoApellido.value = '';
        panelDatosGuardados.innerHTML = '';
    });

})();