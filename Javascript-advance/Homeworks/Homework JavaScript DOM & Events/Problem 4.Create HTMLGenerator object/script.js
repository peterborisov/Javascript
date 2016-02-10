function createParagraph(arr) {
    var comment = arr[1];
    var newParagraph = document.createElement('link');
    newParagraph.textContent = comment;
    document.getElementById(arr[0]).appendChild(newParagraph);
}

createParagraph('wrapper', 'Soft Uni');
createDiv('wrapper', 'section');
createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
