function autoEngineCompany(args) {
    let map = new Map();

    for (el of args) {
        let[brand, model, producedCars] = el.split(/s*\|s*/)

        if (!map.has(brand)) {
            map.set(brand, new Map);
        }
        if (!map.get(brand).has(model)) {
            map.get(brand).set(model, 0)
        }
        map.get(brand).set(model, map.get(brand).get(model) + Number(producedCars));
    }
    
    for (let [brand] of map) {
        console.log(`${brand}`);
        for (let [model, producedCars] of map.get(brand)) {
            console.log(`###${model.trim()} -> ${producedCars}`);
        }
    }
}

autoEngineCompany(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
);