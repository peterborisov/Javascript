function getRandomNum() {
    var randomNum = Math.floor(Math.random() * 10);
    return randomNum;
}

var mysteryNum = getRandomNum();

for (var i = 0; i < 10; i++) {
    var currentMysteryNum = getRandomNum();
    if (currentMysteryNum != mysteryNum) {
       console.log("No chance for you today!");
    }
}
