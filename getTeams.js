
function getTeams(url){
  const request = new Request(url)
  fetch(request)
    .then((response) => response.json())
    .then((json) => { 
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
      
      console.log(objectsArray);

      })}
