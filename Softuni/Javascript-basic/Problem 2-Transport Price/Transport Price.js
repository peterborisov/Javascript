function main(arr) {
    var kilometers = arr[0];
    var time = arr[1];
    var taxi = 0;
    var train = 0;
    var bus = 0;

    if (time == 'day') {
        if (kilometers < 20) {
            taxi = 0.70 + (kilometers * 0.79)
            console.log(taxi)
        }
        if (kilometers > 20 && kilometers < 100) {
            bus = kilometers * 0.09;
            console.log(bus)
        }
        if (kilometers > 100) {
            train = kilometers * 0.06;
            console.log(train)
        }
    }

    if (time == 'night') {
        if (kilometers < 20) {
            taxi = 0.70 + (kilometers * 0.90)
            console.log(taxi)
        }
        if (kilometers > 20 && kilometers < 100) {
            bus = kilometers * 0.09;
            console.log(bus)
        }
        if (kilometers > 100) {
            train = kilometers * 0.06;
            console.log(train.toFixed(2))
        }
    }
}
var input = [
    '180',
    'night'
];
main(input);
