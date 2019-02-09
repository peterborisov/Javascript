function main(arr) {
    var money = parseFloat(arr[0]);
    var season = arr[1];
    if (money <= 100) {
        console.log('Somewhere in Bulgaria');
        switch (season) {
            case 'summer':
                console.log('Camp - ' + ((money * 30) / 100).toFixed(2));
                break;
            case'winter':
                console.log('Hotel - ' + ((money * 70) / 100).toFixed(2));

                break;
        }
    } else if (money > 100 && money <= 1000) {
        console.log('Somewhere in Balkans');
        switch (season) {
            case 'summer':
                console.log('Camp - ' + ((money * 40) / 100).toFixed(2));
                break;
            case'winter':
                console.log('Hotel - ' + ((money * 80) / 100).toFixed(2));
                break;
        }
    } else if (money > 1000) {
        console.log('Somewhere in Europe')
        console.log('Hotel - ' + ((money * 90) / 100).toFixed(2));
    }
}
var input = [
    '678.53',
    'winter'
];
main(input)