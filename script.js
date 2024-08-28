getTeams("https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/current-round")

const btnVolgende= document.getElementById("Volgende")
console.log(btnVolgende)
btnVolgende.addEventListener("click",getGameInformation)


//setElementVisibility("page1", "page2")




/*
document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting
    generateInputs("playerForm"); // Call your function
});

function generateInputs(ele){
    let aantalSpelers = document.getElementById(ele)[0].value
    const targetContainer = document.getElementById("playerNames")
    const targetContainerWidth = targetContainer.getBoundingClientRect().width
    targetWidth = targetContainerWidth*0.9
    targetMargin = targetContainerWidth*0.05


function configurePlayerName(element, { aantalSpelers, targetWidth, targetMargin }) {
    Object.assign(element, {
        type: "text",
        name: `playername${aantalSpelers}`,
        });
     Object.assign(element.style, {
        width: `${targetWidth}px`,
        marginLeft: `${targetMargin}px`,
        marginRight: `${targetMargin}px`
        });
}



    while (parseInt(aantalSpelers) > 0){

        
        // Create a div to wrap each input field
        const playerInputContainer = document.createElement("div");


        const playerName = document.createElement("input");
        configurePlayerName(playerName, { aantalSpelers, targetWidth, targetMargin });
        

        playerInputContainer.appendChild(playerName);
        
        targetContainer.append(playerInputContainer)

        //console.log(targetContainer[aantalSpelers])
        aantalSpelers = parseInt(aantalSpelers) -1;

        
    }

    confirmButtonContainer = document.createElement("div")
    confirmButton = document.createElement("input")
    confirmButton.type = "submit"
    confirmButton.value = "Submit"
    confirmButton.style.marginLeft = `${targetMargin}px`
    confirmButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the form from submitting
        getPlayerNames("playerNames"); // Call the function to get player names
    });


    confirmButtonContainer.appendChild(confirmButton)
    targetContainer.append(confirmButtonContainer)

}

function getPlayerNames(formID) {
    // Get the form from the ID of the input
    const form = document.getElementById(formID)

    // Get the inputs from the form
    formTextInputs = new FormData(form)
    
    for (const [key, value] of formTextInputs) {

        // Create the div for the player and assigned team
        const playerTeamsDiv = document.createElement("div")
        playerTeamsDiv.className = "flex-container"
        playerTeamsDiv.id = `container${key}`

        // Create the player name
        const playerName = (document.createElement("div"));
        playerName.className = "playerName";
        playerName.textContent = value;

        // Append the first child to the matchDiv
        playerTeamsDiv.appendChild(playerName);
        matchesDiv.appendChild(playerTeamsDiv);
    }
    // Append matchDiv to the body or any other container in your HTML
    

}
*/


