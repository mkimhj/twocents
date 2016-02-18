var fadeSpeed = 200;

Template.team.events({
	'mouseenter #maruchi-pic': function(event) {
		$('#founder-text').text("Maruchi is a recent UC Berkeley graduate.  During his time at Berkeley, he was a web design team director of one of Berkeley's premier design club, Innovative Design. He also conducted research at UCSF's Microdevices Lab where he engineer embedded solutions to improve the clinical environment for patients, nurses, and doctors. Maruchi originally thought of Two Cents while donating his pocket change to a homeless man in a Seoul metro station, and thought small daily donations from everybody could help a lot of people. Since then he has formed a team of his close friends who all believe that crowdfunded pocket change donations can make a difference.");
		$('#maruchi-icons').fadeIn(fadeSpeed);
		$('#emily-icons').hide();
		$('#quinn-icons').hide();
		$('#shyam-icons').hide();
	},
	'mouseleave #maruchi-pic': function(event) {
		$('#founder-text').text("Maruchi is a recent UC Berkeley graduate.  During his time at Berkeley, he was a web design team director of one of Berkeley's premier design club, Innovative Design. He also conducted research at UCSF's Microdevices Lab where he engineer embedded solutions to improve the clinical environment for patients, nurses, and doctors. Maruchi originally thought of Two Cents while donating his pocket change to a homeless man in a Seoul metro station, and thought small daily donations from everybody could help a lot of people. Since then he has formed a team of his close friends who all believe that crowdfunded pocket change donations can make a difference.");
	},
	'mouseenter #emily-pic': function(event) {
		$('#founder-text').text("Emily is a recent UC Berkeley graduate who was involved in various leadership positions during her time as a student.  Her former roles at UC Berkeley included the president of the Taiwanese American Student Association, External Vice President of the International Students Association at Berkeley, Chair of the East Asian Union, and an ASUC Senator.  Emily is always growing her leadership skills through active commitment in the Global Leadership Organization (GLO) as a Counselor and the Director of Technology, and is also passionate about photography, the cello, and basketball.  One of her favorite quotes that resonates with Emily is “be the change you want to see in the world” - Gandhi.");
		$('#maruchi-icons').hide();
		$('#emily-icons').fadeIn(fadeSpeed);
		$('#quinn-icons').hide();
		$('#shyam-icons').hide();
	},
	'mouseleave #emily-pic': function(event) {
		$('#founder-text').text("Emily is a recent UC Berkeley graduate who was involved in various leadership positions during her time as a student.  Her former roles at UC Berkeley included the president of the Taiwanese American Student Association, External Vice President of the International Students Association at Berkeley, Chair of the East Asian Union, and an ASUC Senator.  Emily is always growing her leadership skills through active commitment in the Global Leadership Organization (GLO) as a Counselor and the Director of Technology, and is also passionate about photography, the cello, and basketball.  One of her favorite quotes that resonates with Emily is “be the change you want to see in the world” - Gandhi.");
	},
	'mouseenter #quinn-pic': function(event) {
		$('#founder-text').text("Quinn is a recent UC Berkeley graduate who involved himself with a diversity of organizations.  He was a former ASUC senator representing engineers on the UC Berkeley campus; engineer-in-residence with the Foundry@CITRIS, where he helped multiple Foundry start-ups build and lead an engineering team; active member of Innovative Design, where he organized the first annual CMYK, Berkeley's annual designathon; and director of Cal Raijin Taiko, spreading Japanese culture through Japanese traditional drumming.  Quinn enjoys basketball, a solid game of Super Smash Bros, and baking.");
		$('#maruchi-icons').hide();
		$('#emily-icons').hide();
		$('#quinn-icons').fadeIn(fadeSpeed);
		$('#shyam-icons').hide();
	},
	'mouseleave #quinn-pic': function(event) {
		$('#founder-text').text("Quinn is a recent UC Berkeley graduate who involved himself with a diversity of organizations.  He was a former ASUC senator representing engineers on the UC Berkeley campus; engineer-in-residence with the Foundry@CITRIS, where he helped multiple Foundry start-ups build and lead an engineering team; active member of Innovative Design, where he organized the first annual CMYK, Berkeley's annual designathon; and director of Cal Raijin Taiko, spreading Japanese culture through Japanese traditional drumming.  Quinn enjoys basketball, a solid game of Super Smash Bros, and baking.");
	},
	'mouseenter #shyam-pic': function(event) {
		$('#founder-text').text("Shyam is a recent UC Berkeley graduate who was once a former president of Habitat for Humanity at Cal, and also served as project leader, consultant, and Internal Vice President of The Berkeley Group. During his time at Habitat for Humanity, Shyam managed a 300+ member student-run organization at UC Berkeley that assisted Habitat for Humanity East Bay and Greater San Francisco to build housing for low-income families in the Bay Area.  In his free time, Shyam enjoys playing tennis and servicing non-profit organizations.");
		$('#maruchi-icons').hide();
		$('#emily-icons').hide();
		$('#quinn-icons').hide();
		$('#shyam-icons').fadeIn(fadeSpeed);
	},
	'mouseleave #shyam-pic': function(event) {
		$('#founder-text').text("Shyam is a recent UC Berkeley graduate who was once a former president of Habitat for Humanity at Cal, and also served as project leader, consultant, and Internal Vice President of The Berkeley Group. During his time at Habitat for Humanity, Shyam managed a 300+ member student-run organization at UC Berkeley that assisted Habitat for Humanity East Bay and Greater San Francisco to build housing for low-income families in the Bay Area.  In his free time, Shyam enjoys playing tennis and servicing non-profit organizations.");
	}
});