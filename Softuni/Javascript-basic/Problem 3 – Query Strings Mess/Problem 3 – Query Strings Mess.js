function main(arr) {
    var values = [];
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i].split("&");
        var splitKeyOne = obj.toString().split("=");

        console.log(splitKeyOne);

    }

}
var input = ["login=student&password=student"];
main(input);