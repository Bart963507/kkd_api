function getPlayers(){
        // Get variables
        const formGame = document.getElementById("formPlayers")
        const playerData = new FormData(formGame)
        const tablePlayers = document.getElementById("playerTable");
        let playerCount = getFormData().playerCount
        const infoArr = []
        
        // Get teams and then do everything with it
        //getTeams("https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/current-round")
        getTeams("https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/round-schedule")
  .then(teams => {

        // Add an "assigned field to keep track of which team is already assigned"
        teams.forEach(team => team.assigned = false);
        
        //Here a json is created to store the teams for each player
        // And more information of the teams combined like the scores.
        playerData.forEach(player => {
            // Create an array to store the teams for the player in
            teamsArr = []

            // Get the teamcount so the loop stops if all the teams are up
            let teamCount = getFormData().teamCount
            while ( teamCount > 0){
                // If a team is selected it assigned gets set to true
                const randomTeam = getRandomTeam(teams)
                teamCount--;
                teamsArr.push(randomTeam)
            }

            // Create a json to store the players information
            const playerInfo = {
                "playerName":player,
                "teams":teamsArr,
                "totalGoals": teamsArr.map(t => t.teamGoals).reduce((partialSum, a) => partialSum + a, 0)
        }
            playerCount--;
            infoArr.push(playerInfo)
    
            
        }
        )
        
        // The gameInformation is stored in the local storage
        console.log(infoArr)
        localStorage.setItem("gameInformation",JSON.stringify(infoArr))

        // Here the table is filled with the information from the json created
        infoArr.forEach(player => {
            row = tablePlayers.insertRow(0)

            const cellGoals = row.insertCell(0)
            cellGoals.innerHTML = player["totalGoals"]
            cellGoals.classList.add("goalCell")

            
                player.teams.forEach(team => {
                    const cellTeamLogo = row.insertCell(0)
                    const img = document.createElement('img');
                    img.src = team["teamLogo"];
                    img.style.width = "100px"
                    cellTeamLogo.appendChild(img);
            })

            


            const cellPlayerName = row.insertCell(0);
            cellPlayerName.innerHTML = player["playerName"];
            cellPlayerName.classList.add("playerCell")
            playerCount--;
        })


        // Add header
        const header = tablePlayers.createTHead()
        const headerRow = header.insertRow(0)
        
        // Add column for total Goals
        const goalHeaderCell = headerRow.insertCell(0)
        goalHeaderCell.innerHTML = "Goals"
        // Add columns for amount of teams selected
        let teamCount = getFormData().teamCount
        while ( teamCount > 0 ){
            const headerCell = headerRow.insertCell(0)
            headerCell.innerHTML = "Team"
            teamCount--;
        }
        // Add column for player name
        const headerCell = headerRow.insertCell(0)
        headerCell.innerHTML = "Speler"

        //
        setElementVisibility("page2", "page3")
        return(playerData)
    })
    .catch(error => {
      console.error('Error:', error);
    });

    setInterval(refreshScores, 6000)
}


function getRandomTeam(teamsObject){
    teamsObject = teamsObject.filter(team => team.assigned === false)
    console.log(teamsObject)
    const randomTeam = teamsObject[getRandomInt(teamsObject.length, 0)]
    randomTeam.assigned = true
    return randomTeam
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result
}



