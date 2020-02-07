
function largestNumber(args) {
    return `The largest number is ${Math.max(...args)}`;
}

let input = [5, -3, 16];

console.log(largestNumber(input));