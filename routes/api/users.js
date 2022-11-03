const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/usersController.js');

// /api/users
router
    .route('/')
    .get(getUsers)
    .get(getSingleUser)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(getSingleUser)
  .delete(deleteUser);

module.exports = router;