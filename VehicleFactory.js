"use strict";

// Define a skeleton vehicle factory
class VehicleFactory { }

// Get vehicle class name
function getVehicleClass(options) {
    let vehicleType = options.vehicleType;
    return vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1).toLowerCase();
}

// Create new Vehicle instances
VehicleFactory.prototype.createVehicle = function (options) {
    try {
        this.vehicleClass = require('./' + getVehicleClass(options) + '.js');
        return new this.vehicleClass(options);
    }
    catch (err) {
        throw new TypeError('Unknown vehicle type: ' + options.vehicleType);
    }
}

module.exports = VehicleFactory;
