function solve() {
    const addForm = document.getElementById('add-new');
    let movies = document.getElementById('movies').getElementsByTagName('ul')[0];
    let [movieName, hall, price, onScreenBtn] = addForm.elements;

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!movieName.value || !hall.value || isNaN(price.value)) {
            return;
        }
        movies.innerHTML += movieTemplate()
        addForm.reset();
    })

    const movieTemplate = () => {
        return `
            <li>
                <span>${movieName.value}</span>
                <strong>Hall:${hall.value}</strong>
                <div>
                    <strong>${price.value}</strong>
                    <input placeholder="Tickets sold">
                    <button>Archive</button>
                </div>
            </li>
    `
    }
}
