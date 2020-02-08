// Write a JS function that takes three string arguments as an input.
// Calculate the sum of the length of the strings and the average length of the strings rounded down to the
// nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console on two lines.

function stringLength(a, b, c) {

    let totalLEngth = a.length + b.length + c.length;
    console.log(totalLEngth);
    console.log(Math.floor(totalLEngth / 3));
}

stringLength('chocolate', 'ice cream', 'cake');