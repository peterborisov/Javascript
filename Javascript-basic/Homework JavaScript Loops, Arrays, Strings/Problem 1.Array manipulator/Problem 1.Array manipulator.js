function main(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        if (!isNaN(obj)) {
            result.push(obj)
        }
    }
    var mf = 1;
    var m = 0;
    var item;
    for (var k = 0; k < result.length; k++) {
        for (var j = k; j < result.length; j++) {
            if (result[k] == result[j]) m++;
            if (mf < m) {
                mf = m;
                item = result[k];
            }
        }
        m = 0;
    }

    function sortNumber(a, b) {
        return a < b;
    }
    result.sort(sortNumber);

    var min = Math.min.apply(null, result),
        max = Math.max.apply(null, result);

    console.log('Min number: ' + min);
    console.log('Max number: ' + max);
    console.log('Most frequent number: ' + mf);
    console.log(result);
}

var input = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", {bunniesCount: 10}, [10, 20, 30, 40]];
main(input);
