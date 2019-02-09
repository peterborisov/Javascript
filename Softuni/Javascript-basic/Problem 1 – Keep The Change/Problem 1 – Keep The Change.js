function main(arr) {
    var bill = (arr[0]);
    var mood = arr[1];
    var result = 0;
    switch (mood) {
        case 'happy':
            result = bill * 0.1;
            break;
        case 'married':
            result = bill * 0.0005;
            break;
        case 'drunk':
            result = bill * 0.15;
            var sq = result.toString()[0];
            var num = Number(sq);
            result = Math.pow(result, num);
            break;
        default:
            result = bill * 0.05;
            break;
    }
    console.log(result.toFixed(2));
}
var input = [1242192.33, 'married'];
main(input);