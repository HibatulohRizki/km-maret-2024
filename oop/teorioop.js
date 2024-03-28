// Theories OOP

// 1. Inheritance
// 2. Encapsulation
// 3. Polymorphism
// 4. Abstraction

// Inheritance

class Person {
    constructor(name, job, isGraduated, city, skills){
        this.name = name;
        this.job = job;
        this.isGraduated = isGraduated;
        this.city = city;
        this.skills = skills;
    }
}

class Developer extends Person{
    constructor(name,isGraduated,city,skills,status) {
        super(name,"Developer",isGraduated,city,skills);
        this.status = status;
    }
}

class Designer extends Person{
    constructor(name,isGraduated,city,skills,tools){
        super(name,"Designer", isGraduated,city,skills)
        this.tools = tools;
    }
}

let developer = new Developer ("Hibat",true, "Tangsel",["HTML","CSS","JavaScript"],"Single");
let designer = new Designer ("Anselma",true, "Bandung",[],"Canva");
console.log(developer);
console.log(designer);