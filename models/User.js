const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// Schema to create Post model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true, 
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 

    },
    // Array of _id values referencing the Thought model
    thoughts: [Thought],
    // Array of _id values referencing the User model (self-reference)
    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our Application model
const User = model('user', userSchema);

module.exports = User;
