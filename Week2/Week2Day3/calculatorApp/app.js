const display = document.getElementById("display");
const resultText = document.getElementById("resultText");

const appendValue = (value) => {display.value += value;};

const clearDisplay = () => {
    display.value = "";
    resultText.innerText = "";
};

const calculateResult = () => {
    try {
        let result = eval(display.value);
        resultText.innerText = `Result: ${display.value} = ${result}`;
        display.value = result;
    } catch (error) {
        resultText.innerText = `Invalid Expression`;
    }
};