function calculate() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const operation = document.getElementById("operation").value;
    const resultElement = document.getElementById("result");

    // Validate inputs
    if (isNaN(input1) || isNaN(input2) || input1.trim() === "" || input2.trim() === "") {
        resultElement.classList.remove("alert-primary");
        resultElement.classList.add("alert-danger");
        resultElement.textContent = "Invalid input. Please enter numbers.";
        resultElement.classList.remove("d-none");
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            resultElement.classList.remove("alert-primary");
            resultElement.classList.add("alert-danger");
            resultElement.textContent = "Please select an operation.";
            resultElement.classList.remove("d-none");
            return;
    }

    resultElement.classList.remove("alert-danger");
    resultElement.classList.add("alert-primary");
    resultElement.textContent = `Result: ${result}`;
    resultElement.classList.remove("d-none");
}

function clearAll() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("operation").selectedIndex = 0;
    document.getElementById("result").classList.add("d-none");
}