function subsequence(args) {
    let result = [];
    let startPoint = args[0];
    result.push(startPoint);
    let tempEl = startPoint;

    for (el of args) {
        if (el > tempEl) {
            tempEl = el;
            result.push(el)
        }
    }

    console.log(result.join('\n'))
}

subsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])