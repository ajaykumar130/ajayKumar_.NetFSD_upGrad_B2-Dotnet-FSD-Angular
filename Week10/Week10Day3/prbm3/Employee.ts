class Employee {
    public id: number;
    protected name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(value: number): void {
        if (value > 0) {
            this.salary = value;
        }
    }

    public displayDetails(): void {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary);
        this.teamSize = teamSize;
    }

    public displayDetails(): void {
        super.displayDetails();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

const emp = new Employee(1, "Ajay", 30000);
const mgr = new Manager(2, "Kumar", 60000, 5);

emp.displayDetails();
emp.setSalary(35000);
console.log("Updated Salary:", emp.getSalary());
mgr.displayDetails();