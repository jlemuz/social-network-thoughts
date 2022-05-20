const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(addUser)

router 
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser)


router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend)
module.exports = router;