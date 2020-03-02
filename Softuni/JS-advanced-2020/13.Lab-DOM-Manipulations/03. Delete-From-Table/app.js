function deleteByEmail() {
    let table = document.getElementById('customers');
    let inputField = document.querySelector('input[name="email"]').value;
    let result = document.getElementById('result');
    result.innerText = 'Not found.';
    
    for (let row = 1, i = table.rows.length; row < i; row++) {
        for (let c = 1, m = table.rows[row].cells.length; c < m; c++) {
            let email = table.rows[row].cells[c].innerHTML;
            if (email === inputField) {
                table.deleteRow(row);
                result.innerText = 'Deleted.';
            }
        }
    }
}