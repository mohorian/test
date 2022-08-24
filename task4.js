function concatStrings(string, separator) {
  
  return function(nextString) {
    if (typeof string !== 'string') {
      return
    };

    if (typeof nextString !== 'string') {
      return console.log(string)
    };

    if (typeof separator !== 'string') {
      separator = '';
    };

    const newString = string + separator + nextString;

    return concatStrings(newString, separator)
  }
};

class Calculator {
  constructor(height, width) {
    if (arguments.length !== 2) {
      throw new Error()
    };

    this.height = this.setX(height);
    this.width = this.setY(width);
  }

  setX(height) {
    if (Number.isFinite(height)) {
      this.height = height;
    }

    throw new Error();
  };

  setY(width) {
    if (Number.isFinite(width)) {
      this.width = width;
    }

    throw new Error();
  };

  logSum() {
    console.log(this.height + this.width)
  };

  logMul() {
    console.log(this.height * this.width)
  };

  logSub() {
    console.log(this.height - this.width)
  };

  logDiv() {
    console.log(this.height / this.width)
  }
};

const calc = new Calculator(1,2);

