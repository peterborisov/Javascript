function subtract() {
    let first = document.getElementById('firstNumber'),
        second = document.getElementById('secondNumber'),
        resultDiv = document.getElementById('result'),
        result = Number(first.value) - Number(second.value);
    resultDiv.innerText += result;

}