const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (isNumber(value)) {
            handleNumberInput(value);
        } else if (isOperator(value)) {
            handleOperatorInput(value);
        } else if (value === '=') {
            handleEquals();
        } else if (value === 'C') {
            handleClear();
        }
    });
});

function isNumber(value) {
    return !isNaN(value);
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function handleNumberInput(value) {
    if (display.value === '0' || currentOperator === '') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function handleOperatorInput(value) {
    firstOperand = parseFloat(display.value);