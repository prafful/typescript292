var Person = /** @class */ (function () {
    function Person(fn) {
        this.fname = fn;
    }
    return Person;
}());
var p = new Person("Prafful");
console.log(p.fname);
