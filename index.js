var inquirer = require("inquirer");

var words = ["giraffe", "hyena", "hippo"];
var randomWord = words[Math.floor(Math.random() * words.length)]
// var randomWordUnderscored = [];
// for(var i = 0; i < randomWord.length; i++){
// 	randomWordUnderscored.push("_")
// }
// var totalGuesses = 6;
// var wordGuessed = false;

// var runGame = () => {
// 	if(totalGuesses > 0 && !wordGuessed){
// 		inquirer.prompt([
// 			{
// 				type: "input",
// 				message: "Guess a letter in the word: " + randomWordUnderscored.join(" "),
// 				name: "letter"
// 			}
// 		]).then(function(res){
// 		 	if(randomWord.indexOf(res.letter) == -1){
// 		 		totalGuesses--;
// 		 		console.log("Letter not in word. " + totalGuesses + " guesses left.");
// 		 		runGame();
// 		 	} else {
// 				for(var i = 0; i < randomWord.length; i++){
// 					if(randomWord[i] === res.letter){
// 						randomWordUnderscored[i] = res.letter;
// 					}
// 			    }
// 			    if(randomWordUnderscored.join("") === randomWord){
// 			    	wordGuessed = true;
// 			    }
// 			    runGame();
// 		 	}
// 		});
// 	} else if (totalGuesses == 0){
// 		console.log("You lose, word is " + randomWord);
// 	} else if (wordGuessed){
// 		console.log("You win")
// 	}
// }
// runGame();

var Word = require('./word.js');
var word = new Word(randomWord);
word.storeLetters();
var guessedLetters = [];
var guesses = 7;

var runGame = () => {
	if(guesses > 0){
		inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter in the word: " + word.showWord(),
				name: "guess"
			}
		]).then((res) => {
			word.isLetterInWord(res.guess);
			
			runGame();
		})
	}
}
runGame();






