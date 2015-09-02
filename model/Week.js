var mongoose = require('mongoose');


var weekSchema = mongoose.Schema({
    week: {type: Number, trim: true, index: true, unique: true},
    readings: [{type: mongoose.Schema.ObjectId, ref:'Reading'}]
});

weekSchema.methods.amNow = function() {
	var isItThisWeek = this.week
		? "I am the current week!"
		: "I am not the current week";
		console.log(isItThisWeek);
}
//var Kitten = mongoose.model('Kitten', kittySchema);
module.exports = mongoose.model('Week', weekSchema);