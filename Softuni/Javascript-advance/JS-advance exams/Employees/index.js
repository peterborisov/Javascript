function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            let obj = {
                id, taskName, priority
            }
            priority === 'high' ? this.tasks.unshift(obj) : this.tasks.push(obj)
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            if (this.tasks.length === 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            return this.tasks.shift().taskName;
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            console.log("Tasks, that need to be completed:")
            this.tasks.forEach(el => {
                console.log(`${el.id}: ${el.name} - ${el.priority}`)
            })
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.firstName = firstName;
            this.lastName = lastName;
            this.bonus = bonus;
            this.experience = experience;
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
        }

        learn() {
            return ++this.experience;
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.firstName = firstName;
            this.lastName = lastName;
            this.bonus = bonus;
            this.experience = experience + 5;
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
        }
        changeTaskPriority(taskId) {
            let task = this.tasks.find(x => x.id === taskId);
            let index = this.tasks.indexOf(task);
            this.tasks = this.tasks.splice(index, 1);
            task.priority === 'high' ? (task.priority = 'low', this.tasks.push(task)) : (
                task.priority = 'high', this.tasks.unshift(task))
            return task;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}
let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
console.log(junior.learn());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
