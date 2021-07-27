var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png
console.log("Random1", randomDiceImages);

var randomImagesSource = "images/" + randomDiceImages;// images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSourceImages2 = "images/dice" + randomNumber2 + ".png";
console.log("random2", randomSourceImages2);

// var randomImagesSource2 = "images/" + randomDiceImages2;
// console.log("Image2", randomImagesSource2);

document.querySelectorAll("img")[1].setAttribute("src", randomSourceImages2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 Win!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = " player 2 Win!";
}
else {
  document.querySelector("h1").innerHTML = " Draw";
}