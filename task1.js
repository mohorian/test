const sing1 = prompt();
const sing2 = prompt();
const number1 = +sing1;
const number2 = +sing2;

// Code style says "Don't push console.log", but task descriptions demand console.log  in answers.
(function task1() {
  if (isNaN(number1) || isNaN(number2)) {
    return console.log("Некорректный ввод!");
  };
  console.log(number1.toString(number2));
})();

(function task2() {
  if (isNaN(number1)) {
    return console.log("Некорректный ввод!");
  };
  if (isNaN(number2)) {
    console.log("Некорректный ввод!");
  };
  console.log(`Ответ: ${number1 + number2}, ${number1 / number2}.`)
})();
