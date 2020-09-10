// Constructor
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
		let poliza = ((this.precio * 0.001));
	
		if (poliza < 1000) {
		  poliza += base;
		}
		const diferencia = new Date().getFullYear() - this.anio;
	
		poliza -= ((diferencia * 3) * poliza) / 100;
	
		if (this.tipo === 'todo-riesgo') {
		  poliza *= 2;
		}
	
		return poliza;
	}
  }
$(function () {

	$('.changeButton').click(function(){
		var $this = $(this);
		$this.toggleClass('changeButton');
		if($this.hasClass('changeButton')){
			$this.text('Cotizá!');			
		} else {
			$this.text('Probá de nuevo!');
		}
	});
	const selectMarca = document.querySelector('#marca');
	const selectModelo = document.querySelector('#modelo');

	const formCotizar = document.querySelector('#cotizadorSeguro')

	formCotizar.addEventListener('submit', cotizarSeguro)

	const marcas = listaSelect(autos, "marcas");

	cargarContenido(marcas, selectMarca);

	selectMarca.addEventListener('change', e =>{

		selectModelo.innerHTML = '<option value=""> - Seleccionar - </option>';
		const modelos = autos.filter(elem => elem.marcas.toLowerCase().replace(' ', '-') == e.target.value);
		const listaModelos = listaSelect(modelos, "modelo")
		cargarContenido(listaModelos, selectModelo)

	})

	llenarFecha();
}
)

function cotizarSeguro(e) {
	e.preventDefault();

	const marca = document.querySelector('#marca').value;
	const modelo = document.querySelector('#modelo').value;
	const anio = document.querySelector('#anio').value;
	
	const tipo = document.querySelector('input[name=tipo]:checked').value;

	if (marca == '' || modelo == '' || anio == '') {
		mostrarMensaje('Todos los campos son obligatorios', 'error')
		return;
	}
	mostrarMensaje('Cotizando ...', 'exito');

	const resultados = document.querySelector('#resultado .formInfo__resultado')
	if (resultados != null) {
		resultados.remove();
	}

	filtroPrecio = autos.find(elem => elem.marcas.toLowerCase().replace(' ', '-') == marca && elem.modelo.toLowerCase().replace(' ', '-') == modelo)

	const seguro = new Seguro(marca, modelo, anio, tipo, filtroPrecio.precio);

	const polizaTotal = seguro.cotizarSeguro();

	
	mostrarResultado(polizaTotal, seguro);
	
}

function mostrarResultado(poliza, seguro) {
	let {marca, modelo, anio, tipo, precio} = seguro;

	const options1 = { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 };
	const options2 = { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 };
	const formatoPrecio = new Intl.NumberFormat('es-AR', options1);
	const formatoPoliza = new Intl.NumberFormat('es-AR', options2);

	const div = document.createElement('div');
	div.classList.add('formInfo__resultado');

	div.innerHTML = `
	  <h3>Marca: ${marca} </h3>
	  <h3>Modelo: ${modelo}  </h3>
	  <h3>Año: ${anio} </h3>
	  <h3>Suma Asegurada: ${formatoPrecio.format(precio)}  </h3>
	  <h3>Tipo de Cobertura: ${tipo.replace('-', ' ')}  </h3>
	  <br>
	  <h1 id="getPrice"> ${formatoPoliza.format(poliza)}  </h1>
	  <h3 style="text-transform: lowercase !important;">Por mes</h3>
	  `;

	  const resultadoPoliza = document.querySelector('#resultado')
	  setTimeout(() => {
		resultadoPoliza.appendChild(div);
	  }, 2000);
}


function mostrarMensaje(mensaje, tipo) {
  const div = document.createElement('div');

  if (tipo === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('correcto');
  }

  div.classList.add('mensaje', 'mt-10');
  div.textContent = mensaje;

  const formulario = document.querySelector('#cotizadorSeguro');
  formulario.insertBefore(div, document.querySelector('#resultado'));
  
  setTimeout(() => {
    div.remove();
  }, 2000);
}


function llenarFecha() {
	const max = new Date().getFullYear();
	min = max - 50;
	
	selectYear = document.querySelector('#anio')

	for (let i = max; i > min; i--){
		const option = document.createElement('option');
		option.value = i;
		option.textContent = i;
		selectYear.appendChild(option)
	}
}

function cargarContenido(array, select){
	array.forEach(element => {
		const option = document.createElement('option');
		option.value = element.toLowerCase().replace(' ', '-');
		option.textContent = element;
		select.appendChild(option);
	})
}

function listaSelect(array, key){
	let listado = [];

	array.forEach((elem) => {
		if (!listado.includes(elem[key])){
			listado.push(elem[key])
		}
	})
	return listado.sort();
}