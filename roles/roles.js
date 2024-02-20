let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1900208641", nombre: "David", apellido: "Perez", sueldo: 800.0 }
]
let esNuevo = false;
let roles = [];

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
    deshabilitarComponente("btnGuardarRol");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles();
    mostrarTotales();
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

limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
    deshabilitarElementos();
}

buscarPorRol = function () {
    let empleadoBuscado;
    let valorCedula;
    valorCedula = recuperarTexto("txtBusquedaCedulaRol");
    empleadoBuscado = buscarEmpleado(valorCedula);
    if (empleadoBuscado != null) {
        mostrarTexto("infoCedula", empleadoBuscado.cedula);
        mostrarTexto("infoNombre", empleadoBuscado.nombre + " " + empleadoBuscado.apellido);
        mostrarTexto("infoSueldo", empleadoBuscado.sueldo);
    } else {
        alert("EL EMPLEADO NO EXISTE");
    }
}

calcularAporteEmpleado = function (sueldo) {
    let aporte;
    aporte = sueldo * 0.0945;
    return aporte;
}

calcularValorAPagar = function (sueldo, aporteIESS, descuento) {
    let valorPagar;
    valorPagar = sueldo - aporteIESS - descuento;
    return valorPagar;
}

calcularRol = function () {
    let valorSueldo = recuperarFloatDiv("infoSueldo");
    let valorDescuento = recuperarTexto("txtDescuentos");
    let aporteEmpleado;
    let valorAPagar;
    if (!isNaN(valorDescuento) && (valorDescuento >= 0 && valorDescuento <= valorSueldo)) {
        aporteEmpleado = calcularAporteEmpleado(valorSueldo);
        mostrarTexto("infoIESS", aporteEmpleado);
        valorAPagar = calcularValorAPagar(valorSueldo, aporteEmpleado, valorDescuento);
        mostrarTexto("infoPago", valorAPagar);
        mostrarTexto("lblErrorDescuentos", "");
        habilitarComponente("btnGuardarRol");
    } else {
        mostrarTexto("lblErrorDescuentos", "Debe ser un numero decimal entre 0 y " + valorSueldo);
    }
}

buscarRol = function (cedula) {
    let rol;
    for (let i = 0; i < roles.length; i++) {
        rol = roles[i];
        if (cedula == rol.cedula) {
            return rol;
        } else {
            return null;
        }
    }
}

agregarRol = function (rol) {
    let rolEncontrado = buscarRol(rol.cedula);
    if (rolEncontrado == null) {
        roles.push(rol);
        alert("ROL GUARDADO CON EXITO");
    } else {
        alert("EL ROL CON CEDULA " + rolEncontrado.cedula + " YA EXISTE");
    }
}

calcularAporteEmpleador = function (sueldo) {
    return sueldo * 0.1115;
}

guardarRol = function () {
    let valorPagar = recuperarFloatDiv("infoPago");
    let valorAporteIESS = recuperarFloatDiv("infoIESS");
    let valorCedula = recuperarTextoDiv("infoCedula");
    let valorNombre = recuperarTextoDiv("infoNombre");
    let valorSueldo = recuperarFloatDiv("infoSueldo");
    let aporteAPagar = calcularAporteEmpleador(valorSueldo);
    let rol = {};
    rol.cedula = valorCedula;
    rol.nombre = valorNombre;
    rol.sueldo = valorSueldo;
    rol.valorAPagar = valorPagar;
    rol.aporteEmpleado = valorAporteIESS;
    rol.aporteEmpleador = aporteAPagar;
    agregarRol(rol);
    deshabilitarComponente("btnGuardarRol");
}

mostrarRoles = function(){
    let cmpTablaRoles = document.getElementById("tablaResumen");
    let rol;
    let tablaRoles =
        "<table>"
        + "<tr>"
        + "<th>CEDULA</th>"
        + "<th>NOMBRE</th>"
        + "<th>VALOR A PAGAR</th>"
        + "<th>APORTE EMPLEADO</th>"
        + "<th>APORTE EMPLEADOR</th>"
        + "</tr>";
    for (let i = 0; i < roles.length; i++) {
        rol = roles[i];
        tablaRoles += "<tr>";
        tablaRoles += "<td>" + rol.cedula + "</td>";
        tablaRoles += "<td>" + rol.nombre + "</td>";
        tablaRoles += "<td>" + rol.valorAPagar + "</td>";
        tablaRoles += "<td>" + rol.aporteEmpleado + "</td>";
        tablaRoles += "<td>" + rol.aporteEmpleador + "</td>";
        tablaRoles += "</tr>";
    }
    tablaRoles += "</table>";
    cmpTablaRoles.innerHTML = tablaRoles;
}

mostrarTotales = function(){
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    let rol;
    for(let i=0; i<roles.length; i++){
        rol = roles[i];
        totalEmpleado += rol.aporteEmpleado;
        totalEmpleador += rol.aporteEmpleador;
        totalAPagar += rol.valorAPagar;
    }
    mostrarTexto("infoTotalPago", totalAPagar);
    mostrarTexto("infoAporteEmpresa", totalEmpleador);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);
}