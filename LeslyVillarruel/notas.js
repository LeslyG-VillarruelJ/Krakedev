let estudiantes = [
    { nombre: "Edwin", apellido: "Erazo", nota1: 8.4, nota2: 9.5, nota3: 8.7, total: 26.6, promedio: 8.7 },
    { nombre: "Maritza", apellido: "Rosero", nota1: 5.4, nota2: 8.5, nota3: 9.7, total: 23.6, promedio: 9.7 },
    { nombre: "Esteban", apellido: "Guaranda", nota1: 9.4, nota2: 10.0, nota3: 9.0, total: 28.4, promedio: 9.0 },
    { nombre: "Ricardo", apellido: "Batista", nota1: 6.4, nota2: 9.5, nota3: 8.9, total: 24.8, promedio: 8.9 }
]

calcularTotal = function (n1, n2, n3) {
    return n1 + n2 + n3;
}

calcularPromedio = function (p1, p2, p3) {
    let promedio;
    promedio = calcularTotal(p1, p2, p3) / 3;
    return promedio.toFixed(2);
}

calcular = function () {
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");
    let total = calcularTotal(nota1, nota2, nota3);
    mostrarTexto("lblTotal", total);
    let promedio = calcularPromedio(nota1, nota2, nota3);
    mostrarTexto("lblPromedio", promedio);
    //habilitar el boton guardar
    habilitarComponente("btnGuardar");
}

guardar = function () {
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");
    let estudiante = {};
    estudiante.nombre = nombre;
    estudiante.apellido = apellido;
    estudiante.nota1 = nota1;
    estudiante.nota2 = nota2;
    estudiante.nota3 = nota3;
    estudiante.total = calcularTotal(nota1, nota2, nota3);
    estudiante.promedio = calcularPromedio(nota1, nota2, nota3);
    estudiantes.push(estudiante);
    alert("Notas guardadas con exito");
    //limpiar cajas
    mostrarTexto("txtNombre", "");
    mostrarTexto("txtApellido", "");
    mostrarTexto("txtNota1", "");
    mostrarTexto("txtNota2", "");
    mostrarTexto("txtNota3", "");
    mostrarTexto("lblTotal", "");
    mostrarTexto("lblPromedio", "");
    //mostramos de nuevo la tabla para ver que se agrego el estudiante
    mostrarTabla();
}

mostrarTabla = function () {
    let cmpTabla = document.getElementById("tablaEstudiantes");
    let estudiante;
    let tablaEstudiantes = "<table>"
        + "<tr>"
        + "<th>Nombre</th>"
        + "<th>Apellido</th>"
        + "<th>Nota 1</th>"
        + "<th>Nota 2</th>"
        + "<th>Nota 3</th>"
        + "<th>Total</th>"
        + "<th>Promedio</th>"
        + "</tr>";
    for (let i = 0; i < estudiantes.length; i++) {
        estudiante = estudiantes[i];
        tablaEstudiantes += "<tr>";
        tablaEstudiantes += "<td>" + estudiante.nombre + "</td>";
        tablaEstudiantes += "<td>" + estudiante.apellido + "</td>";
        tablaEstudiantes += "<td>" + estudiante.nota1 + "</td>";
        tablaEstudiantes += "<td>" + estudiante.nota2 + "</td>";
        tablaEstudiantes += "<td>" + estudiante.nota3 + "</td>";
        tablaEstudiantes += "<td>" + estudiante.total + "</td>";
        tablaEstudiantes += "<td>" + estudiante.promedio + "</td>";
        tablaEstudiantes += "</tr>";
    }
    tablaEstudiantes += "</table>";
    cmpTabla.innerHTML = tablaEstudiantes;
    //deshabilitar el boton guardar
    deshabilitarComponente("btnGuardar");
}