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
    this.height = this.setX(height);
    this.width = this.setY(width);
  }

  setX(height) {
    if (Number.isFinite(height)) {
      return this.height = height
    }

    throw new Error();
  };

  setY(width) {
    if (Number.isFinite(width)) {
      return this.width = width
    }

    throw new Error();
  };

  logSum() {
    return this.height + this.width
  };

  logMul() {
    return this.height * this.width
  };

  logSub() {
    return this.height - this.width
  };

  logDiv() {
    return this.height / this.width
  }
};

