const { Schema, model } = require('mongoose');
const moment = require('moment');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: moment(Date.now).format('Do MMMM YYYY, h:mm:ss a'),
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
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
