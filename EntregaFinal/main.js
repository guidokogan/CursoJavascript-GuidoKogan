var carOptions = {
    volkswagen: {
      sedan: 0.2,
      suv: 0.32,
      golf: 0.35,
    },
    renault: {
      onix: 0.14,
      cruze: 0.18,
      joy: 0.22,
    },
    ford: {
      ka: 0.5,
      mondeo: 0.6,
      mustang: 1.2,
    },
  };
  
  function getModelValue(brandInput, modelInput) {
    // renault joy
    var brand = brandInput.toLowerCase();
    var model = modelInput.toLowerCase();
    if (brand in carOptions) {
      if (model in carOptions[brand]) {
        return carOptions[brand][model];
      } else {
        console.log("no encuentro el modelo");
      }
    } else {
      console.log("no encuentro la marca");
    }
  }
  
  function getYearValue(year) {
    switch (true) {
      case year < 1950:
        return 2.5;
        break;
      case year < 1970:
        return 2.3;
        break;
      case year < 1990:
        return 2;
        break;
      case year < 2000:
        return 1.8;
        break;
      case year < 2005:
        return 1.6;
        break;
      case year < 2010:
        return 1.4;
        break;
      case year <= 2015:
        return 1.2;
        break;
      case year > 2015:
        return 0.8;
        break;
    }
  }
  
  function getPrice(brand, model, year, price) {
    var totalData = new Object();
    totalData.price = price;
    totalData.modelValue = getModelValue(brand, model);
    totalData.yearValue = getYearValue(year);
    totalData.total = price * totalData.modelValue * totalData.yearValue;
    return "El valor del seguro es: " + totalData.total;
  }
  

var fordMustang = getPrice("ford", "mustang", 1920, 800000);