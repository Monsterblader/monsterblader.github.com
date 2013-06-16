//Shuffle a deck of cards exercise.
var projectDescriptions = {
  aboutMe: "<div class='header'>About me</div>\
            <p>Front-end web developer with an engineering and \
            math background.",
	aboutPnF: "<div class='header'>Point and figure charting</div>\n\
             <p>This is an uncommon style of stock charting.  \
             So much so, that I had to write an engine from scratch \
             to draw the x's and o's.\n\
             <p><a href='http://github.com/Monsterblader/Point-and-Figure' target='_blank'>\
             See the source code</a>\n\
             <p>I used meteorjs for the framework, \
             HTML5 Canvas for the graphics, and \
             Yahoo!'s stock data api.",
	aboutGrapheme: "<div class='header'>Graphe.me</div>\
								  <p>This is a group project that we built for the 2013 DeveloperWeek \
								  Hackathon.  We won a scholarship from Pearson.com.\n\
								  <p><a href='https://github.com/rossetti211/grapheme' target='_blank'>\
								  See the source code</a>\n\
								  <p>I integrated the API's for this project."
};

var showProjectDetails = function (project){
  $(".aboutMe").html(projectDescriptions[project]);
};
