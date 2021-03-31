function solve() {
    const form = document.getElementById('add');
    const formElements = document.getElementById('add').elements;
    const adoption = document.getElementById('adoption').getElementsByTagName('ul')[0];
    const adopted = document.getElementById('adopted').getElementsByTagName('ul')[0];
    [petName, age, kind, owner, btn] = formElements;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (petName.value === '' || age.value === '' || isNaN(age.value) || kind.value === '' || owner.value === '') {
            return;
        }
        adoption.innerHTML += petTemplate();
        form.reset();
        let adoptionBtns = adoption.querySelectorAll('button')
        adoptionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const parentEl = btn.parentElement;
                btn.remove();
                parentEl.innerHTML += newOwnerName();

                const adoptionDiv = adoption.querySelectorAll('div');
                adoptionDiv.forEach(el => {
                    let newName = el.getElementsByTagName('input')[0];
                    let confirmBtn = el.getElementsByTagName('button')[0];
                    confirmBtn.addEventListener('click', (e) => {
                        this.owner.value = newName.value;
                        adopted.innerHTML += newHomeTemplate();
                    })
                })
            })
        })
    })

    const petTemplate = () => {
        return `
            <li>
                <p>
                    <strong>${this.petName.value}</strong> is a <strong>${this.age.value}
                    </strong> year old <strong>${this.kind.value}</strong>
                </p>
                <span>Owner: ${this.owner.value}</span>
                <button>Contact with owner</button>
            </li>
        `
    }

    const newOwnerName = () => {
        return `
        <div>
            <input placeholder="Enter your names">
            <button>Yes! I take it!</button>
        </div>
        `
    }

    const newHomeTemplate = () => {
        return `
            <li>
                <p>
                    <strong>${this.petName.value}</strong> is a <strong>${this.age.value}
                    </strong> year old <strong>${this.kind.value}</strong>
                </p>
                <span>New Owner: ${this.owner.value}</span>
                <button>Checked</button>
            </li>
        `
    }
}
