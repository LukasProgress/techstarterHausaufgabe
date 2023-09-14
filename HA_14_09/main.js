//------------------------------------------------------------------------------ 
// CLASSES

//TODO: 1. Erstelle die beiden Klassen "Department" und "Employee"
class Company {
    constructor(name){
        this.name = name;
    }
}

class Department {
    constructor(name, company, boss) {
        this.name = name;
        this.company = company;
        this.boss = boss;
    }
}

class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}
