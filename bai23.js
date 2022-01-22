/** filter, find, reduce, map
 * Today array.sort
 * 
 * syntax: arry.sort(function(a,b) {})
 * -> return a sorted array
 * 
 * if sort function
 *   returns a value < 0
 *      a will come before b
 *   returns a value > 0
 *      a will come after b
 *   returns 0
 *      a and b will stay unchanged
  */

var numbers = [2, 9, 3, 4, 1];
// [1, 2, 3, 4, 9] // ascending order
ascendingNumbers = numbers.sort(funtion(a, b){
    // a = 1, b = 9
    return a - b;
});
console.log ('Hello world');