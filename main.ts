console.log("hello from typescript. I am being watched! Go and hide!")

class Greeting{
    greetingm:string

    constructor(message:string){
        this.greetingm = message;
    }

    greet(){
        console.log( "Hello, " + this.greetingm);
    }

    greetWithDate(){
        console.log(this.greetingm + new Date())
    }

}


var greetNow = new Greeting("Good Mornign from KKT");

greetNow.greet()

greetNow.greetWithDate()
