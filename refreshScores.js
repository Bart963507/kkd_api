function refreshScores(){
    let currentInformation = JSON.parse(localStorage["gameInformation"])

    // Get current round again from api and update everything accordingly
    getTeams("https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/round-schedule")
  .then(teams => {
    // match teams and currentinformation
    currentInformation.forEach(player => {
        const teams = player.teams.map(t => t.teamName)
        console.log(teams)
    })

  })
}