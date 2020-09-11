//Solution 1
const forLoopSolution = (array, size) => {
    const result = [];

    for (let item of array) {
        const lastChunk = result[result.length - 1];
        if (!lastChunk || lastChunk.length === size) result.push([item]);
        else lastChunk.push(item);
    }

    return result;
};

//Solution 2
const whileLoopSolution = (array, size) => {
    const result = [];
    let index = 0;

    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }

    return result;
};

//Solution 3
const sliceSolution = (array, size) => {
    const result = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }

    return result;
};

console.log(forLoopSolution([1, 2, 3, 4], 2))
console.log(whileLoopSolution([1, 2, 3, 4], 2))
console.log(sliceSolution([1, 2, 3, 4], 2))