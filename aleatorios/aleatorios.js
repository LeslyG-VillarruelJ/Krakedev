aleatorio = function () {
    let aleatorio;
    aleatorio = parseInt(Math.random() * 100) + 1;
    return aleatorio;
}

generarAleatorios = function () {
    let aleatorios = [];
    let numero;
    let numeroAleatorio;
    numero = recuperarInt("txtNumero");
    if (numero >= 5 && numero <= 20) {
        for (let i = 0; i < numero; i++) {
            console.log(i);
            numeroAleatorio = aleatorio();
            aleatorios.push(numeroAleatorio);
        }
    }else{
        alert("Debe ser un numero entre 5 y 20");
    }
    mostrarResultados(aleatorios);
}

mostrarResultados = function (arregloNumeros) {
    let tabla = "";
    let cmpTabla = document.getElementById("divTabla");
    tabla += "<table><tr><th>Aleatorios</th></tr>";
    for (let indice = 0; indice < arregloNumeros.length; indice++) {
        tabla += "<tr><td>";
        tabla += arregloNumeros[indice];
        tabla += "</td></tr>";
    }
    tabla += "</table>";
    cmpTabla.innerHTML = tabla;
}