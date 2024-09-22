function refreshScores(){
    let currentInformation = JSON.parse(localStorage["gameInformation"])
    

    // Get current round again from api and update everything accordingly
    if (debug){ url ="https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/round-schedule"}
    else{ url = "https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/current-round"}
    getTeams(url)
    .then(teams => {
    // match teams and currentinformation
    currentInformation.forEach(player => {
        const assignedTeams = player.teams.map(t => t.teamName)
        const teamGoals = teams.filter(t => assignedTeams.indexOf(t.teamName)!== -1).map(t => t.teamGoals).reduce((partialSum, a) => partialSum + a, 0)
        player["totalGoals"] = teamGoals

        
    })

    // match the goalcells with the correct player
    const goalCells = document.getElementsByClassName("goalCell")
    let goalCellsArr = [...goalCells]
    goalCellsArr.forEach(g =>{
      const playerName = g.parentElement.firstChild.outerText
      const currentInformationPlayerGoals = currentInformation.find(p => p.playerName === playerName).totalGoals
      //get the index of the player in goalCells to insert the new value
      g.innerHTML = currentInformationPlayerGoals


    })
    
  })
}