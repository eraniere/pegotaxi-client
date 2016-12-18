var Engine = {
    iniciar: function() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: false,
          zoom: 8
        });
    }
}

$(function() {
    //Iniciar mapa na tela.
    //$('#body').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwvVdt1nBtAQ_RY2iuHCoGQ1yfq13K7eA&callback=Engine.iniciar" async defer></script>');
})