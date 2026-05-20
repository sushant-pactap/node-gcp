const express = require('express');

const router = express.Router();

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');


// CREATE + GET ALL
router.route('/')
  .post(createUser)
  .get(getUsers);


// GET SINGLE + UPDATE + DELETE
router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;