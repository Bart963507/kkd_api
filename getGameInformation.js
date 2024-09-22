function validateInput(input){
    const element = document.getElementById(input)
    element.setCustomValidity("")
    const valid = element.validity.valid
    if (!valid){
        console.log(`${input} invalid`)
        element.setCustomValidity("Vul een geldige waarde in")
        element.reportValidity();
    }
    else{
        console.log(`${input} valid`)
    } 
    return valid
}


function checkTotal(){
    const teamCount =  getFormData().teamCount
    const playerCount =  getFormData().playerCount
    const teamsNeeded = teamCount * playerCount
    const playingTeamsCount = parseInt(localStorage["teamCount"])
    const errorMessage = document.getElementById('errorMessage')
    console.log(teamsNeeded)
    if (teamsNeeded > playingTeamsCount){
        errorMessage.textContent = `Er spelen ${playingTeamsCount} teams vandaag. Pas het aantal spelers of het aantal teams per speler aan.`;
        return false
    }
    else{
        errorMessage.textContent = ""
        return true
    }

}

function getFormData(){
    const formGame = document.getElementById("formGame")
    const gameData = new FormData(formGame)
    const playerCount = gameData.get("playerCount")
    const teamCount = gameData.get("teamCount")
    return(
        {
            "playerCount":playerCount,
            "teamCount": teamCount
        }
        )
    }



function setElementVisibility(currentEleID, targetEleID){

    const currentEle = document.getElementById(currentEleID)
    currentEle.style.display = "none"

    const targetEle = document.getElementById(targetEleID)
    targetEle.style.display = "block"


}

function getGameInformation(event){
    event.preventDefault(); 

    const playerValid = validateInput("playerCount")
    const teamValid = validateInput("teamCount")

    const totalValid = checkTotal()

    if (playerValid & teamValid & totalValid){
        let playerCounter = getFormData().playerCount
        const formPlayers = document.getElementById("formPlayers")
        while ( playerCounter > 0 ){

        // Create a div to wrap each input field
        const playerInputContainer = document.createElement("div");
        playerInputContainer.className = "form group"

        // Add margin bottom to increase spacing
        playerInputContainer.style.marginBottom = "20px";  

        // Create a label for the input
        const label = document.createElement("label");
        label.textContent = `Speler ${playerCounter}`;
        label.setAttribute("for", `Speler${playerCounter}`);

        // Create the input element
        const input = document.createElement("input");
        Object.assign(input, {
            type: "text",
            id: `Speler${playerCounter}`,
            name: `Speler${playerCounter}`
        });

        // Append label and input to the container
        playerInputContainer.prepend(label, input);

        // Append the container to the form
        formPlayers.prepend(playerInputContainer);

        playerCounter --;
    }
    setElementVisibility("page1", "page2")
    return true
    }
    return false
}
