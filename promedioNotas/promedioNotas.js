calcularPromedioNotas = function(){
    //a. Recupara los valores de las cajas de texto como FLOAT
    let valorCaja1 = recuperarFloat("nota1");
    let valorCaja2 = recuperarFloat("nota2");
    let valorCaja3 = recuperarFloat("nota3");
    //b. Invoca la funcion calcularPromedio
    let promedio = calcularPromedio(valorCaja1,valorCaja2,valorCaja3);
    //c. Muestra en pantalla el valor del promedio con 2 decimales
    promedioFormateado = promedio.toFixed(2);
    mostrarTexto("promedio",promedioFormateado)
}