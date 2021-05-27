///The solution 1, if possible I need some help with them they work but i wanna understand them more.

/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
function sumOdds(numbers) {
  // Your code here
  //return numbers.reduce((sum, element) => element  % 2 !== 0 ? sum + element : sum); -> solution 1
  let sum = 0;

  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 !== 0){
      sum = sum + numbers[i];
    }
  }
  return sum;
}

// console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: Use string methods to make it case-insensitive
 */
function characterCount(string, c) {
  // Your code here
  //let counter = 0;
  //string.split('').forEach((element) => c.toLowerCase() === element.toLowerCase() ? counter++ : counter); -> solution 1
  //return counter; -> solution 1
  let counter = 0;
  let string1 = string.toUpperCase();
  let string2 = c.toUpperCase();
  for (let i = 0; i <string.length; i++){
  if (string1[i] === string2){
    counter++;
  }
}
return counter;
}

// console.log(characterCount("Character Count is clever", "c"));

/**
 * differences(numbers):
 * - receives an array of numbers
 * - returns an array that has the difference in the values of the numbers array.
 * - see example below for clarification.
 *
 * e.g.
 * differences([1, 3, 7, 9, 12]) -> [2, 4, 2, 3]
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 *
 * differences([11, 35, 52, 14, 56]) -> [24,  17, -38,  42]
 */
function differences(numbers) {
  // Your code here
  //let myArray = numbers.map((num, i) => numbers[i + 1] - num);
  //myArray.pop();
  //return myArray; -> solution 1
  let arr = [];
  for (let i = 0; i < numbers.length - 1; i++){
    arr.push(numbers[i + 1] - numbers[i]);
  }
  return arr;
}

// console.log(differences([11, 35, 52, 14, 56]));

/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 *
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {
  // Your code here
  //return numbers.reduce((max, num, i) => max > num - numbers[i - 1] ? max : num - numbers[i - 1]); -> solution 1
  let arr = [];
  let a;
  for (let i = 0; i < numbers.length - 1; i++){
    arr.push(numbers[i + 1] - numbers[i]);
  }
  a = Math.max.apply(null, arr);
  return a;
}

// console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {
  // Your code here
  return numbers.slice(numbers.indexOf(x) + 1);
}

// console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  // Your code here
  return firstName[0].toUpperCase() + lastName[0].toUpperCase();
}

// console.log(abbreviate("miss", "Stephane"));

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  // Your code here
  return string.split('').reduce((acc, a) => acc && a.toUpperCase() === a); //solution 1
}

// console.log(isUpperCase("JCREW"));

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */
function elementInArray(numbers, x) {
  // Your code here
  return numbers.includes(x);
}

// console.log(elementInArray([5, 6, 7], 8));

/**
 * reverseString(string):
 * - receives a string
 * - returns the reverse of the string
 *
 * e.g.
 * reverseString("string") -> "gnirts"
 * reverseString("CODED") -> "DEDOC"
 *
 */
function reverseString(string) {
  // Your code here
  return string.split('').reverse().join(''); //solution 1
}

// console.log(reverseString("CODED"));

module.exports = {
  sumOdds,
  characterCount,
  differences,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
  reverseString,
};
