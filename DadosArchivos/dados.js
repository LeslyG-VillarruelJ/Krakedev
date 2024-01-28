jugar = function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio > 3){
        cambiarTexto("mensaje","ES MAYOR A 3, GANASTE");
    }else{
        cambiarTexto("mensaje","ES MENOR A 3, ESTAS DE MALAS");
    }
}

//Crear una funcion llamada lanzarDado
//No recibe parámetros
//retorna un aleatorio entre 1 y 6
lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random(); // entre 0 y 1
    numeroMultiplicado = aleatorio * 6; // entre 0 y 5
    numeroEntero = parseInt(numeroMultiplicado); // entre 1 y 6
    valorDado = numeroEntero + 1;
    return valorDado;
}
