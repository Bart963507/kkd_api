
document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting
    generateInputs("playerForm"); // Call your function
});

const generateInputs = function(ele){
    let aantalSpelers = document.getElementById(ele)[0].value

    while (parseInt(aantalSpelers) > 0){


        // Create a div to wrap each input field
        const playerInputContainer = document.createElement("div");


        const playerName = document.createElement("input");
        playerName.type = "text";
        playerName.name = `playername${aantalSpelers}`;
        playerName.width = 100%

        playerInputContainer.appendChild(playerName);

        document.getElementById("playerNames").append(playerInputContainer)
        aantalSpelers = parseInt(aantalSpelers) -1;
    }
}


