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
    mostrarNotas();
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

//generar Tablas desde javaScript
generarTabla = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr>" + "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarNotas = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla = "<table><tr><th>NOTA</th></tr>";
    let miNota;
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}