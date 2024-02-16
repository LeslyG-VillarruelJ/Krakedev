probarAtributos = function () {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("No esta vivo");
    } else {
        console.log("Esta vivo");
    }

}

crearObjeto = function () {
    let producto1 = {
        nombre: "gaseosa",
        precio: 1.5,
        stock: 10
    }
    let producto2 = {
        nombre: "doritos",
        precio: 0.5,
        stock: 15
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}

crearCliente = function () {
    let cliente = {
        cedula: "1234567890",
        nombre: "Juan"
    }
    let cliente1 = {};
    cliente1.nombre = "Romeo";
    cliente1.apellido = "Salcedo";
    cliente1.cedula = "0987654321";
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;
}

probarIncrementoSaldo = function () {
    let cta = {
        numero: "123456",
        saldo: 100
    }
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}

determinarMayor = function (person1, persona2) {
    if (person1.edad > persona2.edad) {
        return person1;
    } else if (person1.edad < persona2.edad) {
        return persona2;
    } else {
        return null;
    }
}

probarDeterminarMayor = function () {
    let persona1 = {
        nombre: "Daniel",
        edad: 45
    }
    let persona2 = {
        nombre: "Luisa",
        edad: 48
    }
    let mayor;
    mayor = determinarMayor(persona1, persona2); // retorna el objeto como tal
    if (mayor != null) {
        console.log("El mayor es: " + mayor.nombre);
    }
}