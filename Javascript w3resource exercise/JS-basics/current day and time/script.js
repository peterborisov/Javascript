var dateTime = function () {
    var d = new Date();
    d.getDate();
    var p = document.getElementById('showDate').innerHTML = "Today is : " + d;
    return p;
}

