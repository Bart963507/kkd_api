
const request = new Request("https://api.keukenkampioendivisie.nl/wp-json/statsperform/v1/round-schedule?round=2")

fetch(request)
  .then((response) => response.json())
  .then((json) => {
    console.log(json.matches[0].awayContestant.contestantLogo);
    const img = document.createElement("IMG")
    img.src = json.matches[0].awayContestant.contestantLogo
    img.alt="Flowers in Chania"
    console.log(img)
    document.getElementById("matches").appendChild(img);
  });
