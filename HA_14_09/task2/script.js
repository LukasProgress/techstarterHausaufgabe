document.addEventListener("DOMContentLoaded", function() {
    const num1 = document.querySelector("#number1")
    const num2 = document.querySelector("#number2")
    const addButton = document.querySelector("#addButton")
    const subButton = document.querySelector("#subButton")
    const mulButton = document.querySelector("#mulButton")
    const divButton = document.querySelector("#divButton")
    const result = document.querySelector("#result")
    
    function add(a, b){
        return a + b
    }
    
    function sub(a, b){
        return a - b
    }
    
    function mul(a, b){
        return a * b
    }
    
    function div(a, b){
        if (b !== 0) {
            return a / b
        } else {
            return "Kann nicht durch Null teilen"
        }
    }
    
    function handleClick(operator) {
        const a = parseFloat(num1.value)
        const b = parseFloat(num2.value)
        let res;
        
        switch(operator) {
            case '+':
                res = add(a, b)
                break;
            case '-':
                res = sub(a, b)
                break;
            case '*':
                res = mul(a, b)
                break;
            case '/':
                res = div(a, b)
                break;
        }
        
        result.innerText = res
    }
    
    addButton.addEventListener("click", () => handleClick('+'))
    subButton.addEventListener("click", () => handleClick('-'))
    mulButton.addEventListener("click", () => handleClick('*'))
    divButton.addEventListener("click", () => handleClick('/'))
})
