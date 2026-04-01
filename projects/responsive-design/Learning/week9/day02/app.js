function multiplicationTable(number = 5) {
    for (let i = 1; i <= 10; i++){
        console.log('${number} x ${i} = ${number * i}')
    }
}

multiplicationTable(10);

function sum(times, ...numbers) {
    let total = 0
        for (let num of numbers) {
            total += num;
        }
        return total * times;
}


console.log(sum(1));
console.log(sum(5,2));
console.log(sum(10, 2, 3));
console.log(sum(34526267, 63552783822, 33378282, 3882939, 2899323));

const multiply = (a,b) => {
    return a * b;
}
console.log(multiply(5, 10));

const sum3 = (times, ...numbers) => {
    let total = 0
        for (let num of numbers) {
            total += num;
        }
        return total * times;
}

const subtract = (a,b) => {
    return a - b; 
}
console.log(subtract(20, 8));

//IIFE

(function sayHello(){
    console.log("Hello, World!");
})();

(() => {
 console.log("This is IIFE");
}
)()
function sum2() {
    console.log(arguments)
}

sum2(1);
sum2(2, 3);
sum2(4, 5, 6, 7, 8, 9, 10);

function a() {
    b()
    console.log("Inside function a");
    let x = 10;
    let y = 20;
    console.log("The sum of x and y is:{x + y}");
}

function b() {
    c()
    console.log("Inside function b");
    let x = 100;
    let y = 200;
    console.log("The sum of x and y is: ${x + y}");
}
function c() {
    console.log("Inside function c")
    let x = 1000;
    let y = 2000
    console.log("The sum of x and y is: ${x + y}");
}

console.log(eval("2 *2 -1"));

//define an object

const person = {
    name: "John Doe",
    age: "29",
    city: "Chicago",
    greet: function() {
        console.log(  `Hello, my name is ${this.name}`);
    }

}
console.log(person.name);
person.greet();

navigator.geolocation.getCurrentPosition(function(position){
    console.log({position});
})

document.querySelector("body").style.backgroundColor = "lightblue";
const h1 = document.createElement("h1");
h1.textContent = "document object model (DOM) Example";
h1.style.color = "red";
document.querySelector("body").appendChild(h1);
h1.addEventListener("click", () => {
    h1.style.color = (h1.style.color === "red") ? "blue" : "red"
});

setInterval(() => {
    document.querySelector("body").style.backgroundColor = document.querySelector("body").style.backgroundColor == "purple" ? "blue" : "purple";
}, 100);