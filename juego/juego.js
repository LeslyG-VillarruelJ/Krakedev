jugar = function (seleccionado) {
    let resultadoComputadora;
    let ruta;
    let valorPartida;
    let resultadoPartida
    resultadoComputadora = generarElemento();
    ruta = generarRuta(resultadoComputadora);
    mostrarImagen("imgComputadora", ruta);
    valorPartida = determinarGanador(resultadoComputadora, seleccionado);
    if(valorPartida == 0){
        resultadoPartida = "EMPATE";
    }else if(valorPartida == 1){
        resultadoPartida = "PERDISTE LA PARTIDA!!";
    }else{
        resultadoPartida = "GANASTE LA PARTIDA!!"
    }
    //mostrar en pantalla el resultado
    mostrarTexto("lblResultado",resultadoPartida);
}