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
* 4. Use all Upper cases for constants that are never gonna change (not cons t)
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
* Only primitive values are immutable. (We can mutate arrays and objects)

! var
* Using var should be completely avoided. Because it is the old way
*/

/*
! Operator precedence
* Use the below link to get an idea about in which order the JavaScript executes the operators
?  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

/*
! Template literals
* You can use template literals to output a value in more easy way
* Also you can type multiline without typing "\n". You just need to hit Enter to go to a new line 

TODO: Copy below code and try it yourself with your details 😀
const age = 25;
const firstName = "Kosindu";
const lastName = "Kasthuri";
console.log(`Hi, I'm ${firstName} ${lastName}.
And I'm ${age} years old`);
*/

/*
! Type conversion and Coercion
! Type conversion
* You can use Number() and String() methods to convert the type of a value
* Try to use Number() method for a string and see the result. It will say "NaN". That means "Not a Number".

! Type Coercion
* This means that when we mix strings with numbers with (+ - * /) operators, that numbers will be converted to strings in only with + operator. Otherwise (- * /) with these operators, the strings are converted to numbers
? console.log('I am ' + 25 + ' years old); // answer "I am 25 years old" (as a string)
? console.log('35' - 25 - '5'); // answer 5 (as a number) |
? console.log('25' / 5); // answer 5 (as a number)        | If we use words with these three operators it will output NaN
? console.log('2' * 5); // answer 10 (as a number)        |
*/

/*
! Truthy and Falsy Values
* Falsy values means, when we convert them to booleans using Boolean(), it returns "false"
? five falsy values are :- ( 0, '', undefined, null, NaN )

* All other values will be truthy
*/

/*
! Equality Operators

! Strict Equality Operator
* '===' & '!==' This operators does not do Type Coercion

! Loose Equality Operator
* '==' & '!=' This operators do Type Coercion

? Avoid Loose Equality Operator as much as you can and use the Strict Equality Operator always
*/

/*
! Boolean Logic
* 'AND' (&&), 'OR' (||), and 'NOT' (!) are the three basic boolean operators
*/

/*
! Expressions and Statements
* '3 + 4', '1993', 'true && false' these are expressions. An expression always produce a value
* if (10 > 5) { const str = '10 is bigger';} this is a statement. This doesnt't provide a value
*/

/*
! The Conditional (Ternary) Operator
* We can use ?, : to make if else statements
*/

/*
const bill = 430;
const tip = bill >=50 && bill <= 300 ? bill*.15 : bill*.2;
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
*/

/*
! History of JavaScript
* 1995 -    Brendon Eich creates the very first version of JavaScript in just 10 days. It was called Mocha, but already had many fundamental features of modern JavaScript!
* 1996 -    Mocha changes to LiveScript and then to JavaScript, in order to attract Java Developers. However, JavaScript has almost nothing to do with Java ☝
*      -    Microsoft launches IE, copying JavaScript from Netscape and calling it JScript.
* 1997 -    With a need to statndardize the language, ECMA releases ECMAScript 1 (ES1), the first official standard for JavaScript (ECMAScript is the standard, JavaScript the language in practice)
* 2009 -    ES5 (ECMAScript 5) is released with lots of great new features
* 2015 -    ES6/ES2015 (ECMAScript 2015) was released. The biggest update to the language ever
*      -    ECMAScript changes to an annual release cycle in order to ship less features per update 🙏
* 2016 - ♾ Release of ES2016 / ES2017 / ES2018 / ES2019 / ES2020 / ... / ES3000 ❤
*/

/*
! 'use strict';
* using this on top of all js files will make that JavaScript code to be compile with less errors. Because this will identify the errors early and show them in the console.
*/

/*
! 1.Function declaration, 2.Function expression & 3.Arrow function

* 1. function calcAge(paras) { ...; return age; } This can be used before it's declared. This can cause some bugs.
* 2. const calcAge = function (paras) { ...; return age; } Essentially a function value stored in a variable
* 3. const calAge = (paras) => { ...; return age; } Great for quick one-line functions. Has no this keyword

* We call/ run/ invoke/ execute the function as,
* const age = calcAge(args);

* return statement output a value from a function and terminate execution
*/

