function main(arr) {
    var age = parseInt(arr[0]);
    var toysCount = 0;
    var birthdayMoney = 0;
    var moneySum = 0;
    var brother = 0;
    var washer = parseFloat(arr[1]);
    for (var i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            birthdayMoney = birthdayMoney + 10;
            moneySum += birthdayMoney;
            brother++;
        } else {
            toysCount++;
        }
    }
    var totalSum = moneySum + (toysCount * (parseInt(arr[2]))) - brother;
    if (totalSum > washer) {
        console.log('Yes! ' + (totalSum - washer).toFixed(2));
    }else {
        console.log('No! ' + (washer - totalSum).toFixed(2));

    }
}
var input = [
    '21',
    '1570.98',
    '3'
];
main(input);