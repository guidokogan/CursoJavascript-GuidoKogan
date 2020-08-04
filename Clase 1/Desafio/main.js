var nombre = prompt("Ingrese su primer nombre", "Guido");
var apellido = prompt("Ingrese su apellido", "Kogan");

if (nombre != null) {
    alert("Hola " + nombre + " " + apellido + "! Como has estado?");
    document.getElementById("nombre").innerHTML = "Hola " + nombre + " " + apellido + "! Como has estado?";
}
