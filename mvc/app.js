const command = process.argv[2]
const params= process.argv.slice(3)

const VehicleController = require('./controller/VehicleController');
switch(command){
    case "show":
       VehicleController.show() ;
        break;
    case "add":
        VehicleController.add(params);
        break;
    case "delete":
       VehicleController.delete(params);
        break;
    case "update":
        VehicleController.update(params);
        break;
    default:
        VehicleController.message("Unknow command");
        break;
}