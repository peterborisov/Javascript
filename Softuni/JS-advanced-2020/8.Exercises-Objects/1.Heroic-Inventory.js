function heroicInventory(args) {
    let arr = []
    let regex = /\s*\/\s*/;
    for (user of args) {
        let splitedUser = user.split(regex);
        let userJson = {
            "name": splitedUser[0],
            "level": Number(splitedUser[1]),
            "items": splitedUser.length > 2 ? splitedUser[2].split(", ") : []
        }
        arr.push(userJson);
    }
    console.log(JSON.stringify(arr));
}

heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
);