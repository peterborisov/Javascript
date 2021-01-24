function heroicInventory(args) {
    let arr = [];
    args.map(el => {
        let splitedElement = el.split(/\s*\/\s*/);
        let [name, level, items] = splitedElement;
        let userJson = {
            "name": name,
            "level": +(level),
            "items": splitedElement.length > 2 ? items.split(", ") : []
        }
        arr.push(userJson)
    })
    return JSON.stringify(arr);
}

console.log(heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
));