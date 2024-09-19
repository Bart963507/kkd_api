function getPlayers(){
        // Get variables
        const formGame = document.getElementById("formPlayers")
        const playerData = new FormData(formGame)
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
        localStorage.setItem("gameInformation",JSON.stringify(infoArr))

        createTable(JSON.parse(localStorage["gameInformation"]))
    })
    .catch(error => {
      console.error('Error:', error);
    });

    setInterval(refreshScores, 6000)
}


function getRandomTeam(teamsObject){
    teamsObject = teamsObject.filter(team => team.assigned === false)
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



