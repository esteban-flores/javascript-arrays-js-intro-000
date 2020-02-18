var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

/*addElementToBeginningOfArray should take two parameters, an
array and an element to add to the beginning of the array, and
both functions should add the element to the beginning of the
array and then return the whole array. It should return a new
array and not modify the original.*/

addElementToBeginningOfArray = function(array, element){
  var newArray = new Array(element, ...array);
  return newArray;
}

/*destructivelyAddElementToBeginningOfArray should take two
parameters, an array and an element to add to the beginning
of the array, and should add the element to the beginning
of the array and then return the whole array. It should
alter the original array that's passed in. */

destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
  return array;
}

/*Define addElementToEndOfArray. It should take two arguments,
an array and an element to add to the end of the array. It
should not alter the original array.*/

addElementToEndOfArray = function(array, element){
  var newArray = new Array(...array, element);
  return newArray;
}

/*Define destructivelyAddElementToEndOfArray. It should take
two arguments, an array and an element to add to the end of
the array. It should alter the original array.*/

destructivelyAddElementToEndOfArray = function(array, element){
    array.push(element);
    return array;
}

/*Define a function called accessElementInArray. The function
should accept an array and an index and return the element at
that index.*/

accessElementInArray = function(array, index){
  return array[index];
}

/*Define a function called removeElementFromBeginningOfArray.
It takes an array as its only argument. The function should 
remove the first element in the array. This function should 
return the entire array in the same line, and it should not 
mutate the original array.*/
