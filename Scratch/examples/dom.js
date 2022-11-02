let divTag = document.querySelector("#targetSpecificId");
console.log(divTag);

let exampleClassTag = document.querySelectorAll(".exampleClass");



console.log(exampleClassTag[0]);

let header = document.querySelector("h1");

header.classList.add("highlighted");

for (let tag of exampleClassTag) {
    tag.classList.add("highlighted");
    console.log(tag);
}

header.classList.remove("highlighted");

header.style.display = "block";

let divTagIWantToFind = document.getElementById("tag");

let className = document.getElementsByClassName("className");

