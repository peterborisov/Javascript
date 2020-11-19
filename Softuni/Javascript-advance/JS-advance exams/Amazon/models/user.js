
class User {
    constructor(username, fullName, balance) {
        this.username = username;
        this.fullName = fullName;
        this._balance = balance;
        this._shoppingCart = scope.getShoppingCart();
    }
    addItemToCart = (item) => {
        this._shoppingCart.addItem(item);
    }
    getUser = (username, fullName, balance) =>{
        return new User(username, fullName, balance);
    }
}