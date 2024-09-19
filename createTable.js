function createTable(data){
    const tablePlayers = document.getElementById("playerTable");
    // Here the table is filled with the information from the json created
    data.forEach(player => {
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

    setElementVisibility("page2", "page3")}