function stadium(args) {
    let set = new Set();
    let price = {
        'LITEX': { 'A': 10, 'B': 7, 'C': 5 },
        'LEVSKI': { 'A': 10, 'B': 7, 'C': 5 },
        'VIP': { 'A': 25, 'B': 15, 'C': 10 }
    }
    let totalPrice = 0;
    args.slice(1).forEach(value => {
        if (!set.has(value)) {
            set.add(value);
        } else {
            value = value.split('*');
            console.log(`Seat ${value[1]} in zone ${value[0]} sector ${value[2]} is unavailable`)
        }
    });
    for (el of set) {
        el = el.split('*');
        let teamPrice = price[el[0]];
        totalPrice += teamPrice[el[2]]
    }
    console.log(`${totalPrice} lv.`);
    console.log(`${set.size} fans`);
}

stadium(
    ["5", "LITEX*5*A", "LITEX*5*B", "LITEX*5*A", "VIP*1*A"]
);