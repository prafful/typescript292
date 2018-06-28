//typescript is typed superset of JS
// add features like - static type annotations



var counter;
var counter1 = 1;
var mycounter:number = 5; //all number are floating point values by default
var counter3:number = 0;

var name1 = "prafful";

var check = true;   

var anything:any;

var notPossible:null;         //why is this working?
var notPossible1:undefined;    //why is this working? 

console.log(check.valueOf())
console.log(name1.valueOf())

console.log(typeof name1)


console.log(notPossible)

console.log(notPossible1)

let myVariable:number =10;

const score:number = 10;

for(var ai=0; ai<=5; ai++){
    //variable declared with var are scoped to nearest function block
}

console.log(ai)

for (let bi = 5; bi <= 10; bi++) {
    //varibale declared with let are scoped to nearest enclosing block
    console.log(bi)
}
//console.log(bi)  //bi is not accessible outside for scope because of let