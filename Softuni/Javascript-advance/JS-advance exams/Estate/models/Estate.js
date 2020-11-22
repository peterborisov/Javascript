export default class Estate {
    constructor(name, area, location, isFurnitured) {
        this.name = name;
        this.area = area;
        this.location = location;
        this.isFurnitured = isFurnitured;
    }

    setName = (name) =>{
        if (name === undefined || name === "") {
            throw new Error("Name cannot be empty or undefined.");
        }
        this._name = name;
    }

    getName = function () {
        return this._name;
    }

    setArea = function (area) {
        if (area < 0 || area > 10000) {
            throw new Error("Area cannot be negative.");
        }
        this._area = area;
    }

    getArea = function () {
        return this._area;
    }

    setLocation = function (location) {
        if (location === undefined || location === "") {
            throw new Error("Name cannot be empty or undefined.");
        }
        this._location = location;
    }

    getLocation = function () {
        return this._location;
    }

    setIsFurnitured = function (isFurnitured) {
        this._isFurnitured = isFurnitured;
    }

    getIsFurnitured = function () {
        return this._isFurnitured;
    }

    toString = function () {
        let furnitured = this.getIsFurnitured() ? ", Furnitured =" + this.getEmail() : '';
        return this.constructor.name +
            ": Name =" + this.getName() +
            ", Area =" + this.getArea() +
            ", Location =" + this.getLocation() +
            furnitured;
    };
}