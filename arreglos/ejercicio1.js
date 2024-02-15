let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

probarAgregar = function () {
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
}

recorrerArreglo = function () {
    let notaR;
    for (indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio = 0;
    for (indice = 0; indice < notas.length; indice++) {
        sumaNotas = sumaNotas + notas[indice];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}

ejecutarPromedio = function () {
    let resultado;
    resultado = calcularPromedio();
    mostrarTexto("lblPromedio", "PROMEDIO = " + resultado);
}