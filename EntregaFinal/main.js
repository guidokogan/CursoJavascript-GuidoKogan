var anio = prompt("Año del vehículo");
var marcasAgregada = prompt('Ingrese la marca');
var marcasBaseDeDatos = ["Volkswagen", "Renault", "Ford", "Peugeot", "Chevrolet", "Fiat", "Citroen", "Toyota", "Honda"];
var marca = marcasBaseDeDatos.concat(marcasAgregada);
var modelo = prompt('Ingrese el modelo');
var valor = prompt("Valor del vehículo");
var clase = "Trabajos Rurales"; 
var tipodeuso = "Trabajos Rurales"; 
var situacionimpositiva = "Responsable Inscripto";
var localidad = prompt("Ingrese localidad, Ej: Rafaela");
var producto = "Operatoria Normal";
var formadepago =  ["Efectivo"];

function valorSeguro (anio, marca, modelo, valor, clase, tipodeuso, situacionimpositiva, localidad, producto, formadepago) {
    this.anio = anio;
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
    this.clase = clase;
    this.tipodeuso = tipodeuso;
    this.situacionimpositiva = situacionimpositiva;
    this.localidad = localidad;
    this.producto = producto;
    this.formadepago = formadepago;
    
    this.getValorSeguro = function () {
        console.log(
            'Sus datos son los siguientes: Año del vehículo: ' + this.anio + '\n' +
            'Marca seleccionada: ' + this.marca + '\n' +
            'Modelo del vehículo: ' + this.modelo + '\n' +
            'El valor es: ' + this.valor + '\n' +
            'La clase inscripta es: ' + this.clase + '\n' +
            'Tipo de uso: ' + this.tipodeuso + '\n' +
            'La situación impositiva del titular es: ' + this.situacionimpositiva + '\n' +
            'El titular es de: ' + this.localidad + '\n' +
            'El tipo de producto es: ' + this.producto + '\n' +
            'Forma de pago: ' + this.formadepago + '\n'
        )
    }
}

var info = new valorSeguro (anio, marca, modelo, valor, "Trabajos Rurales", "Trabajos Rurales", situacionimpositiva, localidad, producto, "Efectivo");
formadepago.push('Tarjeta de Crédito', 'Tarjeta de Débito');