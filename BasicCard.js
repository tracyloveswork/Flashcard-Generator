// Basic Card Constructor
// Builds card from two arguments
var BasicCard = function(front,back) {
	// make scope-safe in case the new keyword is omitted
	if(!(this instanceof BasicCard)) {
		return new BasicCard(front,back);
	}
	this.front = front;
	this.back = back;
}
// Export out constructor
module.exports = BasicCard;