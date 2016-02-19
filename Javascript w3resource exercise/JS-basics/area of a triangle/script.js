function myFunction() {
    var x = parseInt(prompt("Please enter your site 1", "1"));
    var y = parseInt(prompt("Please enter your site 2", "2"));
    var z = parseInt(prompt("Please enter your site 3", "3"));
    var perimeter = (x + y + z) / 2;
    var area = Math.sqrt(perimeter * ((perimeter - x) * (perimeter - y) * (perimeter - z)));
    document.getElementById("demo").innerHTML =
        "Area is : " + area;
}