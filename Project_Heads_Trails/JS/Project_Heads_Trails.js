let score = JSON.parse(localStorage.getItem(`score`)) || {

    wins: 0,
    looses: 0

}

function computerChoosed(){

    let randomNumber = Math.random();

    let computerChoosedValue = ``;

    if (randomNumber > 0 && randomNumber <= 0.5){

        computerChoosedValue = `Heads`;

    } else if (randomNumber > 0.5 && randomNumber <= 1){

        computerChoosedValue = `Tails`;

    }

    return computerChoosedValue;

}

function playGame(playerPicked){

    let computerPicked = computerChoosed();

    let result = ``;

    if (playerPicked === `Heads`){

        if (computerPicked === `Heads`){

            result = `You Win`;
        
        } else {

            result = `You Loose`;

        }

    } else if(playerPicked === `Tails`){

        if (computerPicked === `Heads`){

            result = `You Loose`;

        } else{

            result = `You Win`;

        }

    }

    if ( result === `You Win`){

        score.wins ++;

    } else if (result === `You Loose`){

        score.looses ++;

    }

    localStorage.setItem(`score`, JSON.stringify(score));

    alert(`You Picked ${playerPicked}. Computer Picked ${computerPicked}. Result:- ${result}\n
          Wins:- ${score.wins}, Looses:- ${score.looses}`);

}

function resetScore(){

    score.wins = 0;
    score.looses = 0;

    localStorage.removeItem(`score`);

}