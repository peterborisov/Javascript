function addItem() {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = "[Delete]";
    a.setAttribute('href', '#'); 
    a.addEventListener('click', deleteItem);
    li.textContent = document.getElementById('newText').value;
    li.appendChild(a);
    document.getElementById('items').appendChild(li);
    document.getElementById('newText').value = "";

    function deleteItem() {
        let li = this.parentNode;
        let ul = this.parentNode.parentNode;
        ul.removeChild(li);
    }
}
