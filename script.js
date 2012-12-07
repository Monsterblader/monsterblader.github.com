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