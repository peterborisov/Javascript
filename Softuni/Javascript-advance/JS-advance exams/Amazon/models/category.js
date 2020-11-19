
    class Category {
        constructor(name){
            this.name = name;
            this._categories = [];//hidden collection of categories.
            this._items = [];
        }

        addCategory(category) {
            this._categories.push(category);// add categories
        }

        getCategories() {
            return this._categories;// get categories
        }

        addItem(item) {
            this._items.push(item);// add item
        }

        getItems() {
            return this._items;// get item
        }

        getCategory = function (name) {
            return new Category(name);
        }
    }

export function test(){
    console.log('az sum test')
}