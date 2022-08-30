class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage;
  

  constructor() {
    this.#brand;
    this.#model;
    this.#yearOfManufacturing;
    this.#maxSpeed;
    this.#maxFuelVolume;
    this.#fuelConsumption;
    this.#currentFuelVolume;
    this.#isStarted;
    this.#mileage;
  };

  set brand(brandName) {
    if (brandName.length > 0 && brandName < 51) {
      this.#brand = brandName;
    }
  };

  get brand() {
    return this.#brand
  };

  set model(modelName) {
    if (modelName.length > 0 && modelName < 51) {
      this.#model = modelName;
    }
  };

  get model() {
    return this.#model
  };

  set yearOfManufacturing(date) {
    if (date >= 1900 && date <= new Date().getFullYear()) {
      this.#yearOfManufacturing = date;
    }
  };



  start() {

  };

  shutDownEngine() {};

  fillUpGasTank() {};

  drive() {};




};
