enum Direction {
  Up = "up" , // 0
  Down= "down" , // 1
  Left = "left" , // 2
  Right = "right" // 3
}

// if u want it to be number 

// enum Direction {
//   Up = 1 ,
//   Down , 
//   Left ,
//   Right

// }   

// typescript automatically assign Down = 2 , Left = 3 , Right = 4


function doSomething(keyPressed : Direction){
  switch(keyPressed){
    case Direction.Up:
      console.log("You pressed Up");
      break;
    case Direction.Down:
      console.log("You pressed Down");
      break;
  }
}

doSomething(Direction.Down) ; 

console.log(Direction.Up)
console.log(Direction.Down)