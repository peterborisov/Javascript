function classHierarchy() {
    // let units = {
    //     "m": m,
    //     "cm": cm,
    //     "mm": mm
    // }
    class Figure {
        constructor(unit = cm) {
            // if (new.target == Figure) {
            //     throw new Error("Cannot make instances of abstract Class Figure");
            // }
        }

        toString() {
            return this.units[this.unit];
        }

        // get area() {
        //     return undefined;
        // }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        toString() {
            return super.toString() + ` - radius: ${this.radius}`;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        toString() {
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
        }

        get area() {
            return this.width * this.height;
        }
    }

    return { Figure, Circle, Rectangle }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50