// Data structure example for a working chat wizard
var botapi = function() {
	var datainput = {
	header: {
		formType: "dynamic",
		defaultDestination: "page1.html",
		sendWizard: "Show results",
		sendForm: "Search",
		titleWizard: "I can help you find the information you need",
		titleForm: "Help us help you",
		startText: "Hi! I can help direct you to programs and services you might be interested in. Let\'s begin...",
		endText: "Thank you. I have built a page with results you may find resourceful.",
		introTextWizard: "First, if you are an employer or organization looking for funding, you can find relevant information on the <a href='pagex.html'>funding page</a>.",
		introTextForm: "If you are an employer or organization looking for funding, you can find relevant information on the <a href='pagex.html'>funding page</a>.",
		first: "q1"
	}, 
	questions: {
		q1: 
		{
			queryName: "describe",
			labelForm: "What would you describe yourself as?",
			labelWizard: "Are you:",
			input: "radio",
			choices: [
				{ 
					content: "a young Canadian",
					queryParam: "young-canadian",
					next: "q2"
				},
				{ 
					content: "an employer or organization looking for funding to support youth",
					queryParam: "employer-organization-funding-support-youth",
					next: "none",
					url: "results-en.html"
				}
			]
		}, 
		q2:
		{
			queryName: "situation",
			labelForm: "In what situation are you?",
			labelWizard: "Great! And are you:",
			input: "radio",
			choices: [
				{ 
					content: "a high school student",
					queryParam: "high-school",
					next: "q3"
				},
				{ 
					content: "a CÉGEP student",
					queryParam: "cegep-student",
					next: "q3"
				},
				{ 
					content: "a post-secondary school student",
					queryParam: "post-secondary",
					next: "q3"
				},
				{ 
					content: "ready to start a career",
					queryParam: "ready-start-career",
					next: "q3"
				},
				{ 
					content: "not in school and not working",
					queryParam: "not-school-not-working",
					next: "q3"
				},
				{ 
					content: "none of these",
					queryParam: "none",
					next: "q3"
				}
			]
		},
		q3:
		{
			queryName: "goal",
			labelForm: "What is your goal?",
			labelWizard: "Awesome! Finally, would you like to:",
			input: "radio",
			choices: [
				{ 
					content: "get a job",
					queryParam: "get-job",
					next: "none",
					url: "results-en.html"
				},
				{ 
					content: "develop skills",
					queryParam: "develop-skills",
					next: "none",
					url: "results-en.html"
				},
				{ 
					content: "explore careers",
					queryParam: "explore-careers",
					next: "none",
					url: "results-en.html"
				},
				{ 
					content: "attend post-secondary education",
					queryParam: "post-secondary-education",
					next: "none",
					url: "results-en.html"
				},
				{ 
					content: "serve your community",
					queryParam: "serve-community",
					next: "none",
					url: "results-en.html"
				},
				{ 
					content: "get an experience",
					queryParam: "get-experience",
					next: "none",
					url: "results-en.html"
				},
				{ 
					content: "see everything",
					queryParam: "everything",
					next: "none",
					url: "results-en.html"
				}
			]
		}
	}
	};
	return datainput;
}