var QAList = [
			{question: "What is Two Cents?", 
			 answer: "Two Cents is the next movement that will drive social change through pocket change donations. By making the act of donating accessible to millions, we hope that our present and future communities can be more generous to the people who need it most."},

		    {question: "How does it work?", 
		     answer: "Two cents works through strength in numbers.  Our impact on society will grow stronger if our donor base continues to increase. Each time a funding goal is met, we will transfer the funds directly to the associated non-profit organization.  We will also send all our registered donors an email with the good news!  Donors will receive monthly emails with updates on Two Cents and our partnered non-profits."},

			{question: "Will only two cents a day make a difference?", 
			 answer: "Two cents alone won't make a difference, and that’s where the importance of the strength in numbers comes in play. If 1 in 30 Americans were to donate two cents a day, that would result in funds of $200,000 a day. Even if we just reach 1% of this goal, $2,000 would be raised on a daily basis. This would be a significant amount to make positive impacts on issues relating to access to clean water, poverty, homelessness, education, and so much more."},

			{question: "Are my donations tax deductible?", 
			 answer: "We’re working on our 501(c)3 status.  We will keep you in the loop with our status, and notify you once your donations are tax deductible."},

			{question: "How much of my daily donations will reach the nonprofit?", 
			 answer: "100% Everything. By partnering with our payment processor, Stripe, we have zero transaction fees on credit cards."},

			{question: "How do I send feedback?", 
			 answer: "You can always send us feedback at hello@twocentsaday.com"},

			{question: "How did Two Cents select its nonprofits?", 
			 answer: "For our initial release, we reached out to about a hundred nonprofits associated with the nonprofit consulting club at Berkeley called The Berkeley Group."},

			{question: "What are the requirements for nonprofits to partner with Two Cents?", 
			 answer: "There are three essential qualities we look for when establishing a partnership. One, we want full support from the organization’s behalf and want the organization’s members themselves to sign up. Second, we need a clear, fundable project so that our users will know exactly where their money is going towards. Finally, Two Cents will work only with extensive marketing, please include us in your newsletters so that we can continue to grow."},

			{question: "Will there be more partnered nonprofits?", 
			 answer: "Of course! Any nonprofit organization that meets our criteria for partnership will be a friendly addition to the growth of our movement."},

			{question: "What if registered donors want to support and fund other nonprofits?", 
			 answer: "This is great! We would love to hear what interests are with respect to nonprofits, and the causes that you support.  Please send us your feedback and thoughts regarding this at outreach@twocentsaday.com and we will move forward from there."},

			{question: "What if we have physical pocket change donations?", 
			 answer: "Don’t let it collect dust! Bring it with you next time you’re out and donate it to a homeless person."},

			{question: "What happens after I register to be a donor?",
			 answer: "Once you register to be a donor, you are now a part of this movement that changes the global impact of pocket change donations.  Your tax-deductible donation will be charged every 50 days so that $1 is donated every 50 days, with no transaction fees.  As a donor, you will also receive an email every month, with updates on the projects you supported.  You will see the impact of your two cents a day."},

			{question: "Is there a Two Cents mobile app?",
			 answer: "No.  Two Cents is only a web app."},

			 {question: "Can I unsubscribe as a donor?",
			 answer: "If you would like to unsubscribe as a donor, please email us at info@twocentsaday.com, and we will remove you as a registered donor.  It would be extremely helpful for the future of Two Cents if you could provide us with your personal experience and feedback."},
		  ];

Template.faqs.helpers({
	questions: function() {
		return QAList;
	}
});

Template.faqs.events({
	'click li': function(event) {
		if (event.currentTarget.firstElementChild.className == "answer show") {
			event.currentTarget.firstElementChild.className = "answer hide";
		} else {
			event.currentTarget.firstElementChild.className = "answer show";
		}
	}
});