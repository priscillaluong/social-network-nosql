const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
// Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
    { _id: req.params.applicationId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user found with this id!' })
        : res.json(user)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
  // Delete a user and associated thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // add new user to user friends
  addNewFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $push: { friends: req.params.friendId }}, { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Friend not added to list' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user's friend
  deleteFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId }}, { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No friend or user found with that ID' })
          : res.json(user)
      )
      .then(() => res.json({ message: 'Friend removed from user friends list' }))
      .catch((err) => res.status(500).json(err));
  },
};


