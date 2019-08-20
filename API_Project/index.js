const baseurl = 'https://www.balldontlie.io/api/v1/players/'
const urlTwo = 'https://www.balldontlie.io/api/v1/season_averages?season=2018'
let url; 

const searchTerm = document.querySelector('.search')
const submitBtn = document.querySelector('.submit')
const searchForm = document.querySelector('form')
const results = document.querySelector('.results')

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault(); 
url = baseurl + '?search=' + searchTerm.value + '&per_page=100'


fetch(url).then(function(result){
    return result.json();
}).then(function(json) {
    displayResults(json)
})
}
fetch(urlTwo).then(function(result){
    return result.json();
}).then(function(jsonTwo) {
    displayResults(jsonTwo)
})

function displayResults(json, jsonTwo) {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    let players = json.data;
    let stats = jsonTwo.data;


    for(let i=0; i<players.length; i++) {
        let playerName = document.createElement('h3');
        let playerPosition = document.createElement('ul');
        let playerHeight = document.createElement('ul');
        let playerTeam = document.createElement('ul');
        let pointsPerGame = document.createElement('ul');

        let player = players[i];
        let playerStats = stats[i]

        if (player.id <= 493) {
        playerName.innerText = `${player.first_name} ${player.last_name}`;
        playerPosition.innerText = player.position;
        playerHeight.innerText = `${player.height_feet}-${player.height_inches}` 
        playerTeam.innerText = player.team.full_name
        if (player.id === playerStats.player_id) {
            pointsPerGame.innerText = playerStats.pts}
        }

        results.appendChild(playerName);
        results.appendChild(playerPosition);
        results.appendChild(playerHeight);
        results.appendChild(playerTeam);
        results.appendChild(pointsPerGame);
    }}
