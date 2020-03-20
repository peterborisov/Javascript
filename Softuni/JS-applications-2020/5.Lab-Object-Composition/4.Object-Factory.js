function objectFactory(args) {
    args = args.replace(/'/g, '"');
    args = JSON.parse(args);
    let set = new Set();

    for (el of args) {
        for (let [key, value] of Object.entries(el)) {
            set.add(`${key}: ${value}`);
        }
    }
    return set;
}


objectFactory(`[{'canMove': true},{'canMove':true,'doors': 4},{'capacity': 5}]`)