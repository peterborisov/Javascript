var app = (function () {
    var data = [];

    function add(obj) {
        data.push(obj);
        return data.slice();
    }

    function plus(a, b) {
        return console.log(a + b);
    }

    function minus(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    return {
        plus: plus,
        minus: minus,
        multiply: multiply,
        add: add
    }
})();






app.plus(5, 4);
 var m = app.multiply(5, 4);
var p = app.add('pete');

console.log(m);
console.log(app.minus(5, 4));
console.log(p);