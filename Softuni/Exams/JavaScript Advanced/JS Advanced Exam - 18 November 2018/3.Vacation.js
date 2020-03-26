class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer,
            this.destination = destination,
            this.budget = budget,
            this.kids = [];
    }
    registerChild(name, grade, budget) {
        if (budget <= this.budget) {
            throw new Error(`${name}'s money is not enough to go on vacation to ${this.destination}.`);
        }

        if(!this.kids.hasOwnProperty(grade)){
            this.kids[grade] = [];
            this.kids[grade].push({[name]: budget})
        }

    }

    removeChild(name, grade) {

    }

    toString() {
        console.log(this.kids)
    }

}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Pesho', 6, 2400);
vacation.registerChild('Gosho', 5, 2000);

console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000))
vacation.toString()