let display = document.getElementById("display");
let isOn = false;

function appendToDisplay(value) {
    if (isOn) {
        display.value += value;
    }
}

function clearDisplay() {
    if (isOn) {
        display.value = "";
    }
}

function deleteLast() {
    if (isOn) {
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
    if (isOn) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
}

function turnOn() {
    isOn = true;
    display.value = "";
}

function turnOff() {
    isOn = false;
    display.value = "";
}
