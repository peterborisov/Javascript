function kompot(args) {
    let fruits = {
        'peach': 0,
        'plum': 0,
        'cherry': 0
    }

    let rakia = 0;
    for (el of args) {
        el = el.split(' ');
        let [fruit, value] = el;
        if (fruit in fruits) {
            fruits[fruit] += Number(value);
        } else {
            rakia += Number(value);
        }
    }
    console.log(`Cherry kompots: ${Math.floor(fruits.cherry / (25 * 9) * 1000)}`)
    console.log(`Peach kompots: ${Math.floor(fruits.peach / (2.5 * 140) * 1000)}`)
    console.log(`Plum kompots: ${Math.floor(fruits.plum / (10 * 20) * 1000)}`)
    console.log(`Rakiya liters: ${(rakia / 5).toFixed(2)}`)
}

kompot(
    ['apple 6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65'
        , 'watermelon 20.54'
    ]
)