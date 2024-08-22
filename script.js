
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
    confirmButton = document.createElement("BUTTON")

    confirmButton.addEventListener("submit", function(event) {
        event.preventDefault()}); // Prevents the form from submitting
    confirmButton.value = "Submit"
    confirmButton.name = "SUBMIT"
    confirmButton.type = "submit"

    confirmButtonContainer.appendChild(confirmButton)
    targetContainer.append(confirmButtonContainer)

}


