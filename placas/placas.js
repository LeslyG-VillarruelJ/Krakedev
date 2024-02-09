validarPlaca = function () {
    let erroresEstructura;
    let placa;
    let provincia;
    let tipoVehiculo;
    let diaPicoYPlaca;
    placa = recuperarTexto("placa");
    erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == null) {
        mostrarTexto("lblValidacion", "ESTRUCTURA VALIDA");
        // Conocer a que provincia pertenece la placa
        provincia = obtenerProvincia(placa);
        if (provincia != null) {
            mostrarTexto("lblProvincia", "Provincia: " + provincia);
        } else {
            mostrarTexto("lblProvincia", "Provincia Incorrecta");
        }
        // Conocer tipo de vehiculo que pertenece la placa
        tipoVehiculo = obtenerTipoVehiculo(placa);
        // Nota: Siempre va a existir una letra para un tipo de vehiculo debido a que los vehiculos particulares corresponde a cualquier letra que sobre por lo que nunca retornara null
        mostrarTexto("lblTipoVehiculo", "Tipo de Vehiculo: " + tipoVehiculo);
        // Pico y Placa
        diaPicoYPlaca = obtenerPicoYPlaca(placa);
        mostrarTexto("lblDiaPicoYPlaca", "Dia de Pico y Placa: " + diaPicoYPlaca);
    } else {
        mostrarTexto("lblValidacion", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErroresValidacion", erroresEstructura);
    }
}

limpiar = function () {
    mostrarTextoEnCaja("placa", "");
    mostrarTexto("lblValidacion", "");
    mostrarTexto("lblErroresValidacion", "")
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipoVehiculo", "");
    mostrarTexto("lblDiaPicoYPlaca", "");
}