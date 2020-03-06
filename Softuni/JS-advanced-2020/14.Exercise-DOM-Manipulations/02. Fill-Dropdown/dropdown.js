function addItem() {
    let newItemText = document.getElementById('newItemText').value,
        newItemValue = document.getElementById('newItemValue').value,
        menu = document.getElementById('menu');
    opt = document.createElement("option");
    opt.value = newItemValue;
    opt.text = newItemText;
    menu.add(opt, null);

    // Short way, judje dosn't accept it
    // menu.options[menu.options.length] = new Option(newItemText, newItemValue);
}