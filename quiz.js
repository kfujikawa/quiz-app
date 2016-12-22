// Single state object
var questions = [
	{
		n: 1, 
		q: "What is Elvis Presley’s middle name?",
		a: ["James", "Aaron", "David", "Seth"], 
		c: "Aaron"
	}, 
	{
		n: 2, 
		q: "What is the lowest male voice?",
		a: ["Countertenor", "Tenor", "Baritone", "Bass"], 
		c: "Bass"
	}, 
	{
		n: 3, 
		q: "Which famous group was once known as The Quarrymen?",
		a: ["The Rolling Stones", "Led Zeppelin", "The Beach Boys", "The Beatles"], 
		c: "The Beatles"
	}, 
	{
		n: 4, 
		q: "What is Madonna’s full name?",
		a: ["Madonna", "Madonna Ciccone", "Louise Ciccone", "Madonna Louise Ciccone"], 
		c: "Madonna Louise Ciccone"
	}, 
	{
		n: 5, 
		q: "What is the noisy invention of Louis Glass in 1890 called?",
		a: ["Jukebox", "Gramophone", "Hearing aid", "Sousaphone"], 
		c: "Jukebox"
	}, 
];

var currentQuestion = 0;

// State modification functions


// Render functions
function renderQuestion(){
	var question = questions[currentQuestion];

	$(".question").append(
		"<li>" + 
			"<h1>" + "Question: " + question.n + "</h1>" + 
			"<p class='questionText'>" + question.q + "</p>" + 
			"<form class='submitAnswer'>");

	function renderRadioButtons(){
		for(var i = 0; i < question.a.length; i++){
			$(".submitAnswer").append("<input type='radio' name='answer' value='" + question.a[i] + "'> " + question.a[i] + "<br>");
		};
	};

	renderRadioButtons();
};

renderQuestion();
validateQuestion();

// Event listeners

function validateQuestion() {
	$('.submitAnswer input').on('click', function() {
   		if($("input:radio[name=answer]:checked").val() === questions[currentQuestion].c) {
			currentQuestion++;
			$('.question').empty();
			renderQuestion();
		}
		else {
			alert("Answer is incorrect!  Correct answer is " + questions[currentQuestion].c);
		}
	});
};