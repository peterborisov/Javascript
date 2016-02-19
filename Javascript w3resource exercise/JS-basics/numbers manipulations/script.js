function multiplyBy() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = "Result is : " + num1 * num2;
}

function divideBy() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = "Result is : " + num1 / num2;
}
function collecting() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = "Result is : " + (parseFloat(num1) + parseFloat(num2));
}
function subtracting() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = "Result is : " + (parseFloat(num1) - parseFloat(num2));
}
function moda() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = "Result is : " + (parseFloat(num1) % parseFloat(num2));
}
