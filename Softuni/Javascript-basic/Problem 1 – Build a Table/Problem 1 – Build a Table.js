function main(array) {
    var start = Number(array[0]);
    var finish = Number(array[1]);
    var trueFalse = "";
    console.log("<table>");
    console.log("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");

    for (var i = start; i <= finish; i++) {
        if (start === 0 || start === 1 || start === 2 || start === 3 || start === 5 || start === 8 || start === 13 || start === 21 ||
            start === 34 || start === 55 || start === 89 || start === 144 || start === 233 || start === 377 || start === 610 || start === 987 || start === 1597 ||
            start === 2584 || start === 4181 || start === 6765 || start === 10946 || start === 17711 || start === 28657 || start === 46368 ||
            start === 75025 || start === 121393 || start === 196418 || start === 317811 || start === 514229 || start === 832040 ||
            start === 1346269 || start === 2178309 || start === 3524578 || start === 5702887 || start === 9227465 || start === 14930352 | start === 24157817 || start === 39088169 ||
            start === 63245986 || start == 102334155 || start === 165580141 || start === 267914296 || start === 433494437 || start === 701408733 || start === 1134903170
        ) {
            trueFalse = "yes";
        } else {
            trueFalse = "no";
        }
        console.log('<tr><td>' + start + '</td><td>' + start * start + '</td><td>' + trueFalse + '</td></tr>');
        start++;
    }
    console.log("</table>");
}

var input = [2, 6];
main(input);
