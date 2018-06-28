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
    batteryDuration;

    getDroneInformation(){
        return this.name;
    }

}

var djidrone:Quadcopter = new Quadcopter()
djidrone.name = "tello"
djidrone.batteryDuration = "good" 
console.log(djidrone.getDroneInformation())