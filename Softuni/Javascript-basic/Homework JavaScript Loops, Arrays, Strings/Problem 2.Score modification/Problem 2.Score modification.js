function main(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        if (obj <= 400 && obj >= 0) {
            obj = Number(arr[i] / 5) * 4;
            newArr.push(obj);
        }
    }
    newArr.sort(function (a, b) {
        return a - b
    });
    console.log(newArr);
}
var input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
main(input);