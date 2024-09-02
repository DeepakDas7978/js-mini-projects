let randomnum = parseInt(Math.random() * 100 + 1);

const userinput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevguess = [];
let numofguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);
    })
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevguess.push(guess);
        if (numofguess === 11) {
            dispguess();
            dispmsg(`Now your game is over!! and Random number was ${randomnum}`);
            endgame();
        } else {
            dispguess(guess);
            checkguess(guess);
        }
    }

}

function checkguess(guess) {
    if (guess === randomnum) {
        dispmsg(`Yes you guessed it right!!!`);
    } else if (guess < randomnum) {
        dispmsg(`Nuber is too low!!!`);
    } else if (guess > randomnum) {
        dispmsg(`Number is too high!!!`);
    }

}

function dispguess(guess) {
    userinput.value = guess;
    guessslot.innerHTML += `${guess},`;
    userinput.value = '';
    numofguess++;
    remaining.innerHTML = `${11 - numofguess}`;

}

function dispmsg(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', "");
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame" style="background-color:gray; padding:5px;cursor:pointer; border-radius:10px;">Start New Game</h2>';
    startOver.appendChild(p);
    playgame = false;
    startgame();
}

function startgame() {
    const newgamebtn = document.querySelector('#newGame');
    newgamebtn.addEventListener('click', function(e) {
        randomnum = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numofguess = 1;
        guessslot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numofguess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
    })
}