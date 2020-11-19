
class CustomerReview {
    constructor(customer, content, rating, createdOn) {
        this.customer = customer;
        this.content = content;
        this.rating = rating;
        this.createdOn = createdOn;
    }
    getCustomerReview(customer, content, rating, createdOn) {
        return new CustomerReview(customer, content, rating, createdOn);
    }
}
