// Single state object
var state = {
    questionNumber: [1,2,3,4,5],
    question: ["What is Elvis Presley’s middle name?", "What is the lowest male voice? ", "Which famous group was once known as The Quarrymen?", "What is Madonna’s full name?", "What is the noisy invention of Louis Glass in 1890 called?"],
    ans1: ["James", "Countertenor", "The Rolling Stones", "Madonna", "Jukebox"],
    ans2: ["Aaron", "Tenor", "Led Zeppelin", "Madonna Ciccone", "Gramophone"],
    ans3: ["David", "Baritone", "The Beach Boys", "Louise Ciccone", "Hearing aid"],
    ans4: ["Seth", "Bass", "The Beatles", "Madonna Louise Ciccone", "Sousaphone"],
    currentQuestion: [], 
    correct: 0, 
    incorrect: 0,
};

var answers = {
	q1: "Aaron", 
	q2: "Bass", 
	q3: "The Beatles", 
	q4: "Madonna Louise Ciccone", 
	q5: "Jukebox", 
}

// State modification functions
function getCurrentQuestion(state, index){
	var currentQuestion = [state.questionNumber[index], state.question[index], state.ans1[index], state.ans2[index], state.ans3[index], state.ans4[index]];
	state.currentQuestion.push(currentQuestion);
	console.log(currentQuestion);
}
getCurrentQuestion(state, 0);


// Render functions
function renderQuestion(state, index){
	var questionNum = state.questionNumber[index];
	var questionText = state.question[index];
	var answer1 = state.ans1[index];
	var answer2 = state.ans2[index];
	var answer3 = state.ans3[index];
	var answer4 = state.ans4[index];

	document.getElementById("question").innerHTML = 
		"<li>" + 
			"<h1>" + "Question: " + questionNum + "</h1>" + 
			"<p class='questionText'>" + questionText + "</p>" + 
			"<form class='submitAnswer'>" + 
				"<input class='radioButton' type='radio' name='answer' value='ans1'> " + answer1 + "<br>" +
				"<input class='radioButton' type='radio' name='answer' value='ans2'> " + answer2 + "<br>" +
				"<input class='radioButton' type='radio' name='answer' value='ans3'> " + answer3 + "<br>" +
				"<input class='radioButton' type='radio' name='answer' value='ans4'> " + answer4 + "</li>" + "<br>" + 
				"<input class='button submitButton' type='submit' name='submit' value='Submit'>" +
			"</form>" + 
		"</li>";
}
renderQuestion(state, 0);

// Event listeners

$(".submitButton").click(function(event){
	var userAnswer = $('input:radio[name="answer"]:checked').val();

        if(userAnswer == answers.q1){
            state.correct += 1;
        	console.log("current correct answers " + state.correct);
        	console.log("current incorrect answers " + state.incorrect);
        }
        else{
            alert(answers.q1 + " is the correct answer");
            console.log("current correct answers " + state.correct);
        	console.log("current correct answers " + state.incorrect);
    	};
    event.preventDefault();
});