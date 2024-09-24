function displayMatches(){

if (debug){ url ="https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/round-schedule"}
        else{ url = "https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/current-round"}
        getTeams(url)
  .then(teams => {

    const teamNumber = document.getElementById('teamNumber')
    const teamAmount = teams.length
    let message;

    if (teamAmount === 0) {
    message = "Er zijn vandaag geen wedstrijden. Ga maar wat anders doen";
    setDisplay(["Volgende", "playerCountLabel", "playerCount", "teamCount", "teamCountLabel"], "none")
    setDisplay(["Hans"], "block")
    //document.getElementById("Hans").style.display = "block"
    } else if (teamAmount === 2) {
    message = "Er is vandaag 1 wedstrijd";
    setDisplay(["Volgende", "playerCountLabel", "playerCount", "teamCount", "teamCountLabel"], "block")
    setDisplay(["Hans"], "none")
    } else if (teamAmount > 2) {
    message = `Er zijn vandaag ${teams.length / 2} wedstrijden`;
    setDisplay(["Volgende", "playerCountLabel", "playerCount", "teamCount", "teamCountLabel"], "block")
    setDisplay(["Hans"], "none")
    }
    teamNumber.innerHTML = message 
    localStorage.setItem("teamCount",teamAmount)
  })
}


function setDisplay(eleIDArr, disp){
  eleIDArr.forEach(ID => {
    document.getElementById(ID).style.display = disp
  });
}

