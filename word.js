var Letter = require('./letter.js');

module.exports =
function Word(wordArr){
	this.wordArr = wordArr;
	this.wordLetterArr = [];
	this.word = [];
	this.showWordArr;
	this.storeLetters = () => {
		var letter;
		for(var i = 0; i < this.wordArr.length; i++){
			letter = new Letter(this.wordArr[i], false);
			this.wordLetterArr.push(letter)
		}
		return this.wordLetterArr;
	}
	this.showWord = () => {
		this.showWordArr = [];
		for(var i = 0; i < this.wordLetterArr.length; i++){
			this.showWordArr.push(this.wordLetterArr[i].wasLetterGuessed());
		}
		return this.showWordArr.join(" ");
	}
	this.isLetterInWord = (char) => {
		if(this.showWordArr.indexOf(char) > -1){
			console.log("Letter has been guessed already")
		} else {
			this.wordArr = this.wordArr.split("");
			for(var i = 0; i < this.wordLetterArr.length; i++){
				this.wordLetterArr[i].isLetterInWord(char);
				if(this.wordLetterArr[i].guessed){
					this.wordArr[i] = this.wordLetterArr[i].char
				}
			}
			this.wordArr = this.wordArr.join(" ");
			return this.wordArr;
		}
	}
}