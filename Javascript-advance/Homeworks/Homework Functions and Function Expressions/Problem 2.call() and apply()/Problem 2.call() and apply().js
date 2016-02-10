function printArgsInfo() {
    for (var i in arguments) {
        if (arguments.hasOwnProperty(i)) {
            var type = typeof (arguments[i]);

            if (Array.isArray(arguments[i])) {
                type = "array";
            }
            console.log(arguments[i] + " (" + type + ")");
        }
    }
}
printArgsInfo.call(null);
printArgsInfo.call(null,[undefined, "", 0, [], {}]);
printArgsInfo.apply(null);
printArgsInfo.apply(null,[2, 3, 2.5, -110.5564, false]);
