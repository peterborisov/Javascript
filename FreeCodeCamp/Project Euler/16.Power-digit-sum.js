function powerDigitSum(exponent) {
    let powered = Math.pow(2, exponent)
    let sum = 0;
    powered.toString().split('').map(el => {
        sum += +el;
    })
    return sum;
}

console.log(powerDigitSum(15));