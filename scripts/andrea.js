var cuentas = 
    {
        usuario: "Andrea", 
        password: "2354",
        saldo: 200,
    }



var consultarSaldo = document.getElementById("ConsultarSaldo");
var ingresar = document.getElementById("deposito");
var retirar = document.getElementById("retiro");

btnIngreso = document.getElementById("IngresarBtn")
btnRetiro = document.getElementById("RetirarBtn")
btnSaldo = document.getElementById("SaldosBtn")

function depositos () {
    var suma = cuentas.saldo + ingresar.valueAsNumber
    if (suma > 990) {
        alert ("Tu saldo no puede ser mayor a $990")
    } else { 
        alert ("Tu nuevo saldo es " + suma)
        cuentas.saldo = suma
    }
}

function retiros () {
    var resta = cuentas.saldo - retirar.valueAsNumber
    if (resta < 10 ) {
        alert ("Tu saldo no puede ser menor a $10")
    } else { 
        alert ("Tu nuevo saldo es " + resta)
        cuentas.saldo = resta
    }
}

function saldoActual() {
    alert ("Tu saldo actual es: " +  cuentas.saldo)
}

btnIngreso.addEventListener("click", depositos)
btnRetiro.addEventListener("click", retiros)
btnSaldo.addEventListener("click", saldoActual)


