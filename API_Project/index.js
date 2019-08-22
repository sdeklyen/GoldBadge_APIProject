const baseurl = 'https://www.balldontlie.io/api/v1/players/'
let url;

const searchTerm = document.querySelector('.search')
const submitBtn = document.querySelector('.submit')
const searchForm = document.querySelector('form')
const results = document.querySelector('.results')

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault(); 
url = baseurl + '?search=' + searchTerm.value + '&per_page=100'


fetch(url).then(function(result) {
    return result.json();
}).then(function(jsonPlayer) {
displayResults(jsonPlayer)
})
}

function displayResults(jsonPlayer) {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    let players = jsonPlayer.data;

    for(let i=0; i<players.length; i++) {
        let playerName = document.createElement('h3');
        let playerTeam = document.createElement('h4');
        let playerPosition = document.createElement('ul');
        let playerHeight = document.createElement('ul');
        let playerPPG = document.createElement('ul');
        let playerRPG = document.createElement('ul');
        let playerAPG = document.createElement('ul');
        let playerFGPercent = document.createElement('ul');
        let player3PtPercent = document.createElement('ul');
        let playerFTPercent = document.createElement('ul');

        let player = players[i];

        statsURL = 'https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=' + player.id
        fetch(statsURL).then(function(result) {
            return result.json();
        }).then(function(jsonTwo) {
            displayResultsTwo(jsonTwo);
        });

        function displayResultsTwo(jsonTwo) {

        let playerStats = jsonTwo.data
        let finalStats = playerStats[i];
        let FGPercent = finalStats.fg_pct*100
        let threePtPercent = finalStats.fg3_pct*100
        threePtPercent = threePtPercent.toFixed(1);
        let FTPercent = finalStats.ft_pct*100

        if (player.id <= 493) {
        playerName.innerText = `${player.first_name} ${player.last_name}`;
        playerTeam.innerText = `${player.team.full_name}`
        playerPosition.innerText = `Position: ${player.position}`;
        if (player.height_feet !== null) {
        playerHeight.innerText = `Height: ${player.height_feet}-${player.height_inches}`} 
        if (player.id = finalStats.player_id) {
            playerPPG.innerText =`${finalStats.pts} points per game`
            playerRPG.innerText = `${finalStats.reb} rebounds per game`
            playerAPG.innerText = `${finalStats.ast} assists per game`
            playerFGPercent.innerText = `Field Goal Percentage: ${FGPercent}%`
            player3PtPercent.innerText = `3 Point Percentage: ${threePtPercent}%`
            playerFTPercent.innerText = `Free Throw Percentage: ${FTPercent}%`
        }
        }
        

        results.appendChild(playerName);
        results.appendChild(playerTeam);
        results.appendChild(playerPosition);
        results.appendChild(playerHeight);
        results.appendChild(playerPPG);
        results.appendChild(playerRPG);
        results.appendChild(playerAPG);
        results.appendChild(playerFGPercent);
        results.appendChild(player3PtPercent);
        results.appendChild(playerFTPercent);
        }}}