document.querySelector("body").addEventListener("mousemove", function(event) {
    const redCircle = document.querySelector(".bg-blue-700");
    redCircle.style.left = event.clientX + "px";
    redCircle.style.top = event.clientY + "px";

    let redValue = event.clientX % 256;
    let greenValue = event.clientY % 256;
    const body = document.querySelector("body");

    body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, 0)`;
    console.log(event.clientX, event.clientY);
});

setInterval(() => {
    document.querySelector("body").style.backgroundColor = document.querySelector("body").style.backgroundColor == "black" ? "pink" : "black";
}, 10000);
