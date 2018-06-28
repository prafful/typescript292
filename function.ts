function greeting(message:string = "Test Message"):string{

    return "Hello " + message
    //return 1; not valid
}

console.log(this.greeting())

function fromMessage(name:string, message:string = "Hey, How are you!"):string{
    return "Message from " + name + ": " + message
}
console.log(this.fromMessage("prafful", "Hello from KKT"))

//type:number = 10 //not allowed as type is a keyword
//arrow function
var age = 10
var arrowMessage1 = function(message:string):string{
    let age = 20
    console.log(this.age)
    return "Hello from arrow!!!"
}

console.log(this.arrowMessage1()) 

//rewrite above as an arrow function

var arrowMessage2 = (message:string):string => { 
    return "Hello from FAT arrow!!!"
}

console.log(this.arrowMessage2())