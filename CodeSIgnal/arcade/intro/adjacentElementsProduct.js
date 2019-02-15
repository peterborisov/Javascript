// Given an array of integers, find the pair of adjacent elements 
//that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    let product = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] * inputArray[i + 1] > product) {
            product = inputArray[i] * inputArray[i + 1];
        }
    }
    return product;
}