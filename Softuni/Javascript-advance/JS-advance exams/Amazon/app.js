import { test } from './models/category.js';
test()
function init(amazon) {
	amazon.generateData();
	var categories = amazon.getCategories();
	var users = amazon.getUsers();

	amazon.loadHtml(categories);
    amazon.loadUsers(users);
    
	// For testing
	console.log(categories);
	console.log(users);
};

init();