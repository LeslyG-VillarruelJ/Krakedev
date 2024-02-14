//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function (caracter) {
    let codigoCaracter = caracter.charCodeAt(0);
    if (codigoCaracter >= 65 && codigoCaracter <= 90) {
        return true;
    } else {
        return false;
    }
}