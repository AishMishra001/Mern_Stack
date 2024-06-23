function greet(a : string){
    console.log(a+"Good Morning") 
}

greet('Aish') ; 

function sum(a:number , b: number):number{
  return a+b;
}

sum(6,4) ; 

// type inference --> if number type is not written expecitly than typescript itself identify the return type


function isLegal(age:number):boolean{
  if(age>18){
    return true ; 
  }
  else{
    return false ; 
  }
}

let x = isLegal(18) ; 