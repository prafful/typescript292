function greeting(message) {
    if (message === void 0) { message = "Test Message"; }
    return "Hello " + message;
    //return 1; not valid
}
console.log(this.greeting());
function fromMessage(name, message) {
    if (message === void 0) { message = "Hey, How are you!"; }
    return "Message from " + name + ": " + message;
}
console.log(this.fromMessage("prafful", "Hello from KKT"));
//arrow function
var age = 10;
var arrowMessage1 = function (message) {
    var age = 20;
    console.log(this.age);
    return "Hello from arrow!!!";
};
console.log(this.arrowMessage1());
//rewrite above as an arrow function
var arrowMessage2 = function (message) {
    return "Hello from FAT arrow!!!";
};
console.log(this.arrowMessage2());
