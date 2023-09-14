//------------------------------------------------------------------------------ 
// CLASSES

//TODO: 1. Erstelle die beiden Klassen "Department" und "Employee"
class Company {
    constructor(name){
        this.name = name;
    }
}

class Department {
    constructor(company, name, boss){
        this.company = company;
        this.name = name;
        this.boss = boss;
    }
}

class Employee {
    constructor(department, name, salary){
        this.department = department;
        this.name = name;
        this.salary = salary;
    }
}




//==============================================================================
// OBJECT INSTANCES
const bigMoneyCorp = new Company("Big Money Corporations");
const sales = new Department(bigMoneyCorp, "Sales", "Don Quichotte de Flamingo");
let finance = new Department(bigMoneyCorp, "Finance", "Gerhard Geldsack");
let hr = new Department(bigMoneyCorp, "Human Ressources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");
//TODO: 2. Füge ein weiteres Department hinzu

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(sales, "Don Quichotte de Flamingo",8000000))
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
allEmployees.push(new Employee(hr, "Nami", 45000));
allEmployees.push(new Employee(hr, "Nico Robin", 45000))
allEmployees.push(new Employee(hr, "Brook", 45000))
allEmployees.push(new Employee(marketing, "Tony Chopper", 55000))
allEmployees.push(new Employee(marketing, "Lysop", 50000))
allEmployees.push(new Employee(marketing, "Shanks", 51000))
allEmployees.push(new Employee(sales, "Monkey D. Ruffy", 111000))
allEmployees.push(new Employee(sales, "Lorenor Zorro", 105000))
allEmployees.push(new Employee(sales, "Sanji", 100000))
// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
//==============================================================================
// FUNCTIONS

//TODO: 4. Funktion getBoss
function getBoss(employee) {
    return employee.department.boss
}

//TODO: 5. Funktion raiseIncome
function raiseIncome(department, amount) {
    allEmployees.forEach(employee => {
        if (employee.department === department && employee.name !== department.boss) {
            employee.salary += amount
        }
    })
}

//TODO: 6. doubleBossIncome
function doubleBossIncome(department) {
    const boss = allEmployees.find(employee => employee.department === department && employee.name === department.boss)
    if (boss) {
        boss.salary *= 2
    }
}
//TODO: 7. averageIncome
function averageIncome(department) {
    const departmentEmployees = allEmployees.filter(employee => employee.department === department);
    if (departmentEmployees.length === 0) {
        return 0
    }
    const totalSalary = departmentEmployees.reduce((acc, employee) => acc + employee.salary, 0)
    return totalSalary / departmentEmployees.length
}




//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){
    console.log("----------------------------------")
    console.log("Namen aller Angestellten:")
    console.log(allEmployees.map(employee => employee.name).join(", "))
    
    console.log("----------------------------------")
    console.log("Namen aller Angestellten in der Abteilung 'Human Ressources':")
    const hrNames = allEmployees.filter(employee => employee.department.name === 'Human Ressources').map(employee => employee.name)
    console.log(hrNames.join(", "))
    
    console.log("----------------------------------")
    console.log("Namen aller Angestellten mit einem Jahresgehalt von mehr als 35.000:")
    const highEarners = allEmployees.filter(employee => employee.salary > 35000).map(employee => employee.name)
    console.log(highEarners.join(", "))
    
    console.log("----------------------------------")
    console.log("Chef von Andreas Armschlucker:")
    console.log(getBoss(allEmployees.find(employee => employee.name === "Andreas Armschlucker")))

    console.log("----------------------------------")
    console.log("Gehaltserhöhung um 4000 für alle Angestellten der HR-Abteilung, außer dem Chef...")
    raiseIncome(hr, 4000)
    
    console.log("----------------------------------")
    console.log("Verdopplung des Gehalts für den HR-Chef...")
    doubleBossIncome(hr)
    
    console.log("----------------------------------")
    console.log("Durchschnittliches Einkommen in der HR-Abteilung:")
    const avgIncome = averageIncome(hr)
    console.log(avgIncome)

    console.log("----------------------------------")
}

main()