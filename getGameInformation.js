function validateInput(input){
    let isValid = false
    if (/^\d+$/.test(input.value)) {
        isValid = true}
    else{
        input.innerHTML = "Vul een geldige waarde in"
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

function getGameInformation(){


    setElementVisibility("page1", "page2")

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
}}

