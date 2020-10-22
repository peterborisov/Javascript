//@ts-check
//Learn About Functional Programming
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
    const teaCups = [];
    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};
const tea4TeamFCC = getTea(40);


//Understand Functional Programming Terminology
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);


//Understand the Hazards of Using Imperative Code
var Window = function (tabs) {
    this.tabs = tabs;
};
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab');
    return this;
};
Window.prototype.tabClose = function (index) {
    var tabsBeforeIndex = this.tabs.splice(0, index);
    var tabsAfterIndex = this.tabs.splice(1);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
    return this;
};
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);
var finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


//Avoid Mutations and Side Effects Using Functional Programming
var fixedValue = 4;
function incrementer(el) {
    return el = fixedValue + 1;
}


//Pass Arguments to Avoid External Dependence in a Function
var fixedValue = 4;
function incrementer(argument) {
    return argument = fixedValue + 1;
}


//Refactor Global Variables Out of Functions
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add(list, bookName) {
    return [...list, bookName];
}

function remove(list, bookName) {
    return list.filter(book => book !== bookName);
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


//Use the map Method to Extract Data from an Array
var watchList = [
    {
        "Title": "Interstellar",
        "imdbRating": "8.6",
    },
    {
        "Title": "Avatar",
        "imdbRating": "7.9",
    }
];

var ratings = [];
watchList.map(el => {
    ratings.push({
        "title": el.Title,
        "rating": el.imdbRating
    });
})
console.log(JSON.stringify(ratings));


//Implement map on a Prototype
var s = [23, 65, 98, 5];
Array.prototype.myMap = function (callback) {
    var newArray = [];
    this.forEach(element => {
        newArray.push(callback(element))
    });
    return newArray;

};
var new_s = s.myMap(function (item) {
    return item * 2;
});


//Use the filter Method to Extract Data from an Array
var watchList = [
    {
        "Title": "Inception",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
    },
    {
        "Title": "Avatar",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
    }
];

var filteredList = watchList
    .map(el => {
        return {
            title: el.Title,
            rating: el.imdbRating
        }
    })
    .filter(el => { return el.rating >= +8.0 });
console.log(filteredList);


//Implement the filter Method on a Prototype
var s = [23, 65, 98, 5];
Array.prototype.myFilter = function (callback) {
    var newArray = [];
    this.forEach(el => {
        callback(el) ? newArray.push(el) : ''
    })
    return newArray;
};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});


//Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice)
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));


//Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));


//Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
    // return [...original, ...attach]
    return original.concat(attach)
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));


//Add Elements to the End of an Array Using concat Instead of push
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second));


//Use the reduce Method to Analyze Data
var watchList = [
    {

        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "Director": "Christopher no",
    },
    {
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "Director": "Christopher Nolan",
    },
    {
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "Director": "Christopher Nolan",
    },
];

function getRating(watchList) {
    let filter = watchList.filter(el => el.Director === 'Christopher Nolan');
    let averageRating = filter.reduce((acc, a) => acc + +a.imdbRating, 0) / filter.length;
    return averageRating;
}
console.log(getRating(watchList));


//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = (arr) => {
    return arr
        .filter(el => el > 0 && el % parseInt(el) === 0)
        .map(el => Math.pow(el, 2))
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


//Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
    return arr.sort((a, b) => a.localeCompare(b))
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


//Return a Sorted Array Without Changing the Original Array
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    return Array.from(arr).sort((a, b) => a - b)
}
console.log(nonMutatingSort(globalArray));


// Split a String into an Array Using the split Method
function splitify(str) {
    return str.split(/[^A-Za-z]/);
}
console.log(splitify("Hello World,I-am code"));


//Combine an Array into a String Using the join Method
function sentensify(str) {
    return str.split(/[^A-Za-z]/).join(' ')
}
console.log(sentensify("May-the-force-be-with-you"));


//Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
    return title
        .split(/[^A-Za-z]/)
        .filter(el => el !== '')
        .map(el => el.toLowerCase())
        .join('-')
}
console.log(urlSlug(" Winter Is Coming"))


//Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
    return arr.every(el => el > 0)
}
console.log(checkPositive([1, 2, 3, -4, 5]));


//Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
    return arr.some(el => el > 0)
}
console.log(checkPositive([1, 2, 3, -4, 5]));


//Introduction to Currying and Partial Application
let add = (x) => y => z=> x + y + z
add(10)(20)(30);

