
//flashlight effect
let map = document.querySelector(".map");
let moveLight = (event) => {
    // console.log(event.target);
    var light = document.querySelector(".reveal");
    light.style.clipPath = `circle(80px at ${event.offsetX}px ${event.offsetY}px)`;
}

map.addEventListener("mousemove", function(event){
    moveLight(event);
});

//setup the mp3 to play on click on the pin
var music = new Audio();
function playMusic(file) {
    music.pause();
    music = new Audio(file);
    music.volume = 0.1;
    music.play();
}

//pin click -> show tea modal
let teaModal = document.querySelector(".tea-container-modal");
let pins = document.querySelectorAll(".pin");
pins.forEach(pin => {
    pin.addEventListener("click", function(){
        playMusic("misc/magic-chime.mp3");
        teaModal.style.display = "block";
        setTimeout(function(){
            teaModal.style.opacity = 1;
        }, 100);
    })
})

//exit out of tea modal
let close = document.querySelector(".close");
close.addEventListener("click", function(){
    teaModal.style.opacity = 0;
    setTimeout(function(){
        teaModal.style.display = "none";
    }, 200);
})

