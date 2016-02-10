function testContext() {
    console.log(this);
}
testContext();
function outer() {
    function inner() {
        testContext();
    }

    inner();
}
outer();

var obj = {info: "the value of \"this\" is set to the object the function was called from."};
testContext.call(obj);
var context = new testContext();
console.log(context)