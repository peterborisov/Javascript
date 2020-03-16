class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}