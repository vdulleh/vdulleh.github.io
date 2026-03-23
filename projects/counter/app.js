let counter = 100;

function showCounter()
{  
    document.getElementById('counter_value').value = counter;
}

showCounter();
document.getElementById("minus").addEventListener("click", decrement)

function decrement (event){
    event.preventDefault();
    counter = counter-1;
    showCounter();
}

document.getElementById("plus").addEventListener("click", increment)

function increment (event){
    event.preventDefault();
    counter = counter + 1;
    showCounter();
}

document.querySelector("body").addEventListener("mousemove", function(event) {
    const redCircle = document.querySelector(".bg-red-700");
    redCircle.style.left = event.clientX + "px";
    redCircle.style.top = event.clientY + "px";

    let redValue = event.clientX % 256;
    let greenValue = event.clientY % 256;
    const body = document.querySelector("body");

    body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, 0)`;
    console.log(event.clientX, event.clientY);
});