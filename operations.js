// We already know how to create variables and how to assign them numbers.
//Now, we will learn how to compare these variables and their values with each other. We can do so by using comparison operators.
//The first operator we explore is the Equal to (==) operator. It checks if two values are equal. For example:

2 == 2;

// Can you guess what the output will be?

const priceOne = 5;
const priceTwo = 10;
console.log(priceOne == priceTwo);

// Here, we used the Equal to (==) operator to check if the values of priceOne and priceTwo are equal.

// Comparison operators always return a boolean value. In this case we got false because priceOne and priceTwo are not equal.

// Now, priceOne and priceTwo have the same value. Let's see what the output will be:

const priceOne = 10;
const priceTwo = 10;
console.log(priceOne == priceTwo);

// The second operator we explore is the Not Equal to (!=) operator. It checks if two values are not equal. For example:
2 != 2;

// In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true.

const numOne = 5;
const numTwo = 5;
console.log(numOne == numTwo);

// In the console.log() statement below we use the Not Equal operator to check whether numOne and numTwo have different values. Change the code so that the console.log() statement logs true.
const numOne = 5;
const numTwo = 6;
console.log(numOne != numTwo);

// Let's look at other types of comparison operators.

// The Greater than (>) operator checks if the left value is greater than the right value. For example:

2 > 1; // checks if 2 is greater than 1

// Can you guess what the output will be?

const priceOne = 5;
const priceTwo = 10;

console.log(priceOne > priceTwo);
console.log(priceTwo > priceOne);

// The Less than (<) operator checks if the left value is less than the right value. For example:
2 < 1; // checks if 2 is less than 1

// Let's use the Less than operator in the example for above:

const priceOne = 5;
const priceTwo = 10;

console.log(priceOne < priceTwo);
console.log(priceTwo < priceOne);

// Similar to the operators above, there are also the Less than or equal (<=) and Greater than or equal (>=) operators. For example:

2 <= 1; // checks if 2 is less than or equal 1
2 >= 1; // checks if 2 is greater than or equal 1
