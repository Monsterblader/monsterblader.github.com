var projectDescriptions = {
  aboutMe: "<div class='header'>About me</div>\
            <p>Front-end web developer with an engineering and \
            math background.",
	aboutParKey: "<div class='header'>ParKey</div>\
								<p>I attended a \
								<a href='http://apigee-sfv2-2013.eventbrite.com/' target='_blank'>mobile developement course,</a>\
								and I joined a team whose goal was to build an app to \
								locate parking.</p>\
								<p>Our app pulls data from an external source, displays \
								them on a map and in a list, allows the user to sort the \
								list by distance or price, select an item from the list \
								which displays information about the location, then open \
								a link to an interactive Google map.</p>\
								<p>The prize winner was selected by a vote of our peers, \
								and our app received the third-highest number of votes out \
								of about 30 submissions.",
	aboutSC: "<div class='header'>Seed Change</div>\
						<p>The website had not yet been launched.  I helped integrate \
						an electronic signature API into an investment agreement \
						process.  I also helped convert the site from a fixed layout \
						to a dynamically responsive one.",
	aboutHI: "<div class='header'>Happy Inspector</div>\
						<p>I helped build HTML forms which took JSON-formatted data \
						from an iPad app so that it could be printed on sandard sizes \
						of paper.\
						<p>We used <a href='http://http://olado.github.io/doT/index.html' target ='_blank'>doT.js,</a>\
						a minimal framework, to build the HTML, \
						<a href='http://www.princexml.com' target='_blank'>PrinceXML</a>\
						to convert the forms to .pdf, and Sass to format the forms.",
	aboutPnF: "<div class='header'>Point and figure charting</div>\
             <p>This is an uncommon style of stock charting.  \
             So much so, that I had to write an engine from scratch \
             to draw the x's and o's.\
             <p><a href='http://github.com/Monsterblader/Point-and-Figure' target='_blank'>\
             See the source code</a>\
             <p>I used meteorjs for the framework, \
             HTML5 Canvas for the graphics, and \
             Yahoo!'s stock data api.",
	aboutGrapheme: "<div class='header'>Graphe.me</div>\
								  <p>This is a group project that we built for the 2013 DeveloperWeek \
								  Hackathon.  We won a scholarship from Pearson.com.\
								  <p><a href='https://github.com/rossetti211/grapheme' target='_blank'>\
								  See the source code</a>\
								  <p>I integrated the API's for this project."
};

var showProjectDetails = function (project){
  $(".aboutMe").html(projectDescriptions[project]);
};
