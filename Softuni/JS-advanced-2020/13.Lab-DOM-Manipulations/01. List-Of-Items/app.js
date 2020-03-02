function addItem() {
    let inputValue = document.getElementById('newItemText').value,
        items = document.getElementById('items'),
        li = document.createElement('li');
    li.appendChild(document.createTextNode(inputValue));
    items.appendChild(li);
}
