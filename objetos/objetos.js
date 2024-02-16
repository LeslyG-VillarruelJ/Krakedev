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
    console.log(producto2.nombre);
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}