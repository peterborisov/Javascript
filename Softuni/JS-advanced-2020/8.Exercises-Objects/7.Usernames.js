function userNames(args) {
    args.sort();
    args.sort(function (a, b) {
        return a.length - b.length;
    });

    let set = new Set(args);

    for (user of set) {
        console.log(user);
    }
}

userNames(
    ['Ashton',
        'Kutcher',
        'Ariel',
        'Lilly',
        'Keyden',
        'Aizen',
        'Billy',
        'Braston']
);
