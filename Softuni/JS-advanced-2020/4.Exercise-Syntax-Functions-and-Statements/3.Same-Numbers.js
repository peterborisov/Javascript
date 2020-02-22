// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are same and false if not. On the next line print the sum of all the digits.
// The input comes as an integer number.
// The output should be printed on the console.

function sameNumber(num) {
    let sum = 0;
    if (num % 10 === Math.floor((num % 100) / 10)) {
        console.log('true');
    } else {
        console.log('false');
    }

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    console.log(sum);
}

sameNumber(1234);