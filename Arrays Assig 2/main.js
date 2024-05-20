//Question 1 
//Create an array named fruits that contains the following string  elements: "apple", "banana", "mango",
// "orange".
var fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits, "Fruits");
//---------------------------------------------------------------------------------------------------------------
//Question 2 
//Declare an array named numbers that can contain only number  elements and initialize it with the
// values 10, 20, 30, and 40. 
var numbers = [10, 20, 30, 40];
console.log(numbers, "Numbers");
//---------------------------------------------------------------------------------------------------------------
//Question 3 
// Access the third element of the fruits array and assign it to a  variable named thirdFruit. 
var thirdFruit = fruits[2];
console.log(thirdFruit);
//------------------------------------------------------------------------------------------------------------------
// Question 4 
// Change the second element of the numbers array to 25.
var numbers1 = [10, 20, 30, 40];
numbers1[1] = 25;
console.log(numbers1);
//---------------------------------------------------------------------------------------------------------------
// Question 5
// Add the element "grape" to the end of the fruits array using the  method. 
var fruits2 = ["apple", "banana", "mango", "orange"];
console.log("Original Array", fruits2);
fruits2.push("grape");
console.log("Array After push:", fruits2);
//----------------------------------------------------------------------------------------------------------------------
// Question 6 
// Remove the last element from the fruits array using the  method and assign it to a variable named lastFruit.
var lastFruit = ["apple", "banana", "mango", "orange"];
console.log("Original Array", lastFruit);
lastFruit.pop();
console.log("Array After pop:", lastFruit);
//-----------------------------------------------------------------------------------------------------------------------
// Question 7 
// Remove the first element from the fruits array using the  method and assign it to a variable named firstFruit.
var firstFruit = ["apple", "banana", "mango", "orange"];
console.log("Original array", firstFruit);
firstFruit.shift();
console.log("Array after shift:", firstFruit);
//--------------------------------------------------------------------------------------------------------------------
// Question 8 
// Add the element "kiwi" to the beginning of the fruits array  using the method. 
var fruits3 = ["apple", "banana", "mango", "orange"];
fruits3.unshift("kiwi");
console.log(fruits3);
//-----------------------------------------------------------------------------------------------------------------------
// Question 9 
// Remove 2 elements from the fruits array starting from index 1  using the method
var fruits4 = ["apple", "banana", "mango", "orange"];
fruits4.splice(1, 2);
console.log(fruits4);
//------------------------------------------------------------------------------------------------------------------------
// Question 10 
// Insert the elements "pineapple" and "pear" at index 2 of the  fruits array using the method.
var fruits5 = ["apple", "banana", "mango", "orange"];
fruits5.splice(2, 0, "pineapple", "pear");
console.log(fruits5);
//-----------------------------------------------------------------------------------------------------------------------
// Question 11 
// Create a new array named citrusFruits that contains the first  two elements of the fruits array using the method. 
var citrusFruits = ["apple", "banana"];
console.log(citrusFruits);
//--------------------------------------------------------------------------------------------------------------------------
// Question 12 
// Create a new array named lastTwoFruits that contains the last  two elements of the fruits array using the method.
var lastTwoFruits = ["mango", "orange"];
console.log(lastTwoFruits);
