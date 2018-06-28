var Vehicle = /** @class */ (function () {
    function Vehicle(n, c, t) {
        this.wheels = n;
        this.color = c;
        this.type = t;
    }
    Vehicle.prototype.getDetail = function () {
        return "Wheel : " + this.wheels + " Type: " + this.type + " Color: " + this.color;
    };
    return Vehicle;
}());
var car = new Vehicle("2", "Maroon", "Bike");
//car.type = true //not possible
console.log(car.getDetail());
//console.log("Wheel : " + car.wheels + " Type: " + car.type)
