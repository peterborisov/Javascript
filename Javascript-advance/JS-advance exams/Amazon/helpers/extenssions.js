Function.prototype.inherits = function extend(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}