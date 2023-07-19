let buttonColours = ["red", "blue", "green", "yellow"],
    gamePattern = [],
    userClickedPattern = [],
    level = 0,
    started = false;

$(document).keypress(function (event) {
    if (event.key === "a" && !started) {
        $('h1').text(`Level ${level}`);
        nextSequence();
        started = true;
    }
})

$('.btn').click((event) => {
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
            } else {
                playSound('wrong');
                $('body').addClass('game-over');
                setTimeout(() => {
                    $('body').removeClass('game-over');
                }, 200);
                $('h1').text('Game Over, Press Any Key to Restart')
                startOver()
            }
}

function nextSequence() {
    userClickedPattern = [];
    $("#level-title").text("Level " + level);
    level++;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
}

function playSound(name) {
    let audio = new Audio(`./sounds/${name}.mp3`);
    audio.play()
} 

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass('pressed')
    setTimeout(() => {
        $(`#${currentColour}`).removeClass('pressed') 
    }, 100)
}

function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
}
