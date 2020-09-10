const prompt = document.getElementById('prompt');
const startButton = document.getElementById('start_btn');
const imagesContainer = document.getElementById('images-container');
const submitButton = document.getElementById('submit_btn');
let scoreCount = document.getElementById('score_count');
let correctSound = new Audio("sounds/yes.mp3");
let incorrectSound = new Audio("sounds/no.mp3");

var score = 0;
var counter = 0;
var randomNumber = 0;

startButton.addEventListener('click',startGame)
submitButton.addEventListener('click',checkAnswer)

function startGame() {
    prompt.classList.add('hide');
    startButton.classList.add('hide');
    imagesContainer.classList.remove('hide');
    generatePic();
}

function generatePic() {
    randomNumber = Math.floor((Math.random()*40)+1);
    document.getElementById('dog_image').innerHTML='<img src ="images/' + randomNumber + '.jpg" style="width:75%;">';
}

function getCorrectAnswer() {
    var correctAnswer = "";
    if(randomNumber>0 && randomNumber<=5) { 
        correctAnswer="golden retriever";
    } else if (randomNumber>5 && randomNumber<=10) { 
        correctAnswer="german shephard"
    } else if (randomNumber>10 && randomNumber<=15) { 
        correctAnswer="miniature schnauzer"
    } else if(randomNumber>15 && randomNumber<=20) { 
        correctAnswer="beagle"
    } else if(randomNumber>20 && randomNumber<=25) { 
        correctAnswer="chow chow"
    } else if(randomNumber>25 && randomNumber<=30) { 
        correctAnswer="border collie"
    } else if(randomNumber>30 && randomNumber<=35) { 
        correctAnswer="poodle"
    } else if(randomNumber>35 && randomNumber<=40) { 
        correctAnswer="dachshund"
    }
    return correctAnswer;
}

function checkAnswer() {
    var correctAnswer = getCorrectAnswer();
    var userAnswer = document.getElementById('user_answer').value.toLowerCase();

    if(correctAnswer==userAnswer){
        incrementScore();
        correctSound.play()
    } else {
        incorrectSound.play()
    }

    if(counter<10){
        counter++;
        generatePic();
    } else {
        displayResults();
    }
}

function incrementScore() {
    score ++;
    scoreCount.innerText = "SCORE: " + score;
}

function displayResults() {
    prompt.innerText = "TOTAL SCORE: " + score
    prompt.classList.remove('hide');
    prompt.style.fontSize = "30px";
    prompt.style.fontWeight = "bold";

    startButton.innerText = "PLAY AGAIN"
    startButton.classList.remove('hide');

    imagesContainer.classList.add('hide');
    resetValues();
}

function resetValues() {
    counter=0;
    score=0;
    scoreCount.innerText = "SCORE: " + score;
}
