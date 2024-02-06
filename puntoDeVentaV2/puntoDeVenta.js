calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");

    //VALIDACIONES
    if (esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")) {
        //Calcular Subtotal
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));
        //Calcular Descuento
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
        //Calcular IVA
        let monto = valorSubtotal - valorDescuento;
        valorIVA = calcularIVA(monto);
        mostrarTexto("lblValorIVA", valorIVA.toFixed(2));
        //Calcular Total
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal.toFixed(2));
    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
    }
}

limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Todo lo que sea necesario dejar en blanco
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
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