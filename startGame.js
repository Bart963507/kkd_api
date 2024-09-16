function getPlayers(){
        // Get variables
        const formGame = document.getElementById("formPlayers")
        const playerData = new FormData(formGame)
        const tablePlayers = document.getElementById("playerTable");
        let playerCount = getFormData().playerCount
        
        // Get teams and then do everything with it
        getTeams("https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/current-round")
  .then(teams => {

        //Here a json should be made to store the teams for each player
        //And more information of the teams combined like the scores.
        




        // Add an "assigned field to keep track of which team is already assigned"
    teams.forEach(team => team.assigned = false);
        // Add a row for each player
        playerData.forEach(player => {
            row = tablePlayers.insertRow(0)
            let teamCount = getFormData().teamCount
            while ( teamCount > 0){
                //console.log(teams)
                const randomTeam = getRandomTeam(teams)
                const cellTeamLogo = row.insertCell(0)
                const img = document.createElement('img');
                img.src = randomTeam["teamLogo"];
                img.style.width = "100px"
                cellTeamLogo.appendChild(img);
                teamCount--;
            }
            const cellPlayerName = row.insertCell(0);
            cellPlayerName.innerHTML = player;
            playerCount--;
        })

        // Add header
        const header = tablePlayers.createTHead()
        const headerRow = header.insertRow(0)
        
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



