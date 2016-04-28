function main(arr) {
    var countDigits = parseInt(arr[0]);
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    for (var i = 1; i < arr.length; i++) {
        var obj = parseInt(arr[i]);
        if (obj % 2 == 0) {
            p1++;
        }
        if (obj % 3 == 0) {
            p2++;
        }
        if (obj % 4 == 0) {
            p3++;
        }
    }
    console.log((p1/countDigits*100).toFixed(2)+'%')
    console.log((p2/countDigits*100).toFixed(2)+'%')
    console.log((p3/countDigits*100).toFixed(2)+'%')
}
var input = [
    '3',
    '3',
    '6',
    '9',

];
main(input);