function main(arr) {
    var numbers = [];
    for (var a = 0; a < arr.length; a++) {
        numbers[a] = Number(Number(arr[a]).toFixed(2));
    }
    console.log("<table>");
    console.log("<tr><th>Price</th><th>Trend</th></tr>");
    if(arr.length!==0){
        console.log('<td><td>' + numbers[0].toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
    }
    var image = '';
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i] - 1) {
            image = 'down.png';
        }
        else if (numbers[i] > numbers[i - 1]) {
            image = 'up.png';
        }
        else {
            image = 'fixed.png';
        }
        console.log('<tr><td>' + numbers[i].toFixed(2) + '</td><td><img src=\"'+image+'\"/></td></tr>');
    }
    console.log("</table>");
}
var input = ['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225'];
main(input);