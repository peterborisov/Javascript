function main(arr) {
    var c = 99;
    var b = 98;
    var v = 118;
    var count = 0;
    var firstLine = arr[0].toLowerCase().split(' ');
    var array = [];

    for (var i = 0; i < firstLine.length; i++) {
        var obj = firstLine[i];
        array.push(obj)
    }

    for (var i = 1; i < arr.length - 1; i++) {
        var obj1 = arr[i].split(' ');
        var type = obj1[0].toLowerCase().substring(0, 1);
        var seats = obj1[2];
        var typeSeats = type + seats;
        var a = array.indexOf(typeSeats);
        if (a != -1) {
            switch (type) {
                case'c':
                    console.log('Yes, sold for ' + parseInt(seats) * 99 + '$');
                    array.splice(a, 1);
                    count++;
                    break;
                case'b':
                    console.log('Yes, sold for ' + parseInt(seats) * 98 + '$');
                    array.splice(a, 1);
                    count++;
                    break;
                case'v':
                    console.log('Yes, sold for ' + parseInt(seats) * 118 + '$');
                    array.splice(a, 1);
                    count++;
                    break;
            }
        } else {
            console.log('No')
        }
    }
    console.log('Vehicles left: ' + array.join(', '));
    console.log('Vehicles sold: ' + count)
}


var input = [
    'c2 c4 v10 v20 b50',
    'Car with 4 seats ',
    'Bus with 20 seats',
    'Bus with 33 seats',
    'Van with 20 seats',
    'Bus with 50 seats',
    'End of customers!'
];
main(input);
