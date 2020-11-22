import BuildingEstate from './BuildingEstate.js'
export default class Apartment extends BuildingEstate {
    constructor(name, area, location, isFurnitured, rooms, hasElevator) {
        super(name, area, location, isFurnitured, rooms, hasElevator)
    }
}
