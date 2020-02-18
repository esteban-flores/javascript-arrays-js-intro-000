var chocolateBars = 

addElementToBeginningOfArray = function([],element){
  var array = [];
  array = [element, ...array];
  return array;
}
//Both functions take two parameters, an array and an element
//to add to the beginning of the array, and both functions
//should add the element to the beginning of the array and then
//return the whole array. It should return a new array and not
//modify the original.

/*
destructivelyAddElementToBeginningOfArray = function(){

}
*/
