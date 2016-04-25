function main(arr) {
    var cash = parseFloat(arr[0]);
    var guests = parseFloat(arr[1]);
    var bananas = parseFloat(arr[2]);
    var eggs = parseFloat(arr[3]);
    var berries = parseFloat(arr[4]);
    var portions = Math.ceil(parseFloat(guests / 6));

    var totalAmount = parseFloat(portions * (2 * bananas) + portions * (4 * eggs) + portions * (0.2 * berries)).toFixed(2);
    if (cash > totalAmount) {
        console.log('Ivancho has enough money - it would cost ' + totalAmount + 'lv.')
    } else {
        console.log('Ivancho will have to withdraw money - he will need ' + (totalAmount - cash).toFixed(2) + 'lv more.')
    }
}

var input = [
    '20',
    '33',
    '0.60',
    '0.50',
    '10'
];
main(input);
