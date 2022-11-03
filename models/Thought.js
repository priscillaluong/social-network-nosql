const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
    createdAt: {
        //Date
        //Set default value to the current timestamp
        //Use a getter method to format the timestamp on query
        type: Date,
        default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Initialize our Reaction model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
