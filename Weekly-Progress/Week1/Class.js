class Animal{
  constructor(name,legcount,speaks){
    this.name = name ; 
    this.legcount = legcount ; 
    this.speaks = speaks ; 
  }
  static myType(){                     // static function of the object can be directly called on the class 
    console.log('I am a Animal');      
  }
  speak(){                            // normal function like this can't be called directly on the class but on the object on the class 
    console.log('hi there , ' + this.speaks);
  }
}

let dog = new Animal('dog',4,'bhow bhow');  // create object inside Animal class 
let cat = new Animal('cat',4,'meow meow');
cat.speak();   // call function on object 
Animal.myType();
