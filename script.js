

//const btnVolgende= document.getElementById("Volgende")
//btnVolgende.addEventListener("click", getGameInformation)
//localStorage.clear();


const btnStartSpel= document.getElementById("startSpel")
btnStartSpel.addEventListener("click",getPlayers)

const existingGame = localStorage["gameInformation"]
console.log(existingGame)

if (existingGame !== undefined){
  const btnBestaandSpel = document.getElementById("Bestaand")
  btnBestaandSpel.style="display: block;"
}
else {
  
}
