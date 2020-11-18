function simpleArraySum(arr) {
    let result = arr.reduce((a, b) => {return a + b;})
    return result;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))