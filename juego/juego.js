let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {
    let resultadoComputadora;
    let ruta;
    let valorPartida;
    let resultadoPartida;
    resultadoComputadora = generarElemento();
    ruta = generarRuta(resultadoComputadora);
    mostrarImagen("imgComputadora", ruta);
    valorPartida = determinarGanador(resultadoComputadora, seleccionado);
    if (valorPartida == 0) {
        resultadoPartida = "EMPATE";
    } else if (valorPartida == 1) {
        resultadoPartida = "PERDISTE LA PARTIDA!!";
        puntosComputador = puntosComputador + 1;
        mostrarTexto("puntajeComputadora", puntosComputador);
    } else {
        resultadoPartida = "GANASTE LA PARTIDA!!"
        puntosUsuario = puntosUsuario + 1;
        mostrarTexto("puntajeUsuario", puntosUsuario);
    }
    //mostrar en pantalla el resultado
    mostrarTexto("lblResultado", resultadoPartida);
    // se modificara cuando se cumpla la condicion se mostrara un mensaje diferente
    if (puntosUsuario == 5) {
        mostrarTexto("lblFinPartida", "HAS GANADO EL JUEGO");
    } else if (puntosComputador == 5) {
        mostrarTexto("lblFinPartida", "EL COMPUTADOR TE HA VENCIDO");
    } 
}

limpiar = function(){
    puntosComputador = 0;
    puntosUsuario = 0;
    mostrarImagen("imgComputadora", "");
    mostrarTexto("puntajeComputadora", puntosComputador);
    mostrarTexto("puntajeUsuario", puntosUsuario);
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblFinPartida", "");
}