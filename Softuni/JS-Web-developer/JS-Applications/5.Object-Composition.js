//@ts-check

/*
2.	Order Rectangles
You will be passed a few pairs of widths and heights of rectangles, 
create objects to represent the rectangles. The objects should additionally 
have two functions area - that returns the area of the rectangle and compareTo - that 
compares the current rectangle with another and produces a number signifying if the current 
rectangle is smaller (negative number), equal (0) or larger (positive number) than the other 
rectangle. 
*/

function rectancles(args) {
    let createRect = {
        width: 0,
        height: 0,
        area: function() {
            return this.width * this.height;
        },
        compareTo: function(other) {
            return other.area() - this.area() || other.width - this.width;
        }
    }

    return args
        .map(([width, height]) => Object.assign(
            Object.create(createRect), { width, height }
        ))
        .sort((a, b) => a.compareTo(b))
}

console.log(rectancles([[10, 5], [5, 12]]))

/*
3.	List Processor
Using a closure, create an inner object to process list commands. The commands supported should be the following:
•	add <string> - adds the following string in an inner collection.
•	remove <string> - removes all occurrences of the supplied <string> from the inner collection.
•	print - prints all elements of the inner collection joined by ",".
*/

function listProcessor(args) {
    let result = [];
    let commands = {
        add: el => result.push(el),
        remove: item => result = result.filter(el => el != item),
        print: () => console.log(result)
    }

    args.map(el => {
        el = el.split(' ')
        commands[el[0]](el[1]);
    })
}

listProcessor(
    ['add hello', 'add again', 'remove hello', 'add again', 'print']
)

/*
4.	Object Factory
Write a function that can compose objects. You will receive a string and your goal is to create a new object with all the unique properties you were given. For more information check the examples below.
*/


function objFactory(args) {
    args = args.replace(/'/g, '"');
    args = JSON.parse(args);
    let result = {}
    args.map(el => {
        for (let [key, value] of Object.entries(el)) {
            if (!result.hasOwnProperty(key)) {
                result[key] = value;
            }
        }
    })
    console.log(result)
}

objFactory(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)

/*
5.	Cars
Write a closure that can create and modify objects. All created objects should be kept and be accessible by name. You should support the following functionality:
•	create <name> - creates an object with the supplied <name>
•	create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
•	set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
•	print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.
*/

function cars(args) {
    console.log(args)

}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])