var d = document;

var nombre = d.getElementById("nombre");
var socio = d.getElementById("socio");
var email = d.getElementById("email");

email.value = "g_kogan@yahoo.com.ar";

var nombreValue = nombre.value;
var socioValue = socio.value;
var emailValue = email.value;

var mensajeValue = "Hola " + nombreValue + ", socio número: " + socioValue + ". Te vamos a mandar un mail a " + emailValue + " para confirmar tu inscripción";

var cuerpo = d.getElementById("cuerpo")
var p = d.createElement("p");
        p.id = "mensajeExtra"
        p.innerHTML = "Felicidades";
        p.classList.add("felicidades");

function showMsgFinal(){
    d.getElementById('mensajeFinal').innerHTML = mensajeValue;
    cuerpo.appendChild(p);
}