function outer(args) {
    let result = [];
    let inner = (() => {
        let commands = {
            add: el => result.push(el),
            remove: item => result = result.filter(el => el != item),
            print: () => console.log(result)
        }

        return commands;
    })();

    for (let el of args) {
        el = el.split(' ')
        inner[el[0]](el[1]);
    }
}

outer(['add hello', 'add again', 'remove', 'add hello', 'add again', 'print'])