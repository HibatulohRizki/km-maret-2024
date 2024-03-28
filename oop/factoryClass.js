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
        this.status = status || "";
    }
}

class Designer extends Person{
    constructor(name,isGraduated,city,skills,tools){
        super(name,"Designer", isGraduated,city,skills)
        this.tools = tools || "";
    }
}

let developer = new Developer ("Hibat",true, "Tangsel",["HTML","CSS","JavaScript"],"Single");
let designer = new Designer ("Anselma",true, "Bandung",[],"Canva");
// console.log(developer);
// console.log(designer);


class Office {
    constructor (rooms) { 
      this.rooms = rooms ||  [];
    }

    showStaffs(){
        console.log("Staff List : ");
        this.rooms.forEach((room, index) => {
            const {name, job} = room;
            console.log(`${index + 1}. ${name} - ${job}`);
        })
    }

    addStaff(name, job, isGraduated, city, skills){
        switch(job){
            case "Developer" :
                this.rooms.push(new Developer(name,isGraduated,city,skills));
                break;
            case "Designer" :
                this.rooms.push(new Designer(name,isGraduated,city,skills));
                break;
        }
    }

    removeStaff(name){
        this.rooms = this.rooms.filter(room => room.name !== name)
    }
}

const office = new Office()

office.addStaff("Joe","Developer", true, "Tangsel", ["PHP"]);
office.addStaff("Anna","Designer", false, "Bandung", []);

// console.log(office);

office.removeStaff("Joe");
office.showStaffs();