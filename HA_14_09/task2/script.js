function addNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 + number2;
    document.getElementById('result').textContent = `Ergebnis: ${result}`;
}

function subtractNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 - number2;
    document.getElementById('result').textContent = `Ergebnis: ${result}`;
}

function multiplyNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 * number2;
    document.getElementById('result').textContent = `Ergebnis: ${result}`;
}

function divideNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 / number2;
    document.getElementById('result').textContent = `Ergebnis: ${result}`;
}