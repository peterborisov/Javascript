class Company {
    constructor() {
        this.department = new Map();
    }

    addEmployee(username, salary, position, department) {
        let employee = {
            username: username,
            salary: salary,
            position: position,
            department: department
        }

        if (!username || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!');
        }
        this.department[employee];
        console.log(`New employee is hired. Name: ${employee.username}. Position: ${employee.position}`)

        if (!this.department.has(department)) {
            this.department.set(department, new Map());
        }
        this.department.get(department).set(username, salary);
    }
    bestDepartment(data) {
        let a = [...this.department.keys()]
        console.log('aaaa', a)
        for (const [k, v] of this.department) {
            console.log(k, v);
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());