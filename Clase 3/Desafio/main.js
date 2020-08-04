var marca = ["Volkswagen", "Renault", "Ford", "Peugeot", "Chevrolet", "Fiat", "Citroen", "Toyota", "Honda"]

function listar_marcas() {
    for (var n=0; n < marca.length; n++){
        if(n == 1){
            console.log(marca[n] + " " + n)
            continue
        }
        if(n == 3){
            console.log(marca[n] + " " + n)
            continue
        }
        if(n == 5){
            console.log(marca[n] + " " + n)
            continue
        }
        if(n == 7){
            console.log(marca[n] + " " + n)
            alert("Tenemos esta marca: " + marca[7]);
        }
    }
}