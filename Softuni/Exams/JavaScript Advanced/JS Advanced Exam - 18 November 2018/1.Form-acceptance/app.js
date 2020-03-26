function acceptance() {
	let fields = document.getElementById('fields').children;
	let warehouse = document.getElementById('warehouse');
	let p = document.createElement("p");
	let button = document.createElement("button");

	[fields].forEach(item => {
		let company = item[0].children[0].value,
			product = item[1].children[0].value,
			quantity = Number(item[2].children[0].value),
			scrape = Number(item[3].children[0].value);
		if (company !== '' && product !== '' && quantity >= scrape) {
			warehouse.appendChild(p);
			warehouse.appendChild(button);
			p.textContent = `[${company}] ${product} - ${Number(quantity) - Number(scrape)} pieces`;
			button.textContent = `Out of stock`;
			company.value, product.value, quantity.value, scrape.value = ''
		}
	})
	button.addEventListener('click', () => {
		warehouse.removeChild(p);
		warehouse.removeChild(button)
	})
}

document.addEventListener("DOMContentLoaded", acceptance);