
window.addEventListener("load", function() { // ging besser, das war super easy

    // nötige Variablen deklarieren
let value1 = document.getElementById("number1");
let value2 = document.getElementById("number2");
const addButton = document.querySelector('input[type="button"][value="+"]');
const subtractButton = document.querySelector('input[type="button"][value="-"]');
const multiplyButton = document.querySelector('input[type="button"][value="*"]');
const divideButton = document.querySelector('input[type="button"][value="/"]');



addButton.addEventListener("click", () => {

    const result = parseInt(value1.value) + parseInt(value2.value);
const resultSpan = document.getElementById("result");
resultSpan.innerText = result;
  })
  

subtractButton.addEventListener("click", () => {

const result = parseInt(value1.value) - parseInt(value2.value);
const resultSpan = document.getElementById("result");
resultSpan.innerText = result;
  })
  
  multiplyButton.addEventListener("click", () => {

    const result = parseInt(value1.value) * parseInt(value2.value);
    const resultSpan = document.getElementById("result");
    resultSpan.innerText = result;
      })
      

      divideButton.addEventListener("click", () => {

        const result = parseInt(value1.value) / parseInt(value2.value);
        const resultSpan = document.getElementById("result");
        resultSpan.innerText = result;
          })


});