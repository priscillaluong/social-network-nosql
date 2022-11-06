const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction').schema;

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
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('getReactions')
  .get(function () {
      return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
