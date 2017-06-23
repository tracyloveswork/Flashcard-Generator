// Require content objects
var content = require("./content.js");

// Require BasicCard constructor
var BasicCard = require("./BasicCard.js")

// Require ClozeCard constructor
var ClozeCard = require("./ClozeCard.js")

// Require inquirer node module
var inquirer = require("inquirer");

// Reference Basic Flashcard array
var questions = content.basicCards.questions;

// Reference Cloze Card array
var statements = content.clozeCards.statements;

// Test Basic Card constructor
var question1 = new BasicCard (questions[0].front, questions[0].back);

console.log(question1.front);
console.log(question1.back);

// Test Cloze Card constructor
var statement1 = new ClozeCard (statements[0].text, statements[0].cloze);

console.log(statement1.cloze);
statement1.createPartial();
console.log(statement1.partial);
console.log(statement1.fullText);

// Front-End