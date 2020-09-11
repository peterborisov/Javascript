//Solution 1
const swapHalfWithTemp = array => {
    for (let i = 0; i < array.length / 2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};

//Solution 2
const swapHalf = array => {
    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [
            array[array.length - 1 - i],
            array[i]
        ];
    }
    return array;
};

//Solution 3
let reduceRight = (arr) => {
    let result = arr.reduceRight((a, c) => (a.push(c), a), []);
    return result;
}

console.log(swapHalfWithTemp([1, 2, 3, 4]))
console.log(swapHalf([1, 2, 3, 4]))
console.log(reduceRight([1, 2, 3, 4]))