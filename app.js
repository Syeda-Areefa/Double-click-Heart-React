// Select the container and heart elements from the DOM
const image = document.querySelector(".container");
heartIcon = document.querySelector(".heart");

//Add a double-click event listener to the image 
image.addEventListener("dblclick", (e) => {
    
// Calculate the x and y position of  the double-click event
let xValue = e.clientX - e.target.offsetLeft;
let yValue = e.clientY - e.target.offsetTop;

//Set the position of the heart element using the x and y values
heartIcon.style.left = `${xValue}px`;
heartIcon.style.top = `${yValue}px`;

    //Add the active class to the class
    heartIcon.classList.add("active");

    //Remove the active class after 1 second
    setTimeout(() => {
        heartIcon.classList.remove("active");
    },1000)
})
