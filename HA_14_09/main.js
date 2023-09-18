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
    constructor(department, name, salary) {
        this.department = department;
        this.name = name;
        this.salary = salary;
    }
}


//==============================================================================
// OBJECT INSTANCES
const bigMoneyCorp = new Company("Big Money Corporations");

let finance = new Department(bigMoneyCorp, "Finance", "Gerhard Geldsack");
let hr = new Department(bigMoneyCorp, "Human Ressources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");

//TODO: 2. Füge ein weiteres Department hinzu
let it = new Department(bigMoneyCorp, "IT", "Tony Stark");
//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
// TODO: 3. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
allEmployees.push(new Employee(hr,"Dieter Peter",44000));
allEmployees.push(new Employee(hr,"Juergen Vogel",40000));
allEmployees.push(new Employee(hr,"Hans Diettrich",42000));
allEmployees.push(new Employee(marketing,"Sabrina Schiesser",48000));
allEmployees.push(new Employee(marketing,"Anne Mayer",50000));
allEmployees.push(new Employee(marketing,"Chantall Huber",32000));
allEmployees.push(new Employee(it,"Tony Stark", 999999999999));
allEmployees.push(new Employee(it,"Dennis Diepolder",3000000));
allEmployees.push(new Employee(it,"Hans Mayer",70000));
allEmployees.push(new Employee(it,"Abahbdi Hamidad",95000));
//==============================================================================
// FUNCTIONS

//TODO: 4. Funktion getBoss
function getBoss(employeeName) {

    const employee = allEmployees.find(emp => emp.name === employeeName);
    if (!employee) {
        console.log(`Mitarbeiter ${employeeName} wurde nicht gefunden.`);
        return null;
    }

    const boss = allEmployees.find(emp => emp.name === employee.department.boss);
    if (boss) {
        console.log(`Chef von Mitarbeiter ${employeeName} ist ${boss.name}.`);
        return boss;
    } else {
        console.log(`Chef fuer ${employeeName} wurde nicht gefunden.`);
        return null;
    }
}


//TODO: 5. Funktion raiseIncome
function raiseIncome(departmentName, amount) {
    const department = [finance, hr, marketing, it].find(dept => dept.name === departmentName);

    if (!department) {
        console.log(`Department ${departmentName} wurde nicht gefunden.`);
        return;
    } else {
        console.log(`Das Gehalt von jedem Mitarbeiter in ${department.name} wird nun erhoeht!`)
    }

    allEmployees.forEach(employee => {
        if (employee.department.name === departmentName && employee.name !== department.boss) {
            employee.salary += amount;
            console.log(`${employee.name} new Salary is ${employee.salary}`)
        }
   });
}


//TODO: 6. doubleBossIncome
function doubleBossIncome(departmentName) {
    const department = [finance, hr, marketing, it].find(dept => dept.name === departmentName);

    if (!department) {
        console.log(`Department ${departmentName} wurde nicht gefunden.`);
        return;
    }

    const boss = allEmployees.find(employee => employee.name === department.boss);
    
    if (boss) {
        boss.salary *= 2;
        console.log(`${boss.name}'s Gehalt wurde verdoppelt und betraegt nun ${boss.salary} im Jahr.`);
    } else {
        console.log(`Boss fuer ${departmentName} wurde nicht gefunden.`);
    }
}


//TODO: 7. averageIncome
function averageIncome(departmentName) {
    const department = [finance, hr, marketing, it].find(dept => dept.name ===departmentName);

    if (!department) {
        console.log(`Department ${departmentName} wurde nicht gefunden.`)
        return;
    }

    const employessInDepartment = allEmployees.filter(employee => employee.department === department);

    const totalSalary = employessInDepartment.map(employee => employee.salary)
                                             .reduce((acc, salary) => acc + salary, 0);
    const avgSalary = totalSalary / employessInDepartment.length;

    console.log(`Das Durschnittsgehalt der Angestellten in ${departmentName} ist ${avgSalary}`);
    return avgSalary;

}

//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){
    //TODO: 3. Gib die Namen aller Angestellter auf der Konsole aus:
    allEmployees.map(employee => console.log(employee.name));

    //TODO: 3. Gib die Namen aller Angestellter in hr auf der Konsole aus:
    allEmployees.filter(employee => employee.department === hr)
                .map(employee => console.log(employee.name));

    //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus
    allEmployees.filter(employee => employee.salary >= 35000)
                .map(employee => console.log(employee.name));


    //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.
    const findBoss = "Andreas Armschlucker";
    getBoss(findBoss);
  

    //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Ressources" arbeiten (Außer dem chef) 
    //         eine Gehaltserhöhung von 4000 im Jahr zu geben
    const department = "Human Ressources"
    raiseIncome(department, 4000);


    //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte gehalt zu geben
    doubleBossIncome(department);


    //TODO: 7. Nutzt averageIncome() um euch das Durschnittsgehalt eures eigenen Departments ausgeben zu lassen.
    averageIncome(department);
}

main();