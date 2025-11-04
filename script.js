const display = document.getElementById('display');
let memory = 0;
let angleMode = 'radians'; // 'radians' or 'degrees'

// Constants
const PI = Math.PI;
const E = Math.E;

function clearDisplay() {
    display.textContent = '0';
}

function clearEntry() {
    display.textContent = '0';
}

function backspace() {
    if (display.textContent.length === 1) {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
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

// Scientific Functions
function toRadians(angle) {
    return angleMode === 'degrees' ? angle * Math.PI / 180 : angle;
}

function toDegrees(angle) {
    return angleMode === 'degrees' ? angle : angle * 180 / Math.PI;
}

function calculateSin() {
    try {
        const value = parseFloat(display.textContent);
        const result = Math.sin(toRadians(value));
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateCos() {
    try {
        const value = parseFloat(display.textContent);
        const result = Math.cos(toRadians(value));
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateTan() {
    try {
        const value = parseFloat(display.textContent);
        const result = Math.tan(toRadians(value));
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateAsin() {
    try {
        const value = parseFloat(display.textContent);
        const result = toDegrees(Math.asin(value));
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateAcos() {
    try {
        const value = parseFloat(display.textContent);
        const result = toDegrees(Math.acos(value));
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateAtan() {
    try {
        const value = parseFloat(display.textContent);
        const result = toDegrees(Math.atan(value));
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateLog() {
    try {
        const value = parseFloat(display.textContent);
        const result = Math.log10(value);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateLn() {
    try {
        const value = parseFloat(display.textContent);
        const result = Math.log(value);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateSqrt() {
    try {
        const value = parseFloat(display.textContent);
        const result = Math.sqrt(value);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculatePower() {
    try {
        const currentValue = parseFloat(display.textContent);
        display.textContent = currentValue + '^';
        // Wait for second number input
        // This is a simplified version - in a real calculator you'd need more complex logic
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateFactorial() {
    try {
        const value = parseInt(display.textContent);
        if (value < 0) {
            display.textContent = 'Error';
            return;
        }
        let result = 1;
        for (let i = 2; i <= value; i++) {
            result *= i;
        }
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculatePi() {
    display.textContent = PI;
}

function calculateE() {
    display.textContent = E;
}

function calculateExp() {
    try {
        const value = parseFloat(display.textContent);
        const result = Math.exp(value);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateInverse() {
    try {
        const value = parseFloat(display.textContent);
        if (value === 0) {
            display.textContent = 'Error';
            return;
        }
        const result = 1 / value;
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateMod() {
    try {
        const value = parseFloat(display.textContent);
        display.textContent = value + ' mod ';
        // Wait for second number input
        // This is a simplified version - in a real calculator you'd need more complex logic
    } catch (error) {
        display.textContent = 'Error';
    }
}

function toggleSign() {
    try {
        const value = parseFloat(display.textContent);
        display.textContent = -value;
    } catch (error) {
        display.textContent = 'Error';
    }
}

// Memory functions
function memoryStore() {
    memory = parseFloat(display.textContent);
}

function memoryRecall() {
    display.textContent = memory;
}

function memoryAdd() {
    memory += parseFloat(display.textContent);
}

function memorySubtract() {
    memory -= parseFloat(display.textContent);
}

function memoryClear() {
    memory = 0;
}

// Toggle angle mode
function toggleAngleMode() {
    angleMode = angleMode === 'radians' ? 'degrees' : 'radians';
}
