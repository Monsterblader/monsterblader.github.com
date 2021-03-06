//Shuffle a deck of cards exercise.
function shuffle() {
	var deck = ["AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS",
					"AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH",
					"AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD",
					"AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC"];
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
