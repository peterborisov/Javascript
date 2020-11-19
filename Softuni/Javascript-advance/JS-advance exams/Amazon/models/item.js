
export  default class Item {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
        this._customerReviews = [];
    }
    addCustomerReview(customerReview) {
        this._customerReviews.push(customerReview);
    }

    getCustomerReviews() {
        return this._customerReviews;
    }

    getItem = function (title, description, price) {
        return new Item(title, description, price);
    }
}