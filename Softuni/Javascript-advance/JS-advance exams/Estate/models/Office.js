import BuildingEstate from './BuildingEstate.js'
export default class Office extends BuildingEstate{
    constructor(name, area, location, isFurnitured, rooms, hasElevator) {
        super(name, area, location, isFurnitured, rooms, hasElevator)
    }
}
