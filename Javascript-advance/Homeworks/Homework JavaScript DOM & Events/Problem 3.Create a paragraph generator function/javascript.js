function createParagraph() {
        var comment = document.getElementById("yourText").value;
        if(comment!="") {
                var newParagraph = document.createElement('p');
                newParagraph.textContent = comment;
                document.getElementById("paragraphs").appendChild(newParagraph);
        }
}
createParagraph();
