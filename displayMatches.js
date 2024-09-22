function displayMatches(){

if (debug){ url ="https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/round-schedule"}
        else{ url = "https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/current-round"}
        getTeams(url)
  .then(teams => {

    const teamNumber = document.getElementById('teamNumber')
    const teamAmount = teams.length
    let message;

    if (teamAmount === 0) {
    message = "Er zijn vandaag geen wedstrijden";
    } else if (teamAmount === 2) {
    message = "Er is vandaag 1 wedstrijd";
    } else if (teamAmount > 2) {
    message = `Er zijn vandaag ${teams.length / 2} wedstrijden`;
    }
    teamNumber.innerHTML = message 
    localStorage.setItem("teamCount",teamAmount)
  })
}