const firstNumber = 55;
const secondNumber = "55";

let sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;
const exponentitation = firstNumber **2;


const complexExpression = (firstNumber + secondNumber) * 2 - 10 / 5;
 


sum += 10;

//Arthmetic operators
// comparision operators
// logical operators (OR, AND)| I dont like this || )


let age = 10;
if (age >= 18) {
    console.log ("You can vote");
}
age >= 18 && console.log("you can vote");
age >= 18 || console.log("you cannot vote");
!age && console.log("Enter youe age!");

age ?? console.log("Enter your age assign it!");


// container (ternary) operator
// expression ? valueIftrue : valueIfFalse;
const result = (age >= 18) ? "You can vote : You cannot vote"
// const x = 1;
//const
//unary operators


 //let y = 5;
 //++y;
 //--y;

 // Assignment operator
 //z = y--

 // String  concatenation operator

 //let firstName = "John";
 //let lastName = "Doe";

 //let fullName = firstName + " " + lastName;

 //let message = "Hello";
 //message += ", John!";
 //message += "How are you?";

 // Function

 function sumOfTwoNumbers(a: numbeer, b: Number): Number {
    const results = a + b;
    return results; 
}

const sumResult = sumOfTwoNumbers(500000000, 558585455);

function sayHello(name) {
    return "Hello, " + name;
}

const greeting = sayHello("Alex");
sayHello("Jim");