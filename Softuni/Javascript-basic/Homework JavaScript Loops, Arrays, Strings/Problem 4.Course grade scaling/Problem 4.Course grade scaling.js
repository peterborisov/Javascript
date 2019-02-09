function main(arr) {
    var data = [];
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        obj.score = obj.score + (obj.score * 0.1);
        if (obj.score >= 100) {
            obj.hasPassed = true;
            data.push(obj);
        }
    }
    function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    data.sort(function (a, b) {
        return compareStrings(a.name, b.name);
    });
    console.log(JSON.stringify(data))
}

var input = [
    {'name': 'Пешо', 'score': 91},
    {'name': 'Лилия', 'score': 290},
    {'name': 'Алекс', 'score': 343},
    {'name': 'Габриела', 'score': 400},
    {'name': 'Жичка', 'score': 70}
];
main(input);
