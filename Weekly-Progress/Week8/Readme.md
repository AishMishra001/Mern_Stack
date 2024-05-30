## Learning while creating paytm app : 

Say we want a route such that user can search for another person of the paytm by typing his first and last name ...how will we do it in mongodb 

$regex : A regular expression (regex or regexp) is a sequence of characters that define a search pattern. Typically, this pattern is used by string-searching algorithms for "find" or "find and replace" operations on strings, or for input validation. Regular expressions are extremely powerful for text processing and manipulation. 

we do that by this : 

```
const users :{
  firstname : {
    $regex : filter 
  } , 
  lastname : {
    $regex : filter 
  }
}

```