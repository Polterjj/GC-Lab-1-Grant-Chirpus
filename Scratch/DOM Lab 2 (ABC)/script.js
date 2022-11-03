
// add a listener to it

// choose the event

// write a function

// when you click the menu.
document.querySelector(".fa-solid.fa-bars").addEventListener("click", function(event){
    
    console.log("you clicked the menu");
    // toggle the menu
    document.querySelector("ul").classList.toggle("show");
})


// when you click letters
document.querySelector("#lettersLink").addEventListener("click", (event) => {
    event.preventDefault();
    // show letters
    document.querySelector("#letters").style.display = "block";
    // hide numbers
    document.querySelector("#numbers").style.display = "none";
    // hide menu
    document.querySelector("ul").classList.toggle("show");
})


// when you click numbers
document.querySelector("#numbersLink").addEventListener("click", (event) => {
    event.preventDefault();
    // show numbers
    document.querySelector("#numbers").style.display = "block";
    // hide letters
    document.querySelector("#letters").style.display = "none";
    // hide menu
    document.querySelector("ul").classList.toggle("show");
})




