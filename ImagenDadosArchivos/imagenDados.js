let puntos = 0;
let lanzamientos = 5;

jugar = function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarDado(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}

modificarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntos",puntos);
    // si el jugador obtiene mayor a 20 puntos, mostrar un mensaje GANASTE!! en pantalla
    //Invocar a limpiar
    if(puntos > 20){
        cambiarTexto("mensaje","GANASTE!!");
        limpiar();
    }
}

//no recibe parametros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable
// y muestra en pantalla
modificarLanzamientos = function(){
    //si lanzamientos llega a cero mostrar en pantalla el mensaje GAME OVER!!
    //Invoca a limpiar
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos == 0){
        cambiarTexto("mensaje","GAME OVER");
        limpiar();
    }
}

//colocar puntaje en 0 y lanzamientos en 5
// en las variables y en pantalla
// quitar la imagen, ""
limpiar = function(){
    puntos = 0;
    cambiarTexto("lblPuntos",puntos);
    lanzamientos = 5;
    cambiarTexto("lblLanzamientos",lanzamientos);
    cambiarImagen("imgDado","");
}

//funcion mostrarDado en la cual dependiendo el numero que entrega, se muestra la imagen del dado con ese numero
//recibe como parametro el numero y no retorna nada
mostrarDado = function(numero){
    if(numero == 1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2) {
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3) {
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4) {
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5) {
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6) {
        cambiarImagen("imgDado","dados6.png");
    } 
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}