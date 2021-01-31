function tickets(arr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsArr = [];

    arr.map(el => {
        let [destination, price, status] = el.split('|');
        let newTicket = new Ticket(destination, +price, status);
        ticketsArr.push(newTicket)
    })

    let command = {
        destination: () => { return ticketsArr.sort((a, b) => a.destination.localeCompare(b.destination)) },
        price: () => { return ticketsArr.sort((a, b) => a.price - b.price) },
        status: () => { return ticketsArr.sort((a, b) => a.status.localeCompare(b.status)) }
    }
    return command[sortingCriteria]();
}

console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
))