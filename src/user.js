const constants = require('./constants');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = require('./post');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, constants.nameRequiredMessage],
    validate: {
      validator: (name) => name.length > 2,
      message: constants.nameMinLengthMesssage
    }
  },
  postCount: Number,
  posts: [PostSchema]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
