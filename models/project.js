var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  client: { type: String, required: true },
  name: { type: String, required: true },
  pm: String,
  type: ['TM','SA','FB'],
  startdate: { type: Date, default: Date.now },
  enddate: { type: Date, default: null},
  status: ['Closed','In Progress'],
  pl: {
    cost: Number,
    rate: Number,
    proft: Number,
    margin: Number
  }
});

module.exports = mongoose.model('Project',projectSchema);
