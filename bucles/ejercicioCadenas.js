ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadeba(mensaje);
}

ejecutarPrueba2 = function () {
    let mensaje;
    let invertida;
    mensaje = recuperarTexto("txtCadena");
    invertida = invertirCadena(mensaje);
    mostrarTexto("lblCadenaInvertida", invertida);
}

recorrerCadeba = function (cadena) {
    //0123
    //Juan
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}

invertirCadena = function (cadena) {
    let caracter;
    let resultado = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        resultado = resultado + caracter;
    }
    return resultado;
}