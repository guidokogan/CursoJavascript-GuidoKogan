var nombre = prompt("Ingrese su nombre y apellido");
var edad = prompt("Ingrese su edad");

if (edad < 18) {
    alert("Hola " + nombre + "! Sos menor de edad, vuelve en unos años");
    document.getElementById("nombre").innerHTML = "Hola " + nombre + "! Sos menor de edad, vuelve en unos años";
} else if (edad == 18) {
    alert("Hola " + nombre + "! Eres mayor por lo justo!");
    document.getElementById("nombre").innerHTML = "Hola " + nombre + "! Eres mayor por lo justo!";
} else if (edad < 28) {
    alert("Hola " + nombre + "! Eres joven todavía!");
    document.getElementById("nombre").innerHTML = "Hola " + nombre + "! Eres joven todavía!";
} else if (edad < 40) {
    alert("Hola " + nombre + "! Eres un adulto!");
    document.getElementById("nombre").innerHTML = "Hola " + nombre + "! Eres un adulto!";
} else if (edad >= 40) {
    alert("Hola " + nombre + "! Ya estamos grandes, cuanta experiencia!");
    document.getElementById("nombre").innerHTML = "Hola " + nombre + "! Ya estamos grandes, cuanta experiencia!";
}
