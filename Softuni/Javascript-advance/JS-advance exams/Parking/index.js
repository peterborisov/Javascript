class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        let obj = {
            carModel, carNumber, payed: false
        }
        return this.capacity === this.vehicles.length ? "Not enough parking space." : (
            this.vehicles.push(obj),
            `The ${carModel}, with a registration number ${carNumber}, parked.`
        )
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber)
        return car === 'undefined' ? "The car, you're looking for, is not found." :
            car.payed === false ? `${carNumber} needs to pay before leaving the parking lot.` :
                (this.vehicles.filter(el => el.carNumber != carNumber), `${carNumber} left the parking lot.`)
    }

    pay(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber)
        return car === 'undefined' ? `${carNumber} is not in the parking lot.` :
            car.payed === true ? `${carNumber}'s driver has already payed his ticket.` :
                (car.payed = true, `${carNumber}'s driver successfully payed for his stay.`)
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            console.log(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`)
            let sortedVehicles = this.vehicles.sort((a, b) => {
                return a.carModel.localeCompare(b.carModel)
            })
            sortedVehicles.map(el => {
                console.log(`${el.carModel} == ${el.carNumber} - ${el.payed}`)
            })
        }
        if (carNumber) {
            let car = this.vehicles.find(el => el.carNumber === carNumber);
            console.log(`${car.carModel} == ${car.carNumber} - ${car.payed}`)
        }
    }
}

const parking = new Parking(12);
console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Aldi t600", "TX3691C"));
console.log(parking.addCar("BMW t600", "TX3691"));
console.log(parking.getStatistics('TX3691CA'));
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
