// Single state object
var state = {
    questionNumber: [1,2,3,4,5],
    question: ["What is Elvis Presley’s middle name?", "What is the lowest male voice? ", "Which famous group was once known as The Quarrymen?", "What is Madonna’s full name?", "What is the noisy invention of Louis Glass in 1890 called?"],
    ans1: ["James", "Countertenor", "The Rolling Stones", "Madonna", "Jukebox"],
    ans2: ["Aaron", "Tenor", "Led Zeppelin", "Madonna Ciccone", "Gramophone"],
    ans3: ["David", "Baritone", "The Beach Boys", "Louise Ciccone", "Hearing aid"],
    ans4: ["Seth", "Bass", "The Beatles", "Madonna Louise Ciccone", "Sousaphone"],
    currentQuestion: [], 
};

// State modification functions
function getCurrentQuestion(state, index){
	var currentQuestion = [state.questionNumber[index], state.question[index], state.ans1[index], state.ans2[index], state.ans3[index], state.ans4[index]];
	console.log(currentQuestion);
	state.currentQuestion.push(currentQuestion);
}

getCurrentQuestion(state, 0);

// Render functions
function renderQuestionNum(state, key, value){
	// document.getElementByID("question").innerHTML = "<li>" + "<h1>" + "Question: " + currentQuestion[0] + "</h1>";
	document.getElementById("question").innerHTML = "<li>" + "<h1>" + "Question: " + state.currentQuestion[key][value] + "</h1>" + "</li>";
}

renderQuestionNum(state, 0, 0);

// Event listeners
// $('.shopping-list-add').submit(function(event) {
//     event.preventDefault();
//     addItem(state, $('.shopping-list-add-input').val());
//     renderList(state, $('.shopping-list'));
// });