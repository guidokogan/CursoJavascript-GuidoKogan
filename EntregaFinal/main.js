function getYearValue(yearSelected) {
  var yearSelected = formInfo__options__year.value;
  switch (true) {
    case yearSelected < 1950:
      return 28;
      break;
    case yearSelected < 1970:
      return 26;
      break;
    case yearSelected < 1990:
      return 24;
      break;
    case yearSelected < 2000:
      return 22;
      break;
    case yearSelected < 2005:
      return 20;
      break;
    case yearSelected < 2010:
      return 18;
      break;
    case yearSelected <= 2015:
      return 16;
      break;
    case yearSelected > 2015:
      return 14;
      break;
  }
}


var car = document.getElementById("formInfo__options__marca");
var model = document.getElementById("formInfo__options__model");

var carSelected = car.options[car.selectedIndex].value;
var modelSelected = model.options[model.selectedIndex].value;
var marca = carSelected;
var modelo = modelSelected;

function getModelValue(carSelected, modelSelected) {
  
  var carOptions = {
    volkswagen: {
      sedan: 32,
      suv: 33,
      golf: 35,
    },
    renault: {
      onix: 34,
      cruze: 38,
      joy: 32,
    },
    ford: {
      ka: 35,
      mondeo: 36,
      mustang: 32,
    },
  };

  if (marca in carOptions) {
    if (modelo in carOptions[marca]) {
      return carOptions[marca][modelo];
    } else {
      console.log("no encuentro el modelo");
    }
  } else {
    console.log("no encuentro la marca");
  }
}


var onix = document.getElementById("onix");
var cruze = document.getElementById("cruze");
var joy = document.getElementById("joy");
var ka = document.getElementById("ka");
var mondeo = document.getElementById("mondeo");
var mustang = document.getElementById("mustang");
var sedan = document.getElementById("sedan");
var suv = document.getElementById("suv");
var golf = document.getElementById("golf");

function removeExtraSelections() {
  if (carSelected == "volkswagen") {
    onix.parentNode.removeChild(onix);
    cruze.parentNode.removeChild(cruze);
    joy.parentNode.removeChild(joy);
    ka.parentNode.removeChild(ka);
    mondeo.parentNode.removeChild(mondeo);
    mustang.parentNode.removeChild(mustang);
    } else if (carSelected == "renault") {
      sedan.parentNode.removeChild(sedan);
      suv.parentNode.removeChild(suv);
      golf.parentNode.removeChild(golf);
      ka.parentNode.removeChild(ka);
      mondeo.parentNode.removeChild(mondeo);
      mustang.parentNode.removeChild(mustang);
    } else if (carSelected == "ford") {
      sedan.parentNode.removeChild(sedan);
      suv.parentNode.removeChild(suv);
      golf.parentNode.removeChild(golf);
      onix.parentNode.removeChild(onix);
      cruze.parentNode.removeChild(cruze);
      joy.parentNode.removeChild(joy);
    } else {
      sedan.parentNode.removeChild(sedan);
      suv.parentNode.removeChild(suv);
      golf.parentNode.removeChild(golf);
      onix.parentNode.removeChild(onix);
      cruze.parentNode.removeChild(cruze);
      joy.parentNode.removeChild(joy);
      ka.parentNode.removeChild(ka);
      mondeo.parentNode.removeChild(mondeo);
      mustang.parentNode.removeChild(mustang);
    } 
}


function getPrice(carSelected, modelSelected, yearSelected, valueSelected) {
  var valueSelected = formInfo__valor.value;
  var totalData = new Object();
  totalData.valueSelected = valueSelected;
  totalData.modelValue = getModelValue(carSelected, modelSelected);
  totalData.yearValue = getYearValue(yearSelected);
  totalData.total = totalData.valueSelected / totalData.modelValue / totalData.yearValue;
  totalData.total = +totalData.total.toFixed(2);
  document.getElementById('getPrice').innerHTML = "$" + totalData.total;
  removeExtraSelections();
}

