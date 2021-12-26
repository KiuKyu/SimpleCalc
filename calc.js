function pressButton(number) {
    let console = document.getElementById("console");
    console.value += number;
}

function clearConsole() {
    let console = document.getElementById("console");
    console.value = "";
}

function calculate() {
    let console = document.getElementById("console").value;
    let result = eval(console);
    document.getElementById("console").value = result;
}