calcularPromedioNotas = function(){
    //a. Recupara los valores de las cajas de texto como FLOAT
    let valorCaja1 = recuperarFloat("nota1");
    let valorCaja2 = recuperarFloat("nota2");
    let valorCaja3 = recuperarFloat("nota3");
    //b. Invoca la funcion calcularPromedio
    let promedio = calcularPromedio(valorCaja1,valorCaja2,valorCaja3);
    //c. Muestra en pantalla el valor del promedio con 2 decimales
    promedioFormateado = promedio.toFixed(2);
    mostrarTexto("promedio",promedioFormateado);
    if(promedioFormateado>0 && promedioFormateado<5){
        mostrarTexto("mensaje","REPROBADO");
        mostrarImagen("imagen","reprobado.gif");
    }else if(promedioFormateado>=5 && promedioFormateado<=8){
        mostrarTexto("mensaje","BUEN TRABAJO");
        mostrarImagen("imagen","buenTrabajo.gif");
    }else if(promedioFormateado>8 && promedioFormateado<=10){
        mostrarTexto("mensaje","EXCELENTE");
        mostrarImagen("imagen","excelente.gif");
    }else{
        mostrarTexto("mensaje","DATOS INCORRECTOS");
        mostrarImagen("imagen","incorrecto.gif");
    }
}