const fs = require('fs');

class Vehicle{
    constructor(id, name, brand, price, type){
        this.id= id;
        this.name = name;
        this.brand = brand; 
        this.price = price;
        this.type = type; 
    }

    static getVehicle(){
        let parseData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let vehicles = parseData.map(vehicle => {
            const {id, name, brand, price, type} = vehicle;
            return new Vehicle(id, name, brand, price, type);
        });
        return vehicles;
    }

    static add(vehicle){
        let vehicles = this.getVehicle();
        let id = vehicles[vehicles.length -1].id + 1; 
        const [name, brand, price, type] = vehicle;

        vehicles.push(
            new Vehicle(id, name, brand, Number(price), type)
        )
        this.save(vehicles);
    }
    static delete(vehicle){
        let vehicles = this.getVehicle();
        let id = Number(vehicle[0]);
        vehicles = vehicles.filter(vehicle => vehicle.id !== id);
        this.save(vehicles);
    }
    static update(vehicle){
        let vehicles = this.getVehicle();
        let id = Number(vehicle[0]);
        let name = vehicle[1];
        let brand= vehicle[2]
        let price= vehicle[3]
        let type = vehicle[4]
        vehicles = vehicles.map(vehicle => {
            if(vehicle.id === id ){
                vehicle.name = name;
                vehicle.brand = brand;
                vehicle.price = price;
                vehicle.type = type;
            }
            return vehicle;
        })
        this.save(vehicles);
    }
    static save(vehicles){
        let vehicleString = JSON.stringify(vehicles,null,3)
        fs.writeFileSync("./data.json",vehicleString);
    }
}

module.exports = Vehicle;