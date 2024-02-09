validarEstructura = function (placa) {
    let error = "";
    if (placa.length < 7 || placa.length > 8) {
        error = "La placa debe tener 7 u 8 caracteres";
    }
    if (!esMayuscula(placa.charAt(0)) && placa.charAt(0) != "") {
        if (error != "") {
            error = error + ", el primer caracter debe ser mayuscula"
        } else {
            error = "El primer caracter debe ser mayuscula"
        }
    }
    if (!esMayuscula(placa.charAt(1)) && placa.charAt(1) != "") {
        if (error != "") {
            error = error + ", el segundo caracter debe ser mayuscula"
        } else {
            error = "El segundo caracter debe ser mayuscula"
        }
    }
    if (!esMayuscula(placa.charAt(2)) && placa.charAt(2) != "") {
        if (error != "") {
            error = error + ", el tercer caracter debe ser mayuscula"
        } else {
            error = "El tercer caracter debe ser mayuscula"
        }
    }
    if (!esGuion(placa.charAt(3)) && placa.charAt(3) != "") {
        if (error != "") {
            error = error + ", el cuarto caracter debe ser un guion"
        } else {
            error = "El cuarto caracter debe ser un guion"
        }
    }
    if (!esDigito(placa.charAt(4)) && placa.charAt(4) != "") {
        if (error != "") {
            error = error + ", el quinto caracter debe ser digito"
        } else {
            error = "El quinto caracter debe ser digito"
        }
    }
    if (!esDigito(placa.charAt(5)) && placa.charAt(5) != "") {
        if (error != "") {
            error = error + ", el sexto caracter debe ser digito"
        } else {
            error = "El sexto caracter debe ser digito"
        }
    }
    if (!esDigito(placa.charAt(6)) && placa.charAt(6) != "") {
        if (error != "") {
            error = error + ", el septimo caracter debe ser digito"
        } else {
            error = "El septimo caracter debe ser digito"
        }
    }
    if (placa.length == 8) {
        if (!esDigito(placa.charAt(7))) {
            if (error != "") {
                error = error + ", el octavo caracter debe ser digito"
            } else {
                error = "El octavo caracter debe ser digito"
            }
        }
    }
    if (error != "") {
        return error;
    } else {
        return null;
    }
}

obtenerProvincia = function (placa) {
    let primeraLetraPlaca = placa.charAt(0);
    let provincia;
    if (primeraLetraPlaca == "A") {
        provincia = "Azuay";
    } else if (primeraLetraPlaca == "B") {
        provincia = "Bolivar";
    } else if (primeraLetraPlaca == "U") {
        provincia = "Cañar";
    } else if (primeraLetraPlaca == "C") {
        provincia = "Carchi";
    } else if (primeraLetraPlaca == "X") {
        provincia = "Cotopaxi";
    } else if (primeraLetraPlaca == "H") {
        provincia = "Chimborazo";
    } else if (primeraLetraPlaca == "O") {
        provincia = "El Oro";
    } else if (primeraLetraPlaca == "E") {
        provincia = "Esmeraldas";
    } else if (primeraLetraPlaca == "W") {
        provincia = "Galapagos";
    } else if (primeraLetraPlaca == "I") {
        provincia = "Imbabura";
    } else if (primeraLetraPlaca == "L") {
        provincia = "Loja";
    } else if (primeraLetraPlaca == "R") {
        provincia = "Los Rios";
    } else if (primeraLetraPlaca == "M") {
        provincia = "Manabi";
    } else if (primeraLetraPlaca == "V") {
        provincia = "Morona Santiago";
    } else if (primeraLetraPlaca == "N") {
        provincia = "Napo";
    } else if (primeraLetraPlaca == "S") {
        provincia = "Pastaza";
    } else if (primeraLetraPlaca == "P") {
        provincia = "Pichincha";
    } else if (primeraLetraPlaca == "K") {
        provincia = "Sucumbios";
    } else if (primeraLetraPlaca == "Q") {
        provincia = "Orellana";
    } else if (primeraLetraPlaca == "T") {
        provincia = "Tungurahua";
    } else if (primeraLetraPlaca == "Z") {
        provincia = "Zamora Chinchipe";
    } else if (primeraLetraPlaca == "U") {
        provincia = "Santa Elena";
    } else {
        provincia = null;
    }
    return provincia;
}

obtenerTipoVehiculo = function (placa) {
    let segundaLetraPlaca = placa.charAt(1);
    let tipoVehiculo;
    if (segundaLetraPlaca == "A" || segundaLetraPlaca == "Z") {
        tipoVehiculo = "Vehiculo comercial";
    } else if (segundaLetraPlaca == "E") {
        tipoVehiculo = "Vehiculo gubernamental";
    } else if (segundaLetraPlaca == "X") {
        tipoVehiculo = "Vehiculo de uso oficial";
    } else if (segundaLetraPlaca == "S") {
        tipoVehiculo = "Vehiculo del gobierno provincial";
    } else if (segundaLetraPlaca == "M") {
        tipoVehiculo = "Vehiculo municipal";
    } else {
        tipoVehiculo = "Vehiculo particular";
    }
    return tipoVehiculo;
}

obtenerPicoYPlaca = function(placa){
    let ultimaLetraPlaca = placa.charAt(placa.length-1);
    let dia;
    if(ultimaLetraPlaca==1 || ultimaLetraPlaca==2){
        dia = "Lunes";
    }else if(ultimaLetraPlaca==3 || ultimaLetraPlaca==4){
        dia = "Martes";
    }else if(ultimaLetraPlaca==5 || ultimaLetraPlaca==6){
        dia = "Miercoles";
    }else if(ultimaLetraPlaca==7 || ultimaLetraPlaca==8){
        dia = "Jueves";
    }else{
        dia = "Viernes";
    }
    return dia;
}
