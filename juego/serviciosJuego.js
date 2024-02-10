obtenerAleatorio = function () {
    let aleatorio;
    aleatorio = parseInt(Math.random() * 3) + 1; //para obtener un aleatorio entero entre 1 y 3
    return aleatorio;
}

generarElemento = function () {
    let cadena;
    let aleatorio = obtenerAleatorio();
    if (aleatorio == 1) {
        cadena = "piedra";
    } else if (aleatorio == 2) {
        cadena = "papel";
    } else {
        cadena = "tijera";
    }
    return cadena;
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let valorGanador;
    if (eleccionJugador1 == eleccionJugador2) {
        valorGanador = 0;
    } else if ((eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") || (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") || (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")) {
        valorGanador = 1
    } else {
        valorGanador = 2;
    }
    return valorGanador;
}

generarRuta = function (nombre) {
    let ruta;
    ruta = "./imagenes/" + nombre + ".png"
    return ruta;
}