//@ts-check

/*
1.	Company
Write a Company class, which supports the described functionality below.
Functionality
constructor()
Should have these 1 property:
•	departments - empty array
addEmployee({username}, {salary}, {position}, {department})
This function should add a new employee to the department with the given name.
•	If one of the passed parameters is empty string (""), undefined or null,  this function should throw an error with the following message:
"Invalid input!"
•	If salary is less than 0, this function should throw an error with the following message:
" Invalid input!"
•	If the new employee is hired successfully, you should add him into the departments array and return the following message:

" New employee is hired. Name: {name}. Position: {position}"
bestDepartment()
This function should print the department with the highest average salary and its employees sorted by their salary by descending and by name in the following format:
" Best Department is: {best department's name}
Average salary: {best department's average salary}
{employee1} {salary} {position}
{employee2} {salary} {position}
{employee3} {salary} {position}
. . ."
*/

class Company {
    constructor() {
        this.departments = new Map();
    }
    addEmployee(username, salary, position, department) {
        if (!username || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!');
        }
        console.log(`New employee is hired. Name: ${username}. Position: ${position}`)

        if (!this.departments.has(department)) {
            this.departments.set(department, new Map());
        }
        this.departments.get(department).set(username, salary);
    }
    
    bestDepartment() {
        for (const [key, value] of this.departments) {
            console.log(key, value);
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
