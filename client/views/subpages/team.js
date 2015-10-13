var fadeSpeed = 200;

Template.team.events({
	'mouseenter #maruchi-pic': function(event) {
		$('#founder-text').text("Maruchi is currently a web design team director of Berkeley's premier design club, Innovative Design. He also conducts research at UCSF's Microdevices Lab where he helps engineer embedded solutions to improve the clinical environment for patients, nurses, and doctors. Maruchi originally thought of Two Cents while donating his pocket change to a homeless man in a Seoul metro station, and thought small daily donations from everybody could help a lot of people. Since then he has formed a team of his close friends who all believe that crowdfunded pocket change donations can make a difference.");
		$('#maruchi-icons').fadeIn(fadeSpeed);
		$('#emily-icons').hide();
		$('#quinn-icons').hide();
		$('#shyam-icons').hide();
	},
	'mouseleave #maruchi-pic': function(event) {
		$('#founder-text').text("Maruchi is currently a web design team director of Berkeley's premier design club, Innovative Design. He also conducts research at UCSF's Microdevices Lab where he helps engineer embedded solutions to improve the clinical environment for patients, nurses, and doctors. Maruchi originally thought of Two Cents while donating his pocket change to a homeless man in a Seoul metro station, and thought small daily donations from everybody could help a lot of people. Since then he has formed a team of his close friends who all believe that crowdfunded pocket change donations can make a difference.");
	},
	'mouseenter #emily-pic': function(event) {
		$('#founder-text').text("Emily is the former president of the Taiwanese American Student Association of UC Berkeley, former External Vice President of the International Students Association At Berkeley, and former chair of Berkeley's East Asian Union. Her leadership positions don't end there however, as she was once a senator of the student government at Cal, and is now a party chair of the Student Action party. Emily is always growing her leadership skills through active commitment in the Global Leadership Organization (GLO), and is passionate about video filming and editing through her role as a videographer in Innovative Design.");
		$('#maruchi-icons').hide();
		$('#emily-icons').fadeIn(fadeSpeed);
		$('#quinn-icons').hide();
		$('#shyam-icons').hide();
	},
	'mouseleave #emily-pic': function(event) {
		$('#founder-text').text("Emily is the former president of the Taiwanese American Student Association of UC Berkeley, former External Vice President of the International Students Association At Berkeley, and former chair of Berkeley's East Asian Union. Her leadership positions don't end there however, as she was once a senator of the student government at Cal, and is now a party chair of the Student Action party. Emily is always growing her leadership skills through active commitment in the Global Leadership Organization (GLO), and is passionate about video filming and editing through her role as a videographer in Innovative Design.");
	},
	'mouseenter #quinn-pic': function(event) {
		$('#founder-text').text("Quinn is a former ASUC senator with Student Action, and is now an engineer-in-residence with the Foundry@CITRIS where he helps multiple Foundry start-ups build and lead an engineering team. Quinn was also an active member in Innovative Design as he organized the first annual CMYK, Berkeley's annual designathon. Quinn is also a director of Cal Raijin Taiko, where he spreads Japanese culture through Japanese traditional drumming. ");
		$('#maruchi-icons').hide();
		$('#emily-icons').hide();
		$('#quinn-icons').fadeIn(fadeSpeed);
		$('#shyam-icons').hide();
	},
	'mouseleave #quinn-pic': function(event) {
		$('#founder-text').text("Quinn is a former ASUC senator with Student Action, and is now an engineer-in-residence with the Foundry@CITRIS where he helps multiple Foundry start-ups build and lead an engineering team. Quinn was also an active member in Innovative Design as he organized the first annual CMYK, Berkeley's annual designathon. Quinn is also a director of Cal Raijin Taiko, where he spreads Japanese culture through Japanese traditional drumming. ");
	},
	'mouseenter #shyam-pic': function(event) {
		$('#founder-text').text("Former president of Habitat for Humanity at Cal, Shyam is now a project leader and consultant in The Berkeley Group. During his time at Habitat for Humanity, Shyam managed a 300+ member student-run organization at UC Berkeley that assisted Habitat for Humanity East Bay and Greater San Francisco to build housing for low-income families in the Bay Area. In The Berkeley Group, Shyam is now a project leader to lead a team of consultants which provides pro-bono consulting services for social sector organizations within the SF Bay Area.");
		$('#maruchi-icons').hide();
		$('#emily-icons').hide();
		$('#quinn-icons').hide();
		$('#shyam-icons').fadeIn(fadeSpeed);
	},
	'mouseleave #shyam-pic': function(event) {
		$('#founder-text').text("Former president of Habitat for Humanity at Cal, Shyam is now a project leader and consultant in The Berkeley Group. During his time at Habitat for Humanity, Shyam managed a 300+ member student-run organization at UC Berkeley that assisted Habitat for Humanity East Bay and Greater San Francisco to build housing for low-income families in the Bay Area. In The Berkeley Group, Shyam is now a project leader to lead a team of consultants which provides pro-bono consulting services for social sector organizations within the SF Bay Area.");
	}
});