import Item from '../models/item.js';

class UsedItem extends Item {
    constructor(title, description, price, condition) {
        super(title, description, price);
        this.condition = condition;
    }
    
    getUsedItem = function (title, description, price, condition) {
        return new UsedItem(title, description, price, condition);
    }
    
}

