var mongoose = require('mongoose');

var weekSchema = mongoose.Schema({
    week: {type: Number, trim: true, index: true, unique: true},
    prevWeek : {type: mongoose.Schema.ObjectId, ref:'Week'},
    nextWeek : {type: mongoose.Schema.ObjectId, ref:'Week'},
    readings: [{type: mongoose.Schema.ObjectId, ref:'Reading'}],
    topics:[String],
    weekStart: { type: Date },
    weekEnd: { type: Date }
});

weekSchema.methods.amNow = function() {
	var isItThisWeek = this.week
		? "I am the current week!"
		: "I am not the current week";
		console.log(isItThisWeek);
}

weekSchema.methods.getNextWeek = function(cb) {
	var model = this.model("Week");
	var nextWeek = model.findOne({},'week').where('week').gt(this.week).exec(function(err, doc){
		if (err) throw err;

		if(doc) {
			cb(null, doc);
		} else {
			model.findOne(cb);
		}
	});
}

weekSchema.methods.whatWeekAmI = function() {
	return "I am week " + this.week;
}

//var Kitten = mongoose.model('Kitten', kittySchema);
module.exports = mongoose.model('Week', weekSchema);