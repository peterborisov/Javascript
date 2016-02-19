function isPrime() {
    var n = prompt("Enter your number")
    if (n < 2) {
        document.getElementById("demo").innerHTML = n + " is NOT prime";
    }
    if (n != Math.round(n)) {
        document.getElementById("demo").innerHTML = n + " is NOT prime";
    }
    var isPrime = document.getElementById("demo").innerHTML = n + " is prime";

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            document.getElementById("demo").innerHTML = n + " is NOT prime";

        }
    }
    return isPrime;
}