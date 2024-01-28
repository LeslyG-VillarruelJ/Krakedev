calcularValorDescuento = function(monto,porcentajeDescuento){
    let descuento;
    descuento = (monto * porcentajeDescuento)/100;
    return descuento;
}

calcularIVA = function(monto){
    let iva;
    iva = (monto * 12)/100;
    return iva;
}

calcularSubtotal = function(precio,cantidad){
    let subtotal;
    subtotal = precio * cantidad;
    return subtotal;
}

calcularTotal = function(subtotal,descuento,iva){
    let total;
    total = subtotal - descuento + iva;
    return total;
}