function createParagraph() {
        var comment = "Some text";
        var newParagraph = document.createElement('p');
        newParagraph.textContent = comment;
        document.getElementById("wrapper").appendChild(newParagraph);
}
createParagraph();