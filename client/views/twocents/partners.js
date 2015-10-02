var partnerList = [
			{partner: "Nonprofit 1",
			 logo: "img/nonprofit1.png"},
			{partner: "Nonprofit 2",
			 logo: "img/nonprofit2.png"},
			{partner: "Nonprofit 3",
			 logo: "img/nonprofit3.png"},
			{partner: "Nonprofit 4",
			 logo: "img/nonprofit4.png"},
			{partner: "Nonprofit 5",
			 logo: "img/nonprofit5.png"},
			{partner: "Nonprofit 6",
			 logo: "img/nonprofit6.png"},
		  ];

Template.partners.helpers({
	partners: function() {
		return partnerList;
	}
});