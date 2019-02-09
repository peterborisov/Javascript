function main(arr) {
    for (var i = 0; i < arr.length; i++) {
        var obj = input[i];
        var result = obj.replace("<a", "[URL").replace("</a>", "[/URL]");
        console.log(result)
    }
}
var input = ['<ul>',
    '<li>',
    '<a href=http://softuni.bg>SoftUni</a>',
    '</li>',
    '</ul>'
];
main(input);
