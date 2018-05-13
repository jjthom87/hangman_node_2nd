module.exports =
function Letter(char, guessed){
	this.char = char;
	this.guessed = guessed;
	this.wasLetterGuessed = () => {
		return this.guessed ? this.char : "_";
	}
	this.isLetterInWord = (letter) => {
		if(letter === this.char){
			this.guessed = true;
		}
	}
}