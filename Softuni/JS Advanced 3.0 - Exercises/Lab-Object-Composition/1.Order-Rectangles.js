function orderRectangle(args) {
    let result = []
    args.map(el => {
        [width, height] = el;
        let obj = {
            width,
            height,
            area: () => {
                return this.width * this.height;
            },
            compareTo: function (other) {
                return other.area() - this.area() || other.width - this.width;
            }
        }

        result.push(obj)
    })
    let sortedRects = result.sort((a, b) => a.compareTo(b));
    return sortedRects;
}

console.log(orderRectangle([[10, 5], [5, 12]]))