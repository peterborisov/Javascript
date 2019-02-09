function main(arr) {
    var objectArr = [];
    arr.forEach(function (x) {
        if (x.constructor.name === "Object") {
            objectArr.push(x);
        }
    });
    console.log(objectArr);
}

var input = [
    "Pesho",
    4,
    4.21,
    {name: 'Valyo', age: 16},
    {type: 'fish', model: 'zlatna ribka'},
    [1, 2, 3],
    "Gosho",
    {name: 'Penka', height: 1.65}
];
main(input);