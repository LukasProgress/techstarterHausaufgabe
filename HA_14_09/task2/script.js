// Funktion zur Durchführung der Berechnung basierend auf dem ausgewählten Operator
function performCalculation(operator) {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    let result;

    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = sub(number1, number2);
            break;
        case '*':
            result = mul(number1, number2);
            break;
        case '/':
            result = div(number1, number2);
            break;
        default:
            result = "Ungültiger Operator";
    }

    document.getElementById("result").textContent = "Ergebnis: " + result;
}

// Funktionen für mathematische Operationen
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return "Division durch Null ist nicht erlaubt";
    }
    return a / b;
}