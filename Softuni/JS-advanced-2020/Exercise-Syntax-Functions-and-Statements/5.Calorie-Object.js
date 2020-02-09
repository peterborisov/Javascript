// Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property and print it on the console.
// The input comes as an array of string elements.
// The output should be printed on the console.

function calorieObject(args) {

    let object = {};
    args.forEach(function (item, index, array) {
        if (index & 1) {
            (object[array[index - 1]] = parseInt(item));
        }
    });

    console.log(object);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);