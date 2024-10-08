function createTable(data){
    const tablePlayers = document.getElementById("playerTable");
    tablePlayers.addEventListener("input", (event) => {
        if (event.target.tagName === "INPUT" && event.target.type === "number") {
            const playerNameBeer = event.target.closest("tr").cells[0].innerHTML
            playerObjectBeer = data.find(p => p.playerName === playerNameBeer)
            playerObjectBeer["beers"] = event.target.value
            localStorage.setItem("gameInformation",JSON.stringify(data))
        }
    });
    // Here the table is filled with the information from the json created
    data.forEach(player => {
        row = tablePlayers.insertRow(0)

        const cellBakken = row.insertCell(0)
        const inputBakken = document.createElement("input")
        Object.assign(inputBakken, {
            type: "number",
            id: `Speler${player["playerName"]}`,
            name: `Speler${player["playerName"]}`,
            value: player["beers"],
        });
        inputBakken.style.width = "100px"
        
        cellBakken.appendChild(inputBakken)
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
    
    // Add column for beer
    const beerCell = headerRow.insertCell(0)
    beerCell.innerHTML = "🍺"
        
    // Add column for total Goals
    const goalHeaderCell = headerRow.insertCell(0)
    goalHeaderCell.innerHTML = "Goals"

    // Add columns for amount of teams selected
    let teamCount = data[0].teams.length
    while ( teamCount > 0 ){
        const headerCell = headerRow.insertCell(0)
        headerCell.innerHTML = "Team"
        teamCount--;
        }
    // Add column for player name
    const headerCell = headerRow.insertCell(0)
    headerCell.innerHTML = "Speler"

    

    setElementVisibility("page2", "page3")

    //Set the width of the container around the table
    const tableWidth = tablePlayers.getBoundingClientRect().width
    const formContainer = document.getElementById('page3')
    formContainer.style.width = `${tableWidth + (tableWidth*1,1)}px`
}