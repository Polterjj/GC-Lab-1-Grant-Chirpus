document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log ("money money");
    let form = document.querySelector("form")
    const data = new FormData(form)
    let quantity = data.get("quantity");
    let coinType = data.get("coinType");
   // console.log(quantity);
 // console.log(coinType);
    for (let i = 0; i < quantity; i ++) {
 
        // making a coin element
 
        const newCoin = document.createElement("div");
        newCoin.classList.add("coin");
        newCoin.innerText = coinType;
     
        const deposit = document.querySelector(".coinSection");
     
        deposit.append(newCoin);
        
        
     }
 });
 
 
 document.querySelector(".coinSection").addEventListener('Click', (event) =>{
     console.log(event.target);
     event.target.remove()
 })
 
 
 