var app = angular.module('video', []);
app.controller('videoDetails', function ($scope) {
    $scope.details = [
        {
            title: 'Course introduction',
            pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
            length: '3:32',
            category: 'IT',
            subscribers: 3,
            date: new Date(2014, 12, 15),
            haveSubtitles: false,
            comments: [
                {
                    username: 'Pesho Peshev',
                    content: 'Congratulations Nakov',
                    date: new Date(2014, 12, 15, 12, 30, 0),
                    likes: 3,
                    websiteUrl: 'http://pesho.com/'
                },
                {
                    username: 'Minka Mincheva',
                    content: 'Congratulations Nakov',
                    date: new Date(2014, 12, 15, 12, 30, 0),
                    likes: 3,
                    websiteUrl: 'http://pesho.com/'
                }
            ]
        },
        {
            title: 'Angular introduction',
            pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
            length: '6:32',
            category: 'Javascript',
            subscribers: 2,
            date: new Date(2016, 12, 15),
            haveSubtitles: true,
            comments: [
                {
                    username: 'Gosgo Peshev',
                    content: 'Congratulations Softuni',
                    date: new Date(2014, 12, 15, 12, 30, 0),
                    likes: 2,
                    websiteUrl: 'http://gosho.com/'
                }
            ]
        }
    ]
});