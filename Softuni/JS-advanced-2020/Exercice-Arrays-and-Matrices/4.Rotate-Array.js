function rotateArray(args) {
    let step = Number(args.pop());
    for (let i = 0; i < step; i++) {
        let lastElement = args.pop();
        args.unshift(lastElement);
    }
    console.log(args.join(' '))
}

rotateArray(['1', '2', '3', '4', '2']);