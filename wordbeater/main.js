window.addEventListener("load", start);



let currentWord = document.querySelector("#current-word")
let time = document.getElementById("time")
let scoredisplay = document.getElementById("score")
let input = document.getElementById("word-input")
let message = document.getElementById("message");
let highScoredis = document.getElementById("high-score")



const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    "paddle",
    "answer",
    "awesome",
    "distance",
    "fertile",
    "wakeful",
    "belief",
    "slippery",
    "bizarre",
    "learned",
    "vivacious",
    "grandmother",
    "illegal",
    "thirsty",
    "wholesale",
    "tenuous",
    "skillful",
    "deteriorate",
    "poised",
    "humorous",
    "scrape",
    "replace",
    "languid",
    "adjoining",
    "interesting",
    "stranger",
    "polite",
    "scissors",
    "brainy",
    "interrogation",
];


let timeleft = 5;
let score = 0;
var highScore;
if (localStorage.getItem('highestScore') === null) {
    // this statement will be executed when it is the first time for the user
    // there would be no localstorage named 'highestScore'
    highScore = 0;
} else {
    // this will be executed if the localstorage 'higheststorage' already exists
    //i.e. user have already visited this site once
    highScore = localStorage.getItem('highestScore');
}

highScoredis.textContent = highScore;
// displaying the highest score of the user since he started using this site

function start() {
    // displayWord()
    currentWord.textContent = "next"
    countdown()

    matchWords()
}

function displayWord() {
    let rand = Math.floor(Math.random() * words.length)
    currentWord.textContent = words[rand]
}


function countdown() {
    let intervalId = setInterval(function() {
        if (timeleft > 0) {
            timeleft--;
        } else if (timeleft === 0) {
            message.innerHTML = "Game Over!"
            score = 0;
            input.blur()
            input.value = ""
            scoredisplay.textContent = score;
            currentWord.textContent = "next"
            clearInterval(intervalId)
        }
        time.textContent = timeleft
    }, 1000)
}

function matchWords() {
    input.addEventListener("input", function(e) {
        if (this.value === currentWord.textContent && timeleft > 0) {
            score++;
            if (score > highScore) {
                highScore = score
                localStorage.setItem('highestScore', highScore); // changing the value in local storage
                highScoredis.textContent = highScore
            }
            scoredisplay.textContent = score;
            input.value = "";
            timeleft = 5;
            displayWord()


        } else if (this.value === "next") {
            this.value = "";
            displayWord()
            timeleft = 5;
            time.textContent = 5;
            message.textContent = ""
            countdown()
        }
    })
}