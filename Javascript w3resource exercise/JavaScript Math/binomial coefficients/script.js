function main() {
    var input = prompt("Enter two numbers : ").split(" ");
    var n = (input[0]);
    var k = (input[1]);
    var coeff =1;
    for (var x = n - k + 1; x <= n; x++) {
        coeff *= x;
    }
    for (x = 1; x <= k; x++) {
        coeff /= x;
    }
    document.write("Binomial coefficient = "+(coeff));
}
