function main(arr) {
var sum=0;
    for (var i = 2; i < arr.length-1; i++) {
        var nums = arr[i].match(/\-?[\d.]+/g);


    }
}
var input = ['<table >',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
    '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
    '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
    '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
    '</table>'
];

main(input);