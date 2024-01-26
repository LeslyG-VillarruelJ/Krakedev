saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    //mostrar el mensaje con la funcion mostrarTexto
    let mensajeBienvenida = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    //mostrar Imagen
    mostrarImagen("imgSaludo","./imagenes/saludo.gif")
}

mostrarImagen = function(idComponente,rutaImagen){
    let componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}

mostrarTexto = function(idComponente,mensaje){
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}