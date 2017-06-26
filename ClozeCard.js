// ClozeCard Constructor
var ClozeCard = function(text,cloze) {
	// make scope-safe
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text,cloze);
	}
	this.fullText = text;
	this.cloze = cloze;
	this.partial = "";
	this.createPartial = function() {
		if (this.fullText.indexOf(this.cloze) == -1){
			console.log("The cloze phrase is not found in statement.")
		} else {
			this.partial = this.fullText.replace(this.cloze,"...");
			return this.partial;
		}
	}
}

module.exports = ClozeCard;