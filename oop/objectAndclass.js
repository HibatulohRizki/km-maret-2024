// object literal

let person = {
    name : "Rizki",
    age  : 21,
    skills : [ 'HTML', 'CSS', 'JavaScript' ],
};

// console.log(person);

// CLASS

class Person {
    constructor (name, age, skills,  address, status){
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.address = address;
        this.status = status;
    }
}

// Instanciation => proses instansi / membuat sebuah object class

let jaki = new Person ("Jaki", 21,["illustrator","Photoshop"],"Indonesia",true);
console.log(jaki);