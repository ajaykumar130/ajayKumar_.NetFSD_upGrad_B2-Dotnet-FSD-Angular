"use strict";
class Employee {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(value) {
        if (value > 0) {
            this.salary = value;
        }
    }
    displayDetails() {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(id, name, salary, teamSize) {
        super(id, name, salary);
        this.teamSize = teamSize;
    }
    displayDetails() {
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
