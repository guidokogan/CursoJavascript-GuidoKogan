var datosJSON = {"nombre": "", "socio": null, "email": ""}

function guardar(){
    datosJSON.nombre = document.getElementById('nombre').value;
    datosJSON.socio = document.getElementById('socio').value;
    datosJSON.email = document.getElementById('email').value;
    localStorage.setItem('datosformulario', btoa(JSON.stringify(datosJSON)))
}

function recuperar(){
    datosJSON = JSON.parse(atob(localStorage.getItem('datosformulario')))
    document.getElementById('nombre').value = datosJSON.nombre;
    document.getElementById('socio').value = datosJSON.socio;
    document.getElementById('email').value = datosJSON.email;
}