const command = process.argv[2]
const params= process.argv.slice(3)

const VehicleCotroller = require('./controller/VehicleController');
switch(command){
    case 'show' :
       VehicleCotroller.show() ;
        break;
    case 'add':
        VehicleCotroller.add();
        break;
    case 'delete':
       VehicleCotroller.delete();
        break;
    case 'update':
        VehicleCotroller.update();
        break;
    default:
        VehicleCotroller.message("Unknow command");
        break;
}