var QAList = [
			{question: "What is Two Cents?", 
			 answer: "Two Cents is the next movement that will drive social change through pocket change donations. By making the act of donating accessible to millions, we hope that our present and future communities can be a bit more generous to the people who need it most."},

		    {question: "How does it work?", 
		     answer: "Two cents works through strength in numbers. We’ll only work if many people sign up. Each time a funding goal is met, we’ll write a check to the associated nonprofit organization. We’ll either make a video or write a short blurb and notify you via email if you’ve registered to be a donor."},

			{question: "Will only two cents a day make a difference?", 
			 answer: "Two cents alone won't make a difference. But if just 1 in 30 Americans were to donate two cents a day, that would be a net donation of $200,000 a day. Even if we just reach 1% of this goal, we would still be receiving daily donations of $2,000 a day. That's enough money to fund water, poverty, homelessness, education, and so much more."},

			{question: "Are my donations tax deductible?", 
			 answer: "We’re working on our 501(c)3 status, once we have that your donations will be tax deductible and we’ll let you know via email :)"},

			{question: "How much of my daily donations will reach the nonprofit?", 
			 answer: "Everything. By partnering with our payment processors (Stripe), we have zero transaction fees via credit card."},

			{question: "How do I send feedback?", 
			 answer: "You can always send us feedback at hello@twocentsaday.com"},

			{question: "How did Two Cents select its nonprofits?", 
			 answer: "For our initial release, we reached out to about a hundred nonprofits associated with the nonprofit consulting club at Berkeley called The Berkeley Group."},

			{question: "What are the requirements for nonprofits to partner with Two Cents?", 
			 answer: "There are essentially three things we look for when establishing a partnership. One, we want full support from the organization’s behalf and want the organization’s members themselves to sign up. Second, we need a clear, fundable project so that our users will know exactly where their money is going towards. Finally, Two Cents will only work with extensive marketing, please include us in your newsletters so that we can continue to grow."},

			{question: "Will there be more partnered nonprofits?", 
			 answer: "Of course! Any nonprofit organization that meets our criteria for partnership will be a friendly addition to the growth of our movement."},

			{question: "What if we have physical pocket change donations?", 
			 answer: "Don’t let it collect dust! Bring it with you next time you’re out and donate it to a homeless person."},

			{question: "What happens after I register to be a donor?",
			 answer: ""},

			{question: "Is there a Two Cents mobile app?",
			 answer: ""},
		  ];

Template.faqs.helpers({
	questions: function() {
		return QAList;
	}
});

Template.faqs.events({
	'click li': function(event) {
		if (event.currentTarget.firstElementChild.className == "answer show") {
			event.currentTarget.className = "question normal"
			event.currentTarget.firstElementChild.className = "answer hide";
		} else {
			event.currentTarget.className = "question bold"
			event.currentTarget.firstElementChild.className = "answer show";
		}
	}
});