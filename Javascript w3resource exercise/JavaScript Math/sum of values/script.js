function main() {
    var input = prompt("Enter your numbers separated by space : ").split(" ");
    var sum = 0;
    var product = 1;

    for (var i = 0; i < input.length; i++) {
        var obj = parseInt(input[i]);
        sum += obj;
        product *= obj;
    }
    document.write("Sum of values = " + sum);
    document.write("<br>");
    document.write("Product of values = " + product);
}