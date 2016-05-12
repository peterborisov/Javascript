function main(arr) {
    var s =Number( arr[0]);
    var count = 0;
    for (var i = 0; i <= s / 10; i++) {
        for (var j = 0; j <= s / 4; j++) {
            for (var k = 0; k <= s / 3; k++) {
                if ((i * 10 + j * 4 + k * 3) === s) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
var input = ['10'];
main(input);
