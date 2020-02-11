function addOrRemoveElement(args) {
    let result = [];

    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        if (element === 'add') {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }
    console.log(result.length > 0 ? result.join('\n') : 'Empty')
}

addOrRemoveElement(['add', 'add', 'remove', 'add', 'add']);