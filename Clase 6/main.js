var marcasAutos = ["Volkswagen", "Renault", "Ford", "Peugeot", "Chevrolet", "Fiat", "Citroen", "Toyota", "Honda"]
var marcasMotos = ["Kawasaki", "Ducati", "Harley-Davidson", "Suzuki", "KTM", "Triumph"]
var marcasAgregadas = prompt("Ingrese una marca");
var marcasGeneral = marcasAutos.concat(marcasMotos, marcasAgregadas);

function listar_marcas() {
    for (var n=0; n < marcasGeneral.length; n++){
        if (n % 1 === 0) {
            console.log(marcasGeneral[n] + " " + n);
            continue
        }
        if(n == 7){
            console.log(marcasGeneral[n] + " " + n)
            alert("Tenemos esta marca: " + marcasGeneral[7]);
        }
    }
}

