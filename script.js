
document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting
    generateInputs("playerForm"); // Call your function
});

const generateInputs = function(ele){
    let aantalSpelers = document.getElementById(ele)[0].value
    const targetContainer = document.getElementById("playerNames")
    targetWidth = (targetContainer.getBoundingClientRect().width)*0.9
    targetMargin = (targetContainer.getBoundingClientRect().width)*0.05


    while (parseInt(aantalSpelers) > 0){

        
        // Create a div to wrap each input field
        const playerInputContainer = document.createElement("div");


        const playerName = document.createElement("input");
        playerName.type = "text";
        playerName.name = `playername${aantalSpelers}`;
        playerName.style.width = `${targetWidth}px`
        playerName.style.marginLeft = `${targetMargin}px`
        playerName.style.marginRight = `${targetMargin}px`
        

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


