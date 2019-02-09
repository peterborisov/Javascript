function main(arr) {
    var data = {};
    arr.forEach(function (el) {
        var tokens = el.trim().split(/\s+&\s+/g);
        var task = 'Task ' + tokens[2];
        if (!data[task]) {
            data[task] = {
                tasks: [],
                average: 0,
                lines: 0
            };
        }

        data[task].tasks.push({
            name: tokens[0],
            type: tokens[1]
        });
        data[task].average += Number(tokens[3]);
        data[task].lines += Number(tokens[4]);
    });

    Object.keys(data).forEach(function (key) {
        data[key].average = parseFloat((data[key].average / data[key].tasks.length).toFixed(2));
        data[key].tasks.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    });

    var keysSorted = Object.keys(data).sort(function (a, b) {
        if (data[a].average == data[b].average) {
            return data[a].lines - data[b].lines;
        }

        return data[b].average - data[a].average;
    });

    var sortedObject = {};
    keysSorted.forEach(function (el) {
        sortedObject[el] = data[el];
    });

    console.log(JSON.stringify(sortedObject));
}
var input = [
    'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 &  100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81'
];
main(input);