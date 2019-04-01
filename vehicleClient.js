"use strict";

const VehicleFactory = require('./VehicleFactory.js');
const vehicleFactory = new VehicleFactory();

var car = vehicleFactory.createVehicle({
    vehicleType: "car",
    color: "yellow",
    doors: 6
});

console.log(car);

var truck = vehicleFactory.createVehicle({
    vehicleType: "truck",
    state: "like new",
    color: "red",
    wheelSize: "small"
});

console.log(truck);
