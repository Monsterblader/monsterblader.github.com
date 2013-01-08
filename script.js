function init(){
  clock();
  setInterval(clock,1000);
}
function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(75,75);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
 
  // Hour marks
  ctx.save();
  for (var i=0;i<12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();
 
  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();
   
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;
 
  ctx.fillStyle = "black";
 
  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();
 
  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();
   
  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();
 
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();
 
  ctx.restore();
}

//Shuffle a deck of cards exercise.
function shuffle() {
	var deck = ["AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS",
					"AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH",
					"AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD",
					"AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC",];
	var shuffledDeck = [];
	var deckList = "";
	var lineBreaks = [{start: 0, end: 13}, {start: 13, end: 26}, {start: 26, end: 39}, {start: 39, end: 52}];

	for ( ; shuffledDeck.length < 52; shuffledDeck.push(deck.splice(Math.floor(Math.random()*(deck.length)), 1)[0])) {};
	for ( var i = 0; i < lineBreaks.length; i += 1) {
		for (var j = lineBreaks[i].start; j < lineBreaks[i].end; j += 1) {
			deckList += shuffledDeck[j] + ", ";
		}
		deckList += "<br/>";
	}
	deckList = deckList.slice(0, -7);
	document.getElementById("showDeck").innerHTML = deckList;
}

var taunts = ["Is that the best you can do?",
  "Are you coordination challenged?", "My dead goldfish can do better.",
  "You aim like a blind man with no arms!", "Can I be you when I grow up?",
  "Zzzzzzzzzzzzz", "It said 'click,' not 'watch.'",
  "There should be a minimum IQ to use this ride."];
var coords = ["N", 3, 7, " ", 2, 4, ".", 3, 1, 5, "W", 1, 2, 2, " ", 0, 5, ".", 3, 2, 7];

var i = 0;
var button = $("#gameButton");
var buttonGame = function() {
  $("#gameButton").removeAttr("onmouseover");
  $("#gameButton").css("font-size", "8px");
  gameLoop();
}

var gameLoop = function() {
  if (i < 22) {
    $("#gameButton").html(taunts[Math.floor(Math.random()*taunts.length)]);
    var randTop = Math.random()*750;
    var randLeft = Math.random()*500;
    $("#gameButton").animate({top: randTop + "px", left: randLeft + "px"});
    i += 1;
    setTimeout(enableButton, 500);
    setTimeout(gameLoop, 1000);
  } else {
  	resetButton();
  }
}

var enableButton = function() {
  $("#gameButton").attr("onclick", "showHint()");
}

var showHint = function() {
  $("#gameButton").html(coords[i-1]);
}

var resetButton = function() {
	$("#gameButton").css({"top": "0px", "left": "0px", "font-size": "12px"});
	$("#gameButton").removeAttr("onclick");
	$("#gameButton").attr("onmouseover", "buttonGame()");
	$("#gameButton").html("You suck.  Try again?");
/*	$("#gameButton").animate({top: "0px", left: "0px"});
*/	i = 0;
}

var dieButton = function() {
  document.getElementById("gameButton").innerHTML = "Aarrrrgh.  You got me!";
  $("#gameButton").fadeOut(1000);
  $("#gameButton").attr("onmouseover", "buttonGame()");
}

// function hangman() {
	/*
var message = "Albertisgreat";
fuunction getLetter() {
if (guessedLetter === first instance in string) {
$(get letter).show;
remove letter from string.
if (message.length === 0) {
$(victory message).show;
$(button message).innerHTML = "Reset";
$(input box).hide;
}
} else {
hangCounter += 1;
$(next body part).show;
}
}
function resetHangman(){
$(all letters and body parts).hide;
$(input box).show;
$(button message).innerHTML = "Guess";
}
wait for next input.
	create a string that holds the hidden text.
	get an input from user.
	if letter is correct, show it and remove from string.
	if letter is incorrect show body part.
	Six chances to fail.
	If all correct, show victory message.
	*/
// }
