'use strict';
var app = app || {};

app.controller('Students', function ($scope) {
    var students = [
        {
            "name": "Pesho",
            "photo": "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
            "grade": 5,
            "school": "High School of Mathematics",
            "teacher": "Gichka Pesheva"
        },
        {
            "name": "Gosho",
            "photo": "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
            "grade": 5,
            "school": "Softuni",
            "teacher": "Peshka Gincheva"
        },
        {
            "name": "Minka",
            "photo": "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
            "grade": 5,
            "school": "Software high School",
            "teacher": "Gichka Pesheva"
        }
    ];

    $scope.students = students;
});

app.controller('BindImage', function () {
});