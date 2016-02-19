function main() {
    var a = 0;
    var b = 0;
    a = parseInt(prompt("Please enter your number"));
    while (a > 0) {
        b *= 10;
        b = b + parseInt(a % 10);
        a = parseInt(a / 10);
    }
    document.getElementById("demo").innerHTML = "Reverse number is: " + b;
}