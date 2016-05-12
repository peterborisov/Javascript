function getRandom(input) {
        var item = input[Math.floor(Math.random() * input.length)];
    if(typeof input==='object'){
        var randomProperty = function (obj) {
            var keys = Object.keys(obj);
            return obj[keys[keys.length * Math.random() << 0]];
        };
        console.log(randomProperty(input))
    }
    if(typeof input==='string'){
        var item = input[Math.floor(Math.random() * input.length)];
        console.log(item)
    }
}

var arr = [1, 3, 5, 10,20,50,24,53,57,48,7];
getRandom(arr);

var str = "This is an example string";
getRandom(str);

var obj = {
    name: "Gosho",
    age: 25,
    grade: 5.95,
    isActive: true,
    languages: ["English", "French"]
};
getRandom(obj);