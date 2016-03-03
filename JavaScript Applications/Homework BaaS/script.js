function getAllCountry() {
    var username = 'dankata-hidra';
    var pass = '1234';
    return $.ajax({
        url: 'https://baas.kinvey.com/appdata/kid_ZJpSHysACx/Country',
        type: 'GET',
        dataType: 'json',
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + pass)
        },
        error: function (error) {
            console.log(error);
        }
    });
}

getAllCountry().then(function (data) {
    data.forEach(function (item) {
        var div = $("<div></div>");
        var name = $("<h3></h3>").text(item.name);
        div.append(name);
        $("#wrapper").append(div)
    });
    addCountrys();
});

function addCountrys() {

    var addButton = $('<button>Add Country</button>');
    var input = $('<input type="text">');
    addButton.on('click', function () {
        addCountry(input.val())
    });
    $('#wrapper').append(addButton).append(input);

}

function addCountry(name) {
    var username = 'dankata-hidra';
    var password = '1234';
    $.ajax({
        url: 'https://baas.kinvey.com/appdata/kid_ZJpSHysACx/Country',
        type: "Post",
        dataType: "json",
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
        data: {
            name: name
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getAllTowns() {
    var username = 'dankata-hidra';
    var pass = '1234';
    return $.ajax({
        url: 'https://baas.kinvey.com/appdata/kid_ZJpSHysACx/Town',
        type: 'GET',
        dataType: 'json',
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + pass)
        },
        error: function (error) {
            console.log(error);
        }
    });
}

getAllTowns().then(function (data) {
    data.forEach(function (item) {
        var div = $("<div></div>");
        var name = $("<h3></h3>").text(item.name);
        div.append(name);
        $("#wrapper").append(div)
    });
    addTowns();
});

function addTowns() {

    var addButton = $('<button>Add Town</button>');
    var input = $('<input type="text">');
    addButton.on('click', function () {
        addTown(input.val())
    });
    $('#wrapper').append(addButton).append(input);

}

function addTown(name) {
    var username = 'dankata-hidra';
    var password = '1234';
    $.ajax({
        url: 'https://baas.kinvey.com/appdata/kid_ZJpSHysACx/Town',
        type: "Post",
        dataType: "json",
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
        data: {
            name: name
        },
        error: function (error) {
            console.log(error);
        }
    });
}