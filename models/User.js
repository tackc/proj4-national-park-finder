const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must enter a name'],
    minlength: [1, 'Name must be between 1 and 99 characters'],
    maxlength: [99, 'Name must be between 1 and 99 characters']
  },
  password: {
    type: String,
    required: [true, 'You must enter a password'],
    minlength: [8, 'Password must be between 10 and 30 characters'],
    maxlength: [30, 'Password must be between 10 and 30 characters']
  },
  email: {
    type: String,
    required: [true, 'You must enter an email'],
    minlength: [5, 'Email must be between 5 and 99 characters'],
    maxlength: [99, 'Email must be between 5 and 99 characters']
  },
  favoriteParks: [{type: Schema.Types.ObjectId, ref: 'Park'}]

  // state: {
  //   type: String,
  //   required: [true, 'You must enter a state'],
  //   minlength: [2, 'Please enter a 2-digit state abbreviation'],
  //   maxlength: [2, 'Please enter a 2-digit state abbreviation']
  // },
  // parksToVisit: {
  //   type: Array,
  //   required: [false]
  // },
  // visitedParks: {
  //   type: Array,
  //   required: [false]
  // }
});

// This returns a user object without a password
userSchema.set('toObject', {
  transform: function(doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      email: ret.email,
      name: ret.name
    }
    return returnJson;
  }
});

// This checks the entered password against the hashed password
userSchema.methods.authenticated = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(next) {
  if (this.isNew) {
    let hash = bcrypt.hashSync(this.password, 12);
    this.password = hash;
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
