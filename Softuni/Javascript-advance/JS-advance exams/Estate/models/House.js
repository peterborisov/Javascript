import Estate from './Estate.js'
export default class House extends Estate{
    constructor(name, area, location, isFurnitured, floors) {
        super(name, area, location, isFurnitured)
        this.floors = floors;
    }
    
    setFloors = (floors) => {
        if (floors < 1 || floors > 10) {
            throw new Error("Price cannot be negative.");
        }
        this._floors = floors;
    }

    getFloors = function () {
        return this._floors;
    }

    toString = function () {
        return Estate.prototype.toString.call(this) +
            ", Floors: " + this.getFloors();
    };
}