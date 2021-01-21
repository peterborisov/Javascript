function orderRectangle(args) {
    let result = []
    args.map(el => {
        let obj = {
            width: el[0],
            height: el[1],
            area: () => {},
            compareTo: (other) => {}
        }
        result.push(obj)
    })
    return result;
}

console.log(orderRectangle([[10, 5], [5, 12]]))