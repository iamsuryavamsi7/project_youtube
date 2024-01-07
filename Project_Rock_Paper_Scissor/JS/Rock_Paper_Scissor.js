let score = JSON.parse(localStorage.getItem(`score`))|| {
    wins: 0,
    looses: 0,
    ties: 0
}

function computerChoosed(){

    let computerPickedValue = ``;

    const randomNumber = Math.random();

    if (randomNumber > 0 && randomNumber <= 1 / 3){

        computerPickedValue = `Rock`;

    } else if(randomNumber > 1 / 3 && randomNumber <= 2 / 3){

        computerPickedValue = `Paper`;

    } else if(randomNumber > 2 / 3 && randomNumber <= 1){

        computerPickedValue = `Scissors`;

    } 

    return computerPickedValue;

}

function playGame(playerPicked){

    const computerPicked = computerChoosed();
    
    let result = ``;

    if (playerPicked === `Rock`){

        if (computerPicked === `Rock`){

            result = `Tie`;

        } else if (computerPicked === `Paper`){

            result = `You Loose`;

        } else if (computerPicked === `Scissors`){

            result = `You Win`;

        }

    } else if (playerPicked === `Paper`){

        if (computerPicked === `Rock`){

            result = `Tie`;

        } else if (computerPicked === `Paper`){

            result = `You Loose`;

        } else if (computerPicked === `Scissors`){

            result = `You Win`;

        }
        
    } else if (playerPicked === `Scissors`){

        if (computerPicked === `Rock`){

            result = `Tie`;

        } else if (computerPicked === `Paper`){

            result = `You Loose`;

        } else if (computerPicked === `Scissors`){

            result = `You Win`;

        }

    }

    if (result === `You Win`){

        score.wins ++;

    } else if (result === `You Loose`){

        score.looses ++;

    } else if (result === `Tie`){

        score.ties ++;

    }

    localStorage.setItem(`score`, JSON.stringify(score));

    document.querySelector(`.div3_01`)
        .innerHTML = `${result}`;

    document.querySelector(`.div3_02`)
        .innerHTML = `Your <img class="icon_01" src="/Project_Rock_Paper_Scissor/IMAGES/${playerPicked}-emoji.png"> - Computer's <img class="icon_01" src="/Project_Rock_Paper_Scissor/IMAGES/${computerPicked}-emoji.png">`;

    document.querySelector(`.div3_03`)
        .innerHTML = ` Wins:- ${score.wins}, Looses:- ${score.looses}, Ties:- ${score.ties}`;

}

function removeScore(){

    score.wins = 0;
    
    score.looses = 0;

    score.ties = 0;

    localStorage.removeItem(`score`);

    document.querySelector(`.div3_03`)
        .innerHTML = ` Wins:- ${score.wins}, Looses:- ${score.looses}, Ties:- ${score.ties}`;

}

let isAutoPlaying = false;

let intervalID;

function autoplay(){

    if (!isAutoPlaying){
    
        intervalID = setInterval(function(){

        const playerMove = computerChoosed();

        playGame(playerMove);

        }, 800)

        isAutoPlaying = true;

        document.querySelector(`.auto_play`)
            .innerHTML = "Stop Auto Play"
            

    } else {

        clearInterval(intervalID);

        isAutoPlaying = false;

        document.querySelector(`.auto_play`)
            .innerHTML = "Start Auto Play"

    }

}