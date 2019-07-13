function init_events() {
    document.getElementById('negro').addEventListener('click', function(e) {
        console.log('evento burbuja, clickeo en div Negro');
    });

    document.getElementById('azul').addEventListener('click', function(e) {

        console.log('evento burbuja, clickeo en div Azul');
    });

    document.getElementById('verde').addEventListener('click', function(e) {
        console.log('evento burbuja, clickeo en div Verde');
    });
}

