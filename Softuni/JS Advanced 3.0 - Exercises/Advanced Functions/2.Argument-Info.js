function argumentInfo(args) {
    args.map(el => {
        console.log(`${typeof (el)}: ${el}`)
    })
}

argumentInfo(['cat', 42, function () { console.log('Hello world!'); }])