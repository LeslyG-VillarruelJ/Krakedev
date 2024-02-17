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
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
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