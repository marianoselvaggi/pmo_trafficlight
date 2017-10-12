var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = new Schema({
  fullName: {type: String, trim: true, required: true},
  email: {type: String, unique: true, lowercase: true, trim: true, required: true},
  hash_password: {type: String,required: true},
  created: {type: Date, default: Date.now}
});

userSchema.methods.ComparePassword = function(password){
  return bcrypt.compareSync(password,this.hash_password);
};

module.exports = mongoose.model('User',userSchema);
