// left image
var randomNumber1 = Math.round((Math.random() * 6) + 1); // generate a random num

var randomLeftImageSrc = "images/dice" + randomNumber1 + ".png"; // change image num

document.querySelectorAll("img")[1].setAttribute("src", randomLeftImageSrc); // change attribute src

// right image
var randomNumber2 = Math.round((Math.random() * 6) + 1); // generate a random num

var randomRightImageSrc = "images/dice" + randomNumber2 + ".png"; // change image num

document.querySelectorAll("img")[1].setAttribute("src", randomRightImageSrc); // change attribute src


// Check if randomNumber1 is greater than randomNumber2
if (randomNumber1 > randomNumber2) {
    // If Player 1's number is higher, update the <h1> element to display "Player 1 Wins!"
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} 
// Check if randomNumber2 is greater than randomNumber1
else if (randomNumber2 > randomNumber1) {
    // If Player 2's number is higher, update the <h1> element to display "Player 2 Wins!"
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} 
// If both numbers are equal
else {
    // Update the <h1> element to display "Draw!"
    document.querySelector("h1").innerHTML = "Draw!";
}


