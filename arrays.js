var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

/*Both functions take two parameters, an array and an element
to add to the beginning of the array, and both functions
should add the element to the beginning of the array and then
return the whole array. It should return a new array and not
modify the original.*/

addElementToBeginningOfArray = function(array, element){
  var newArray = new Array(element, ...array);
  return newArray;
}

/*
destructivelyAddElementToBeginningOfArray = function(){

}
*/
