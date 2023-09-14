/* function add(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}

function mul(a, b){
    return a * b
}

function div(a, b){
    return a / b
}*/ 

//EventListener führt Code aus wenn Seite vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
//Constanten die auf die Textfelder der HTML verweisen
    const num1Elem = document.querySelector('#number1');
    const num2Elem = document.querySelector('#number2');
    const resultElem = document.querySelector('#result');

    //Funktion zum Berechnen. Sie liest die beiden Input Felder der HTML aus
    //und berechnet das Resultat.
    function calculate(operation) {
        const num1 = parseFloat(num1Elem.value);
        const num2 = parseFloat(num2Elem.value);
        let result;

        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'sub':
                result = sub(num1, num2);
                break;
            case 'mul':
                result = mul(num1, num2);
                break;
            case 'div':
                if(num2 !== 0){
                    result = div(num1, num2);
                } else {
                    alert("Division durch 0 ist nicht erlaubt!");
                    return;
                }
                break;
        }

        resultElem.textContent = result;
    }

    //Führt Operationen aus
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
        return a / b;
    }
    //Eventlistener für den Click auf die Rechenmethode
    document.querySelector('#addition').addEventListener('click', () => calculate('add'));
    document.querySelector('#subtraction').addEventListener('click', () => calculate('sub'));
    document.querySelector('#multiply').addEventListener('click', () => calculate('mul'));
    document.querySelector('#division').addEventListener('click', () => calculate('div'));
});
