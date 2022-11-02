let clickButton = document.querySelector("#clickMe");

clickButton.addEventListener('click', buttonClicked);

function buttonClicked(){
    let betterInBlue = document.getElementById("betterInBlue");

    betterInBlue.classList.add("betterInBlue");

    console.log(betterInBlue);
}

