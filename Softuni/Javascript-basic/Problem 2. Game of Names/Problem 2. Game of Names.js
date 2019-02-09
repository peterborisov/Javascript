function main(arr) {
    var dict = [];
    for (var i = 0; i < arr.length; i += 2) {
        var sum = 0;
        var obj = arr[i];
        var score = parseFloat(arr[i + 1]);
        for (var j = 0; j < obj.length; j++) {
            var obj1 = obj[j];
            if ((obj1.charCodeAt(0)) % 2 == 0) {
                sum += (obj1.charCodeAt(0));
            } else {
                sum -= (obj1.charCodeAt(0));
            }
        }
        var totalSum = sum + score;
        dict.push({
            name: obj,
            score: totalSum
        });
    }
    dict.sort(function (a, b) {
        if (a.score > b.score) {
            return 1;
        }
        if (a.score < b.score) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    dict.reverse();
    var winner = dict.slice(0, 1);
    var keys = Object.keys(winner);
        console.log('The winner is ' + winner[keys].name + ' - ' + winner[keys].score + ' points')
}

var input = [

    'Bojidar',
    '123',
    'Preslav',
    '123',
    'Pesho',
    '123'
];
main(input);
