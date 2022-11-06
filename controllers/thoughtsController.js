const { Thought, Reaction, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought and add to user's thought array
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
          return User.findOneAndUpdate(
              { username: req.body.username },
              { $addToSet: { thoughts: thought._id } },
              { new: true }
          );
      })
      .then((user) =>
        !user
            ? res.status(404).json({
                message: 'Thought created but no user found with that username',
            })
            : res.json('Created the thought')
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
  },
// Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought  
        ? res.status(404).json({ message: 'No thought found with this id!' })
        : res.json(thought)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
  // Delete a thought and associated reactions
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Reaction.deleteMany({ _id: { $in: thought.reactions } })
      )
      .then(() => res.json({ message: 'Thought and associated reactions deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Create a reaction and add to thought
createReaction(req, res) {
    Reaction.create(req.body)
    .then((reaction) => {
        return Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: reaction._id } },
            { new: true }
        );
    })
    .then((thought) =>
        !thought
            ? res.status(404).json({
                message: 'Reaction created but no thought found with that id',
            })
            : res.json('Created the reaction')
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
  },
  // Delete a reaction from a thought
  deleteReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }), { $pull: { reactions: req.params.reactionId }}
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Reaction.findOneAndDelete({ _id: req.params.reactionId })
      )
      .then(() => res.json({ message: 'Reaction deleted from thought!' }))
      .catch((err) => res.status(500).json(err));
  },
};