calcularValorDescuento = function (monto, porcentajeDescuento) {
    let descuento;
    descuento = (monto * porcentajeDescuento) / 100;
    return descuento;
}

calcularIVA = function (monto) {
    let iva;
    iva = monto * 0.12;
    return iva;
}

calcularSubtotal = function (precio, cantidad) {
    let subtotal;
    subtotal = precio * cantidad;
    return subtotal;
}

calcularTotal = function (subtotal, descuento, iva) {
    let total;
    total = subtotal - descuento + iva;
    return total;
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let descuento;
    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }
    return descuento;
}

esProductoValido = function (producto, idComponenteError) {
    let valida = true;
    if (producto != "") {
        if (producto.length > 10) {
            mostrarTexto(idComponenteError, "No puede tener mas de 10 caracteres");
            valida = false;
        }
    } else {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        valida = false;
    }
    if (valida == true) {
        mostrarTexto(idComponenteError, "");
    }
    return valida;
}

esCantidadValida = function (cantidad, idComponenteError) {
    let correcto = true;
    if (!isNaN(cantidad)) {
        if (cantidad < 0 || cantidad > 100) {
            mostrarTexto(idComponenteError, "Debe ser un entero entre 0 y 100");
            correcto = false;
        }
    } else {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        correcto = false;
    }
    if (correcto == true) {
        mostrarTexto(idComponenteError, "");
    }
    return correcto;
}

esPrecioValido = function (precio, idComponenteError) {
    let valido = true;
    if (!isNaN(precio)) {
        if (precio < 0 || precio > 50) {
            mostrarTexto(idComponenteError, "Debe ser un numero entre 0 y 50");
            valido = false;
        }
    } else {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        valido = false;
    }
    if (valido == true) {
        mostrarTexto(idComponenteError, "");
    }
    return valido;
}