function main(arr) {
    var exam = parseInt((arr[0] * 60) + parseInt(arr[1]));
    var arive = parseInt((arr[2] * 60) + parseInt(arr[3]));
    if ((exam - arive) > 30) {
        console.log('Early');
        if (exam - arive >=60) {
            console.log((Math.floor((exam - arive) / 60)) + ':' + (((exam - arive) % 60)==0?'00':((exam - arive) % 60)) + ' hours before the start')
        } else {
            console.log((exam - arive) + ' minutes before the start')
        }
    }
    if ((exam - arive) <= 30) {
        console.log('On time');
        if (exam != arive) {
            console.log((exam - arive) + ' minutes before the start')
        }
    }

    if (exam < arive) {
        console.log('Late');
        if (arive - exam >=60) {
            console.log((Math.floor((arive - exam) / 60)) + ':' + (((arive - exam) % 60)==0?'00':((arive - exam) % 60) ) + ' hours after the start')
        } else {
            console.log((arive - exam) + ' minutes after the start')
        }
    }
}
var input = [
    '11', '30', '8', '12'
];
main(input);
