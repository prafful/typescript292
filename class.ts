 class Vehicle{
     wheels:number;
     color:string;
     type:number | string;
 
     /* constructor(n:number, c:string, t:number|string){
         this.wheels = n;
         this.color = c;
         this.type = t;
     } */
     constructor(n, c, t){
        this.wheels = n;
        this.color = c;
        this.type = t;
    }
     

    getDetail(){
        return "Wheel : " + this.wheels + " Type: " + this.type + " Color: " + this.color;
    }


 }


 //var car = new Vehicle("two", "Maroon", "Bike" )
 var car = new Vehicle(2, "Maroon", "Bike" )
 
 //car.type = true //not possible

 console.log(car.getDetail())
 //console.log("Wheel : " + car.wheels + " Type: " + car.type)