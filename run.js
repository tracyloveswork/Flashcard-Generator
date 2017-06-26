// Require content objects
var content = require("./content.js");

// Require BasicCard constructor
var BasicCard = require("./BasicCard.js")

// Require ClozeCard constructor
var ClozeCard = require("./ClozeCard.js")

// Require inquirer node module
var inquirer = require("inquirer");

// Reference Basic Flashcard object
var questions = content.basicCards.questions;

// Reference Cloze Card object
var statements = content.clozeCards.statements;

// Create basic card array from constructor and questions object
var basicCardArray = [];
for (i=0; i < questions.length; i++){
		basicCardArray.push(new BasicCard (questions[i].front, questions[i].back));
	}

// Test scope-safe constructor
var question_a = BasicCard (questions[1].front, questions[1].back);

console.log(question_a.front);
console.log(question_a.back);

// Create Cloze Card array from constructor and statements object
var clozeCardArray = [];
for (i=0; i<statements.length; i++) {
	clozeCardArray.push(new ClozeCard(statements[i].text, statements[i].cloze));
	clozeCardArray[i].createPartial();
}


// Front-End

// Function for choosing which cards

function chooseCard() {
	inquirer.prompt({
		type: "list",
		name: "whichCards",
		message: "Which flashcards would you like to use?",
		choices: ["Basic", "Cloze"]
	}).then(function(response){
		if(response.whichCards === "Basic"){

			// Display basic cards
			console.log("These are basic flashcards. Answer the question.");
			basicCardPlay();

		} else {

			// Display close cards
			console.log("These are cloze flashcards. Provide the missing word.");
			clozeCardPlay();
		}

	});
}

var i = 0

// function for basic card play
function basicCardPlay(){

	if (i < basicCardArray.length){

		inquirer.prompt(
		{
			type: "input",
			name: "answer",
			message: basicCardArray[i].front
		}
		).then(function(basic){
			if (basic.answer == basicCardArray[i].back){
				console.log("That is correct.");
			} else {
				console.log("Incorrect. " + basicCardArray[i].back);
			}
			// Recursion
			i++;
			basicCardPlay();
		}); // End of prompt

	} else {
		console.log("Basic cards completed.")
	}

} // End of basicCardPlay

// function for cloze card play

function clozeCardPlay(){

	if (i < clozeCardArray.length){

		inquirer.prompt(
		{
			type: "input",
			name: "answer",
			message: clozeCardArray[i].partial
		}
		).then(function(phrase){
			if (phrase.answer == clozeCardArray[i].cloze){
				console.log("That is correct.");
			} else {
				console.log("Incorrect. " + clozeCardArray[i].fullText);
			}
			// Recursion
			i++;
			clozeCardPlay();
		}); // End of prompt

	} else {
		console.log("Cloze cards completed.")
	}

} // End of clozeCardPlay

// Play

chooseCard();


