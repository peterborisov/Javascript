function aVeryBigSum(ar) {
    let result = ar.reduce((a, b) => {
        return a + b;
    })
    return result;
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))