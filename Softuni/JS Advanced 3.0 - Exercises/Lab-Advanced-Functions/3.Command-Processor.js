function commandProcessor(args) {
    let result = '';
    let command = {
        append: el => result += el,
        removeStart: el => result = result.slice(el),
        removeEnd: el => result = result.slice(0, -el),
        print: () => console.log(result)
    }

    args.map(el => {
        el = el.split(' ')
        command[el[0]](el[1]);
    })
}

commandProcessor(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print'])
