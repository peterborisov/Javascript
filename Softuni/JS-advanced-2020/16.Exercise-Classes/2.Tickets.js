function tickets(...args) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsArr = [];

    for (el of args[0]) {
        el = el.split('|');
        let newTicket = new Ticket(el[0], Number(el[1]), el[2]);
        ticketsArr.push(newTicket)
    }
    
    switch (args[1]) {
        case "destination":
            ticketsArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            ticketsArr.sort((a, b) => a.price - b.price);
            break;
        case "status":
            ticketsArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return ticketsArr;
}