/*
! Javascript is a 
* High-Level, (We don't have to worry about complex stuff like memory management) 
* Object Oriented, (Based on objects, for storing most kind of data)
* Multi-Paradigm, (We can use different styles of programming)
! Programming Language.
*/

/*
! Javascript releases
* ... -> ES5 -> |ES6/  | -> |ES7/  | -> |ES8/  | -> |ES9/  | -> |ES10/ | -> |ES11/ | -> ...
*               |Es2015|    |ES2016|    |ES2017|    |ES2018|    |ES2019|    |ES2020|
!               |_______________________________.__________________________________|
*                                         Modern JavaScript
*
! ES6/2015 is the biggest update to the language EVER
? ES stands for ECMAScript
*/

console.log('Hello World!');
// ? Open your Browser console. It'll print "Hello World!"

/*
! Naming variables
* There are two major ways
* 1. camelCase (iPreferThisWay 😀)
* 2. snake_case

! Avoid following mistakes
* 1. Variable name cannot start with a number
?    ❌ let 5years = 5;
* 2. Variable name only can contain numbers(0 1 2 3 ...), letters(a A b B c C ...), underscores(_) or the dollar sign($)
* 3. Don't use reserved key words as variables
?    ❌ let new = "Hello";
?    ❌ let function = 30;
?    ❌ let name = "Elizabeth"; (In some cases, this creates problems. This is kind of a reserved keyword)
* 4. Use all Upper cases for constants that are never gonna change (not const)
? let PI = 3.1415;
* 5. Above all make sure to use descriptive variable names 😀
*/

/*
! There are two types of Values
* 1. Objects
* 2. Primitive
*/

/*
! Primitive data types
* 1. Number (Floating point numbers 👉 Used for decimal and integers)                       | Most Commonly Used
* 2. String (Sequence of characters 👉 Used for text)                                       | Most Commonly Used
* 3. Boolean (Logical type that can only be 'true' or 'false 👉 Used for taking decisions)  | Most Commonly Used
*
* 4. Undefined (Value taken by a variable that is not yet define ('empty value))
* 5. Null (Also means 'empty value')
* 6. Symbol (ES2015) (Value that is unique and cannot be changed [Not useful for now])
* 7. BigInt (ES2020) (Larger integers than the Number type can hold)

? JavaScript has dynamic typing: We don't have to manually define the data type of the value stored in a variable. Instead data types are determined automatically
*/

/*
! let, const and var
! let
* If you're willing to reassigning a value to a variable use "let". That means you want to mutate a variable, use "let"
? let age = 25;
? age = 30;
* Also if you want to declare an empty variable, use "let"
? let year;

! const
* Use to declare a variable that is not going to change at any point, in the future
* You need a initial value to use const to a variable
* Try to use const as much as possible unless you really sure that the variable needs to be changed in the future 😀

! var
* Using var should be completely avoided. Because it is the old way
*/

/*



*/
