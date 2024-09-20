
function getTeams(url) {
  const request = new Request(url);

  return fetch(request)
    .then(response => response.json())
    .then(json => {
      const rawDate = new Date()
      const year = rawDate.getFullYear()
      const month = String(rawDate.getMonth() + 1)
      const day = String(rawDate.getDate())
      const today = `${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")}`
      
      
      
      
      if (debug){json = json.matches}
      else{json = json.matches.filter(match => match.date === today)}
      //
      // Process the JSON data
      const objectsArray = json.flatMap(match => [
        {
          teamName: match.awayContestant.contestantClubName,
          teamLogo: match.awayContestant.contestantLogo,
          teamGoals: match.scores?.away || 0  //it gives an error if there is a 0. So add ternary to check for 0
        },
        {
          teamName: match.homeContestant.contestantClubName,
          teamLogo: match.homeContestant.contestantLogo,
          teamGoals: match.scores?.home || 0
          
        }
      ]);
      return objectsArray;
    })
    .catch(error => {
      // Handle any errors
      console.error('Error fetching teams:', error);
      return []; // Return an empty array or handle the error as needed
    });
}
