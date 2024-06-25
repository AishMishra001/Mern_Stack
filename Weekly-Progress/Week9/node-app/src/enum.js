var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right"; // 3
})(Direction || (Direction = {}));
// if u want it to be number 
// enum Direction {
//   Up = 1 ,
//   Down , 
//   Left ,
//   Right
// }   
// typescript automatically assign Down = 2 , Left = 3 , Right = 4
function doSomething(keyPressed) {
    switch (keyPressed) {
        case Direction.Up:
            console.log("You pressed Up");
            break;
        case Direction.Down:
            console.log("You pressed Down");
            break;
    }
}
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);
