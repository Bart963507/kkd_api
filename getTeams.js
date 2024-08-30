
function getTeams(url) {
  const request = new Request(url);

  return fetch(request)
    .then(response => response.json())
    .then(json => {
      // Process the JSON data
      const objectsArray = json.matches.flatMap(match => [
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
