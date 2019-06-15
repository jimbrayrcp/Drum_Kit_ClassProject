// LISTENER FOR DETECTING SCREEN BUTTON PRESSED
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonHit = (this.innerHTML);
    playSound(buttonHit);
    buttonAnimation(buttonHit);
  });
}

// LISTENER FOR DETECTING KEYBOARD BUTTON PRESSED
addEventListener("keydown", function(event) {
  var buttonHit = (event.key);
  playSound(buttonHit);
  buttonAnimation(buttonHit);
});

// CALLBACK FUNCTION FOR PLAYING SOUNDS FOR LISTENERS
function playSound(buttonHit) {
  switch (buttonHit) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    default:
      console.log(buttonHit);
  }
}

function buttonAnimation(currentKey) {
  var current = document.querySelector("." + currentKey);
  //document.querySelector(".w").classList.add("pressed");
  //document.querySelector(".w").classList.remove("pressed");
  current.classList.add("pressed");
  setTimeout(function() {
    current.classList.remove("pressed");
  }, 100);
}
