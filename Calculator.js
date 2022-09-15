function add() {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = number1 + number2;
}

function sub() {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = number1 - number2;
}

function mul() {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = number1 * number2;
}

function div() {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = number1 / number2;
}

