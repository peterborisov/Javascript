function cappyJuice(args) {
    let result = {};
    let regex = /s*=>s*/;

    for (el of args) {
        let splitedFruit = el.split(regex);
        let fruit = splitedFruit[0];
        let quantity = Number(splitedFruit[1]);

        if (!result.hasOwnProperty(fruit)) {
            result[fruit] = Number(quantity);
        } else if (result.hasOwnProperty(fruit)) {
            result[fruit] += quantity;
        }
    }

    for (let [key, value] of Object.entries(result)) {
        if(value > 1000){
            console.log(`${key}=> ${Math.floor(value / 1000)}`);
        }
    }
}

cappyJuice(
    ['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549']
);