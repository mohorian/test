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
    this.#currentFuelVolume = 0;
    this.#isStarted = false;
    this.#mileage = 0;
  };

  set brand(brandName) {
    const isValid = brandName.length > 0 && brandName < 51 && typeof brandName === 'string';

    if (isValid) {
      this.#brand = brandName;
    }

    throw new Error();
  };

  get brand() {
    return this.#brand
  };

  set model(modelName) {
    const isValid = brandName.length > 0 && brandName < 51 && typeof brandName === 'string';

    if (isValid) {
      this.#model = modelName;
    }

    throw new Error();
  };

  get model() {
    return this.#model
  };

  set yearOfManufacturing(date) {
    if (date >= 1900 && date <= new Date().getFullYear()) {
      this.#yearOfManufacturing = date;
    };

    throw new Error();
  };

  get yearOfManufacturing() {
    return this.#yearOfManufacturing
  };

  set maxSpeed(speed) {
    const isValid = speed >= 100 && speed <= 300 && Number.isFinite(speed);

    if (isValid) {
      this.#maxSpeed = speed;
    };

    throw new Error();
  };

  get maxSpeed() {
    return this.#maxSpeed
  };

  set maxFuelVolume(fuelLiters) {
    const isValid = fuelLiters >= 5 && fuelLiters <=20 && Number.isFinite(fuelLiters);

    if (isValid) {
      this.#maxFuelVolume = fuelLiters;
    };

    throw new Error();
  };

  get maxFuelVolume() {
    return this.#maxFuelVolume
  };

  set fuelConsumption(consumptionLiters) {
    if (Number.isFinite(consumptionLiters) && consumptionLiters > 0) {
      this.#fuelConsumption = consumptionLiters;
    };

    throw new Error();
  };

  get fuelConsumption() {
    return this.#fuelConsumption
  };

  get currentFuelVolume() {
    return this.#currentFuelVolume
  };

  get isStarted() {
    return this.#isStarted
  };

  get mileage() {
    return this.#mileage
  };

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    };

    this.#isStarted = true;
  };

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    };

    this.#isStarted = false;
  };

  fillUpGasTank(fuelLiters) {
    if (!Number.isFinite(fuelLiters) || fuelLiters <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    };

    if (this.#currentFuelVolume + fuelLiters > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    };

    this.#currentFuelVolume += fuelLiters;
  };

  drive(speed, time) {
    if (!Number.isFinite(speed) || speed <= 0) {
      throw new Error('Неверная скорость');
    };

    if (!Number.isFinite(time) || time <= 0) {
      throw new Error('Неверное количество часов');
    };

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    };

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    };

    const neededFuelVolume = speed * time * this.#fuelConsumption / 100;

    if (neededFuelVolume > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    };

    this.#currentFuelVolume -= neededFuelVolume;
    this.#mileage += speed * time;
  };
};

module.exports = { Car };