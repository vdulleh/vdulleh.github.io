setTimeout(() => {
    console.log("This is a message from setTimeout");
}, 1000) ;
console.log("This message is a message from the main thread");

const Interval = setInterval(() =>{
    console.log("This is s message from setInterval");
    clearInterval(Interval);
}, 1000
);

//promise
//callback function
//handling asynchrounous code in javascript

fetch()
.then(response => respond.json())
.then(data =>{
    const h1 = document.createElement('h1');
    h1.textContent = data.title;
    document.body.appendChild(h1);


    const p = document.createElement('p');
    p.textContent = data.body;
    document.body.appendChild(p);
})
    .catch(error => console.error('error:',error));

    //promise 
    console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'))

// async/await
(async () => {
const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const jsonData = await data.json();
console.log({jsonData});
})()