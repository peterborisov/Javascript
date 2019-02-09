function main(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i].split('|');
        var band = obj[0].trim();
        var city = obj[1].trim();
        var place = obj[3].trim();

        if (!result[city]) {
            result[city] = {};
        }
        if (!result[city][place]) {
            result[city][place] = [];
        }
        if (result[city][place].indexOf(band) == -1) {
            result[city][place].push(band);
        }
    }

    result = sortObjectProperties(result);
    for (var i in result) {
        result[i] = sortObjectProperties(result[i]);
        for (var j in result[i]) {
            result[i][j].sort();
        }
    }
    console.log(JSON.stringify(result));

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}


var input = [
    'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
];
main(input);