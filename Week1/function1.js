// FUNCTIONS OF STRINGS : 

//.length: Function to find length : 

function getlength(str){
  console.log('Original string :',str);
  console.log('Length :',str.length);
}
getlength('Hare Krishna')



//.indexOf(): Function to find the index of a target element : 

function findIndexOf(str,target){
  console.log('Original string :',str);
  console.log('Index of Target:', str.indexOf(target));
  console.log('Index of Target:', str.lastIndexOf(target));
}
findIndexOf('hare krishna','krishna')
findIndexOf('hare krishna hare krishna krishna krishna hare hare','krishna')




//.slice(): Function to slice a part of the string 

function getSlice(str,start,end){
  console.log("Original String:",str);
  console.log('Sliced Part:',str.slice(start,end));    // from start to end-1 
  // console.log('Sub-string:',str.substr(start,length)); substr working as from start to the length 
}
getSlice('hare krishna hare krishna krishna krishna hare hare',5,13);




// .replace(): Function to replace something from string 

str = "Jai shree Krishna"

str2=str.replace('Krishna','Radhe');
console.log(str2)





// .slice():  Function to seperate a string based on a seperator 

str = "My name is Aish but I don't have cash"

console.log(str.split(""))

let str3 = "I , am , Aish"
console.log(str3.split(","))




// .trim(): Trim the string from the start and end 

function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString("       Hello World       ");



// .toUpperCase() : convert every letter of the string into upper case 
console.log(str.toUpperCase())


// .toLowerCase() :  convert every letter of the string into lower case 
console.log(str.toLowerCase())


// FUNCTIONS OF NUMBERS : 

// parseInt() : removes everything from the back if it is not int 

console.log(parseInt("34.3453"))
console.log(parseInt("34sdvghfhg"))
console.log(parseInt("34"))

// parseFloat() : removes everything from the back if it is not float 
console.log(parseFloat('32.3532'))
console.log(parseFloat('32'))
console.log(parseFloat('32adfgvs'))


// FUNCTIONS OF ARRAY : 

//.push() : push in the end 

let intialArray = [1,2,3]
intialArray.push(4);
console.log(intialArray);

//.pop()  : pops from the end
 intialArray = [1,2,3]
intialArray.pop();
console.log(intialArray);

//.shift() : pops from the start 
intialArray = [1,2,3]
intialArray.shift();
console.log(intialArray);

// .unshift(): push in the start 
intialArray = [1,2,3]
intialArray.unshift(0);
console.log(intialArray);

//.concat(): concatinates the two arrays 
Array1 = [1,2,3]
Array2 = [4,5,6]
Array3=Array1.concat(Array2);
console.log(Array3);



