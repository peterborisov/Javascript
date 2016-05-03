function main(arr) {
    var firstDigit = parseInt(arr[0]);
    var secondDigit = parseInt(arr[1]);
    switch (arr[2]) {
        case '+':
            console.log(firstDigit + ' + ' + secondDigit + ' = ' + (firstDigit + secondDigit) + ' - ' + ((firstDigit + secondDigit) % 2 == 0 ? 'even' : 'odd'));
            break;
        case '-':
            console.log(firstDigit + ' - ' + secondDigit + ' = ' + (firstDigit - secondDigit) + ' - ' + ((firstDigit - secondDigit) % 2 == 0 ? 'even' : 'odd'));
            break;
        case '*':
            console.log(firstDigit + ' * ' + secondDigit + ' = ' + (firstDigit * secondDigit) + ' - ' + ((firstDigit * secondDigit) % 2 == 0 ? 'even' : 'odd'));
            break;
        case '/':
            if (secondDigit == 0) {
                console.log('Cannot divide ' + firstDigit + ' by zero')
            } else {
                console.log(firstDigit + ' / ' + secondDigit + ' = ' + (firstDigit / secondDigit));

            }
            break;
        case '%':
            if (secondDigit == 0) {
                console.log('Cannot divide ' + firstDigit + ' by zero')
            } else {
                console.log(firstDigit + ' % ' + secondDigit + ' = ' + (firstDigit % secondDigit));

            }
            break;
    }

}
var input = [
    '10',
    '0',
    '%'
];
main(input);