var models = models || {};

(function (scope) {
    UsedItem.inherits(scope._Item)
    function UsedItem(title, description, price, condition) {
        scope._Item.apply(this, arguments);
        this.condition = condition;
    }

    scope.getUsedItem = function (title, description, price, condition) {
        return new UsedItem(title, description, price, condition);
    }

}(models));

