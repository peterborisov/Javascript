class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this._totalProfit = 0;
        this._currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        const client = this.clients[ownerName];

        this.capacity === this.clients.length ? 'Sorry, we are not able to accept more patients!' : ''
        !client ? (this.clients.push(ownerName), this.clients[ownerName] = []) : '';

        const pet = this.clients[ownerName].find(p => p.name === petName);

        if (pet) {
            const procedures = pet.procedures;
            procedures.length > 0 ?
                `This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${procedures.join(', ')}.` : ''
        }

        this.clients[ownerName].push({
            name: petName,
            kind: kind.toLowerCase(),
            procedures: procedures
        });

        procedures.length > 0 ? this._currentWorkload++ : ''
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        const client = this.clients[ownerName];

        !client ? 'Sorry, there is no such client!' : '';

        const pet = client.find(p => p.name === petName);
        !pet ? `Sorry, there are no procedures for ${petName}!` : '';

        pet.procedures.length === 0 ? `Sorry, there are no procedures for ${petName}!` : '';

        this._totalProfit += 500 * pet.procedures.length;
        this._currentWorkload--;

        pet.procedures = [];

        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        let result = `${this.clinicName} is ${Math.floor(this._currentWorkload / this.capacity * 100)}% busy today!\n`;
        result += `Total profit: ${this._totalProfit.toFixed(2)}$\n`;

        const sortedClients = this.clients.sort((a, b) => a.localeCompare(b));

        for (const client of sortedClients) {
            result += `${client} with:\n`;

            const sortedPets = sortedClients[client].sort((a, b) => a.name.localeCompare(b.name));

            for (const pet of sortedPets) {
                result += `---${pet.name} - a ${pet.kind} that needs: ${pet.procedures.join(', ')}\n`;
            }
        }

        return result.trim();
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());


// Welcome Tom!
// Welcome Max!
// Welcome Tiny!
// Goodbye Tiny. Stay safe!
// SoftCare is 20% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
// SoftCare is 30% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Sara - a dog that needs: A154B
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
