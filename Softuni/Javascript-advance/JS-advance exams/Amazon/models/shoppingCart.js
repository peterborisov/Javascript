
    class ShoppingCart {
        constructor(){
            this._items = [];
        }
        addItem(item) {
            this._items.push(item);
        }

        getTotalPrice = function () {
            var totalPrice = 0;
            this._items.forEach(function (item) {
                totalPrice += item.price;
            });
            return totalPrice;
        }

        getShoppingCart=function(){
            return new ShoppingCart();
        }
    }
