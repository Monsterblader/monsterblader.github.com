//Shuffle a deck of cards exercise.
var projectDescriptions = {
  aboutMe: "<div class='header'>About me</div>"
         + "<p>Front-end web developer with an engineering and "
         + "math background.",
  aboutPnF: "<div class='header'>Point and figure charting</div>\n"
          + "<p>This is an uncommon style of stock charting.  "
          + "So much so, that I had to write an engine from scratch "
          + "to draw the x's and o's."
          + "<p><a href='http://github.com/Monsterblader/Point-and-Figure' target='_blank'>"
          + "See the source code</a>"
          + "<p>I used meteorjs for the framework, "
          + "HTML5 Canvas for the graphics, and "
          + "Yahoo!'s stock data api.",
  aboutData: "<div class='header'>Data Analytics</div>"
           + "<p>This is one of the group projects that I helped develop.  "
           + "We were given a set of data and a visual template, and we "
           + "created this dynamic project from scratch."
           + "<p><a href='http://github.com/Monsterblader/data-analytics' target='_blank'>"
           + "See the source code</a>"
           + "<p>I worked on branch \'headcount\'"
           + "<p>I used Angular.js for the framework, "
           + "and I built the charts using d3.js, HighCharts.js, "
           + "and HTML tables."
}

var showProjectDetails = function (project){
  $(".aboutMe").html(projectDescriptions[project]);
}
