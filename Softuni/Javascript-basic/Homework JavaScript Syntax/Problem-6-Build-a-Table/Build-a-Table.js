function main(array) {
    var start = Number(array[0]);
    var finish = Number(array[1]);
    console.log("<table>");
    console.log("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");
    function isFib(num) {
        var phi = 0.5 + 0.5 * Math.sqrt(5.0);
        var a = phi * num;
        if( num == 0 || Math.abs(Math.round(a) - a) < 1.0 / num) {
            return 'yes';
        }
        return 'no';
    }
    for (var i = start; i <= finish; i++) {
        console.log('<tr><td>' + start + '</td><td>' + start * start + '</td><td>' + isFib(i) + '</td></tr>');
        start++;
    }
    console.log("</table>");
}
var input = [2, 6];
main(input);
