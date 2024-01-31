calcularTasInterese = function(ingresoAnual){
    let tasaInteres;
    if(ingresoAnual < 300000){
        tasaInteres = 16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres = 15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres = 14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres = 13;
    }else{
        tasaInteres = 12;
    }
    return tasaInteres;
}

calcularCapacidadPago = function(edad,ingresos,egresos){
    let cuotaMensual;
    let saldo = ingresos - egresos;
    if(edad > 50){
        cuotaMensual = (saldo*30)/100;
    }else{
        cuotaMensual = (saldo*40)/100;
    }
    return cuotaMensual;
}

calcularDescuento = function(precio,cantidad){
    let valorPagar = precio*cantidad;
    let valorDescuento;
    if(cantidad < 3){
        valorDescuento = valorPagar;
    }else if(cantidad>=3 && cantidad<=5){
        valorDescuento = (valorPagar * 2)/100;
    }else if(cantidad>=6 && cantidad<=11){
        valorDescuento = (valorPagar * 3)/100;
    }else{
        valorDescuento = (valorPagar * 4)/100;
    }
    return valorDescuento;
}

//el nivel de colesterol se mide en mg/dl
determinarColesterolLDL = function(nivelColesterol){
    let categoriaColesterol;
    if(nivelColesterol<100){
        categoriaColesterol = "Óptimo";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        categoriaColesterol = "Casi óptimo";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        categoriaColesterol = "Límite superior del rango normal";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        categoriaColesterol = "Alto";
    }else{
        categoriaColesterol = "Muy alto";
    }
    return categoriaColesterol;
}

validarClave = function(clave){
    let validacion;
    if(clave.length >=8 && clave.length<=16){
        validacion = true
    }else{
        validacion = false;
    }
    return validacion;
}

esMayuscula = function(caracter){
    let codigoCaracter = caracter.charCodeAt(0);
    if(codigoCaracter >=65 && codigoCaracter<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula = function(caracter){
    let codigoCaracter = caracter.charCodeAt(0);
    if((codigoCaracter >=97 && codigoCaracter<=122) || (codigoCaracter==130) || (codigoCaracter >=160 && codigoCaracter<=163)){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    let codigoCaracter = caracter.charCodeAt(0);
    if(codigoCaracter >=48 && codigoCaracter<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso = function(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica>90 || notaFisica>90) && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir = function(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica>90 || notaFisica>90 || notaGeometria>90) && (notaFisica > notaMatematica)){
        return true;
    }else{
        return false;
    }
}