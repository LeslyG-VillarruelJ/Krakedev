let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1900208641", nombre: "David", apellido: "Perez", sueldo: 800.0 }
]
let esNuevo = false;

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarElementos();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function () {
    let cmpTablaEmpleados = document.getElementById("tablaEmpleados");
    let empleado;
    let tablaEmpleados =
        "<table>"
        + "<tr>"
        + "<th>CEDULA</th>"
        + "<th>NOMBRE</th>"
        + "<th>APELLIDO</th>"
        + "<th>SUELDO</th>"
        + "</tr>";
    for (let i = 0; i < empleados.length; i++) {
        empleado = empleados[i];
        tablaEmpleados += "<tr>";
        tablaEmpleados += "<td>" + empleado.cedula + "</td>";
        tablaEmpleados += "<td>" + empleado.nombre + "</td>";
        tablaEmpleados += "<td>" + empleado.apellido + "</td>";
        tablaEmpleados += "<td>" + empleado.sueldo + "</td>";
        tablaEmpleados += "</tr>";
    }
    tablaEmpleados += "</table>";
    cmpTablaEmpleados.innerHTML = tablaEmpleados;
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

buscarEmpleado = function (cedula) {
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula == cedula) {
            empleadoEncontrado = empleados[i];
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let empleadoBuscado;
    empleadoBuscado = buscarEmpleado(empleado.cedula);
    if (empleadoBuscado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    let caracter;
    let sinErrores = [true, true, true, true]; // con este arreglo veremos si ya no existe ningun error en todas las validaciones
    //VALIDACION DE LA CEDULA
    if (valorCedula.length != 10) {
        sinErrores[0] = false;
    }
    for (let i = 0; i < valorCedula.length; i++) {
        caracter = valorCedula.charCodeAt(i);
        if (caracter < 48 || caracter > 57) {
            sinErrores[0] = false;
            break;
        }
    }
    if (sinErrores[0]) {
        mostrarTexto("lblErrorCedula", "");
    } else {
        mostrarTexto("lblErrorCedula", "Debe tener exactamente 10 digitos");
    }
    //VALIDACION DEL NOMBRE
    if (valorNombre.length < 3) {
        sinErrores[1] = false;
    }
    for (let i = 0; i < valorNombre.length; i++) {
        caracter = valorNombre.charCodeAt(i);
        if (caracter < 65 || caracter > 90) {
            sinErrores[1] = false;
            break;
        }
    }
    if (sinErrores[1]) {
        mostrarTexto("lblErrorNombre", "");
    } else {
        mostrarTexto("lblErrorNombre", "Debe tener al menos 3 letras mayusculas");
    }
    //VALIDACION DEL APELLIDO
    if (valorApellido.length < 3) {
        sinErrores[2] = false;
    }
    for (let i = 0; i < valorApellido.length; i++) {
        caracter = valorApellido.charCodeAt(i);
        if (caracter < 65 || caracter > 90) {
            sinErrores[2] = false;
            break;
        }
    }
    if (sinErrores[2]) {
        mostrarTexto("lblErrorApellido", "");
    } else {
        mostrarTexto("lblErrorApellido", "Debe tener al menos 3 letras mayusculas");
    }
    //VALIDACION SUELDO
    if (isNaN(valorSueldo) == false) {
        if (valorSueldo < 400 || valorSueldo > 5000) {
            sinErrores[3] = false;
        }
    } else {
        sinErrores[3] = false;
    }
    if (sinErrores[3]) {
        mostrarTexto("lblErrorSueldo", "");
    } else {
        mostrarTexto("lblErrorSueldo", "Debe ser un numero decimal entre 400 y 5000");
    }
    //Verificacion para guardar el cliente
    if (sinErrores[0] && sinErrores[1] && sinErrores[2] && sinErrores[3]) {
        if (esNuevo == true) {
            let empleadoNuevo = {};
            let empleadoGuardado;
            empleadoNuevo.cedula = valorCedula;
            empleadoNuevo.nombre = valorNombre;
            empleadoNuevo.apellido = valorApellido;
            empleadoNuevo.sueldo = valorSueldo;
            empleadoGuardado = agregarEmpleado(empleadoNuevo);
            if (empleadoGuardado == true) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarElementos();
                esNuevo = false;
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + empleadoNuevo.cedula);
            }
        } else {
            let empleadoModificado = buscarEmpleado(valorCedula);
            empleadoModificado.nombre = valorNombre;
            empleadoModificado.apellido = valorApellido;
            empleadoModificado.sueldo = valorSueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitarElementos();
        }
    }
}

deshabilitarElementos = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda = function () {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(cedula);
    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
    }

}