Array.prototype.myFilter = function myFilter(callback, arr = this) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      output.push(arr[i]);
    }
  };

  return output
};

function createDebounceFunction(callback, delay) {
  let timeout;

  return function executedFunction() {
    const func = () => { callback.apply(this, arguments)};

    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  }
};
