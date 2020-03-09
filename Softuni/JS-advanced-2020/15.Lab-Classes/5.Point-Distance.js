class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        return Math.sqrt(((a.x - b.x) * (a.x - b.x)) + (a.y - b.y) * (a.y - b.y));
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
