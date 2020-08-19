
var volkswagen = new Object();
volkswagen.marca = "Volkswagen";
volkswagen.modelo = "Sedan";
function getVolkswagenMultiplicador() {
    if (volkswagen.modelo == "Sedan") { return 0.2 } else;
    if (volkswagen.modelo == "SUV") { return 0.32 } else;
    if (volkswagen.modelo == "Golf") { return 0.35 };
}

var renault = new Object();
renault.marca = "Renault";
renault.modelo = "Cruze";
function getRenaultMultiplicador() {
    if (renault.modelo == "Onix") { return 0.14 } else;
    if (renault.modelo == "Cruze") { return 0.18 } else;
    if (renault.modelo == "Joy") { return 0.22 };
}

var ford = new Object();
ford.marca = "Ford";
ford.modelo = "Mondeo";
function getFordMultiplicador() {
    if (ford.modelo == "Ka") { return 0.5 } else;
    if (ford.modelo == "Mondeo") { return 0.6 } else;
    if (ford.modelo == "Mustang") { return 1.2 };
}

var chevrolet = new Object();
chevrolet.marca = "Chevrolet";
chevrolet.modelo = "Onix";
function getChevroletMultiplicador() {
    if (chevrolet.modelo == "Onix") { return 0.3 } else;
    if (chevrolet.modelo == "Cruze") { return 0.4 } else;
    if (chevrolet.modelo == "Joy") { return 0.5 };
}

var anio = prompt("Año del vehículo");
function getAnioMultiplicador() {
    switch (true) {
        case (anio < 1950): return 2.5; break;
        case (anio < 1970): return 2.3; break;
        case (anio < 1990): return 2; break;
        case (anio < 2000): return 1.8; break;
        case (anio < 2005): return 1.6; break;
        case (anio < 2010): return 1.4; break;
        case (anio <= 2015): return 1.2; break;
        case (anio > 2015): return 0.8; break;
    }
}

var volkswagenMultiplicador = getVolkswagenMultiplicador()
var renaultMultiplicador = getRenaultMultiplicador()
var fordMultiplicador = getFordMultiplicador()
var chevroletMultiplicador = getChevroletMultiplicador()
var anioMultiplicador = getAnioMultiplicador()


var marca = new Object();
marca.nombre = "Renault";
function getMarcaNombre() {
    if (marca.nombre == "Volkswagen") { return volkswagenMultiplicador } else;
    if (marca.nombre == "Renault") { return renaultMultiplicador } else;
    if (marca.nombre == "Ford") { return fordMultiplicador } else;
    if (marca.nombre == "Chevrolet") { return chevroletMultiplicador };
}
var marcaNombre = getMarcaNombre()


function valorSeguro (marca, anio, valor) {
    this.marca = marcaNombre;
    this.anio = anioMultiplicador;
    this.valor = prompt("Valor del vehículo")
    this.getValorSeguro = function getValorSeguro() {
        console.log(
            'Su seguro saldrá ' + valorSeguro.marca * valorSeguro.anioMultiplicador * valorSeguro.valor
        )
    }
}

var info = new valorSeguro ("Renault", anio, valor);





// var anio = prompt("Año del vehículo");
// var marcasAgregada = prompt('Ingrese la marca');
// var marcasBaseDeDatos = ["Volkswagen", "Renault", "Ford", "Peugeot", "Chevrolet", "Fiat", "Citroen", "Toyota", "Honda"];
// var marca = marcasBaseDeDatos.concat(marcasAgregada);
// var modelo = prompt('Ingrese el modelo');
// var valor = prompt("Valor del vehículo");
// var clase = "Trabajos Rurales"; 
// var tipodeuso = "Trabajos Rurales"; 
// var situacionimpositiva = "Responsable Inscripto";
// var localidad = prompt("Ingrese localidad, Ej: Rafaela");
// var producto = "Operatoria Normal";
// var formadepago =  ["Efectivo"];

// function valorSeguro (anio, marca, modelo, valor, clase, tipodeuso, situacionimpositiva, localidad, producto, formadepago) {
//     this.anio = anio;
//     this.marca = marca;
//     this.modelo = modelo;
//     this.valor = valor;
//     this.clase = clase;
//     this.tipodeuso = tipodeuso;
//     this.situacionimpositiva = situacionimpositiva;
//     this.localidad = localidad;
//     this.producto = producto;
//     this.formadepago = formadepago;
    
//     this.getValorSeguro = function () {
//         console.log(
//             'Sus datos son los siguientes: Año del vehículo: ' + this.anio + '\n' +
//             'Marca seleccionada: ' + this.marca + '\n' +
//             'Modelo del vehículo: ' + this.modelo + '\n' +
//             'El valor es: ' + this.valor + '\n' +
//             'La clase inscripta es: ' + this.clase + '\n' +
//             'Tipo de uso: ' + this.tipodeuso + '\n' +
//             'La situación impositiva del titular es: ' + this.situacionimpositiva + '\n' +
//             'El titular es de: ' + this.localidad + '\n' +
//             'El tipo de producto es: ' + this.producto + '\n' +
//             'Forma de pago: ' + this.formadepago + '\n'
//         )
//     }
// }

// var info = new valorSeguro (anio, marca, modelo, valor, "Trabajos Rurales", "Trabajos Rurales", situacionimpositiva, localidad, producto, "Efectivo");
// formadepago.push('Tarjeta de Crédito', 'Tarjeta de Débito');