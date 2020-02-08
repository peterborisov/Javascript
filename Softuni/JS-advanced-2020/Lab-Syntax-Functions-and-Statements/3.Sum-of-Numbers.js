// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n
// to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.

function sumOfNumbers(...args) {
    let start = parseInt(args[0]);
    let end = parseInt(args[1]);
    let total = 0;
    while (start <= end) {
        total += start;
        start++;
    }
    console.log(total)
}

sumOfNumbers('-8', '20');