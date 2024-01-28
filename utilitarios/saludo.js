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
    //limpiar la caja de texto con la funcion mostrarTextoEnCaja
    mostrarTextoEnCaja("txtNombre","");
}