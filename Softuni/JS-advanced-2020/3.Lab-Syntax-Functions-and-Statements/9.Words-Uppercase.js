function wordsUppercase(args) {
    args = args
        .toUpperCase()
        .split(/[^a-zA-Z]/g)
        .filter(function (el) {
            return el != '';
        }).join(', ');
    console.log(args.toString());
}

wordsUppercase('Hi, how are you?');