"use strict";

class Car {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
    }
}

module.exports = Car;
