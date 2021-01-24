function cappyJuice(args) {
    let obj = {};
    let result = {};
    args.map(el => {
        let [fruit, quantity] = el.split(/s*=>s*/);
        !obj.hasOwnProperty(fruit) ?
            obj[fruit] = +(quantity) :
            obj[fruit] += +quantity;
        obj[fruit] >= 1000 ? result[fruit] = Math.floor(obj[fruit] / 1000) : '';
    })
    Object.keys(result).forEach((key) => {
        console.log(`${key}=> ${result[key]}`);
    });
}

cappyJuice(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
);

// Pear => 8
// Watermelon => 10
// Kiwi => 4
