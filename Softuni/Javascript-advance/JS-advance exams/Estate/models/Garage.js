import Estate from './Estate.js'
export default class Garage extends Estate {
    constructor(name, area, location, isFurnitured, width, height) {
        super(name, area, location, isFurnitured);
        this.width = width;
        this.height = height;
    }

    setWidth = (width) => {
        if (width < 1 || width > 500) {
            throw new Error("Width cannot be negative.");
        }
        this._width = width;
    }

    getWidth = () => {
        return this._width;
    }

    setHeight = function (height) {
        if (height < 1 || height > 500) {
            throw new Error("Height cannot be negative.");
        }
        this._height = height;
    }

    getHeight = function () {
        return this._height;
    }

    toString = function () {
        return Estate.prototype.toString.call(this) +
            ", Width: " + this.getWidth() + ", Height: " + this.getHeight();
    };
}