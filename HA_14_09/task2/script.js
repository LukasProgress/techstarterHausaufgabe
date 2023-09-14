function add(a, b){
    return a + b;

}

function sub(a, b){
    return a - b
}

function mul(a, b){
    return a * b
}

function div(a, b){
    return a / b
}

document.getElementById("addButton").onclick = function() {
    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);
    const result = add(a,b);
    document.getElementById('resultOutput').innerText = result;
}

document.getElementById("subtractButton").onclick = function() {
    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);
    const result = sub(a,b);
    document.getElementById('resultOutput').innerText = result;
}

document.getElementById("multiplyButton").onclick = function() {
    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);
    const result = mul(a,b);
    document.getElementById('resultOutput').innerText = result;
}

document.getElementById("divideButton").onclick = function() {
    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);
    const result = div(a,b);
    document.getElementById('resultOutput').innerText = result;
}