function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Alex');

//variables
var name="Steve";
console.log(name);
// declaration & assignment
var age= 30;
console.log(age)


let city="Sydney";
console.log(city);

const country='America';
console.log(country);

let firstName='Bobby';
firstname = 'doe';

let count = 1;
function increment(){
    count= count +1;
    let flag = true;
    if(flag) {
        count = count +1;
        let flag = false;
        console.log('Inside if block:' + count);
        console.log('Inside if block:' + flag);
    }
    console.log('Inside function:' + count);
    console.log('Inside function:' + flag);
}
increment();
console.log(count);


let symbol= Symbol('1, 2, 3, 4, 5, 6');
let greeting= 'Hello, mate';
//object types
let person= {
    name: 'jphn',
    age:30,
    city:'Chicago',
};
//Arrays
let numbers = [1, 2, 3, 4, 5];
let sets = new Set ([1, 2, 3, 4, 5]);

//Data type conversion

let salary2 = 50000;
let bonus ='10000';
let totalSalary = salary2 + Number(bonus);
console.log(totalSalary);


//loops examples
for (let i = 100; i>=0; i = i - 5) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log('2 * ' + i + ' = '+ 2 * i)
}


//initialization
// condition
// increment/document

let i = 5; // initialization

do {
    console.log(i);
    i = i + 1; // increment
} while (i < 5); // condition


let j = 0;
while (j < 5){
     j = j + 1;
    if(j === 3)
        continue;  
    console.log(j);
   
}


// for of loop

let students = ['john', 'jane', 'Doe',]; ///array(has multiple items
    for (let student of students) {
        console.log(student)
    }

const user = {
    name:"john",
    age:30,
    city:"sydney",
    email:"john@gmail.com",
};

for (let key in user) {
    console.log (key + ': ' + user[key]);
}


//flow conditions
let email = "john@gmail.com";
let password = "12345";


if(email === 'alex@gmail.com') {
    console.log('Email is correct');
}
else if (email === 'admin@gmail.com') {
    console.log('Email is admin');
}
else {
    console.log('Email is incorrect');
}

let day = 'Monday';
switch (day) {
    case 'Monday':
    console.log('It is Monday');
    break;
    case 'Tuesday':
        console.log('It is Tuesday');
        break;
        default:
            console.log('It is not Monday or Tuesday');
}
