// Single state object
var questions = [
	{
		q: "What is Elvis Presley’s middle name?",
		a: ["James", "Aaron", "David", "Seth"], 
		c: "Aaron"
	}, 
	{
		q: "What is the lowest male voice?",
		a: ["Countertenor", "Tenor", "Baritone", "Bass"], 
		c: "Bass"
	}, 
	{
		q: "Which famous group was once known as The Quarrymen?",
		a: ["The Rolling Stones", "Led Zeppelin", "The Beach Boys", "The Beatles"], 
		c: "The Beatles"
	}, 
	{
		q: "What is Madonna’s full name?",
		a: ["Madonna", "Madonna Ciccone", "Louise Ciccone", "Madonna Louise Ciccone"], 
		c: "Madonna Louise Ciccone"
	}, 
	{
		q: "What is the noisy invention of Louis Glass in 1890 called?",
		a: ["Jukebox", "Gramophone", "Hearing aid", "Sousaphone"], 
		c: "Jukebox"
	}, 
];

var currentQuestion = 0;
var correct = 0;
var incorrect = 0;

// State modification functions


// Render functions
function renderQuestion(){
	var question = questions[currentQuestion];

	if(currentQuestion < 5){
		console.log("if condition");

		$(".question h1").text("Question: " + (currentQuestion + 1));
		$(".question p").text(question.q);

		function renderRadioButtons(){
			for(var i = 0; i < question.a.length; i++){
				$(".question form").append("<input type='radio' name='answer' value='" + question.a[i] + "'> " + question.a[i] + "<br>");
			};
		};

		function renderScore(){
			$(".playerScore").append(
				"<h4>" + correct + " Correct " + incorrect + " Incorrect");
		}

		renderRadioButtons();
		renderScore();
	}
	else{
		console.log("else condition");

		$(".question h1").text("Game Over! " + "You got " + correct + " correct and " + incorrect + " incorrect.");
		$(".question p").text("Select New Game to play again!");
		$(".newGameButton").toggle();
		// $(".submitAnswerButton").toggle();
	}
}

function emptyAndRender(){
	$(".question h1").empty();
	$(".question p").empty();
	$(".question form").empty();
	$(".playerScore").empty();
	renderQuestion();
}

// Event listeners

$(".submitAnswerButton").on("click", function() {
		if($("input:radio[name=answer]:checked").val() === questions[currentQuestion].c) {
		correct++;
		currentQuestion++;
		emptyAndRender();
	}
	else {
		alert("Answer is incorrect!  Correct answer is " + questions[currentQuestion].c);
		incorrect++;
		currentQuestion++;
		emptyAndRender();
	}
});

renderQuestion();
