let scores = JSON.parse(localStorage.getItem('scores'))

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let results = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            results = 'Tie';
        }else if (computerMove === 'Paper') {
            results = 'You loss';
        }else if (computerMove === 'Scissors') {
            results = 'You win';
        }
     }else if (playerMove === 'Paper') {
        if (computerMove === 'Paper') {
            results = 'Tie';
        }else if (computerMove === 'Scissors') {
            results = 'You loss';
        }else if (computerMove === 'Rock') {
            results = 'You win';
        }
     }else if (playerMove === 'Scissors') {
        if (computerMove === 'Scissors') {
            results = 'Tie';
        }else if (computerMove === 'Rock') {
            results = 'You loss';
        }else if (computerMove === 'Paper') {
            results = 'You win';
        }
        };

        if (results === 'You win') {
            scores.wins ++;
        }else if (results === 'You loss') {
            scores.loss ++;
        }else if (results === 'Tie') {
            scores.ties ++;
        }

        localStorage.setItem('scores', JSON.stringify(scores));

    // CODE FOR DOM DISPLAY OF RESULTS,MOVES AND SCORES
     document.querySelector('.move').innerHTML=
        `<p>
            You
            <img src="img/${playerMove}-emoji.png" class="one">
            <img src="img/${computerMove}-emoji.png" class="one">
            Computer
        </p>`;

     document.querySelector('.result').innerHTML=
     `Results: ${results}`;

     document.querySelector('.score').innerHTML=
     `Score's: Wins: ${ scores.wins},Loss: ${ scores.loss},Ties: ${ scores.ties}`;

};



function dosome() {
    document.querySelector('.move').innerHTML=
    `Pick a move to play !`;

 document.querySelector('.result').innerHTML=
 `Results: ?`;

 document.querySelector('.score').innerHTML=
 `Score's: Wins: 0,Loss: 0,Ties: 0`;

 }


function pickComputerMove() {
    const randomMove = Math.random();
    let computerMove = '';
    if (randomMove >= 0 && randomMove < 1 / 3) {
        computerMove = 'Rock';
    }else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
        computerMove = 'Paper';
    }else if (randomMove >= 2 / 3 && randomMove < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
    // return randomMove;
}
