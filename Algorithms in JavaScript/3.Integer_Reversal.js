const reverseInt = integer =>
    parseInt(integer.toString().split('').reverse().join(''));

console.log(reverseInt(123));
