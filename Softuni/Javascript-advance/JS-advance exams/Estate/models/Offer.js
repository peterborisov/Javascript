
export default class Offer {
    constructor(estate, price) {
        this.estate = estate;
        this.price = price;
    }

    setEstate = (estate) => {
        this._estate = estate;
    }

    getEstate = function () {
        return this._estate;
    }

    setPrice = (price) =>{
        if (price < 0) {
            throw new Error("Price cannot be negative.");
        }
        this._price = price;
    }

    getPrice = function () {
        return this._price;
    }

    toString = function () {
        return "Estate = " + this.getEstate().getName() +
            ", Location = " + this.getEstate().getLocation() +
            ", Price = " + this.getPrice();
    }
}
