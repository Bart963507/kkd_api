

//const btnVolgende= document.getElementById("Volgende")
//btnVolgende.addEventListener("click", getGameInformation)



const btnStartSpel= document.getElementById("startSpel")
btnStartSpel.addEventListener("click",getPlayers)

if (debug){ url ="https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/round-schedule"}
        else{ url = "https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/current-round"}
        getTeams(url)
  .then(teams => {

    const teamNumber = document.getElementById('teamNumber')
    teamNumber.innerHTML = `Er zijn vandaag ${teams.length/2} wedstrijden`
    const teamAmount = teams.length
  })
