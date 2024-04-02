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

    static add(params){
        let vehicles = this.getVehicle();
        let id = vehicles[vehicles.length -1].id + 1; 
        const [name, brand, price, type] = params;

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
    static save(vehicles){
        let vehicleString = JSON.stringify(vehicles,null,3)
        fs.writeFileSync("./data.json",vehicleString);
    }
}

module.exports = Vehicle;