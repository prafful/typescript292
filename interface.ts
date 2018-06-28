interface Drone{
    name:string;
    propellor:number;
    flightController:boolean;
    batteryDuration:number

    getDroneInformation():string;
}

class Quadcopter implements Drone{
    name:string;
    propellor:number;
    flightController:boolean;
    batteryDuration:number;

    getDroneInformation(){
        return this.name;
    }

}

var djidrone:Drone = new Quadcopter()
djidrone.name = "tello"
console.log(djidrone.getDroneInformation())