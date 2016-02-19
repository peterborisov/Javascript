function main() {
    var input = prompt("Enter your number:");
    if (input % 5 == 0 && input % 3 == 0) {
        document.getElementById("demo").innerHTML = "FizzBuzz";
    }
    else if (input % 3 == 0) {
        document.getElementById("demo").innerHTML = "Fizz";
    }
    else if (input % 5 == 0) {
        document.getElementById("demo").innerHTML = "Buzz";
    }
    else {
        document.getElementById("demo").innerHTML = "none of them";
    }
}