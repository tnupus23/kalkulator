const calcScreen = document.querySelector('.screen');

const updateScreen = (number) => {
    calcScreen.value = number;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

let prevNumber = '';
let calculationOpr = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if (calculationOpr === '') {
        prevNumber = currentNumber;
    }
    calculationOpr = operator;
    currentNumber = '0';
}

const equalSign = document.querySelector('.equal');
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';
    switch (calculationOpr) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break; 
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;       
        default:
            break;
    }
    currentNumber = result;
    calculationOpr = '';
}

const clrBtn = document.querySelector('.all-clear');
clrBtn.addEventListener('click', () => {
    clrAll();
    updateScreen(currentNumber);
});

const clrAll = () => {
    prevNumber = '';
    calculationOpr = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value);
    updateScreen(currentNumber);
});

inputPercentage = (percentage) => {
    if (currentNumber.includes('%')) {
        return;
    }
    currentNumber = (prevNumber, currentNumber)/100;
}
