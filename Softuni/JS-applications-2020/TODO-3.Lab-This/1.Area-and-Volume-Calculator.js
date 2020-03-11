function calculator(area, vol, input) {
    input = JSON.parse(input);
    let result = []
    for (el of input) {
        let item = {
            area: area,
            volume: vol
        }
        result.push(item)
    }
    return result;
}

function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

console.log(calculator(
    area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'
))

/* [
    { area: 2, volume: 20 },
    { area: 49, volume: 490 },
    { area: 10, volume: 100 }
]
 */