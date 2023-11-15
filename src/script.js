let display = document.getElementById('display');

function appendCharacter(char) {
    display.value += char;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
