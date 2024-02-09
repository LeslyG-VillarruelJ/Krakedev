validarPlaca = function () {
    let erroresEstructura;
    let placa;
    let provincia;
    placa = recuperarTexto("placa");
    erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == null) {
        mostrarTexto("lblValidacion", "ESTRUCTURA VALIDA");
        provincia = obtenerProvincia(placa);
        if (provincia != null) {
            mostrarTexto("lblProvincia", "Provincia: " + provincia);
        } else {
            mostrarTexto("lblProvincia", "Provincia Incorrecta");
        }
    } else {
        mostrarTexto("lblValidacion", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErroresValidacion", erroresEstructura);
    }
}