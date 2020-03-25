function gladiatorInventory(args) {
    let inventory = args.shift().split(' ');
    let arr = [];
    for (el of inventory) {
        arr.push(el);
    }

    const commands = {
        Buy: (el) => arr.push(el),
        Trash: (el) => {
            if (arr.includes(el)) {
                arr.splice(arr.indexOf(el), 1);
            }
        },
        Repair: (el) => {
            if (arr.includes(el)) {
                arr.push(arr.splice(arr.indexOf(el), 1)[0]);
            }
        },
        Upgrade: (el) => {
            el = el.split('-');
            if (arr.includes(el[0])) {
                let i = arr.indexOf(el[0]);
                arr[i] += ` ${el.join(':')}`;
            }
        },
    };

    for (el of args) {
        el = el.split(' ');
        let command = el[0];
        let item = el[1];
        command === 'Buy' ? commands.Buy(item) :
            command === 'Trash' ? commands.Trash(item) :
                command === 'Repair' ? commands.Repair(item) :
                    command === 'Upgrade' ? commands.Upgrade(item) : '';
    }
    console.log(arr.join(' '))
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'
]);