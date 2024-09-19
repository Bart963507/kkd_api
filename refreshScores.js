function refreshScores(){
    let currentInformation = JSON.parse(localStorage["gameInformation"])

    // Get current round again from api and update everything accordingly
    getTeams("https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/round-schedule")
  .then(teams => {
    // match teams and currentinformation
    currentInformation.forEach(player => {
        const assignedTeams = player.teams.map(t => t.teamName)
        const teamGoals = teams.filter(t => assignedTeams.indexOf(t.teamName)!== -1).map(t => t.teamGoals).reduce((partialSum, a) => partialSum + a, 0)
        player["totalGoals"] = teamGoals + 1
        
    })

    // match the goalcells with the correct player
    const goalCells = document.getElementsByClassName("goalCell")
    console.log(goalCells[0].parentElement.firstChild.outerText)
  })
}