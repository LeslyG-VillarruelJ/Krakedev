let clientes = [
    { cedula: "123445", nombre: "Juan", edad: 20 },
    { cedula: "123456", nombre: "Lesly", edad: 22 },
    { cedula: "098765", nombre: "Pepe", edad: 22 }
];

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
}

mostrarClientes = function () {
    let contenidoTabla =
        "<table><tr>"
        + "<th>Cedula</th>"
        + "<th>Nombre</th>"
        + "<th>Edad</th></tr>";
    let elementoCliente;
    let cmpTabla = document.getElementById("tablaClientes")
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td></tr>";
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

agregarCliente = function (cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("Cliente Agregado");
        mostrarClientes();
    } else {
        alert("Ya existe un cliente con la cedula: " + cliente.cedula);
    }
}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);
    if (cliente == null) {
        alert("cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}

modificarCliente = function (cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}

guardarCambios = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let datosClientes = {};
    datosClientes.cedula = valorCedula;
    datosClientes.nombre = valorNombre;
    datosClientes.edad = valorEdad;
    modificarCliente(datosClientes);
    mostrarClientes();
}