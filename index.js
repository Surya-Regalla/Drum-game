
for(var i=0; i < document.querySelectorAll(".btn").length; i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click", function()
    {
        makeSound(this.innerHTML);
        btnAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    btnAnimation(event.key);
});

function btnAnimation(alphaKey)
{
    document.querySelector("." + alphaKey).classList.add("pressed");
    setTimeout(function()
    {
        document.querySelector("." + alphaKey).classList.remove("pressed");
    }, 100);
}



function makeSound(alphaKey)
{
    switch(alphaKey)
    {
        case 'w':
            var sound = new Audio("tom-1.mp3");
            sound.play();
            break;
        case 'a':
            var sound2 = new Audio("tom-2.mp3");
            sound2.play();
            break;
        case 's':
            var sound3 = new Audio("tom-3.mp3");
            sound3.play();
            break;
        case 'd':
            var sound4 = new Audio("tom-4.mp3");
            sound4.play();
            break;
        case 'j':
            var sound5 = new Audio("snare.mp3");
            sound5.play();
            break;
        case 'k':
            var sound6 = new Audio("crash.mp3");
            sound6.play();
            break;
        case 'l':
            var sound7 = new Audio("kick-bass.mp3");
            sound7.play();
            break;
        default: console.log();
    }
}
