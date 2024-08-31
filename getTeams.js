
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
      json = json.matches
      //json = json.matches.filter(match => match.date === today)
      // Process the JSON data
      const objectsArray = json.flatMap(match => [
        {
          teamName: match.awayContestant.contestantClubName,
          teamLogo: match.awayContestant.contestantLogo,
        },
        {
          teamName: match.homeContestant.contestantClubName,
          teamLogo: match.homeContestant.contestantLogo,
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
