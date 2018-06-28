class Person{

        readonly fname
      constructor(fn:string){
          this.fname = fn
      }

    
}

var p = new Person("Prafful")
console.log(p.fname) 
//p.fname = "Manoj" //will not allow as it is readonly