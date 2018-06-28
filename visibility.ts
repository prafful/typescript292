class Person{
    private firstName:string
    private lastName:string

    protected location:string

 /*    constructor(private firstName:string, private lastName:string){
        //this.firstName = fn
        //this.lastName = ln
    } */

    constructor( firstName:string, lastName:string){
        //this.firstName = fn
        //this.lastName = ln
    }

    private welcome(){
        console.log("Welcome to Personal Area!!!")
    }

    setFirstName(fn:string){
        this.firstName = fn
    }

    setLastName(ln:string){
        this.lastName = ln
    }

    getFirstName(){
        return this.firstName
    }

    getLastName(){
        return this.lastName
    }

    doWelcomeBasic(){
        this.welcome()
    }

}

class Developer extends Person{

    constructor(fn, ln){
        super(fn, ln)
    }

    welcomeD(location:string){
        this.location = location
        console.log("Welcome to Company!!! at " + this.location)
    }

    welcomeHome(){
       // super.welcome() //not accessible as it is private
    }
}

//var programmer:Person = new Developer();
//programmer.doWelcomeBasic()
//programmer.firstName = "Prafful"
//programmer.lastName = "Daga"

//programmer.setFirstName("Prafful")
//programmer.setLastName("Daga")

//console.log(programmer.getFirstName() + " " + programmer.getLastName())

var hacker = new Developer("Julian", "Assagne")
console.log(hacker.getFirstName() + " " + hacker.getLastName())

hacker.welcomeD