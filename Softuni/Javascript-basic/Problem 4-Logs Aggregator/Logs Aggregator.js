function main(arr) {
    var nameTime = {};
    var nameIps = {};
    var lines = arr[0];

    for (var i = 1; i <= lines; i++) {
        var obj = arr[i];
        var array = obj.split(' ');
        var name = array[1];
        var ip = array[0];
        var time = parseInt(array[2]);

        if (nameTime.hasOwnProperty(name)) {
            nameTime[name] += time;
        } else {
            nameTime[name] = time;
        }

        if (nameIps.hasOwnProperty(name)) {
            nameIps[name] += "," + ip;
        } else {
            nameIps[name] = ip;
        }
    }

    var names = [];
    for (var key2 in nameTime) {
        names.push(key2);
    }
    names.sort();

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var result = name;

        for (var k in nameTime) {
            if (k === name) {
                result += ': ' + nameTime[k] + ' ';
            }
        }
        var ips = [];

        for (var key in nameIps) {
            if (key === name) {
                ips = nameIps[key].split(',');
                ips.sort();
                ips = ips.filter(function (item, index, array) {
                    return array.indexOf(item) == index;
                });
                break;
            }
        }

        var ipobj = ips.join(', ');
        result += '[' + ipobj + ']';
        console.log(result);
    }
}

var input = [
    '7',
    '192.168.0.11 peter 33',
    '10.10.17.33 alex 12',
    '10.10.17.35 peter 30',
    '10.10.17.34 peter 120',
    '10.10.17.34 peter 120',
    '212.50.118.81 alex 46',
    '212.50.118.81 alex 4'
];

main(input);