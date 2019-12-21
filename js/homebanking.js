//Declaración de variables
var nombreUsuario = "Luciano";
var saldoCuenta = 10000;
var limiteExtraccion = 7000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    (iniciarSesion());
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar

function sumarDinero(x) {
    saldoCuenta = saldoCuenta + x;

}

function restarDinero(x) {
    saldoCuenta = saldoCuenta - x;
}


function cambiarLimiteDeExtraccion() {
    var dineroExtraer = prompt("Ingrese el nuevo limite de extraccion");
    var plataNumero = Number(dineroExtraer);

    if (plataNumero == undefined || plataNumero == "" || isNaN(plataNumero)) {

    } else {
        if (plataNumero >= 0 && plataNumero < saldoCuenta) {

            limiteExtraccion = plataNumero;

            actualizarLimiteEnPantalla();

            alert("Su nuevo limite de extraccion es de $" + plataNumero);
        } else {
            alert("Saldo insuficiente");
        }
    }
}

function extraerDinero() {


    var cantidadExtraer = prompt("Ingrese el dinero que quiera extraer");
    var plataExtraer = Number(cantidadExtraer);
    if (plataExtraer == "" || plataExtraer == undefined || isNaN(plataExtraer)) {


    } else {
        if (plataExtraer % 100 == 0) {
            if (plataExtraer >= 0 && plataExtraer <= saldoCuenta && plataExtraer <= limiteExtraccion) {

                var plataAnterior = saldoCuenta;

                restarDinero(plataExtraer);

                actualizarSaldoEnPantalla();

                alert("Has extraido " + "$" + plataExtraer + " \r\nSaldo anterior: " + "$" + plataAnterior + "\r\nSaldo actual " + saldoCuenta);


            } else {
                superaLimiteExtraccion(plataExtraer);
            }
        } else (alert("Solo puedes extraer billetes de 100"));
    }
}


function saldoNegativo(dineroNegativo) {
    if (dineroNegativo > saldoCuenta) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero ");
    }
}

function superaLimiteExtraccion(limiteNegativo) {
    if (limiteNegativo > limiteExtraccion) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion")
    } else {
        saldoNegativo(limiteNegativo);
    }
}





function depositarDinero() {
    var cantidadDinero = prompt("Ingrese aqui el dinero que quiera depositar");
    var cash = Number(cantidadDinero);
    if (cash == "" || cash == undefined || isNaN(cash)) {

    } else {
        if (cash >= 0) {
            var cashAnterior = saldoCuenta;

            sumarDinero(cash);


            actualizarSaldoEnPantalla();

            alert("Has depositado  " + "$" + cash + "\r\nSaldo anterior: " + "$" + cashAnterior + "\r\nSaldo actual " + saldoCuenta);
         }
    }
}


function pagarServicio() {
    var servicio = prompt("Ingrese el numero con el servicio que desea pagar " + "\r\n1- Agua " + "\r\n2- Telefono " + "\r\n3-Luz " + "\r\n4- Internet ");
    var  numeroServicio = servicio;
    var monedaAnterior = saldoCuenta;
    if(numeroServicio == "" || numeroServicio == undefined || isNaN(numeroServicio) ){

    } else  {
    switch (numeroServicio) {

    case "1":
    agua = 350
    if (agua < saldoCuenta){
        restarDinero(agua)
        alert("Usted ha pagado el servicio agua" + "\r\nSaldo anterior:" + "$"  + monedaAnterior + "\r\nDinero descontado:" + "$" + agua + "\r\nSaldo actual:" + "$" + saldoCuenta);
        } else {
            alert("No hay saldo en su cuenta para extraer esa cantidad de dinero");
        }
    break;

    case '2':
   telefono = 425;
    if (telefono < saldoCuenta){
        restarDinero(telefono)
        alert("Usted ha pagado el servicio telefono" + "\r\nSaldo anterior:" + "$"  + monedaAnterior + "\r\nDinero descontado:" + "$" + telefono + "\r\nSaldo actual:" + "$" + saldoCuenta);
   } else {
       alert("No hay saldo en su cuenta para extraer esa cantidad de dinero");
   }
    break;

    case '3':
    luz = 210;
    if (luz < saldoCuenta){
        restarDinero(luz)
        alert("Usted ha pagado el servicio luz" + "\r\nSaldo anterior:" + "$"  + monedaAnterior + "\r\nDinero descontado:" + "$" + luz + "\r\nSaldo actual:" + "$" + saldoCuenta);
        } else {
            alert("No hay saldo en su cuenta para extraer esa cantidad de dinero");
        }
    break;

    case '4':
    internet = 570;
        if (internet < saldoCuenta){
        restarDinero(internet)
        alert("Usted ha pagado el servicio internet" + "\r\nSaldo anterior:" + "$"  + monedaAnterior + "\r\nDinero descontado:" + "$" + internet + "\r\nSaldo actual:" + "$" + saldoCuenta);
         } else  {
             alert("No hay saldo en su cuenta para extraer esa cantidad de dinero");
         }
    break;

    default :
        alert ("Error");
}
  actualizarSaldoEnPantalla()
}
}


function transferirDinero() {
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;
    var dineroTransferir = prompt("Ingrese el monto que quiera transferir");
    var numeroTransferir = Number(dineroTransferir);
    if (numeroTransferir == undefined || numeroTransferir == "" || isNaN(numeroTransferir)){

    } else {
    if (numeroTransferir <= saldoCuenta && numeroTransferir > 0) {
     cuentaValida = prompt("Ingrese el numero de cuenta a la que desea transferir dinero");
     if (cuentaValida == cuentaAmiga1 || cuentaValida ==cuentaAmiga2) {
         restarDinero(numeroTransferir);
         actualizarSaldoEnPantalla();
         alert("Se han trasferido: " + numeroTransferir + "\r\nCuenta destino: " + cuentaValida)
        } else {
            alert("Solo puede transferir dinero a una cuenta amiga");
        }
     } else(saldoInsuficiente(numeroTransferir));
}
}

function saldoInsuficiente(plataTransferir){
    if(plataTransferir > saldoCuenta){
        alert("No hay saldo disponible para hacer la transferencia")
    }
}



function iniciarSesion() {
    var codigo = 0911;
    var ingreseCodigo = prompt("Ingrese el codigo de su cuenta para iniciar sesion");
    var numeroCodigo = Number(ingreseCodigo)
    if (numeroCodigo == codigo) {
     alert("Bienvenido Luciano, ya puedes comenzar a realizar operaciones");
    } else {
     location.href = "error.html"
 }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

document.addEventListener