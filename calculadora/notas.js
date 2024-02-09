calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("ERROR");
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("ERROR");
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("ERROR");
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);
            }
        }
    }
}

//misma solucion otra forma parte 2
calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;
    //voy a ir validando cada una de las notas
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        mostrarTexto("lblError1", "Debe ingresar un numero");
        existeError == true;
    } else {
        mostrarTexto("lblError1", "");
    }
    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        mostrarTexto("lblError2", "Debe ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("lblError2", "");
    }
    nota3 = recuperarFloat("txtNota3");
    if (isNaN(nota3)) {
        mostrarTexto("lblError3", "Debe ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("lblError3", "");
    }
    //no hubo errores
    if (existeError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;
    //voy a ir validando cada una de las notas
    //con la nueva funcion que creamos
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");
    //no hubo errores
    //pero ya no se utiliza la variable existe error dado que la funcion retorna un valor booleno, por lo que podremos comparar si es valido o no la nota que se evalua
    //tomar en cuenta que con && solo valida hasta que se cumpla el condicional, y si falla ya no revisa las demas
    //por lo que se utiliza un solo & para anlizar todas
    if (esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblResultado", "0.0");
    }
}

//creamos una validacion dado que para las tres notas es similar, creando una funcion
//complicado si se tiene varios retornos, nos podemos confundir, pero se puede mejorar
esNotaValida = function (nota, idComponenteError) {
    let hayErrores = false;
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, "Debe ingresar un numero");
        hayErrores = true;
    }
    //realizo otra validacion
    if (nota < 0 || nota > 10) {
        mostrarTexto(idComponenteError, "El numero debe estar entre 0 y 10");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    //retorno lo contrario debido a que se verifica si es valida la nota
    return !hayErrores;
}