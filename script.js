const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function appendToDisplay(value) {
    // Prevent multiple operators in a row
    const lastChar = display.textContent.slice(-1);
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(lastChar) && operators.includes(value)) {
        // Replace the last operator with the new operator
        display.textContent = display.textContent.slice(0, -1) + value;
    } else if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function sanitizeInput(input) {
    // Remove invalid operator sequences
    return input.replace(/([+\-*/])([+\-*/])/g, '$2');
}

function calculateResult() {
    try {
        const sanitizedInput = sanitizeInput(display.textContent);
        const result = eval(sanitizedInput);
        if (result === Infinity || isNaN(result)) {
            display.textContent = 'Error';
        } else {
            display.textContent = result;
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}