/*

const calcAverage = (score_1 , score_2 , score_3) => (score_1 + score_2 + score_3) / 3;

const dolphinAverage = calcAverage(85, 54, 41);
const koalaAverage = calcAverage(23, 34, 27);

const checkWinner = function (dolphinAverage, koalaAverage) {
	if(dolphinAverage >= 2*koalaAverage) {
		return `Dolphins Win (${dolphinAverage} vs. ${koalaAverage})`;
	} else if(koalaAverage >= 2*dolphinAverage) {
		return `Koalas Win (${koalaAverage} vs. ${dolphinAverage})`;
	} else {
		return `No team wins`;
	}
}

console.log(checkWinner(dolphinAverage, koalaAverage));
*/

/*
! Array operations (methods)
* push(...) - Add an element to the end. This returns the new array length
* unshift(...) - Add an element to the beginning. This returns the new array length
* pop() - Remove an element from the end. This returns the removed element
* shift() - Remove an element from the beginning. This returns the removed element
* indexOf(...) - Return the index of an element in the array
* includes(...) - Return true if the element is in the array, false if not
*/

/*
const calcTip = function(billValue) {
	if(billValue >= 50 && billValue <= 300) {
		return billValue * .15;
	} else {
		return billValue * .2;
	}
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Bills: ${bills}`, `Tips: ${tips}`, `Totals: ${totals}`);
*/

/*
! dot notation and bracket notation in objects
* const employer = {fistName: 'Kosindu', lastName: 'Kasthuri', age: 29 ...};

* We can use dot notation as follows
* employer.firstName;

* We can use bracket notation as follows
* employer['firstName'];
* And the benefit is that we can call using a variable inside the bracket
* const interestedIn = prompt('What you want to know about employer ? Choose between firstName, lastName, age');
* console.log(employer[interestedIn]; we cannot do this in dot notation

* We'll get undefined when we are looking for a property that is not available in the object
*/

/*
const kosindu = {firstName: 'Kosindu', friends: ['nuwan', 'buddhika', 'kasthuri']};

console.log(`${kosindu.firstName} has ${kosindu.friends.length} friends, and his best friend is called ${kosindu.friends[0]}.`);
*/

/*
const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		const bmi = this.mass / this.height ** 2;
		this.BMI = bmi;
		return bmi;
	}
};


const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		const bmi = this.mass / this.height ** 2;
		this.BMI = bmi;
		return bmi;
	}
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

console.log(johnBMI > markBMI ? `Johns BMI (${johnBMI}) is higher than Marks BMI '(${markBMI})` : `Marks BMI (${markBMI}) is higher than Johns BMI (${johnBMI})`);
*/

/*
! for loops
* continue: this will skip that iteration and continue the loop
* break: this will immediately terminate process and end the loop
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(bills[i] + tip);
}

console.log(bills, tips, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(bills), calcAverage(tips), calcAverage(total));
console.log((22 + 295 + 176 + 440 + 37 + 105 + 10 + 1100 + 86 + 52) / 10);
*/

/*
! 4 steps to solve any problem
* 1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem
* 2. Divide and conquer: Break a big problem into smaller sub-problems
* 3. Don't be afraid to do as much research as you have to
* 4. For bigger problems, write pseudo-code before writing the actual code
*/

/*
const printForecast = function (arr) {
  let str = '... ';
  for (i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ...  `;
  }
  console.log(str);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/

/*
! What is JavaScript engine?
* A computer program that executes Javascript code (ex: V8 by Google)
* Any JavaScript engine always contains, 
? Call stack - where our code actually executed using execution context
? Heap - an unstructured memory pool which stores all the objects that our app needs
*/

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
! Data Structures, Modern Operators and Strings !
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

/*
! Array Destructuring
* Whenever JavaScript sees [] this on the left side of the equal sign, it knows that it should be destructuring
? const arr = [2, 3, 4];
? const [x, y, z] = arr;    x=2, y=3, z=4

* And we can use a hole and take only what we need
? const arr = [2, 3, 4];
? const [p, , q] = arr;     p=2, q=4

* We can easily switch the variables
? const arr = [2, 3, 4];
? let [p, , q] = arr;
? [p, q] = [q, p];          p=4, q=2

* Also we can destructure inside a destructure (Nested Destructuring)
? const nested = [2, 4, [5, 6]];
? const [i, , [j, k]] = nested;     i=2, j=5, k=6

* We can use default values when destructuring
? const [p=1, q=1, r=1] = [8, 9];   p=8, q=9, r=1
*/
