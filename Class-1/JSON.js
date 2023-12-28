// .stringify() : coversion from OBJECT ====> STRING 
//.parse() : conversion from STRING =====> OBJECT


object1 = {
  name : 'Aish',
  age : 21 ,
  gender : 'Male',
}

console.log(JSON.stringify(object1));

object2 = '{"name":"Aish", "age" : "21" , "gender" :"Male"}'
console.log(JSON.parse(object2));