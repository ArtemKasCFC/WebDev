document.querySelectorAll(".drum").forEach(btn => {
    btn.addEventListener('click', function() {
        makeSound(this.innerHTML)
        animation(this.innerHTML)
    })
})


document.addEventListener('keypress', function(event) {
    makeSound(event.key)
    animation(event.key)
})

function makeSound(select) {
    switch (select) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(this.innerHTML)
            break;
        }
}

function animation(select) {
    let animateBtn = document.querySelector(`.${select}`)

    animateBtn.classList.add("pressed")
    setTimeout(function() {
        animateBtn.classList.remove("pressed")
    }, 300)
}