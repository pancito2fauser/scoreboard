let teamAScore = 0;
let teamBScore = 0;

function incrementScore(team) {
    if (team === 'teamA') {
        teamAScore++;
        document.getElementById('teamAScore').innerText = teamAScore;
    } else if (team === 'teamB') {
        teamBScore++;
        document.getElementById('teamBScore').innerText = teamBScore;
    }
}