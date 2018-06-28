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
var Employee = /** @class */ (function () {
    function Employee(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    Employee.prototype.welcome = function () {
        console.log("Welcome to Cognizant: " + this.firstName + " " + this.lastName);
    };
    return Employee;
}());
var AssociateIoT = /** @class */ (function (_super) {
    __extends(AssociateIoT, _super);
    function AssociateIoT(f, n, aid) {
        if (aid === void 0) { aid = "0000"; }
        var _this = _super.call(this, f, n) || this;
        _this.associateId = aid;
        console.log("You are registered with CTS: " + _this.firstName + " " + _this.lastName + " Id: " + _this.associateId);
        return _this;
    }
    AssociateIoT.prototype.welcome = function () {
        console.log("Welcome to IoT Dept @ Cognizant");
    };
    AssociateIoT.prototype.welcomeIoT = function () {
        console.log("Welcome to the world of automation");
    };
    AssociateIoT.prototype.welcomeHome = function () {
        _super.prototype.welcome.call(this);
    };
    return AssociateIoT;
}(Employee));
var developer = new AssociateIoT("Prafful", "Daga", "8888");
developer.welcomeIoT();
developer.welcome();
developer.welcomeHome();
var programmer = new Employee("Manoj", "Pandey");
programmer.welcome();
var hacker = new Employee("Julian", "Assange");
hacker.welcome();
hacker.welcomeHome();
