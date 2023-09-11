const cuentas = [
    {
        usuario: "Andrea", 
        password: "2354",
        saldo: 200,
    },
    {
        usuario: "Eduardo",
        password: "6795",
        saldo: 350,
    },
    {
        usuario: "Guadalupe",
        password: "9145",
        saldo: 150,
    }
]

var C1 = cuentas[0].usuario
var C2 = cuentas[1].usuario
var C3 = cuentas[2].usuario

var P1 = cuentas[0].password
var P2 = cuentas[1].password
var P3 = cuentas[2].password

const user = document.getElementById("user");
const pwd = document.getElementById("pwd");
var btn = document.getElementById("btn");

var nombreAceptado = "";

function validacion () {
    if (C1 === user.value && P1 === pwd.value){
        nombreAceptado = user.value
        alert("Bienvenido/a " + nombreAceptado)
        window.open("../html/andrea.html")

    } else if (C2 === user.value && P2 === pwd.value) {
        nombreAceptado = user.value
        alert("Bienvenido/a " + nombreAceptado)
        window.open("../html/eduardo.html")

    } else if (C3 === user.value && P3 === pwd.value){
        nombreAceptado = user.value
        alert("Bienvenido/a " + nombreAceptado)
        window.open("../html/guadalupe.html")

    } else {
        alert("Datos incorrectos, inténtelo nuevamente")
    }        
}

btn.addEventListener("click", validacion);


