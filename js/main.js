// Obtener base de datos
var autos;
function myCallback(response) {
    autos = response;
}
$.ajax({
    url: 'js/db.json',
    dataType: 'json',
    async: false,
    success: myCallback,
    error: function (jqXHR, status, error){
        console.log('Status: ${status} - Error: ${error}')
    }
});;

    

// Llena las options del select Año con un limite de fechas
function llenarFecha() {
    const max = new Date().getFullYear();
    min = max - 50;
    selectYear = $("#anio");
    for (let i = max; i > min; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.append(option);
    }
}
    

// Función que carga el contenido de los selects
function cargarContenido(array, select) {
    array.forEach((element) => {
        const option = document.createElement("option");
        option.value = element.toLowerCase().replace(" ", "-");
        option.textContent = element;
        select.append(option);
    });
}

    

// Función que limpia la base de datos eliminando los items repetidos
function listaSelect(array, key) {
    let listado = [];
    array.forEach((elem) => {
        if (!listado.includes(elem[key])) {
            listado.push(elem[key]);
        }
    });
    return listado.sort();
}
    

// Función que muestra el mensaje de carga de cotización o de error
function mostrarMensaje(mensaje, tipo) {
    const div = document.createElement("div");
    if (tipo === "error") {
        div.classList.add("error");
    } else {
        div.classList.add("correcto");
    }
    div.classList.add("mensaje");
    div.textContent = mensaje;
    const formulario = document.querySelector("#cotizadorSeguro");
	formulario.insertBefore(div, document.querySelector("#resultado"))
	$(".mensaje").delay( 1400 ).fadeOut(400);
    setTimeout(() => {
        div.remove();
    }, 2000);
}


// Constructor de formula de la cotización
class Seguro {
    constructor(marca, modelo, anio, tipo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.tipo = tipo;
        this.precio = precio;
    }
    cotizarSeguro() {
        const base = 1000;
        let poliza = this.precio * 0.001;

        if (poliza < 1000) {
            poliza += base;
        }
        const diferencia = new Date().getFullYear() - this.anio;

        poliza -= (diferencia * 3 * poliza) / 100;

        if (this.tipo === "todo-riesgo") {
            poliza *= 2;
        }
        return poliza;
    }
}


// Todo lo que pasa apenas carga la página
$(function () {

    // Tabla de cotizaciones realizadas
    $(".botonVerAutos__link").click(() => {
        $("#tablaAutos__container").fadeTo(100, 1);

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#tablaAutos__container").offset().top
        }, 600);
        setTimeout(() => {
            $('#tablaAutos__container').fadeOut();
        }, 4000);
    
    });
    $("#tablaAutos__container").hide()


    // Botón para ver tabla de cotizaciones realizadas
    $(".botonVerAutos__texto").hide();
    $(".botonVerAutos__link").mouseenter(() => {
        $(".botonVerAutos__texto").fadeTo(100, 1);
    });
    $(".botonVerAutos__link").mouseleave(() => {
        $(".botonVerAutos__texto").hide();
    });

    // Scroll horizontal en tabla de cotizaciones realizadas
    var horz = document.querySelector("#tablaAutos");
    isHover = false;
    horz.onmouseover=function(){
    isHover=true;
    };
    horz.onmouseout=function(){
    isHover=false;
    };
    function displaywheel(e){
        var evt=window.event || e
        var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta;
        if(delta<0 && isHover) { 
        horz.scrollLeft += 100;
        } else if(isHover) {
        horz.scrollLeft -= 100;
        }
    }
    var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"
    if (document.attachEvent) {
        document.attachEvent("on"+mousewheelevt, displaywheel)
    } else if (document.addEventListener){
        document.addEventListener(mousewheelevt, displaywheel, false)
    }


    // Animación del botón comenzar al principio.
    $(".botonBienvenida").mouseenter(() => {
        var button = $(".botonBienvenida a");
        button.animate({padding: '15px 120px', borderRadius:'0px'}, {duration: 200, easing: "swing"});
    });
    $(".botonBienvenida").mouseleave(() => {
        var button = $(".botonBienvenida a");
        button.animate({padding: '15px 30px', borderRadius: '13px'}, {duration: 200, easing: "swing"});
    });


    // Cambio de texto en el botón cotizar
	$(".changeButton").one( "click", function() {
        var $this = $(".changeButton");
        $this.toggleClass("changeButton");
        
        if ($this.hasClass("changeButton")) {
            $this.text("Cotizá!");
        } else {
            $this.text("Probá de nuevo!");
        }
	});
	

    // Ocultar el input Modelos
	$(".formInfo__input:nth-child(3)").hide();
    $(".botonVerAutos").hide();
	
	$("#marca").change(function(){
		$(".formInfo__input:nth-child(3)").fadeTo(500, 1);
	});


    // Obtener los inputs
    const selectMarca = $("#marca");
	const selectModelo = $("#modelo");
    const formCotizar = $("#cotizadorSeguro");
    formCotizar.submit(cotizarSeguro);
    const marcas = listaSelect(autos, "marcas");
    cargarContenido(marcas, selectMarca);
    selectMarca.change((e) => {
        selectModelo.innerHTML = '<option value=""> - Seleccionar - </option>';
        const modelos = autos.filter((elem) => elem.marcas.toLowerCase().replace(" ", "-") == e.target.value);
        const listaModelos = listaSelect(modelos, "modelo");
        cargarContenido(listaModelos, selectModelo);
    });
    llenarFecha();
});

    

