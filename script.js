
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

    confirmButton.addEventListener("submit", function(event) {
        event.preventDefault()}); // Prevents the form from submitting


    confirmButtonContainer.appendChild(confirmButton)
    targetContainer.append(confirmButtonContainer)

}



const request = new Request("https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/current-round")

fetch(request)
  .then((response) => response.json())
  .then((json) => {
    console.log(json.matches)
// Maak dit nog dynamisch met date.now()
    json.matches.forEach((match) => {
        if (match.date === "2024-08-23"){
            console.log(match.date)
            const imgAway = document.createElement("IMG")
            imgAway.src = match.awayContestant.contestantLogo
            const imgHome = document.createElement("IMG")
            imgHome.src = match.homeContestant.contestantLogo
            document.getElementById("matchesDiv").appendChild(imgHome);
            document.getElementById("matchesDiv").appendChild(imgAway);
        }
    })


    
  });


