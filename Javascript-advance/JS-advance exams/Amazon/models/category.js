var models = models || {};

(function (models) {
    function Category(name) {
        this.name = name;
        this._categories = [];//hidden collection of categories.
        this._items = [];
    }

    Category.prototype.addCategory = function addCategory(category) {
        this._categories.push(category);// add categories
    }

    Category.prototype.getCategories = function getCategories() {
        return this._categories;// get categories
    }

    Category.prototype.addItem = function addItem(item) {
        this._items.push(item);// add item
    }

    Category.prototype.getItems = function getItems() {
        return this._items;// get item
    }
    models.getCategory = function (name) {
        return new Category(name);
    }

}(models));