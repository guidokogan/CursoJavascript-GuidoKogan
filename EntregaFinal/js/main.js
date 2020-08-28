formInfo__options__year.addEventListener("focus", function () {
  this.placeholder = "";
});
formInfo__options__year.addEventListener("blur", function () {
  this.placeholder = "Ej. Ford";
});
formInfo__valor.addEventListener("focus", function () {
  this.placeholder = "";
});
formInfo__valor.addEventListener("blur", function () {
  this.placeholder = "Ej. 100.000";
});

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

function populate(s1, s2) {
  var s1 = car;
  var s2 = model;
  s2.innerHTML = "";
  if (s1.value == "volkswagen") {
      var optionArray = ["|", "sedan|Sedan", "suv|Suv", "golf|Golf"];
  } else if (s1.value == "renault") {
      var optionArray = ["|", "onix|Onix", "cruze|Cruze", "joy|Joy"];
  } else if (s1.value == "ford") {
      var optionArray = ["|", "ka|Ka", "mondeo|Mondeo", "mustang|Mustang"];
  }
  for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption);
  }
}

function getModelValue(carSelected, modelSelected) {
  var carSelected = car.options[car.selectedIndex].value;
  var modelSelected = model.options[model.selectedIndex].value;
  var marca = carSelected;
  var modelo = modelSelected;
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
function getPrice(carSelected, modelSelected, yearSelected, valueSelected) {
  var valueSelected = formInfo__valor.value;
  var totalData = new Object();
  totalData.valueSelected = valueSelected;
  totalData.modelValue = getModelValue(carSelected, modelSelected);
  totalData.yearValue = getYearValue(yearSelected);
  totalData.total = totalData.valueSelected / totalData.modelValue / totalData.yearValue;
  totalData.total = +totalData.total.toFixed(2);
  document.getElementById("getPrice").innerHTML = "$" + totalData.total;
}


function mouseDown() {
  document.getElementById("saveCotizacion").style.backgroundColor="black";
}
function mouseUp() {
  document.getElementById("saveCotizacion").style.backgroundColor = "black";
}

var datosJSON = {"yearSelected": null, "valueSelected": null, "carSelected": "", "modelSelected": ""}

function saveCotizacion() {
  event.preventDefault();
  datosJSON.yearSelected = formInfo__options__year.value;
  datosJSON.valueSelected = formInfo__valor.value;
  datosJSON.carSelected = car.options[car.selectedIndex].value;
  datosJSON.modelSelected = model.options[model.selectedIndex].value;
  localStorage.setItem('datosformulario', (JSON.stringify(datosJSON)));
  document.getElementById("saveCotizacion").style.backgroundColor = "#121c42";
}