import Estate from './Estate.js'
export default class BuildingEstate extends Estate {
    constructor(name, area, location, isFurnitured, rooms, hasElevator) {
        super(name, area, location, isFurnitured);
        this.setRooms(rooms)
        this.setHasElevator(hasElevator)
    }
    
    setRooms = (rooms) =>{
        if (rooms < 0 || rooms > 100) {
            throw new Error("Rooms cannot be negative or more then 100");
        }
        this._rooms = rooms;
    }

    getRooms = function () {
        return this._rooms;
    }

    setHasElevator = function (hasElevator) {

        this._hasElevator = hasElevator;
    }

    getHasElevator = function () {
        return this._hasElevator;
    }

    toString = function () {
        var elevator = this.getHasElevator() ? ", Elevator: " + this.getHasElevator() : '';
        return Estate.prototype.toString.call(this) +
            ", Rooms: " + this.getRooms() + elevator;
    };
}