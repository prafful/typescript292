var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    /*    constructor(private firstName:string, private lastName:string){
           //this.firstName = fn
           //this.lastName = ln
       } */
    function Person(firstName, lastName) {
        //this.firstName = fn
        //this.lastName = ln
    }
    Person.prototype.welcome = function () {
        console.log("Welcome to Personal Area!!!");
    };
    Person.prototype.setFirstName = function (fn) {
        this.firstName = fn;
    };
    Person.prototype.setLastName = function (ln) {
        this.lastName = ln;
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.doWelcomeBasic = function () {
        this.welcome();
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(fn, ln) {
        return _super.call(this, fn, ln) || this;
    }
    Developer.prototype.welcomeD = function (location) {
        this.location = location;
        console.log("Welcome to Company!!! at " + this.location);
    };
    Developer.prototype.welcomeHome = function () {
        // super.welcome() //not accessible as it is private
    };
    return Developer;
}(Person));
//var programmer:Person = new Developer();
//programmer.doWelcomeBasic()
//programmer.firstName = "Prafful"
//programmer.lastName = "Daga"
//programmer.setFirstName("Prafful")
//programmer.setLastName("Daga")
//console.log(programmer.getFirstName() + " " + programmer.getLastName())
var hacker = new Developer("Julian", "Assagne");
console.log(hacker.getFirstName() + " " + hacker.getLastName());
hacker.welcomeD("Kolkatta");
