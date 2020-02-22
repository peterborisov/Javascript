// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.

function gcd(a, b) {
    if (!b) {
        return a;
    }
    if (gcd(b, a % b) !== undefined) {
        console.log(gcd(b, a % b));
    }
}

gcd(2154, 458);