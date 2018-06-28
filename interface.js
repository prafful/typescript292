var Quadcopter = /** @class */ (function () {
    function Quadcopter() {
    }
    Quadcopter.prototype.getDroneInformation = function () {
        return this.name;
    };
    return Quadcopter;
}());
var djidrone = new Quadcopter();
djidrone.name = "tello";
console.log(djidrone.getDroneInformation());
