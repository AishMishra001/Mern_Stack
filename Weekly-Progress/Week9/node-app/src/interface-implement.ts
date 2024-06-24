interface Person {
  name : string , 
  age : number , 
  greet(phase : string):void ; 
}


class Employee implements Person {
  name : string ;
  age : number ;

  constructor(n:string , a:number){
    this.name = n ; 
    this.age = a
  }

  greet(phase:string){
    console.log(`${phase} ${this.name}`)
  }
}

const e = new Employee("Aish" , 21); 

console.log(e.greet("hi there")) ; 