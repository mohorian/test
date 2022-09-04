class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  };

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  };

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  };

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) {
      return
    };

    if (number === '+/-') {
      this.currentOperand = -this.currentOperand;

      return
    }

    this.currentOperand = this.currentOperand.toString() + number.toString();
  };

  chooseOperation(operation) {
    if (this.currentOperand === '') {
      return
    };

    if (this.previousOperand !== '') {
      this.compute()
    };

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  };

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    };

    this.currentOperand = Math.round(computation * 100000000) / 100000000;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;

    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  };

  updateMemory(memoryAction) {
    if (memoryAction === 'MC') {
      this.memory = undefined;
    };

    if (memoryAction === 'MR' && this.memory !== undefined) {
      this.currentOperand = this.memory;
    };

    if (memoryAction === "M+" && this.currentOperand < 0) {
      this.memory = - this.currentOperand;
    };

    if (memoryAction === "M+" && this.currentOperand >= 0) {
      this.memory = this.currentOperand;
    };

    if (memoryAction === "M-" && this.currentOperand <= 0) {
      this.memory = this.currentOperand;
    };

    if (memoryAction === "M-" && this.currentOperand > 0) {
      this.memory = - this.currentOperand;
    };
  }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const memoryButtons = document.querySelectorAll('[data-memory]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})

memoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.updateMemory(button.innerText);
    calculator.updateDisplay();

    if (calculator.memory) {
      memoryButtons[1].style.color = '#adf802';
      memoryButtons[1].style.backgroundColor = 'rgba(139, 0, 139, 0.8)';
    } else {
      memoryButtons[1].style.color = '';
      memoryButtons[1].style.backgroundColor = '';
    }
  })
})