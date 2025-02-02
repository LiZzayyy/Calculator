
// CALCULATOR PROGRAM

function appendToDisplay(input) {
    const display = document.getElementById('display');
    if (display) {
        display.value += input; 
    } else {
        console.error("Element with id 'display' not found.");
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    if (display) {
        display.value = ""; 
    } else {
        console.error("Element with id 'display' not found.");
    }
}

function calculate() {
    const display = document.getElementById('display');
    if (display) {
        try {
            display.value = eval(display.value); 
        } catch (error) {
            display.value = "Error"; 
        }
    } else {
        console.error("Element with id 'display' not found.");
    }
}