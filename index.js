// left image
var randomNumber1 = Math.round((Math.random() * 6) + 1); // generate a random num

var randomLeftImageSrc = "images/dice" + randomNumber1 + ".png"; // change image num

document.querySelectorAll("img")[1].setAttribute("src", randomLeftImageSrc); // change attribute src

// right image
var randomNumber2 = Math.round((Math.random() * 6) + 1); // generate a random num

var randomRightImageSrc = "images/dice" + randomNumber2 + ".png"; // change image num

document.querySelectorAll("img")[1].setAttribute("src", randomRightImageSrc); // change attribute src


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

