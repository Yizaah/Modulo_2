$(document).ready(function() {
    var miniaturas = $('.galeria img');
    var total = miniaturas.length;
    var actual = 0;

    miniaturas.on('click', function() {
        actual = miniaturas.index(this);
        mostrarImagen(actual);
        $('#modal').css('display', 'flex').hide().fadeIn(200); // efecto
    });

    // Función para mostrar la imagen grande en el modal
    function mostrarImagen(indice) {
        var src = miniaturas.eq(indice).attr('src');
        var alt = miniaturas.eq(indice).attr('alt');
        $('#img-grande').attr('src', src);
        $('#img-grande').attr('alt', alt);
    }

    // clic en siguiente
    $('#siguiente').on('click', function(e) {
        e.stopPropagation(); // Evita que el clic cierre el modal
        actual = (actual + 1) % total; // Avanza al siguiente, vuelve al primero si es el último
        mostrarImagen(actual);
    });

    // clic en anterior
    $('#anterior').on('click', function(e) {
        e.stopPropagation();
        actual = (actual - 1 + total) % total; // Retrocede, vuelve al último si es el primero
        mostrarImagen(actual);
    });

    // clic en la X para cerrar
    $('.cerrar').on('click', function() {
        $('#modal').fadeOut(200); 
    });

    // clic fuera de la imagen grande, cierra el modal
    $('#modal').on('click', function(e) {
        if (e.target === this) {
            $('#modal').fadeOut(200);
        }
    });
});