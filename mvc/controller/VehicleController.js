const Vehicle = require('../model/Vehicle');
const View = require('../view.js/View');

class VehicleCotroller {
    static show(){
        Vehicle.show();
    }
    static add(){
        Vehicle.add();
    }
    static delete(){
        Vehicle.delete();
    }
    static update(){
       Vehicle.update();
    }
    static message(msg){
        View.message(msg);
    }
}

module.exports = VehicleCotroller; 