function main () {
    let grow = document.getElementById("grow-me");
    grow.classList.add("big");

    let shrink = document.getElementById("shrink-me");
    shrink.classList.remove("big");

    let list = document.querySelectorAll("li");
    console.log(list);

    let link = document.querySelector(".link");
    link.setAttribute("href", "https://www.example.com");
    link.innerText = "soemwhere";

    let hide = document.getElementById("hide-me");
    hide.style.display = "none";

    let show = document.getElementById("show-me");
    show.style.display ="block";

    let input = document.getElementById("name");
}



