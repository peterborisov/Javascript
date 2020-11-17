function processData(...input) {
    input.map(el => {
        let even = [], odd = [];
        el.split('').map((el, index) => {
            index % 2 !== 0 ? even.push(el) : odd.push(el)
        })
        console.log([...odd, '  ', ...even].join(''))
    })
}

processData('Hacker', 'Rank')