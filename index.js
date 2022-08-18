function makeObjectDeepCopy(target) {
  if (target === null || target === undefined) {
    return target
  }

  if (typeof(target) === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const propety in target) {
      cloneTarget[propety] = makeObjectDeepCopy(target[propety]);
    };

    return cloneTarget;
  };

  return target
};

function selectFromInterval(arr, number1, number2) {
  if (!Array.isArray(arr) || typeof(number1) !== 'number' || typeof(number2) !== 'number') {
    throw new Error();
  };

  const isValidArray = arr.every((e) => typeof e === 'number');

  if (!isValidArray) {
    throw new Error();
  };

  if (number1 > number2) {
    [number2, number1] = [number1, number2];
  };
  return  arr.filter((n) => n >= number1 && n <= number2)
};

let myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    let fromNumber = this.from;
    const toNumber = this.to;
    const isError = toNumber < fromNumber ||  typeof(fromNumber) !== 'number' || typeof(toNumber) !== 'number';
    return {
      next() {
        if (isError) {
          throw new Error()
        };

        if (fromNumber <= toNumber) {
          return {
            value: fromNumber++,
            done: false
          }
        } else {
          return {
            done: true
          }
        };
      }
    }
  }
};
