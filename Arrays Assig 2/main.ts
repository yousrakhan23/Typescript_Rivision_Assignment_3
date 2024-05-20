
//Question 1 
//Create an array named fruits that contains the following string  elements: "apple", "banana", "mango",
// "orange".
let fruits: string[] = ["apple", "banana", "mango", "orange"]
console.log(fruits, "Fruits");

//---------------------------------------------------------------------------------------------------------------

//Question 2 
//Declare an array named numbers that can contain only number  elements and initialize it with the
// values 10, 20, 30, and 40. 
let numbers: number[] = [10, 20, 30, 40]
console.log(numbers, "Numbers");

//---------------------------------------------------------------------------------------------------------------

//Question 3 
// Access the third element of the fruits array and assign it to a  variable named thirdFruit. 
let thirdFruit: string = fruits[2];
console.log(thirdFruit);

//------------------------------------------------------------------------------------------------------------------

// Question 4 
// Change the second element of the numbers array to 25.
let numbers1: number[] = [10, 20, 30, 40]
numbers1[1] = 25
console.log(numbers1);

//---------------------------------------------------------------------------------------------------------------

// Question 5
// Add the element "grape" to the end of the fruits array using the  method. 
let fruits2: string[] = ["apple", "banana", "mango", "orange"]
console.log("Original Array", fruits2);
fruits2.push("grape");
console.log("Array After push:", fruits2);

//----------------------------------------------------------------------------------------------------------------------

// Question 6 
// Remove the last element from the fruits array using the  method and assign it to a variable named lastFruit.
let lastFruit: string[] = ["apple", "banana", "mango", "orange"]
console.log("Original Array", lastFruit);
lastFruit.pop()
console.log("Array After pop:", lastFruit);

//-----------------------------------------------------------------------------------------------------------------------

// Question 7 
// Remove the first element from the fruits array using the  method and assign it to a variable named firstFruit.
let firstFruit: string[] = ["apple", "banana", "mango", "orange"]
console.log("Original array", firstFruit);
firstFruit.shift();
console.log("Array after shift:", firstFruit);

//--------------------------------------------------------------------------------------------------------------------

// Question 8 
// Add the element "kiwi" to the beginning of the fruits array  using the method. 
let fruits3: string[] = ["apple", "banana", "mango", "orange"]
fruits3.unshift("kiwi");
console.log(fruits3);

//-----------------------------------------------------------------------------------------------------------------------

// Question 9 
// Remove 2 elements from the fruits array starting from index 1  using the method
let fruits4: string[] = ["apple", "banana", "mango", "orange"]
fruits4.splice(1, 2);
console.log(fruits4);

//------------------------------------------------------------------------------------------------------------------------

// Question 10 
// Insert the elements "pineapple" and "pear" at index 2 of the  fruits array using the method.
let fruits5: string[] = ["apple", "banana", "mango", "orange"]
fruits5.splice(2, 0, "pineapple", "pear");
console.log(fruits5);

//-----------------------------------------------------------------------------------------------------------------------

// Question 11 
// Create a new array named citrusFruits that contains the first  two elements of the fruits array using the method. 
let citrusFruits: string[] = ["apple", "banana"]
console.log(citrusFruits);

//--------------------------------------------------------------------------------------------------------------------------

// Question 12 
// Create a new array named lastTwoFruits that contains the last  two elements of the fruits array using the method.
let lastTwoFruits: string[] = ["mango", "orange"]
console.log(lastTwoFruits);