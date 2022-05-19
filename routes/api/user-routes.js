const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    addUser,
    deleteUser,
    updateUser
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

module.exports = router;