// Función que imprime el resultado obtenido de la cotizacion
function mostrarResultado(poliza, seguro) {
    let { marca, modelo, anio, tipo, precio } = seguro;
    const options1 = { style: "currency", currency: "ARS", minimumFractionDigits: 0 };
    const options2 = { style: "currency", currency: "ARS", minimumFractionDigits: 2 };
    const formatoPrecio = new Intl.NumberFormat("es-AR", options1);
    const formatoPoliza = new Intl.NumberFormat("es-AR", options2);
    

    // Creación del contenedor del resultado y de su contenido
    const div = document.createElement("div");
    div.classList.add("formInfo__resultado");
    div.innerHTML = `
	  <h3>Marca: ${marca} </h3>
	  <h3>Modelo: ${modelo}  </h3>
	  <h3>Año: ${anio} </h3>
	  <h3>Suma Asegurada: ${formatoPrecio.format(precio)}  </h3>
	  <h3>Tipo de Cobertura: ${tipo.replace("-", " ")}  </h3>
	  <br>
	  <h1 id="getPrice"> ${formatoPoliza.format(poliza)}  </h1>
	  <h3 style="text-transform: lowercase !important;">Por mes</h3>
	  `;
    const resultadoPoliza = $("#resultado");
    setTimeout(() => {
        resultadoPoliza.append(div).hide().fadeIn();
	}, 2000);
}


// La función que va a realizar la cotización
function cotizarSeguro(e) {
    e.preventDefault();


    // Obtener los contenidos de los inputs
    var marca = $("#marca").val();
    var modelo = $("#modelo").val();
    var anio = $("#anio").val();
	var tipo = $("input[name=tipo]:checked").val();


    // Mensaje de carga o de falta de rellenado de inputs
    if (marca == "" || modelo == "" || anio == "") {
        mostrarMensaje("Todos los campos son obligatorios", "error");
        return;
    }
    mostrarMensaje("Cotizando ...", "exito");
    

    // Limpia el contenido de la etiqueta resultados
    const resultados = $("#resultado .formInfo__resultado");
    if (resultados != null) {
        resultados.show().remove();
    }
    

    // Busca el valor del auto
    var filtroPrecio = autos.find((elem) => elem.precio);


    // Todos los elementos que componen al seguro
    var seguro = new Seguro(marca, modelo, anio, tipo, filtroPrecio.precio);


    // El valor de la poliza
    var polizaTotal = seguro.cotizarSeguro();
    mostrarResultado(polizaTotal, seguro);


    // Guarda las distintas cotizaciones realizadas
    localStorage.setItem("Marca", marca);
    localStorage.setItem("Modelo", modelo);
    localStorage.setItem("Año", anio);
    localStorage.setItem("Tipo", tipo);
    localStorage.setItem("Precio", filtroPrecio.precio);
    localStorage.setItem("Poliza Total", polizaTotal);


    // Llama a las distintas cotizaciones realizadas
    const marcaCotizada = localStorage.getItem("Marca");
    const modeloCotizada = localStorage.getItem("Modelo");
    const anioCotizada = localStorage.getItem("Año");
    const tipoCotizada = localStorage.getItem("Tipo");
    const precioCotizada = localStorage.getItem("Precio");
    const polizaTotalCotizada = localStorage.getItem("Poliza Total");


    // Imprime cada cotizacion realizada
    $(".botonVerAutos").fadeIn();
    $('#tablaAutos').append(
        `<div class="tablaAutos__container">
            <h2 style="text-transform: capitalize;" >${modeloCotizada}</h2>
            <h3 style="text-transform: capitalize;" >Marca: ${marcaCotizada}</h3><h3>Año:  ${anioCotizada}</h3>
            <h3 style="text-transform: capitalize;" >Tipo:  ${tipoCotizada}</h3>
            <h3>Precio:  ${precioCotizada}</h3>
            <h3>Poliza Total:  ${polizaTotalCotizada} por mes</h3>
        </div>`
    )
}