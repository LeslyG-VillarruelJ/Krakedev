//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//variables globales
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

esMayuscula = function (caracter) {
    let codigoCaracter = caracter.charCodeAt(0);
    if (codigoCaracter >= 65 && codigoCaracter <= 90) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function () {
    let palabra = recuperarTexto("password");
    let caracter;
    let validacionMayuscula = true;
    for (let i = 0; i < palabra.length; i++) {
        caracter = palabra.charAt(i);
        if (!esMayuscula(caracter)) {
            validacionMayuscula = false;
        }
    }
    if (palabra.length == 5 && validacionMayuscula == true) {
        palabraSecreta = palabra;
    } else {
        alert("Debe ingresar una palabra de 5 letras mayusculas");
    }
    console.log(palabra);
}

mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra);
    } else if (posicion == 1) {
        mostrarTexto("div1", letra);
    } else if (posicion == 2) {
        mostrarTexto("div2", letra);
    } else if (posicion == 3) {
        mostrarTexto("div3", letra);
    } else if (posicion == 4) {
        mostrarTexto("div4", letra);
    }
}

validar = function (letra) {
    let letrasEncontradas = 0;
    let caracter;
    for (let i = 0; i < palabraSecreta.length; i++) {
        caracter = palabraSecreta.charAt(i);
        if (caracter == letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
            coincidencias++;
        }
    }
    if (letrasEncontradas == 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
    }
}

ingresarLetra = function () {
    let letra;
    letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)) {
        validar(letra);
        if (coincidencias == 5) {
            alert("HA GANADO");
        } else if (intentos == 10) {
            alert("HA PERDIDO");
        }
        intentos++;
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}