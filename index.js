let result = document.getElementById('result');
const buttons = document.getElementsByTagName('button');
// console.log(result)
// console.log(buttons)
let arr = Array.from(buttons)
const operators = ["%", "*", "+", "-", "/"]

// console.log(arr)
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e)
        // console.log(e.target.innerText)

        let value = e.target.innerText;

        if (value === "AC") {
            result.value = "";
        }
        else if (value === "DEL") {
            result.value = result.value.substring(0, result.value.length - 1);
        }
        else if (value === "%" || value === "*" || value === "-" || value === "/" || value === "+") {
            if (operators.includes(result.value[result.value.length - 1])) {
                return;
            }
            else {
                result.value += value;
            }
        }
        else if (value === "=") {
            result.value = eval(result.value);
        }
        else if((value === "0" || value === "00") && result.value.length === 1)
        {
            return;
        }
        else {
            result.value += value;
        }
    })
});