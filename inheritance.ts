class Employee {
    firstName:string;
    lastName:string;

    constructor(fn:string, ln:string, aid?:string){
        this.firstName =  fn;
        this.lastName = ln;
    }  

    welcome(){
        console.log("Welcome to Cognizant: " + this.firstName + " " + this.lastName )
    }

}



class AssociateIoT extends Employee{

    associateId: string;

  /*   constructor(f:string, n:string, aid?:string){
        super(f, n);
        this.associateId = aid;
        console.log("You are registered with CTS: " + this.firstName + " " + this.lastName + " Id: " + this.associateId )
    
    }
 */

   /*  constructor(f:string, n:string, aid:string="9999"){
    super(f, n);
    this.associateId = aid;
    console.log("You are registered with CTS: " + this.firstName + " " + this.lastName + " Id: " + this.associateId )

} */

constructor(f:string, n:string, aid?:string){
    super(f, n, aid);
    this.associateId = aid;
    console.log("You are registered with CTS: " + this.firstName + " " + this.lastName + " Id: " + this.associateId )

}


    welcome(){
        console.log("Welcome to IoT Dept @ Cognizant")
    }

    welcomeIoT(){
        console.log("Welcome to the world of automation")
    }

    welcomeHome(){
        super.welcome();
        
    }


}

var developer = new AssociateIoT("Prafful", "Daga", "8888");
developer.welcomeIoT()
developer.welcome()
developer.welcomeHome()

var programmer = new Employee("Manoj", "Pandey")
programmer.welcome()

var hacker:AssociateIoT = new Employee("Julian", "Assange", "9999");

hacker.welcome()
