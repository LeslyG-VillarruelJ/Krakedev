validarPassword = function (password) {
    let error = "";
    let codigoCaracter;
    let contadorMayusculas = 0;
    let contadorDigitos = 0;
    let contadorEspeciales = 0;
    //tiene una longitud minima de 8 y maxima de 16 caracteres
    if (password.length < 8 || password.length > 16) {
        error = "El password debe tener una longitud entre 8 a 16 caracteres";
    } 
    //recorrer la password
    for (let i = 0; i < password.length; i++) {
        codigoCaracter = password.charCodeAt(i);
        if (codigoCaracter >= 65 && codigoCaracter <= 90) {
            contadorMayusculas++;
        } else if (codigoCaracter >= 48 && codigoCaracter <= 57) {
            contadorDigitos++;
        } else if (codigoCaracter == 42 || codigoCaracter == 45 || codigoCaracter == 95) {
            contadorEspeciales++;
        }
    }
    //tiene al menos una letra mayuscula
    if (contadorMayusculas == 0) {
        if (error == "") {
            error = "El password debe tener al menos una letra mayuscula";
        } else {
            error = error + ", debe tener al menos una letra mayuscula";
        }
    }
    //tiene al menos un digito
    if (contadorDigitos == 0) {
        if (error == "") {
            error = "El password debe tener al menos un digito";
        } else {
            error = error + ", debe tener al menos un digito";
        }
    }
    //tiene al menos un caracter especial
    if (contadorEspeciales == 0) {
        if (error == "") {
            error = "El password debe tener al menos un caracter especial (*, -, _)";
        } else {
            error = error + ", debe tener al menos un caracter especial (*, -, _)";
        }
    }
    return error;
}

ejecutarValidacion = function () {
    let password;
    let error;
    password = recuperarTexto("txtPassword");
    error = validarPassword(password);
    if (error == "") {
        mostrarTexto("lblResultado", "Password Correcto");
    } else {
        mostrarTexto("lblResultado", error);
    }
}